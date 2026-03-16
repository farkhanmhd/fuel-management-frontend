import { DataTableLoader } from "@/components/table/data-table-loader";
import { getDealers } from "@/lib/api/dealers/server";

const DealersPage = async () => {
  const dealers = await getDealers();
  return <DataTableLoader data={dealers} />;
};

export default DealersPage;
