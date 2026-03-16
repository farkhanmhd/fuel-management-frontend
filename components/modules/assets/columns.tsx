"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import { Link } from "next-view-transitions";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Asset = {
  id: string;
  modelName: string;
  licensePlate: string;
  assetYear: number;
  dealerName: string;
  status: "MDS" | "NEQ" | "SEWA";
  totalKilometer: number;
  totalLiter: number;
  averageKilometerPerLitre: number;
};

export const assetColumns: ColumnDef<Asset>[] = [
  {
    accessorKey: "licensePlate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Plat Kendaraan" />
    ),
  },
  {
    accessorKey: "modelName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    accessorKey: "assetYear",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tahun" />
    ),
    cell: ({ row }) => {
      return row.original.assetYear;
    },
  },
  {
    accessorKey: "dealerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dealer" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const statusColors: Record<string, string> = {
        MDS: "bg-blue-100 text-blue-800",
        NEQ: "bg-green-100 text-green-800",
        SEWA: "bg-yellow-100 text-yellow-800",
      };
      return (
        <span
          className={cn(
            "ium inline-flex items-center rounded-full px-2.5 py-0.5 text-xs",
            statusColors[row.original.status]
          )}
        >
          {row.original.status}
        </span>
      );
    },
  },
  {
    accessorKey: "totalKilometer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total KM" />
    ),
    cell: ({ row }) => {
      return `${row.original.totalKilometer.toLocaleString("id-ID")} km`;
    },
  },
  {
    accessorKey: "totalLiter",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Liter" />
    ),
    cell: ({ row }) => {
      return `${row.original.totalLiter.toLocaleString("id-ID")} L`;
    },
  },
  {
    accessorKey: "averageKilometerPerLitre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rata-rata KM/L" />
    ),
    cell: ({ row }) => {
      return `${row.original.averageKilometerPerLitre.toFixed(2)} km/L`;
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      return (
        <Link
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          href={`/assets/${row.original.id}` as Route}
        >
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
