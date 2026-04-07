import { columns } from "@/components/modules/permissions/columns";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";

const DealerLoading = () => {
  return <DataTableSkeleton columns={columns} rows={10} />;
};

export default DealerLoading;
