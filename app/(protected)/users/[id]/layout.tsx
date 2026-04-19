import type { ReactNode } from "react";
import { BackButton } from "@/components/navigations/back-button";

export default function UserDetailLayout({
  userInfo,
  resetPassword,
  permissions,
}: {
  userInfo: ReactNode;
  resetPassword: ReactNode;
  permissions: ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-1">
      <div className="flex items-center gap-2">
        <BackButton />
      </div>
      <div className="flex flex-col gap-6">
        {userInfo}
        {resetPassword}
        {permissions}
      </div>
    </div>
  );
}
