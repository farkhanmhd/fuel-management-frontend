import { userColumns } from "@/components/modules/users/columns";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";

const DealerLoading = () => {
  return <DataTableSkeleton columns={userColumns} rows={10} />;
};

export default DealerLoading;
