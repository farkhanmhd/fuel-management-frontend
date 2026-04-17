"use client";

import { useQuery } from "@tanstack/react-query";
import { AddPermissionDialog } from "@/components/modules/permissions/add-permission-dialog";
import { columns } from "@/components/modules/permissions/columns";
import { UpdatePermissionDialog } from "@/components/modules/permissions/edit-permission-dialog";
import { AlertDialogProvider } from "@/components/providers/alert-dialog-provider";
import { DataTableBody } from "@/components/table/data-table-body";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { TableProvider } from "@/components/table/react-table";
import { ErrorState } from "@/components/utils/error-state";
import { PermissionsApi } from "@/lib/api/permissions";

const PermissionsPage = () => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryFn: () => PermissionsApi.getAllPermissions(),
    queryKey: ["permissions"],
  });

  if (isError) {
    return (
      <ErrorState
        description={error?.message}
        onRetry={() => refetch()}
        title="Failed to load Permissions"
      />
    );
  }

  return (
    <AlertDialogProvider>
      <TableProvider columns={columns} data={data || []}>
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <DataTableSearch className="w-sm max-w-full" />
            <AddPermissionDialog />
          </div>
          <DataTableLayout fullWidth>
            {isLoading ? <DataTableSkeleton rows={10} /> : <DataTableBody />}
          </DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
      <UpdatePermissionDialog />
    </AlertDialogProvider>
  );
};

export default PermissionsPage;
