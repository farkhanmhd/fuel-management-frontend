import { DataTableLoader } from "@/components/table/data-table-loader";
import { PermissionsApi } from "@/lib/api/permissions";

const DealersPage = async () => {
  const { data } = await PermissionsApi.getAllPermissions();
  const permissions = data?.map((permission) => ({
    id: String(permission.id),
    name: permission.name,
  }));

  return <DataTableLoader data={permissions || []} />;
};

export default DealersPage;
