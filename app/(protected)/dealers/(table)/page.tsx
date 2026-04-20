"use client";

import { dealerColumns } from "@/components/modules/dealers/columns";
import { useAuth } from "@/components/providers/auth-provider";
import { DataTableView } from "@/components/table/data-table-view";
import { type DealerList, DealersApi } from "@/lib/api/dealers";

const DealersPage = () => {
  const { session } = useAuth();
  return (
    <DataTableView
      columns={dealerColumns}
      errorTitle="Failed to load Dealers"
      mapData={(data: DealerList[] | undefined) =>
        (data || []).map((dealer) => ({
          id: String(dealer.id),
          name: dealer.name,
          code: dealer.code,
          area: dealer.area,
        }))
      }
      queryFn={() => DealersApi.getDealers()}
      queryKey={["dealers", session?.userId]}
    />
  );
};

export default DealersPage;
