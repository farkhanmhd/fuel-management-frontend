"use client";

import {
  LockPasswordIcon,
  LogoutSquare01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { UserDataResponse } from "@/lib/api/users";
import { resetUserPasswordAction } from "@/lib/auth/actions";

interface ResetPasswordCardProps {
  user: UserDataResponse;
}

export function ResetPasswordCard({ user }: ResetPasswordCardProps) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const handleResetPassword = () => {
    startTransition(async () => {
      const result = await resetUserPasswordAction(user.uuid);
      if (result.code === 200) {
        toast.success("Password berhasil direset", {
          description: `User ${user.username} akan otomatis logout dari semua sesi aktif.`,
        });
        setOpen(false);
      } else {
        toast.error("Gagal mereset password", {
          description:
            result.message ??
            "Terjadi kesalahan pada server. Silakan coba beberapa saat lagi atau hubungi administrator.",
        });
      }
    });
  };

  return (
    <Card className="border-destructive/25 bg-destructive/2">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-md border border-destructive/20 bg-destructive/10">
            <HugeiconsIcon
              className="size-4 text-destructive"
              icon={LockPasswordIcon}
              strokeWidth={2}
            />
          </div>
          <CardTitle className="font-semibold text-base">
            Reset Password
          </CardTitle>
        </div>
      </CardHeader>

      <Separator className="bg-destructive/10" />

      <CardContent className="pt-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Reset password akan memaksa user logout dari{" "}
            <span className="font-medium text-foreground">
              semua sesi aktif
            </span>{" "}
            secara otomatis.
          </p>

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
                  Anda akan mereset password untuk user{" "}
                  <span className="font-mono font-semibold text-foreground">
                    {user.username}
                  </span>
                  . User akan otomatis logout dari semua sesi yang aktif.
                  Tindakan ini tidak dapat dibatalkan.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel disabled={isPending}>
                  Batal
                </AlertDialogCancel>
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
        </div>
      </CardContent>
    </Card>
  );
}
