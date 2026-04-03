import { notFound } from "next/navigation";
import { dealerAssetColumns } from "@/components/modules/dealers/asset-columns";
import { CreateAssetDialog } from "@/components/modules/dealers/create-asset-dialog";
import { TableProvider } from "@/components/table/context";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTableLoader } from "@/components/table/data-table-loader";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DealersApi } from "@/lib/api/dealers";

type Props = {
  params: Promise<{ id: string }>;
};

const AssetsPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data: assets } = await DealersApi.getDealerAssets(id);

  if (!assets) {
    notFound();
  }

  return (
    <div className="my-3 space-y-3">
      <div className="flex justify-end">
        <CreateAssetDialog />
      </div>
      <div className="space-y-3">
        <TableProvider columns={dealerAssetColumns}>
          <DataTableLayout fullWidth>
            <DataTableLoader data={assets} />
          </DataTableLayout>
          <DataTablePagination />
        </TableProvider>
      </div>
    </div>
  );
};

export default AssetsPage;
