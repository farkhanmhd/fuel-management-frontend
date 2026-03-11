import { Suspense } from "react";
import { dealerColumns } from "@/components/modules/dealers/columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";

interface Props {
  children: React.ReactNode;
}

const DealerLayout = ({ children }: Props) => {
  return (
    <div className="overflow-hidden rounded-xl border">
      <Suspense>
        <TableProvider columns={dealerColumns}>
          <DataTableLayout>{children}</DataTableLayout>
        </TableProvider>
      </Suspense>
    </div>
  );
};

export default DealerLayout;
