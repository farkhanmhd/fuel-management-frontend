import { dealerColumns } from "@/components/modules/dealers/columns";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";

const DealerLoading = () => {
  return <DataTableSkeleton columns={dealerColumns} rows={10} />;
};

export default DealerLoading;
