import { Suspense } from "react";
import { userColumns } from "@/components/modules/users/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";

interface Props {
  children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <Suspense>
      <TableProvider columns={userColumns}>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-2xl">User</h1>
            <p className="text-muted-foreground">Daftar semua user</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <DataTableSearch className="w-full md:max-w-sm" />
            <div className="flex gap-2">
              <DataTableViewOptions />
            </div>
          </div>
          <DataTableLayout>{children}</DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
    </Suspense>
  );
};

export default UserLayout;
