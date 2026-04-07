import type { Metadata } from "next";
import { ResetPasswordCard } from "@/components/modules/users/reset-password-card";
import { UserInfoCard } from "@/components/modules/users/user-info-card";
import { UsersApi } from "@/lib/api/users";

interface UserPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Informasi User",
};

const UserCard = async ({ params }: UserPageProps) => {
  const { id } = await params;
  const user = await UsersApi.getUserById(id);

  return (
    <div className="flex flex-col gap-6">
      <UserInfoCard user={user} />
      <ResetPasswordCard user={user} />
    </div>
  );
};

export default UserCard;
