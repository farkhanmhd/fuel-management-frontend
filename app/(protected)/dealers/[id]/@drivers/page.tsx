"use client";

import { Suspense } from "react";
import { getDealerDetail } from "@/components/modules/dealers/detail-data";
import { dealerDriverColumns } from "@/components/modules/dealers/driver-columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { Button } from "@/components/ui/button";

const DriversTable = () => {
  const detail = getDealerDetail("1");

  return (
    <div className="my-3 space-y-3">
      <div className="flex justify-end">
        <Button>Tambah Driver</Button>
      </div>
      <div className="space-y-3">
        <TableProvider columns={dealerDriverColumns}>
          <DataTableLayout>
            <DataTableLoader data={detail.drivers} />
          </DataTableLayout>
          <DataTablePagination />
        </TableProvider>
      </div>
    </div>
  );
};

const DriversPage = () => {
  return (
    <Suspense>
      <DriversTable />
    </Suspense>
  );
};

export default DriversPage;
