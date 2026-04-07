import type { Metadata } from "next";
import { AddPermissionDialog } from "@/components/modules/permissions/add-permission-dialog";
import { columns } from "@/components/modules/permissions/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";

export const metadata: Metadata = {
  title: "Permissions",
};

interface Props {
  children: React.ReactNode;
}

const DealerLayout = ({ children }: Props) => {
  return (
    <TableProvider columns={columns}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-full max-w-sm" />
          <AddPermissionDialog />
        </div>
        <DataTableLayout fullWidth>{children}</DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default DealerLayout;
