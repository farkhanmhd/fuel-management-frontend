"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { AssetDetail } from "@/lib/api/assets";
import { cn } from "@/lib/utils";

export const assetColumns: ColumnDef<AssetDetail>[] = [
  {
    accessorKey: "licensePlate",
    header: "Plat Kendaraan",
  },
  {
    accessorKey: "modelName",
    header: "Model",
  },
  {
    accessorKey: "assetYear",
    header: "Tahun",
    cell: ({ row }) => {
      return row.original.assetYear;
    },
  },
  {
    accessorKey: "dealerName",
    header: "Dealer",
  },
  {
    accessorKey: "totalKilometer",
    header: "Total KM",
    cell: ({ row }) => {
      return `${row.original.totalKilometer.toLocaleString("id-ID")} km`;
    },
  },
  {
    accessorKey: "totalLiter",
    header: "Total Liter",
    cell: ({ row }) => {
      return `${row.original.totalLiter.toLocaleString("id-ID")} L`;
    },
  },
  {
    accessorKey: "averageKilometerPerLitre",
    header: "Rata-rata KM/L",
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
          <HugeiconsIcon icon={PencilEdit02Icon} />
        </Link>
      );
    },
  },
];
