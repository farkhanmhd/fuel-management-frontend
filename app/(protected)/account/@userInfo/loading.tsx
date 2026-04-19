import { UserIcon, UserIdVerificationIcon } from "@hugeicons/core-free-icons";
import { AccountInfoField } from "@/components/modules/account/account-info-field";
import { Skeleton } from "@/components/ui/skeleton";

const UserInfoLoading = () => {
  return (
    <>
      <AccountInfoField icon={UserIdVerificationIcon} label="Username">
        <Skeleton className="h-4 w-28" />
      </AccountInfoField>
      <AccountInfoField icon={UserIcon} label="Nama Lengkap">
        <Skeleton className="h-4 w-36" />
      </AccountInfoField>
    </>
  );
};

export default UserInfoLoading;
