import { notFound } from "next/navigation";
import { dealerTransactionColumns } from "@/components/modules/dealers/transaction-columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DealersApi } from "@/lib/api/dealers";

type Props = {
  params: Promise<{ id: string }>;
};

const TransactionsPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data: transactions } = await DealersApi.getDealerTransactions(id);

  if (!transactions) {
    notFound();
  }

  return (
    <div className="my-3 space-y-3">
      <TableProvider columns={dealerTransactionColumns}>
        <DataTableLayout fullWidth>
          <DataTableLoader data={transactions} />
        </DataTableLayout>
        <DataTablePagination />
      </TableProvider>
    </div>
  );
};

export default TransactionsPage;
