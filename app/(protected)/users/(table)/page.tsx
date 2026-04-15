import { DataTableLoader } from "@/components/table/data-table-loader";
import type { UserListData } from "@/lib/api/users";
import { UsersApi } from "@/lib/api/users";
import type { PaginationQuery } from "@/lib/utils";

type Props = {
  searchParams?: Promise<PaginationQuery>;
};

const UsersPage = async ({ searchParams }: Props) => {
  const query = await searchParams;
  const { page = 1, limit = 20, search = "" } = query ?? {};
  const { users, total } = await UsersApi.getUsers({ page, search, limit });

  const mappedUsers: UserListData[] = users?.map((user) => ({
    ...user,
    id: user.uuid,
  }));
  return <DataTableLoader data={mappedUsers} total={total} />;
};

export default UsersPage;
