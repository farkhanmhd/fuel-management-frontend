"use client";

import {
  LockPasswordIcon,
  LogoutSquare01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useParams } from "next/navigation";
import { useState, useTransition } from "react";
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
import { resetUserPasswordAction } from "@/lib/actions/users";
import { ResetPasswordCardShell } from "./reset-password-card-shell";

export function ResetPasswordCard() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const handleResetPassword = () => {
    startTransition(async () => {
      try {
        const { data, error } = await resetUserPasswordAction(id);

        if (data) {
          toast.success("Password berhasil direset", {
            description: "User akan otomatis logout dari semua sesi aktif.",
          });
          setOpen(false);
        } else {
          toast.error("Gagal mereset password", {
            description:
              error?.message ??
              "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi atau hubungi administrator.",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Reset Password Gagal", {
            description: `Terjadi kesalahan pada server. Silakan coba beberapa saat lagi. ${error.message}`,
          });
        }
      }
    });
  };

  return (
    <ResetPasswordCardShell>
      <AlertDialog onOpenChange={setOpen} open={open}>
        <AlertDialogTrigger asChild>
          <Button
            className="shrink-0 border-destructive/40 text-destructive hover:border-destructive/60 hover:bg-destructive/10 hover:text-destructive"
            variant="outline"
          >
            <HugeiconsIcon
              className="size-4"
              icon={LogoutSquare01Icon}
              strokeWidth={2}
            />
            Reset Password
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="mb-1 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
                <HugeiconsIcon
                  className="size-5 text-destructive"
                  icon={LockPasswordIcon}
                  strokeWidth={2}
                />
              </div>
              <AlertDialogTitle className="text-lg">
                Reset Password User
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-sm leading-relaxed">
              Anda akan mereset password untuk user ini. User akan otomatis
              logout dari semua sesi yang aktif. Tindakan ini tidak dapat
              dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Batal</AlertDialogCancel>
            <Button
              disabled={isPending}
              onClick={handleResetPassword}
              variant="destructive"
            >
              Ya, Reset Password
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ResetPasswordCardShell>
  );
}
