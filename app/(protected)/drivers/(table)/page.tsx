"use client";

import { useSearchParams } from "next/navigation";
import { AddDriverDialog } from "@/components/modules/drivers/add-driver-dialog";
import { driverColumns } from "@/components/modules/drivers/columns";
import { useAuth } from "@/components/providers/auth-provider";
import { DataTableView } from "@/components/table/data-table-view";
import { DriversApi } from "@/lib/api/drivers";
import { queryKeys } from "@/lib/query-keys";

const DriversPage = () => {
  const searchParams = useSearchParams();
  const { session } = useAuth();

  const queryParams = Object.fromEntries(searchParams.entries());
  return (
    <DataTableView
      columns={driverColumns}
      errorTitle="Failed to load Drivers"
      extraActions={<AddDriverDialog />}
      manualPagination
      mapData={(data) => data?.drivers ?? []}
      queryFn={() => DriversApi.getDrivers(queryParams)}
      queryKey={queryKeys.drivers(session?.userId as string, queryParams)}
      total={(data) => data?.total}
    />
  );
};

export default DriversPage;
