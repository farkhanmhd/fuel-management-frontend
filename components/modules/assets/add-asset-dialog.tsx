"use client";

import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { AssetsApi } from "@/lib/api/assets";
import { DealersApi } from "@/lib/api/dealers";
import { createAssetSchema } from "@/lib/schemas/assets";

const indonesiaVehiclePlateCodes = [
  "BL",
  "BK",
  "BB",
  "BA",
  "BM",
  "BP",
  "BH",
  "BG",
  "BN",
  "BD",
  "BE",
  "B",
  "F",
  "D",
  "E",
  "T",
  "Z",
  "A",
  "G",
  "H",
  "K",
  "R",
  "AA",
  "AB",
  "AD",
  "AE",
  "AG",
  "L",
  "M",
  "N",
  "P",
  "S",
  "W",
  "DK",
  "DR",
  "EA",
  "DH",
  "EB",
  "ED",
  "KB",
  "DA",
  "KH",
  "KT",
  "KU",
  "DB",
  "DC",
  "DD",
  "DN",
  "DT",
  "DL",
  "DM",
  "DE",
  "DG",
  "PA",
  "PB",
];

export function AddAssetDialog() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: dealers, isLoading: isLoadingDealers } = useQuery({
    queryKey: ["dealers-list"],
    queryFn: () => DealersApi.getDealers(),
    enabled: open,
  });

  const form = useForm({
    defaultValues: {
      modelName: "",
      plateCode: "",
      plateNumber: "",
      plateSeries: "",
      year: new Date().getFullYear(),
      fuelType: "bensin",
      startingKiloMeter: 0,
      dealerId: 0,
    },
    validators: {
      onSubmit: createAssetSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const licensePlate = [
          value.plateCode.toUpperCase(),
          value.plateNumber,
          value.plateSeries?.toUpperCase(),
        ]
          .filter(Boolean)
          .join(" ");
        const { plateCode, plateNumber, plateSeries, ...rest } = value;

        await AssetsApi.createAsset({ ...rest, licensePlate });
        toast.success("Asset created successfully");
        queryClient.invalidateQueries({ queryKey: ["assets"] });
        setOpen(false);
        form.reset();
      } catch (error) {
        toast.error(
          `Failed to create asset ${error instanceof Error ? error.message : ""}`
        );
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>
        <Button>
          <HugeiconsIcon className="size-4" icon={PlusSignIcon} />
          Tambah Aset
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Tambah Aset Baru</AlertDialogTitle>
          <AlertDialogDescription>
            Lengkapi detail aset di bawah ini untuk menambahkan aset baru ke
            dalam sistem.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="gap-5 py-4">
            <form.Field name="modelName">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    className="flex flex-col gap-1.5"
                    data-invalid={isInvalid}
                  >
                    <FieldLabel
                      className="font-semibold text-muted-foreground uppercase tracking-widest"
                      htmlFor={field.name}
                    >
                      Model
                    </FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      className="h-10 rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Contoh: Toyota Innova"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError
                        className="text-destructive"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <Field className="flex flex-col gap-1.5">
              <FieldLabel className="font-semibold text-muted-foreground uppercase tracking-widest">
                Plat Kendaraan
              </FieldLabel>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3">
                  <form.Field name="plateCode">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <Select
                            disabled={isSubmitting}
                            onValueChange={(val) => field.handleChange(val)}
                            value={field.state.value}
                          >
                            <SelectTrigger
                              aria-invalid={isInvalid}
                              className={`w-full rounded-xl border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30 aria-invalid:ring-0 data-[size=default]:h-10 ${
                                isInvalid
                                  ? "border-destructive ring-0"
                                  : "border-border"
                              }`}
                            >
                              <SelectValue placeholder="BK" />
                            </SelectTrigger>
                            <SelectContent>
                              {indonesiaVehiclePlateCodes.map((code) => (
                                <SelectItem key={code} value={code}>
                                  {code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      );
                    }}
                  </form.Field>
                </div>
                <div className="col-span-5">
                  <form.Field name="plateNumber">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <Input
                            aria-invalid={isInvalid}
                            autoComplete="off"
                            className="h-10 rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30"
                            disabled={isSubmitting}
                            maxLength={4}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "");
                              field.handleChange(val);
                            }}
                            placeholder="1234"
                            value={field.state.value}
                          />
                        </Field>
                      );
                    }}
                  </form.Field>
                </div>
                <div className="col-span-4">
                  <form.Field name="plateSeries">
                    {(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid;
                      return (
                        <Field data-invalid={isInvalid}>
                          <Input
                            aria-invalid={isInvalid}
                            autoComplete="off"
                            className="h-10 rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30"
                            disabled={isSubmitting}
                            maxLength={3}
                            onChange={(e) => {
                              const val = e.target.value.replace(
                                /[^a-zA-Z]/g,
                                ""
                              );
                              field.handleChange(val.toUpperCase());
                            }}
                            placeholder="ABC"
                            value={field.state.value}
                          />
                        </Field>
                      );
                    }}
                  </form.Field>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <form.Subscribe
                  selector={(state) => [
                    state.fieldMeta.plateCode,
                    state.fieldMeta.plateNumber,
                    state.fieldMeta.plateSeries,
                  ]}
                >
                  {([code, num, series]) => {
                    const errors = [
                      ...(code?.errors || []),
                      ...(num?.errors || []),
                      ...(series?.errors || []),
                    ];
                    return (
                      <FieldError
                        className="text-destructive"
                        errors={errors}
                      />
                    );
                  }}
                </form.Subscribe>
              </div>
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <form.Field name="year">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field
                      className="flex flex-col gap-1.5"
                      data-invalid={isInvalid}
                    >
                      <FieldLabel
                        className="font-semibold text-muted-foreground uppercase tracking-widest"
                        htmlFor={field.name}
                      >
                        Tahun
                      </FieldLabel>
                      <Input
                        aria-invalid={isInvalid}
                        className="h-10 rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30"
                        disabled={isSubmitting}
                        id={field.name}
                        inputMode="numeric"
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        type="text"
                        value={field.state.value}
                      />
                      {isInvalid && (
                        <FieldError
                          className="text-destructive"
                          errors={field.state.meta.errors}
                        />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <form.Field name="fuelType">
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field
                      className="flex flex-col gap-1.5"
                      data-invalid={isInvalid}
                    >
                      <FieldLabel
                        className="font-semibold text-muted-foreground uppercase tracking-widest"
                        htmlFor={field.name}
                      >
                        Tipe Bahan Bakar
                      </FieldLabel>
                      <Select
                        disabled={isSubmitting}
                        onValueChange={(value: "bensin" | "solar") =>
                          field.handleChange(value)
                        }
                        value={field.state.value}
                      >
                        <SelectTrigger
                          className="w-full rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30 data-[size=default]:h-10"
                          id={field.name}
                        >
                          <SelectValue placeholder="Pilih tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bensin">Bensin</SelectItem>
                          <SelectItem value="solar">Solar</SelectItem>
                        </SelectContent>
                      </Select>
                      {isInvalid && (
                        <FieldError
                          className="text-destructive"
                          errors={field.state.meta.errors}
                        />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </div>

            <form.Field name="startingKiloMeter">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    className="flex flex-col gap-1.5"
                    data-invalid={isInvalid}
                  >
                    <FieldLabel
                      className="font-semibold text-muted-foreground uppercase tracking-widest"
                      htmlFor={field.name}
                    >
                      Kilometer Awal
                    </FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      className="h-10 rounded-xl border-border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30"
                      disabled={isSubmitting}
                      id={field.name}
                      inputMode="numeric"
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                      type="number"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError
                        className="text-destructive"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                );
              }}
            </form.Field>

            <form.Field name="dealerId">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field
                    className="flex flex-col gap-1.5"
                    data-invalid={isInvalid}
                  >
                    <FieldLabel
                      className="font-semibold text-muted-foreground text-xs uppercase tracking-widest"
                      htmlFor={field.name}
                    >
                      Dealer
                    </FieldLabel>
                    {isLoadingDealers ? (
                      <Skeleton className="h-10 w-full rounded-xl" />
                    ) : (
                      <Select
                        disabled={isSubmitting}
                        onValueChange={(value) =>
                          field.handleChange(Number(value))
                        }
                        value={
                          field.state.value === 0
                            ? ""
                            : field.state.value.toString()
                        }
                      >
                        <SelectTrigger
                          aria-invalid={isInvalid}
                          className={`w-full rounded-xl border bg-muted/40 px-3 text-sm transition-all focus-visible:ring-1 focus-visible:ring-foreground/30 aria-invalid:ring-0 data-[size=default]:h-10 ${
                            isInvalid
                              ? "border-destructive ring-0"
                              : "border-border"
                          }`}
                          id={field.name}
                          size="default"
                        >
                          <SelectValue placeholder="Pilih dealer" />
                        </SelectTrigger>
                        <SelectContent>
                          {dealers?.map((dealer) => (
                            <SelectItem
                              key={dealer.id}
                              value={dealer.id.toString()}
                            >
                              {dealer.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    {isInvalid && (
                      <FieldError
                        className="text-destructive"
                        errors={field.state.meta.errors}
                      />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>

          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel
              disabled={isSubmitting}
              onClick={() => form.reset()}
            >
              Batal
            </AlertDialogCancel>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Menyimpan..." : "Simpan"}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
