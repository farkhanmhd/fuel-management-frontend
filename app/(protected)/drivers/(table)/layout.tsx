import { Suspense } from "react";
import { driverColumns } from "@/components/modules/drivers/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";

interface Props {
  children: React.ReactNode;
}

const DriverLayout = ({ children }: Props) => {
  return (
    <Suspense>
      <TableProvider columns={driverColumns}>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-semibold text-2xl">Driver</h1>
            <p className="text-muted-foreground">Daftar semua driver</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <DataTableSearch className="w-full md:max-w-sm" />
            <DataTableViewOptions />
          </div>
          <DataTableLayout>{children}</DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
    </Suspense>
  );
};

export default DriverLayout;
