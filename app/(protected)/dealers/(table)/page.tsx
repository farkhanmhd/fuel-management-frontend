"use client";

import { dealerColumns } from "@/components/modules/dealers/columns";
import { DataTableView } from "@/components/table/data-table-view";
import { type DealerList, DealersApi } from "@/lib/api/dealers";

const DealersPage = () => {
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
      queryKey={["dealers"]}
    />
  );
};

export default DealersPage;
