import type { Metadata } from "next";
import { transactionColumns } from "@/components/modules/transactions/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";

export const metadata: Metadata = {
  title: "Daftar Transaksi",
};

interface Props {
  children: React.ReactNode;
}

const TransactionLayout = ({ children }: Props) => {
  return (
    <TableProvider columns={transactionColumns}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-sm max-w-full" />
        </div>
        <DataTableLayout fullWidth>{children}</DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default TransactionLayout;
