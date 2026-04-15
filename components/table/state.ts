import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  useSearchQueryParams,
  useTablePaginationSearchParams,
} from "@/hooks/nuqs";

interface UseTableProps<TData extends { id: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  manualPagination: boolean;
  rowCount?: number;
}

export const useTable = <TData extends { id: string }, TValue>({
  columns,
  manualPagination = false,
}: UseTableProps<TData, TValue>) => {
  "use no memo";
  const [internalData, setInternalData] = useState<TData[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useSearchQueryParams();
  const [rowSelection, setRowSelection] = useState({});
  const [rowCount, setRowCount] = useState(20);
  const [paginationState, setPaginationState] =
    useTablePaginationSearchParams();
  const [manualPaginationState, setManualPaginationState] =
    useState<PaginationState>({ pageIndex: 0, pageSize: 20 });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const table = useReactTable<TData>({
    columns,
    data: internalData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: manualPagination
      ? (updater) => {
          setManualPaginationState((old) => {
            const newPaginationValue =
              updater instanceof Function ? updater(old) : updater;
            const value = newPaginationValue.pageIndex + 1;
            if (value === 1) {
              params.delete("page");
            } else {
              params.set("page", String(value));
            }
            return newPaginationValue;
          });
          replace(`${pathname}?${params.toString()}` as Route);
        }
      : setPaginationState,
    autoResetPageIndex: !manualPagination,
    getRowId: (row) => row.id,
    manualPagination,
    rowCount: manualPagination ? rowCount : undefined,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection,
      pagination: manualPagination ? manualPaginationState : paginationState,
    },
  });

  return {
    table,
    internalData,
    setInternalData,
    globalFilter,
    setGlobalFilter,
    isManualPagination: manualPagination,
    setRowCount,
  };
};
