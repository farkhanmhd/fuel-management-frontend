import { Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Suspense } from "react";
import { dealerColumns } from "@/components/modules/dealers/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

const DealerLayout = ({ children }: Props) => {
  return (
    <Suspense>
      <TableProvider columns={dealerColumns}>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-2xl">Dealer</h1>
            <p className="text-muted-foreground">Daftar semua dealer</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <DataTableSearch className="w-full md:max-w-sm" />
            <div className="flex gap-2">
              <DataTableViewOptions />
              <Button className="w-full md:w-auto">
                <HugeiconsIcon icon={Plus} strokeWidth={2} />
                Dealer
              </Button>
            </div>
          </div>
          <DataTableLayout>{children}</DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
    </Suspense>
  );
};

export default DealerLayout;
