"use client";

import { UserAdd01Icon } from "@hugeicons/core-free-icons";
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
import { Separator } from "@/components/ui/separator";
import { createDriverAction } from "@/lib/actions/dealers";
import {
  type CreateDriverSchema,
  createDriverSchema,
} from "@/lib/schemas/dealers";

const defaultValues: CreateDriverSchema = {
  username: "",
  name: "",
  password: "",
  nip: "",
  department: "",
};

export function CreateDriverDialog() {
  const [open, setOpen] = useState(false);
  const { refresh } = useRouter();
  const params = useParams();

  const form = useForm({
    validators: { onSubmit: createDriverSchema },
    defaultValues,
    onSubmit: async ({ value }) => {
      const { data: newDriverId, error } = await createDriverAction(
        params.id as string,
        value
      );
      if (error) {
        toast.error("Gagal menambahkan driver", {
          description: `${error.message}`,
        });
        return;
      }

      if (newDriverId) {
        toast.success("Driver berhasil ditambahkan", {
          description: `Driver ${value.name} telah ditambahkan.`,
        });
        setOpen(false);
        form.reset();
        refresh();
      } else {
        toast.error("Gagal menambahkan driver", {
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
          <HugeiconsIcon
            className="size-4"
            icon={UserAdd01Icon}
            strokeWidth={2}
          />
          Tambah Driver
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="mb-1 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md border bg-muted">
              <HugeiconsIcon
                className="size-4 text-muted-foreground"
                icon={UserAdd01Icon}
                strokeWidth={2}
              />
            </div>
            <div>
              <AlertDialogTitle>Tambah Driver Baru</AlertDialogTitle>
              <AlertDialogDescription className="mt-0.5 text-xs">
                Isi data di bawah untuk membuat driver baru.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <Separator />

        <form
          id="create-driver-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* Name */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Nama Lengkap</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      autoFocus
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Masukkan nama lengkap"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="name"
            />

            {/* Username */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      className="font-mono"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Masukkan username"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="username"
            />

            {/* Password */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Minimal 6 karakter"
                      type="password"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="password"
            />

            {/* NIP */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>NIP</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Masukkan NIP"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="nip"
            />

            {/* Department */}
            <form.Field
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Departemen</FieldLabel>
                    <Input
                      aria-invalid={isInvalid}
                      autoComplete="off"
                      disabled={isSubmitting}
                      id={field.name}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Masukkan departemen"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="department"
            />
          </FieldGroup>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Batal</AlertDialogCancel>
          <Button
            disabled={isSubmitting}
            form="create-driver-form"
            type="submit"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Driver"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
