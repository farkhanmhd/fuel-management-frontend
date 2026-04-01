"use client";

import { CarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
import { useParams, useRouter } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";
import { createAssetAction } from "@/lib/actions/dealers";
import {
  type CreateAssetSchema,
  createAssetSchema,
} from "@/lib/schemas/dealers";

const defaultValues: CreateAssetSchema = {
  model: "",
  licensePlate: "",
  year: 2024,
  fuelType: "bensin",
  startingKiloMeter: 0,
  status: undefined,
  statusDetail: undefined,
};

export function CreateAssetDialog() {
  const [open, setOpen] = useState(false);
  const { refresh } = useRouter();
  const params = useParams();

  const form = useForm({
    validators: { onSubmit: createAssetSchema },
    defaultValues,
    onSubmit: async ({ value }) => {
      const { data: newAssetId, error } = await createAssetAction(
        params.id as string,
        value
      );
      if (error) {
        toast.error("Gagal menambahkan aset", {
          description: `${error.message}`,
        });
        return;
      }

      if (newAssetId) {
        toast.success("Aset berhasil ditambahkan", {
          description: `Aset ${value.model} (${value.licensePlate}) telah ditambahkan.`,
        });
        setOpen(false);
        form.reset();
        refresh();
      } else {
        toast.error("Gagal menambahkan aset", {
          description: "Internal Server Error",
        });
      }
    },
  });

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      form.reset();
    }
    setOpen(next);
  };

  return (
    <AlertDialog onOpenChange={handleOpenChange} open={open}>
      <AlertDialogTrigger asChild>
        <Button>
          <HugeiconsIcon className="size-4" icon={CarIcon} strokeWidth={2} />
          Tambah Aset
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="mb-1 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md border bg-muted">
              <HugeiconsIcon
                className="size-4 text-muted-foreground"
                icon={CarIcon}
                strokeWidth={2}
              />
            </div>
            <div>
              <AlertDialogTitle>Tambah Aset Baru</AlertDialogTitle>
              <AlertDialogDescription className="mt-0.5 text-xs">
                Isi data di bawah untuk menambahkan aset baru.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <Separator />

        <form
          id="create-asset-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Model */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Model Kendaraan
                    </FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      autoFocus
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Contoh: Toyota Avanza"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="model"
            />

            {/* License Plate */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Plat Nomor</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      className="font-mono uppercase"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(e.target.value.toUpperCase())
                      }
                      placeholder="Contoh: B 1234 ABC"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="licensePlate"
            />

            {/* Year */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Tahun Kendaraan
                    </FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value) || 0)
                      }
                      placeholder="Contoh: 2024"
                      type="number"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="year"
            />

            {/* Fuel Type */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Jenis BBM</FieldLabel>
                    <Select
                      onValueChange={(value) =>
                        field.handleChange(value as "bensin" | "solar")
                      }
                      value={field.state.value}
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder="Pilih jenis BBM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bensin">Bensin</SelectItem>
                        <SelectItem value="solar">Solar</SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="fuelType"
            />

            {/* Starting Kilo Meter */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Kilometer Awal</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value) || 0)
                      }
                      placeholder="Contoh: 0"
                      type="number"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="startingKiloMeter"
            />

            {/* Status */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Status</FieldLabel>
                    <Select
                      onValueChange={(value) =>
                        field.handleChange(value as "mds" | "neq" | "sewa")
                      }
                      value={field.state.value}
                    >
                      <SelectTrigger id={field.name}>
                        <SelectValue placeholder="Pilih status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mds">MDS</SelectItem>
                        <SelectItem value="neq">NEQ</SelectItem>
                        <SelectItem value="sewa">Sewa</SelectItem>
                      </SelectContent>
                    </Select>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="status"
            />

            {/* Status Detail */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Detail Status</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Opsional"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="statusDetail"
            />
          </FieldGroup>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Batal</AlertDialogCancel>
          <Button
            disabled={isSubmitting}
            form="create-asset-form"
            type="submit"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Aset"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
