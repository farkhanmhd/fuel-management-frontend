"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ResetPasswordCard } from "@/components/modules/users/reset-password-card";
import { UserInfoCard } from "@/components/modules/users/user-info-card";
import { UserPageSkeleton } from "@/components/modules/users/user-page-skeleton";
import { ErrorState } from "@/components/utils/error-state";
import { UsersApi } from "@/lib/api/users";

export const UserDetailCard = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryFn: () => UsersApi.getUserById(id),
    queryKey: ["user-detail", id],
  });

  if (isLoading) {
    return <UserPageSkeleton />;
  }

  if (user) {
    return (
      <div className="flex flex-col gap-6">
        <UserInfoCard user={user} />
        <ResetPasswordCard user={user} />
      </div>
    );
  }

  return (
    <ErrorState
      description={error?.message}
      onRetry={() => refetch()}
      title="Failed to load user"
    />
  );
};
