import { UserIcon, UserIdVerificationIcon } from "@hugeicons/core-free-icons";
import { AccountInfoField } from "@/components/modules/account/account-info-field";
import { AccountApi } from "@/lib/api/account";

const UserInfoSlot = async () => {
  const { user } = await AccountApi.getMyAccount();

  if (!user) {
    return (
      <p className="col-span-2 text-muted-foreground text-sm">
        Gagal memuat data pengguna.
      </p>
    );
  }

  return (
    <>
      <AccountInfoField icon={UserIdVerificationIcon} label="Username" mono>
        {user.username}
      </AccountInfoField>
      <AccountInfoField icon={UserIcon} label="Nama Lengkap">
        {user.name}
      </AccountInfoField>
    </>
  );
};

export default UserInfoSlot;
