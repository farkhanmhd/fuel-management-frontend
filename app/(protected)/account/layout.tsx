import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akun Saya",
};

interface Props {
  changePassword: React.ReactNode;
  userInfo: React.ReactNode;
}

const AccountLayout = ({ userInfo, changePassword }: Props) => {
  return (
    <div className="mx-auto max-w-2xl px-1">
      <div className="mb-6">
        <h1 className="font-semibold text-foreground text-xl">Akun Saya</h1>
        <p className="mt-1 text-muted-foreground text-sm">
          Kelola informasi akun dan keamanan Anda.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {userInfo}
        {changePassword}
      </div>
    </div>
  );
};

export default AccountLayout;
