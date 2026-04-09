import { DataTableLoader } from "@/components/table/data-table-loader";
import { PermissionsApi } from "@/lib/api/permissions";

const PermissionsPage = async () => {
  const data = await PermissionsApi.getAllPermissions();

  return <DataTableLoader data={data || []} />;
};

export default PermissionsPage;
