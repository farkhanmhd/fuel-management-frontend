"use client";

import { AddAssetDialog } from "@/components/modules/assets/add-asset-dialog";
import { assetColumns } from "@/components/modules/assets/columns";
import { DataTableView } from "@/components/table/data-table-view";
import { AssetsApi } from "@/lib/api/assets";

const AssetsPage = () => {
  return (
    <DataTableView
      columns={assetColumns}
      errorTitle="Failed to load Assets"
      extraActions={<AddAssetDialog />}
      queryFn={() => AssetsApi.getAssets()}
      queryKey={["assets"]}
    />
  );
};

export default AssetsPage;
