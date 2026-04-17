"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type SortingState,
  type Table,
  useReactTable,
} from "@tanstack/react-table";
import {
  parseAsIndex,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "nuqs";
import { createContext, useContext, useState } from "react";

const searchParser = {
  search: parseAsString.withDefault(""),
};

const paginationParsers = {
  pageIndex: parseAsIndex.withDefault(0),
  pageSize: parseAsInteger.withDefault(20),
};

const paginationUrlKeys = {
  pageIndex: "page",
  pageSize: "limit",
};

interface UseTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | undefined;
  manualPagination?: boolean;
  total?: number;
}

function useTable<TData extends { id: string }, TValue>({
  manualPagination = false,
  columns,
  data = [],
  total,
}: UseTableProps<TData, TValue>) {
  "use no memo";
  const [search, setSearch] = useQueryStates(searchParser, {
    limitUrlUpdates: {
      method: "throttle",
      timeMs: 300,
    },
  });
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [paginationState, setPaginationState] = useQueryStates(
    paginationParsers,
    { urlKeys: paginationUrlKeys }
  );

  const table = useReactTable<TData>({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setSearch,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    manualPagination,
    onPaginationChange: setPaginationState,
    rowCount: manualPagination ? total : undefined,
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
      globalFilter: search.search,
      rowSelection,
      pagination: paginationState,
    },
  });

  return {
    table,
    search,
    setSearch,
  };
}

interface TableContextType<T extends { id: string }> {
  columns: ColumnDef<T, unknown>[];
  onSearchChange: (value: string) => void;
  searchValue: string;
  selectableRows?: boolean;
  table: Table<T>;
}

const TableContext = createContext<unknown | undefined>(undefined);

interface TableProviderProps<T extends { id: string }> {
  children: React.ReactNode;
  columns: ColumnDef<T, unknown>[];
  data: T[];
  manualPagination?: boolean;
  selectableRows?: boolean;
  total?: number;
}

export function TableProvider<T extends { id: string }>({
  manualPagination,
  columns,
  selectableRows,
  children,
  data = [],
  total,
}: TableProviderProps<T>) {
  "use no memo";

  const { table, search, setSearch } = useTable({
    data,
    columns,
    manualPagination,
    total,
  });

  const value: TableContextType<T> = {
    columns,
    searchValue: search.search,
    selectableRows,
    onSearchChange: (val: string) => setSearch({ search: val }),
    table,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

export function useTableContext<T extends { id: string }>() {
  "use no memo";

  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }

  return context as TableContextType<T>;
}
