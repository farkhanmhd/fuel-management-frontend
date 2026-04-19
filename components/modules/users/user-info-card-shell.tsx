import { UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserInfoCardShellProps {
  children: ReactNode;
  extraActions?: ReactNode;
}

export function UserInfoCardShell({
  children,
  extraActions,
}: UserInfoCardShellProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
            <HugeiconsIcon
              className="size-4 text-primary"
              icon={UserIcon}
              strokeWidth={2}
            />
          </div>
          <CardTitle className="font-semibold text-base">
            Informasi User
          </CardTitle>
        </div>
        <div className="flex items-center gap-2">{extraActions}</div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{children}</div>
      </CardContent>
    </Card>
  );
}
