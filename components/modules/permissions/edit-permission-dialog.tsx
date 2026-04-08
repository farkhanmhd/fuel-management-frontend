"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";
import { clientApi } from "@/lib/axios";
import type { PermissionSchema } from "@/lib/schemas/permissions";
import { PermissionForm } from "./permission-form";

const updatePermission = async (data: PermissionSchema) => {
  const { id, ...body } = data;
  const response = await clientApi.patch<{ data: { id: string } }>(
    `/api/permissions/${id}`,
    body
  );
  return response.data.data;
};

export function UpdatePermissionDialog() {
  const { open, onOpenChange, data } = useAlertDialog<PermissionSchema>();
  const { refresh } = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updatePermission,
    onSuccess: (_, variables) => {
      toast.success("Permission berhasil ditambahkan", {
        description: `Permission "${variables.type} - ${variables.resource}" telah dibuat.`,
      });
      onOpenChange(false);
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
    <AlertDialog onOpenChange={onOpenChange} open={open}>
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
          permission={data}
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
