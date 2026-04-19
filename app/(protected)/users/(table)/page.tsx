"use client";

import { useSearchParams } from "next/navigation";
import { userColumns } from "@/components/modules/users/columns";
import { DataTableView } from "@/components/table/data-table-view";
import { type UserListData, UsersApi } from "@/lib/api/users";

const UsersPage = () => {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  return (
    <DataTableView
      columns={userColumns}
      errorTitle="Failed to load users"
      manualPagination
      mapData={(data) =>
        data?.users?.map((user) => ({
          ...user,
          id: user.uuid,
        })) as UserListData[]
      }
      queryFn={() => UsersApi.getUsers(queryParams)}
      queryKey={["users", searchParams.toString()]}
      total={(data) => data?.total}
    />
  );
};

export default UsersPage;
