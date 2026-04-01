import { notFound } from "next/navigation";
import { CreateDriverDialog } from "@/components/modules/dealers/create-driver-dialog";
import { dealerDriverColumns } from "@/components/modules/dealers/driver-columns";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DealersApi } from "@/lib/api/dealers";

type Props = {
  params: Promise<{ id: string }>;
};

const DriversPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data: drivers } = await DealersApi.getDealerDrivers(id);

  if (!drivers) {
    notFound();
  }

  return (
    <div className="my-3 space-y-3">
      <div className="flex justify-end">
        <CreateDriverDialog />
      </div>
      <div className="space-y-3">
        <TableProvider columns={dealerDriverColumns}>
          <DataTableLayout fullWidth>
            <DataTableLoader data={drivers} />
          </DataTableLayout>
          <DataTablePagination />
        </TableProvider>
      </div>
    </div>
  );
};

export default DriversPage;
