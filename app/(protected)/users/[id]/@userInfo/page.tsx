"use client";

import { UserIcon, UserIdVerificationIcon } from "@hugeicons/core-free-icons";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { UserInfoCard } from "@/components/modules/users/user-info-card";
import { UserInfoCardShell } from "@/components/modules/users/user-info-card-shell";
import { UserInfoField } from "@/components/modules/users/user-info-field";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/utils/error-state";
import { UsersApi } from "@/lib/api/users";
import { queryKeys } from "@/lib/query-keys";

export default function UserInfoPage() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const {
    data: user,
    isLoading,
    isError,
    refetch,
    error,
  } = useQuery({
    queryFn: () => UsersApi.getUserById(id),
    queryKey: queryKeys.user(id),
  });

  if (isLoading) {
    return (
      <UserInfoCardShell extraActions={<Skeleton className="h-9 w-20" />}>
        <UserInfoField icon={UserIdVerificationIcon} label="Username">
          <Skeleton className="h-4 w-24" />
        </UserInfoField>
        <UserInfoField icon={UserIcon} label="Nama">
          <Skeleton className="h-4 w-32" />
        </UserInfoField>
      </UserInfoCardShell>
    );
  }

  if (isError || !user) {
    return (
      <ErrorState
        description={error?.message || "Gagal memuat data user."}
        onRetry={() => refetch()}
        title="Gagal memuat user"
      />
    );
  }

  return <UserInfoCard user={user} />;
}
