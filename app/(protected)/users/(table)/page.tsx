import { DataTableLoader } from "@/components/table/data-table-loader";
import type { UserListData } from "@/lib/api/users";
import { UsersApi } from "@/lib/api/users";

const UsersPage = async () => {
  const users = await UsersApi.getUsers();

  const mappedUsers: UserListData[] = users?.map((user) => ({
    ...user,
    id: user.uuid,
  }));
  return <DataTableLoader data={mappedUsers} />;
};

export default UsersPage;
