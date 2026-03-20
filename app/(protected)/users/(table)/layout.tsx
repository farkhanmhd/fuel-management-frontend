import type { Metadata } from "next";
import { AddUserDialog } from "@/components/modules/users/add-user-dialog";
import { userColumns } from "@/components/modules/users/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";

export const metadata: Metadata = {
  title: "Daftar User",
};

interface Props {
  children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <TableProvider columns={userColumns}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <DataTableSearch className="w-full md:max-w-sm" />
          <div className="flex gap-2">
            <AddUserDialog />
            <DataTableViewOptions />
          </div>
        </div>
        <DataTableLayout>{children}</DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default UserLayout;
