"use client";

import { EyeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Route } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusColors: Record<
        string,
        React.ComponentProps<typeof Badge>["variant"]
      > = {
        MDS: "default",
        NEQ: "secondary",
        SEWA: "outline",
      };

      return (
        <Badge
          className="font-bold"
          variant={statusColors[row.original.status]}
        >
          {row.original.status}
        </Badge>
      );
    },
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
          <HugeiconsIcon icon={EyeIcon} />
        </Link>
      );
    },
  },
];
