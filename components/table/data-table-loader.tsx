"use client";

import { useEffect } from "react";
import { useTableContext } from "./context";
import { DataTableBody } from "./data-table-body";

interface DataTableLoaderProps<TData extends { id: string }> {
  data: TData[];
}

export const DataTableLoader = <TData extends { id: string }>({
  data,
}: DataTableLoaderProps<TData>) => {
  const { setData } = useTableContext();
  useEffect(() => {
    console.log("[v0] DataTableLoader setData called with:", data);
    setData(data);
  }, [data, setData]);
  return <DataTableBody />;
};
