import { Suspense } from "react";
import { DataTableLoader } from "@/components/table/data-table-loader";
import type { UserData } from "@/lib/api/users";
import { UsersApi } from "@/lib/api/users";

const UsersPage = async () => {
  const users = await UsersApi.getUsers();
  const mappedUsers: UserData[] = users.map((user) => ({
    ...user,
    id: user.uuid,
  }));
  return (
    <Suspense>
      <DataTableLoader data={mappedUsers} />
    </Suspense>
  );
};

export default UsersPage;
