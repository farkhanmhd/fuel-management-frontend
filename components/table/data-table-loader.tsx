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
  "use no memo";
  const { setInternalData } = useTableContext();

  useEffect(() => {
    if (data) {
      setInternalData(data);
    }
  }, [data, setInternalData]);

  return <DataTableBody />;
};
