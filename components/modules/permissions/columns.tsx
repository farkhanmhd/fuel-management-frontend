"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { Badge } from "@/components/ui/badge";

export type PermissionColumn = {
  id: number;
  name: string;
};

const ACTION_BADGE_CLASS: Record<
  string,
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Permission" />
    ),
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const [action, resource, scope] = name.split(":");
      const badge = ACTION_BADGE_CLASS[action] ?? {
        variant: "outline" as const,
        className: "",
      };

      return (
        <div className="flex items-center gap-2">
          <Badge
            className={`shrink-0 font-bold uppercase ${badge.className}`}
            variant={badge.variant}
          >
            {action}
          </Badge>
          <span className="font-mono text-foreground uppercase">
            {resource}
          </span>
          {scope && (
            <>
              <span className="text-muted-foreground">/</span>
              <span className="font-mono text-muted-foreground uppercase">
                {scope}
              </span>
            </>
          )}
        </div>
      );
    },
  },
];
