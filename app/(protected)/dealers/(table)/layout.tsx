import type { Metadata } from "next";
import { dealerColumns } from "@/components/modules/dealers/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableSearch } from "@/components/table/data-table-search";

export const metadata: Metadata = {
  title: "Daftar Dealer",
};

interface Props {
  children: React.ReactNode;
}

const DealerLayout = ({ children }: Props) => {
  return (
    <TableProvider columns={dealerColumns}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-sm max-w-full" />
        </div>
        <DataTableLayout fullWidth>{children}</DataTableLayout>
      </div>
    </TableProvider>
  );
};

export default DealerLayout;
