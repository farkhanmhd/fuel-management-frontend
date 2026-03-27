import { UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AccountInfoClient } from "@/components/modules/account/account-info-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AccountApi } from "@/lib/api/account";

const UserInfoSlot = async () => {
  const { user } = await AccountApi.getMyAccount();

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

      <CardContent>
        {user ? (
          <AccountInfoClient user={user} />
        ) : (
          <p className="text-muted-foreground text-sm">
            Gagal memuat data pengguna.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default UserInfoSlot;
