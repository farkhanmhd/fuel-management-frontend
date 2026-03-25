import { ArrowDown, ArrowUp, ChevronsUpDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  "use no memo";
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const sortedIcon = {
    asc: <HugeiconsIcon icon={ArrowUp} />,
    desc: <HugeiconsIcon icon={ArrowDown} />,
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="-ml-3 h-8 hover:bg-sidebar-primary hover:text-primary-foreground data-[state=open]:bg-sidebar-primary data-[state=open]:text-primary-foreground"
            variant="ghost"
          >
            <span className="font-semibold">{title}</span>
            {column.getIsSorted() ? (
              sortedIcon[column.getIsSorted() as keyof typeof sortedIcon]
            ) : (
              <HugeiconsIcon icon={ChevronsUpDown} />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <HugeiconsIcon
              className="h-3.5 w-3.5 text-muted-foreground/70"
              icon={ArrowUp}
              strokeWidth={2}
            />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <HugeiconsIcon
              className="h-3.5 w-3.5 text-muted-foreground/70"
              icon={ArrowDown}
              strokeWidth={2}
            />
            Desc
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
