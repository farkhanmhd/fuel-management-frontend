import { DataTableLoader } from "@/components/table/data-table-loader";
import { DealersApi } from "@/lib/api/dealers";

const DealersPage = async () => {
  const { data } = await DealersApi.getDealers();

  return <DataTableLoader data={data || []} />;
};

export default DealersPage;
