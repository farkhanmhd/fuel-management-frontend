"use client";

import { Alert02Icon, UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const UserInfoError = ({ error, reset }: ErrorProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2.5 pb-3">
        <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
          <HugeiconsIcon
            className="size-4 text-primary"
            icon={UserIcon}
            strokeWidth={2}
          />
        </div>
        <CardTitle className="font-semibold text-base">
          Informasi Akun
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-3 rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-6 text-center">
          <div className="flex size-9 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
            <HugeiconsIcon
              className="size-4 text-destructive"
              icon={Alert02Icon}
              strokeWidth={2}
            />
          </div>
          <div className="space-y-1">
            <p className="font-medium text-sm">Gagal memuat informasi akun</p>
            <p className="text-muted-foreground text-xs">
              {error.message ?? "Terjadi kesalahan yang tidak diketahui."}
            </p>
          </div>
          <Button onClick={reset} size="sm" variant="outline">
            Coba Lagi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoError;
