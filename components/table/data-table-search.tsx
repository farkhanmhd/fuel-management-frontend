"use client";

import { Search } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useTableContext } from "./react-table";

type Props = {
  placeholder?: string;
  className?: string;
};

export const DataTableSearch = ({
  placeholder = "Cari data...",
  className,
}: Props) => {
  "use no memo";
  const { table, searchValue, onSearchChange } = useTableContext();

  const handleSearchChange = (value: string) => {
    onSearchChange(value);
    table.setPageIndex(0);
  };

  return (
    <div className={cn("relative flex items-center gap-2 px-0", className)}>
      <HugeiconsIcon
        className="absolute ml-2.5 size-4 text-muted-foreground md:block"
        icon={Search}
      />
      <Input
        className="w-full bg-background pl-8"
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder={placeholder}
        value={searchValue}
      />
    </div>
  );
};
