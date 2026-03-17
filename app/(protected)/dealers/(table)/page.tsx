import { DataTableLoader } from "@/components/table/data-table-loader";
import { DealersApi } from "@/lib/api/dealers";

const DealersPage = async () => {
  const dealers = await DealersApi.getDealers();
  return <DataTableLoader data={dealers} />;
};

export default DealersPage;
