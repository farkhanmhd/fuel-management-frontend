// add-permission-dialog.tsx
"use client";

import { Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
import { Separator } from "@/components/ui/separator";
import { clientApi } from "@/lib/axios/client";
import type { PermissionSchema } from "@/lib/schemas/permissions";
import { PermissionForm } from "./permission-form";

const addPermission = async (body: PermissionSchema) => {
  const response = await clientApi.post<{ data: { id: string } }>(
    "/api/permissions",
    body
  );
  return response.data.data;
};

const defaultValues: PermissionSchema = {
  type: "read",
  resource: "",
  note: "",
};

export function AddPermissionDialog() {
  const [open, setOpen] = useState(false);
  const { refresh } = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: addPermission,
    onSuccess: (_, variables) => {
      console.log(variables);
      toast.success("Permission berhasil ditambahkan", {
        description: `Permission "${variables.type} - ${variables.resource}" telah dibuat.`,
      });
      setOpen(false);
      refresh();
    },
    onError: (error: Error) => {
      toast.error("Gagal menambahkan permission", {
        description:
          error.message ??
          "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi.",
      });
    },
  });

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>
        <Button>
          <HugeiconsIcon icon={Plus} strokeWidth={2} />
          Permission
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Tambah Permission Baru</AlertDialogTitle>
          <AlertDialogDescription className="text-xs">
            Isi data di bawah untuk membuat permission baru.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Separator />

        <PermissionForm
          disabled={isPending}
          key={String(open)}
          onSubmitAction={({ value }) => mutateAsync(value)}
          permission={defaultValues}
        />

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Batal</AlertDialogCancel>
          <Button disabled={isPending} form="add-permission-form" type="submit">
            {isPending ? "Menyimpan..." : "Tambah Permission"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
