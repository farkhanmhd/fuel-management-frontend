"use client";

import { AddAssetDialog } from "@/components/modules/assets/add-asset-dialog";
import { assetColumns } from "@/components/modules/assets/columns";
import { useAuth } from "@/components/providers/auth-provider";
import { DataTableView } from "@/components/table/data-table-view";
import { AssetsApi } from "@/lib/api/assets";
import { queryKeys } from "@/lib/query-keys";

const AssetsPage = () => {
  const { session } = useAuth();
  return (
    <DataTableView
      columns={assetColumns}
      errorTitle="Failed to load Assets"
      extraActions={<AddAssetDialog />}
      queryFn={() => AssetsApi.getAssets()}
      queryKey={queryKeys.assets(session?.userId as string)}
    />
  );
};

export default AssetsPage;
