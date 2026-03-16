"use client";

import { Suspense } from "react";
import { getAssetDetail } from "@/components/modules/assets/detail-data";
import { assetTransactionColumns } from "@/components/modules/assets/transaction-columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { CardTitle } from "@/components/ui/card";

const TransactionsCard = () => {
  const detail = getAssetDetail("1");
  const sortedTransactions = [...detail.transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-3">
      <div>
        <CardTitle>Riwayat Transaksi</CardTitle>
      </div>
      <div className="space-y-6">
        <TableProvider columns={assetTransactionColumns}>
          <DataTableLayout>
            <DataTableLoader data={sortedTransactions} />
          </DataTableLayout>
          <DataTablePagination />
        </TableProvider>
      </div>
    </div>
  );
};

const TransactionsPage = () => {
  return (
    <Suspense>
      <TransactionsCard />
    </Suspense>
  );
};

export default TransactionsPage;
