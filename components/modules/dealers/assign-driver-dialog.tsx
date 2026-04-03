"use client";

import { useForm } from "@tanstack/react-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAlertDialog } from "@/components/providers/alert-dialog-provider";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { DealerAsset, DealerDriver } from "@/lib/api/dealers";
import { clientApi } from "@/lib/axios";

type AssignDriverSchema = {
  driverId: string;
};

const defaultValues: AssignDriverSchema = {
  driverId: "",
};

const getDealerDrivers = async (dealerId: string) => {
  const req = await clientApi.get<{ data: { drivers: DealerDriver[] } }>(
    `/api/dealers/${dealerId}/drivers`
  );

  return req.data.data.drivers;
};

const assignDriver = async ({
  dealerId,
  assetId,
  driverId,
}: {
  dealerId: string;
  assetId: string;
  driverId: string;
}) => {
  const req = await clientApi.patch(`/api/dealers/${dealerId}/assets`, {
    assetId,
    driverId,
  });

  return req.data;
};

export function AssignDriverDialog() {
  const { open, onOpenChange, data } = useAlertDialog<DealerAsset>();
  const { refresh } = useRouter();
  const params = useParams();
  const dealerId = params.id as string;

  const { data: drivers, isLoading } = useQuery({
    queryFn: async () => await getDealerDrivers(dealerId),
    queryKey: [`drivers-${dealerId}`],
    enabled: !!dealerId && open,
    refetchOnMount: true,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: assignDriver,
    onSuccess: (_, variables) => {
      const driver = drivers?.find((d) => d.id === variables.driverId);
      toast.success("Driver berhasil ditetapkan", {
        description: `${driver?.driverName} telah ditetapkan sebagai driver.`,
      });
      onOpenChange(false);
      form.reset();
      refresh();
    },
    onError: (error) => {
      toast.error("Gagal menetapkan driver", {
        description: error.message || "Terjadi kesalahan pada server",
      });
    },
  });

  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      if (!data) {
        return;
      }
      mutate({
        dealerId,
        assetId: data.id,
        driverId: value.driverId,
      });
    },
  });

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      form.reset();
    }
    onOpenChange(next);
  };

  const renderDriverOptions = () => {
    if (isLoading) {
      return (
        <div className="space-y-1 p-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="flex gap-1.5 rounded-sm px-2 py-1.5" key={i}>
              <Skeleton className="h-3.5 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>
      );
    }

    if (!drivers || drivers.length === 0) {
      return (
        <SelectItem disabled value="Empty">
          <div className="p-2">Tidak ada driver tersedia.</div>
        </SelectItem>
      );
    }

    return drivers.map((driver) => (
      <SelectItem className="p-1.5" key={driver.id} value={driver.id}>
        <div className="flex items-center gap-2">
          <span className="font-medium">{driver.driverName}</span>
          <span className="text-muted-foreground">
            {driver.nip} · {driver.department}
          </span>
        </div>
      </SelectItem>
    ));
  };

  return (
    <AlertDialog onOpenChange={handleOpenChange} open={open && !!data}>
      <AlertDialogContent className="sm:max-w-md">
        {data && (
          <>
            <AlertDialogHeader>
              <div className="mb-1 flex items-center gap-3">
                <div>
                  <AlertDialogTitle>
                    Assign Driver - {data.modelName}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="mt-0.5 text-xs">
                    {data.driverName
                      ? `Saat ini ditangani oleh ${data.driverName}. Pilih driver baru untuk menggantikannya.`
                      : `${data.modelName} (${data.licensePlate}) belum memiliki driver. Pilih driver untuk menetapkannya.`}
                  </AlertDialogDescription>
                </div>
              </div>
            </AlertDialogHeader>

            <form
              id="assign-driver-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <FieldGroup>
                <form.Field
                  children={(field) => {
                    const isInvalid =
                      field.state.meta.isTouched && !field.state.meta.isValid;
                    return (
                      <Field data-invalid={isInvalid}>
                        <Select
                          disabled={isPending}
                          onValueChange={field.handleChange}
                          value={field.state.value}
                        >
                          {isLoading ? (
                            <div className="flex h-9 w-full items-center rounded-md border bg-muted/50 px-3">
                              <Skeleton className="h-3.5 w-36" />
                            </div>
                          ) : (
                            <>
                              <SelectTrigger
                                aria-invalid={isInvalid}
                                id={field.name}
                              >
                                <SelectValue placeholder="Pilih driver..." />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                <div className="p-1.5">
                                  {renderDriverOptions()}
                                </div>
                              </SelectContent>
                            </>
                          )}
                        </Select>
                        {isInvalid && (
                          <FieldError errors={field.state.meta.errors} />
                        )}
                      </Field>
                    );
                  }}
                  name="driverId"
                  validators={{
                    onSubmit: ({ value }) =>
                      value ? undefined : "Pilih driver terlebih dahulu",
                  }}
                />
              </FieldGroup>
            </form>

            <AlertDialogFooter>
              <AlertDialogCancel disabled={isPending}>Batal</AlertDialogCancel>
              <Button
                disabled={isPending}
                form="assign-driver-form"
                type="submit"
              >
                {isPending ? "Menyimpan..." : "Assign Driver"}
              </Button>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}
