"use client";

import { Monitor, Moon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const selectedIcon = {
    light: Sun03Icon,
    dark: Moon,
    system: Monitor,
  };

  const currentIcon =
    selectedIcon[(theme as keyof typeof selectedIcon) ?? "system"] ?? Monitor;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <HugeiconsIcon icon={currentIcon} strokeWidth={2} />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setTheme("light")}>
          <HugeiconsIcon icon={Sun03Icon} strokeWidth={2} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("dark")}>
          <HugeiconsIcon icon={Moon} strokeWidth={2} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("system")}>
          <HugeiconsIcon icon={Monitor} strokeWidth={2} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
