import { UserDetailCard } from "@/components/modules/users/user-detail-card";
import { UserPermissions } from "@/components/modules/users/user-permissions";
import { BackButton } from "@/components/navigations/back-button";

const UserDetailPage = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-1">
      <div className="flex items-center gap-2">
        <BackButton />
      </div>
      <div className="flex flex-col gap-6">
        <UserDetailCard />
        <UserPermissions />
      </div>
    </div>
  );
};

export default UserDetailPage;
