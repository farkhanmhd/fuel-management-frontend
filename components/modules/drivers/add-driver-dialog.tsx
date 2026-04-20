"use client";

import { PlusSignIcon, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/use-debounce";
import { DealersApi } from "@/lib/api/dealers";
import { StaffApi } from "@/lib/api/staff";
import { clientApi } from "@/lib/axios/client";

export function AddDriverDialog() {
  const [open, setOpen] = useState(false);
  const [selectedDealerId, setSelectedDealerId] = useState<number | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);

  const queryClient = useQueryClient();

  const { data: dealers, isLoading: isLoadingDealers } = useQuery({
    queryKey: ["dealers-list"],
    queryFn: () => DealersApi.getDealers(),
    enabled: open,
  });

  const { data: staff, isLoading: isLoadingStaff } = useQuery({
    queryKey: ["staff-list", selectedDealerId, debouncedSearch],
    queryFn: () => StaffApi.getStaff(selectedDealerId, debouncedSearch),
    enabled: !!selectedDealerId && open,
  });

  const selectedStaff = staff?.find((s) => s.user.id === selectedUserId);

  const mutation = useMutation({
    mutationFn: async () => {
      await new Promise((res) => setTimeout(res, 3000));
      if (!(selectedUserId && selectedDealerId)) {
        throw new Error("Pilih dealer dan user terlebih dahulu");
      }
      return clientApi.post("/api/drivers", {
        userId: selectedUserId,
        dealerId: selectedDealerId,
      });
    },
    onSuccess: () => {
      toast.success("Driver berhasil ditambahkan");
      queryClient.invalidateQueries({ queryKey: ["drivers"] });
      setOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast.error(
        `Gagal menambahkan driver: ${
          error instanceof Error ? error.message : ""
        }`
      );
    },
  });

  const resetForm = () => {
    setSelectedDealerId(null);
    setSelectedUserId(null);
    setSearchValue("");
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      resetForm();
    }
  };

  return (
    <AlertDialog onOpenChange={handleOpenChange} open={open}>
      <AlertDialogTrigger asChild>
        <Button>
          <HugeiconsIcon className="size-4" icon={PlusSignIcon} />
          Tambah Driver
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Tambah Driver Baru</AlertDialogTitle>
          <AlertDialogDescription>
            Pilih dealer dan user untuk mendaftarkan driver baru.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <FieldGroup className="gap-5 py-4">
          <Field className="flex flex-col gap-1.5">
            <FieldLabel className="font-semibold text-muted-foreground text-xs uppercase tracking-widest">
              Dealer
            </FieldLabel>
            {isLoadingDealers ? (
              <Skeleton className="h-10 w-full rounded-xl" />
            ) : (
              <Select
                onValueChange={(value) => {
                  setSelectedDealerId(Number(value));
                  setSelectedUserId(null); // Reset user when dealer changes
                }}
                value={selectedDealerId?.toString() || ""}
              >
                <SelectTrigger className="h-10 w-full rounded-xl border-border bg-muted/40 px-3 text-sm">
                  <SelectValue placeholder="Pilih dealer" />
                </SelectTrigger>
                <SelectContent>
                  {dealers?.map((dealer) => (
                    <SelectItem key={dealer.id} value={dealer.id.toString()}>
                      {dealer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </Field>

          <Field className="flex flex-col gap-1.5">
            <FieldLabel className="font-semibold text-muted-foreground text-xs uppercase tracking-widest">
              User / Staff
            </FieldLabel>

            {selectedStaff ? (
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2">
                <div className="flex flex-col">
                  <span className="font-medium text-sm">
                    {selectedStaff.name}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {selectedStaff.jabatan} - {selectedStaff.username}
                  </span>
                </div>
                <button
                  className="ml-2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => {
                    setSelectedUserId(null);
                    setSearchValue("");
                  }}
                  type="button"
                >
                  <HugeiconsIcon className="size-4" icon={X} />
                </button>
              </div>
            ) : (
              <Combobox
                disabled={!selectedDealerId}
                onValueChange={(val) => setSelectedUserId(val as string)}
                value={selectedUserId}
              >
                <ComboboxInput
                  disabled={!selectedDealerId}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Cari staff..."
                  value={searchValue}
                />
                <ComboboxContent className="pointer-events-auto">
                  <ComboboxList>
                    {isLoadingStaff ? (
                      Array.from({ length: 3 }).map((_, i) => (
                        <div className="px-2 py-1.5" key={i}>
                          <Skeleton className="h-4 w-full" />
                        </div>
                      ))
                    ) : (
                      <>
                        {staff?.map((s) => (
                          <ComboboxItem key={s.user.id} value={s.user.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">{s.name}</span>
                              <span className="text-muted-foreground text-xs">
                                {s.jabatan} - {s.username}
                              </span>
                            </div>
                          </ComboboxItem>
                        ))}
                        {!staff?.length && (
                          <ComboboxEmpty>Staff tidak ditemukan</ComboboxEmpty>
                        )}
                      </>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            )}

            {!selectedDealerId && (
              <p className="mt-1 text-[10px] text-muted-foreground">
                * Pilih dealer terlebih dahulu untuk mencari staff
              </p>
            )}
          </Field>
        </FieldGroup>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={mutation.isPending} onClick={resetForm}>
            Batal
          </AlertDialogCancel>
          <Button
            disabled={
              mutation.isPending || !selectedUserId || !selectedDealerId
            }
            onClick={() => mutation.mutate()}
          >
            {mutation.isPending ? "Menyimpan..." : "Simpan"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
