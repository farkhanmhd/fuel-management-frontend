import { LockPasswordIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ResetPasswordCardShellProps {
  children: ReactNode;
}

export function ResetPasswordCardShell({
  children,
}: ResetPasswordCardShellProps) {
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
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
