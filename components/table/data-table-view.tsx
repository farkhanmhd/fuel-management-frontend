"use client";

import {
  type QueryFunction,
  type QueryKey,
  useQuery,
} from "@tanstack/react-query";
import type { ColumnDef } from "@tanstack/react-table";
import type { ReactNode } from "react";
import { ErrorState } from "../utils/error-state";
import { DataTableBody } from "./data-table-body";
import { DataTableLayout } from "./data-table-layout";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableSearch } from "./data-table-search";
import { DataTableSkeleton } from "./data-table-skeleton";
import { TableProvider } from "./react-table";

interface DataTableViewProps<
  TData extends { id: string },
  TValue,
  TQueryData = TData[],
> {
  children?: ReactNode;
  columns: ColumnDef<TData, TValue>[];
  errorTitle?: string;
  extraActions?: ReactNode;
  manualPagination?: boolean;
  mapData?: (data: TQueryData | undefined) => TData[];
  queryFn: QueryFunction<TQueryData, QueryKey>;
  queryKey: QueryKey;
  searchPlaceholder?: string;
  total?: number | ((data: TQueryData | undefined) => number | undefined);
}

export function DataTableView<
  TData extends { id: string },
  TValue,
  TQueryData = TData[],
>({
  columns,
  queryKey,
  queryFn,
  mapData,
  errorTitle = "Failed to load data",
  extraActions,
  manualPagination,
  total,
  children,
  searchPlaceholder,
}: DataTableViewProps<TData, TValue, TQueryData>) {
  const { data, isLoading, isError, refetch, error } = useQuery<TQueryData>({
    queryKey,
    queryFn,
  });

  if (isError) {
    return (
      <ErrorState
        description={error?.message}
        onRetry={() => refetch()}
        title={errorTitle}
      />
    );
  }

  const processedData = mapData
    ? mapData(data)
    : (data as unknown as TData[]) || [];
  const totalCount = typeof total === "function" ? total(data) : total;

  return (
    <>
      <TableProvider
        columns={columns as ColumnDef<TData, unknown>[]}
        data={processedData}
        manualPagination={manualPagination}
        total={totalCount}
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between gap-4">
            <DataTableSearch
              className="w-sm max-w-full"
              placeholder={searchPlaceholder}
            />
            {extraActions}
          </div>
          <DataTableLayout fullWidth>
            {isLoading ? <DataTableSkeleton rows={20} /> : <DataTableBody />}
          </DataTableLayout>
          <DataTablePagination />
        </div>
      </TableProvider>
      {children}
    </>
  );
}
