import { LockPasswordIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChangePasswordForm } from "@/components/modules/account/change-password-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ChangePasswordSlot = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-md bg-muted">
            <HugeiconsIcon
              className="size-4 text-muted-foreground"
              icon={LockPasswordIcon}
              strokeWidth={2}
            />
          </div>
          <div>
            <CardTitle className="font-semibold text-base">
              Ubah Password
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent>
        <ChangePasswordForm />
      </CardContent>
    </Card>
  );
};

export default ChangePasswordSlot;
