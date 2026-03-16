"use client";

import { Suspense } from "react";
import { getDealerDetail } from "@/components/modules/dealers/detail-data";
import { dealerTransactionColumns } from "@/components/modules/dealers/transaction-columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";

const TransactionsTable = () => {
  const detail = getDealerDetail("1");
  const sortedTransactions = [...detail.transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="my-3 space-y-3">
      <TableProvider columns={dealerTransactionColumns}>
        <DataTableLayout>
          <DataTableLoader data={sortedTransactions} />
        </DataTableLayout>
        <DataTablePagination />
      </TableProvider>
    </div>
  );
};

const TransactionsPage = () => {
  return (
    <Suspense>
      <TransactionsTable />
    </Suspense>
  );
};

export default TransactionsPage;
