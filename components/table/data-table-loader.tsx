"use client";

import { useEffect } from "react";
import { useTableContext } from "./context";
import { DataTableBody } from "./data-table-body";

interface DataTableLoaderProps<TData extends { id: string }> {
  data: TData[];
  total?: number;
}

export const DataTableLoader = <TData extends { id: string }>({
  data,
  total,
}: DataTableLoaderProps<TData>) => {
  "use no memo";
  const { setInternalData, setRowCount } = useTableContext();

  useEffect(() => {
    if (data) {
      setInternalData(data);
    }

    if (total) {
      setRowCount(total);
    }
  }, [data, total, setInternalData, setRowCount]);

  return <DataTableBody />;
};
