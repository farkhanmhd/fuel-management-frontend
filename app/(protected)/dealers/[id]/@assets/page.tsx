"use client";

import { dealerAssetColumns } from "@/components/modules/dealers/asset-columns";
import { getDealerDetail } from "@/components/modules/dealers/detail-data";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { Button } from "@/components/ui/button";

const AssetsTable = () => {
  const detail = getDealerDetail("1");

  return (
    <div className="my-3 space-y-3">
      <div className="flex justify-end">
        <Button>Tambah Aset</Button>
      </div>
      <div className="space-y-3">
        <TableProvider columns={dealerAssetColumns}>
          <DataTableLayout fullWidth>
            <DataTableLoader data={detail.assets} />
          </DataTableLayout>
          <DataTablePagination />
        </TableProvider>
      </div>
    </div>
  );
};

const AssetsPage = () => {
  return <AssetsTable />;
};

export default AssetsPage;
