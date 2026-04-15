"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import type { Asset } from "@/components/modules/drivers/detail-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const driverAssetColumns: ColumnDef<Asset>[] = [
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
  },
  {
    accessorKey: "dealerName",
    header: "Dealer",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColors: Record<string, string> = {
        MDS: "bg-blue-100 text-blue-800",
        NEQ: "bg-green-100 text-green-800",
        SEWA: "bg-yellow-100 text-yellow-800",
      };
      return (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 font-medium text-xs",
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
    header: "Total KM",
    cell: ({ row }) => {
      return row.original.totalKilometer.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "totalLiter",
    header: "Total Liter",
    cell: ({ row }) => {
      return row.original.totalLiter.toLocaleString("id-ID");
    },
  },
  {
    accessorKey: "averageKilometerPerLitre",
    header: "Rata-rata KM/L",
    cell: ({ row }) => {
      return row.original.averageKilometerPerLitre.toFixed(2);
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
