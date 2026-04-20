"use client";

import { AddPermissionDialog } from "@/components/modules/permissions/add-permission-dialog";
import { columns } from "@/components/modules/permissions/columns";
import { UpdatePermissionDialog } from "@/components/modules/permissions/edit-permission-dialog";
import { AlertDialogProvider } from "@/components/providers/alert-dialog-provider";
import { DataTableView } from "@/components/table/data-table-view";
import { PermissionsApi } from "@/lib/api/permissions";
import { queryKeys } from "@/lib/query-keys";

const PermissionsPage = () => {
  return (
    <AlertDialogProvider>
      <DataTableView
        columns={columns}
        errorTitle="Failed to load Permissions"
        extraActions={<AddPermissionDialog />}
        queryFn={() => PermissionsApi.getAllPermissions()}
        queryKey={queryKeys.permissions()}
      >
        <UpdatePermissionDialog />
      </DataTableView>
    </AlertDialogProvider>
  );
};

export default PermissionsPage;
