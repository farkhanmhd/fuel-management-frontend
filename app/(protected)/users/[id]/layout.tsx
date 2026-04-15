import { BackButton } from "@/components/navigations/back-button";

interface Props {
  permissions: React.ReactNode;
  userDetail: React.ReactNode;
}

const UserDetailLayout = ({ userDetail, permissions }: Props) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-1">
      <div className="flex items-center gap-2">
        <BackButton />
      </div>
      <div className="flex flex-col gap-6">
        {userDetail}
        {permissions}
      </div>
    </div>
  );
};

export default UserDetailLayout;
