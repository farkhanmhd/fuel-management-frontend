import { DataTableLoader } from "@/components/table/data-table-loader";
import { DealersApi } from "@/lib/api/dealers";

const DealersPage = async () => {
  const data = await DealersApi.getDealers();
  const dealers =
    data?.map((dealer) => ({ ...dealer, id: String(dealer.id) })) || [];

  return <DataTableLoader data={dealers} />;
};

export default DealersPage;
