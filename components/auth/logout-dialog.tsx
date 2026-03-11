"use client";

import { LogoutSquare01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTransitionRouter } from "next-view-transitions";
import { useState, useTransition } from "react";
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
import { logoutAction } from "@/lib/auth/actions";

export function LogoutDialog() {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const { push } = useTransitionRouter();

  const submitAction = () => {
    startTransition(async () => {
      await logoutAction();
      push("/login");
      setOpen(false);
    });
  };

  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <HugeiconsIcon className="size-5" icon={LogoutSquare01Icon} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive">
            Keluar
          </AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Anda yakin ingin keluar? Anda perlu masuk kembali untuk
            mengakses akun Anda.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Batal</AlertDialogCancel>
          <Button
            disabled={isPending}
            onClick={submitAction}
            variant="destructive"
          >
            Keluar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
