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

  // Use a single effect to set data when component mounts, ignoring subsequent changes
  useEffect(() => {
    if (data && data.length > 0) {
      console.log("[v0] DataTableLoader setting data with length:", data.length);
      setData(data);
    }
  }, []); // Empty dependency array - only run on mount

  // Also watch for data changes as fallback
  useEffect(() => {
    console.log("[v0] DataTableLoader data prop changed, new length:", data.length);
    setData(data);
  }, [data.length, setData]); // Use data.length instead of data object reference

  return <DataTableBody />;
};
