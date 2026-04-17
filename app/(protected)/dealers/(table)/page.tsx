"use client";

import { useQuery } from "@tanstack/react-query";
import { dealerColumns } from "@/components/modules/dealers/columns";
import { DataTableBody } from "@/components/table/data-table-body";
import { DataTableLayout } from "@/components/table/data-table-layout";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableSkeleton } from "@/components/table/data-table-skeleton";
import { TableProvider } from "@/components/table/react-table";
import { ErrorState } from "@/components/utils/error-state";
import { DealersApi } from "@/lib/api/dealers";

const UsersPage = () => {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryFn: () => DealersApi.getDealers(),
    queryKey: ["dealers"],
  });

  if (isError) {
    return (
      <ErrorState
        description={error?.message}
        onRetry={() => refetch()}
        title="Failed to load Dealers"
      />
    );
  }

  const mappedDealers = (data || []).map((dealer) => ({
    id: String(dealer.id),
    name: dealer.name,
    code: dealer.code,
    area: dealer.area,
  }));

  return (
    <TableProvider columns={dealerColumns} data={mappedDealers}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <DataTableSearch className="w-sm max-w-full" />
        </div>
        <DataTableLayout fullWidth>
          {isLoading ? <DataTableSkeleton rows={10} /> : <DataTableBody />}
        </DataTableLayout>
        <DataTablePagination />
      </div>
    </TableProvider>
  );
};

export default UsersPage;
