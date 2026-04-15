"use client";

import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { ColumnDef } from "@tanstack/react-table";
import { useAlertDialog } from "@/components/providers/alert-dialog-provider";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Permission } from "@/lib/api/permissions";

interface PermissionColumn extends Omit<Permission, "id"> {
  id: string;
}

const ACTION_BADGE_CLASS: Record<
  Permission["type"],
  {
    variant: "default" | "secondary" | "outline" | "destructive";
    className: string;
  }
> = {
  create: { variant: "default", className: "" },
  read: {
    variant: "outline",
    className:
      "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-300",
  },
  update: {
    variant: "outline",
    className:
      "border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  delete: { variant: "destructive", className: "" },
};

export const columns: ColumnDef<PermissionColumn>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <span className="font-mono text-muted-foreground">
        #{row.getValue("id")}
      </span>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = row.getValue<Permission["type"]>("type");
      const badge = ACTION_BADGE_CLASS[type];

      return (
        <Badge
          className={`font-bold uppercase ${badge.className}`}
          variant={badge.variant}
        >
          {type}
        </Badge>
      );
    },
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "resource",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Resource" />
    ),
    cell: ({ row }) => (
      <span className="font-mono text-sm uppercase">
        {row.getValue("resource")}
      </span>
    ),
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => {
      const note: string | null = row.getValue("note");
      return note ? (
        <span className="text-foreground text-sm">{note}</span>
      ) : (
        <span className="text-muted-foreground">—</span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { onOpenChange, setData } = useAlertDialog();

      return (
        <Button
          onClick={() => {
            setData(row.original);
            onOpenChange(true);
          }}
          variant="ghost"
        >
          <HugeiconsIcon icon={PencilEdit02Icon} strokeWidth={2} />
        </Button>
      );
    },
  },
];
