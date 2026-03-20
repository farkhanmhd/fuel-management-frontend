"use client";

import { UserAdd01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm, useStore } from "@tanstack/react-form";
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
import { addUserAction } from "@/lib/auth/actions";
import { type AddUserSchema, addUserSchema } from "@/lib/auth/schema";

const defaultValues: AddUserSchema = {
  username: "",
  name: "",
  password: "",
};

export function AddUserDialog() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    validators: { onSubmit: addUserSchema },
    defaultValues,
    onSubmit: async ({ value }) => {
      try {
        const result = await addUserAction(value);
        if (result.code === 200) {
          toast.success("User berhasil ditambahkan", {
            description: `Akun untuk ${value.name} (@${value.username}) telah dibuat.`,
          });
          setOpen(false);
        } else {
          toast.error("Gagal menambahkan user", {
            description:
              result.message ??
              "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi.",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Gagal menambahkan user", {
            description: `Terjadi kesalahan pada server. Silakan coba beberapa saat lagi. ${error.message}`,
          });
        }
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
          Tambah User
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
              <AlertDialogTitle>Tambah User Baru</AlertDialogTitle>
              <AlertDialogDescription className="mt-0.5 text-xs">
                Isi data di bawah untuk membuat akun user baru.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <Separator />

        <form
          id="add-user-form"
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
                      placeholder="Minimal 8 karakter"
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
          </FieldGroup>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Batal</AlertDialogCancel>
          <Button disabled={isSubmitting} form="add-user-form" type="submit">
            {isSubmitting ? "Menyimpan..." : "Simpan User"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
