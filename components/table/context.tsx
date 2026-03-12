"use client";

import type { ColumnDef, Table } from "@tanstack/react-table";
import { createContext, type ReactNode, useContext } from "react";
import { useTable } from "./state";

interface TableContextType<T extends { id: string }> {
  columns: ColumnDef<T, unknown>[];
  globalFilter: string;
  isManualPagination: boolean;
  selectableRows?: boolean;
  setGlobalFilter: (
    value: string | ((old: string) => string | null) | null
  ) => Promise<URLSearchParams>;
  setInternalData: (data: T[]) => void;
  table: Table<T>;
}

const TableContext = createContext<unknown | undefined>(undefined);

interface TableProviderProps<T extends { id: string }> {
  children: ReactNode;
  columns: ColumnDef<T, unknown>[];
  manualPagination?: boolean;
  rowCount?: number;
  selectableRows?: boolean;
}

export function TableProvider<T extends { id: string }>({
  children,
  columns,
  rowCount,
  manualPagination = false,
  selectableRows = false,
}: TableProviderProps<T>) {
  "use no memo";
  const {
    table,
    globalFilter,
    setGlobalFilter,
    isManualPagination,
    setInternalData,
  } = useTable({
    columns,
    manualPagination,
    rowCount,
  });

  const value: TableContextType<T> = {
    table,
    globalFilter,
    setGlobalFilter,
    columns,
    isManualPagination,
    selectableRows,
    setInternalData,
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
