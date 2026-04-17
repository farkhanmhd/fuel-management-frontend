"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { userColumns } from "@/components/modules/users/columns";
import { DataTableBody } from "@/components/table/data-table-body";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { TableProvider } from "@/components/table/react-table";
import { ErrorState } from "@/components/utils/error-state";
import { type UserListData, UsersApi } from "@/lib/api/users";

const UsersPage = () => {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  const { data, isLoading, isError, refetch, error } = useQuery({
    queryFn: () => UsersApi.getUsers(queryParams),
    queryKey: ["users", searchParams.toString()],
  });

  const users = data?.users;
  const total = data?.total;

  const mappedUsers = users?.map((user) => ({
    ...user,
    id: user.uuid,
  })) as UserListData[];

  if (isError) {
    return (
      <ErrorState
        description={error?.message}
        onRetry={() => refetch()}
        title="Failed to load users"
      />
    );
  }

  return (
    <TableProvider
      columns={userColumns}
      data={mappedUsers}
      manualPagination
      total={total}
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-sm max-w-full" />
        </div>
        <DataTableLayout fullWidth>
          {isLoading ? <DataTableSkeleton rows={10} /> : <DataTableBody />}
        </DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default UsersPage;
