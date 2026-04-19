import { UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserInfoLayout({ children }: { children: ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
        <div className="flex items-center gap-2.5">
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
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{children}</div>
      </CardContent>
    </Card>
  );
}
