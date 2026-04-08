import type { Metadata } from "next";
import { AddPermissionDialog } from "@/components/modules/permissions/add-permission-dialog";
import { columns } from "@/components/modules/permissions/columns";
import { UpdatePermissionDialog } from "@/components/modules/permissions/edit-permission-dialog";
import { AlertDialogProvider } from "@/components/providers/alert-dialog-provider";
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
    <AlertDialogProvider>
      <TableProvider columns={columns}>
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <DataTableSearch className="w-full max-w-sm" />
            <div className="flex gap-2">
              <AddPermissionDialog />
            </div>
          </div>
          <DataTableLayout fullWidth>{children}</DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
      <UpdatePermissionDialog />
    </AlertDialogProvider>
  );
};

export default DealerLayout;
