"use client";

import { useQueries } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { UserPermissionsForm } from "@/components/modules/users/user-permissions-form";
import { ErrorState } from "@/components/utils/error-state";
import { PermissionsApi } from "@/lib/api/permissions";
import { UsersApi } from "@/lib/api/users";
import { PermissionsFormSkeleton } from "../permissions/permissions-form-skeleton";

export const UserPermissions = () => {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const [permissionsResult, userPermissionsResult] = useQueries({
    queries: [
      {
        queryFn: () => PermissionsApi.getAllPermissions(),
        queryKey: ["permissions", id],
      },
      {
        queryFn: () => UsersApi.getUserPermissions(id),
        queryKey: ["users-permissions", id],
      },
    ],
  });

  const {
    data: permissions,
    error: permissionsError,
    isLoading: isLoadingPermissions,
  } = permissionsResult;
  const {
    data: userPermissions,
    error: errorUserPermissions,
    isLoading: isLoadingUserPermissions,
  } = userPermissionsResult;

  if (isLoadingPermissions || isLoadingUserPermissions) {
    return <PermissionsFormSkeleton />;
  }

  if (
    permissionsError ||
    errorUserPermissions ||
    !permissions ||
    !userPermissions
  ) {
    return (
      <ErrorState
        description={permissionsError?.message || errorUserPermissions?.message}
        onRetry={() => {
          permissionsResult.refetch();
          userPermissionsResult.refetch();
        }}
        title="Failed to load permissions"
      />
    );
  }

  return (
    <UserPermissionsForm
      permissions={permissions}
      userPermissions={userPermissions}
    />
  );
};
