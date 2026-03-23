"use client";

import { Suspense } from "react";
import { driverAssetColumns } from "@/components/modules/drivers/asset-columns";
import { getDriverDetail } from "@/components/modules/drivers/detail-data";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";

const AssetsTable = () => {
  const detail = getDriverDetail("1");

  return (
    <div className="my-3 space-y-3">
      <TableProvider columns={driverAssetColumns}>
        <DataTableLayout fullWidth>
          <DataTableLoader data={detail.assets} />
        </DataTableLayout>
        <DataTablePagination />
      </TableProvider>
    </div>
  );
};

const AssetsPage = () => {
  return (
    <Suspense>
      <AssetsTable />
    </Suspense>
  );
};

export default AssetsPage;
