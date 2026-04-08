import { DataTableLoader } from "@/components/table/data-table-loader";
import { PermissionsApi } from "@/lib/api/permissions";

const DealersPage = async () => {
  const { data } = await PermissionsApi.getAllPermissions();

  return <DataTableLoader data={data || []} />;
};

export default DealersPage;
