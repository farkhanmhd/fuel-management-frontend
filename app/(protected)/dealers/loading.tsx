import { dealerColumns } from "@/components/modules/dealers/columns";
import { DataTableBodySkeleton } from "@/components/table/data-table-body-skeleton";

const DealersLoading = () => {
  return <DataTableBodySkeleton columns={dealerColumns} rows={8} />;
};

export default DealersLoading;
