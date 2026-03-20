"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import type { Asset } from "@/components/modules/dealers/detail-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dealerAssetColumns: ColumnDef<Asset>[] = [
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
    accessorKey: "driverName",
    header: "Driver",
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
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
