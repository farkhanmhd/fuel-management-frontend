"use client";

import { useForm, useStore } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
import { clientApi } from "@/lib/axios";
import {
  type AddPermissionSchema,
  addPermissionSchema,
} from "@/lib/schemas/permissions";

const addPermission = async (body: AddPermissionSchema) => {
  const response = await clientApi.post<{ data: { id: number } }>(
    "/api/user-permissions",
    body
  );
  return response.data.data;
};

const defaultValues: AddPermissionSchema = {
  permission: "",
};

export function AddPermissionDialog() {
  const [open, setOpen] = useState(false);
  const { refresh } = useRouter();
  const { mutateAsync } = useMutation({
    mutationFn: addPermission,
    onSuccess: (_, variables) => {
      toast.success("Permission berhasil ditambahkan", {
        description: `Permission "${variables.permission}" telah dibuat.`,
      });
    },
    onError: (error: Error) => {
      toast.error("Gagal menambahkan permission", {
        description:
          error.message ??
          "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi.",
      });
    },
  });

  const form = useForm({
    validators: { onSubmit: addPermissionSchema },
    defaultValues,
    onSubmit: async ({ value }) => {
      await mutateAsync(value, {
        onSuccess: () => {
          setOpen(false);
          form.reset();
          refresh();
        },
      });
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
        <Button>Tambah Permission</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Tambah Permission Baru</AlertDialogTitle>
          <AlertDialogDescription className="text-xs">
            Isi data di bawah untuk membuat permission baru.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Separator />

        <form
          id="add-permission-form"
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
                    <FieldLabel htmlFor={field.name}>
                      Permission Name
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
                      placeholder="Masukkan nama permission"
                      value={field.state.value}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
              name="permission"
            />
          </FieldGroup>
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Batal</AlertDialogCancel>
          <Button
            disabled={isSubmitting}
            form="add-permission-form"
            type="submit"
          >
            {isSubmitting ? "Menyimpan..." : "Tambah Permission"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
