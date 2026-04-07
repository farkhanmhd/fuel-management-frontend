import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

interface Props {
  permissions: React.ReactNode;
  userDetail: React.ReactNode;
}

const UserDetailLayout = ({ userDetail, permissions }: Props) => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-1">
      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          href="/users"
        >
          <HugeiconsIcon className="size-4" icon={ArrowLeft} strokeWidth={2} />
          <span>Kembali</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {userDetail}
        {permissions}
      </div>
    </div>
  );
};

export default UserDetailLayout;
