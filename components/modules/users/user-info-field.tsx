import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface UserInfoFieldProps {
  children: ReactNode;
  icon: IconSvgElement;
  label: string;
  mono?: boolean;
}

export function UserInfoField({
  label,
  icon,
  children,
  mono,
}: UserInfoFieldProps) {
  return (
    <div className="group flex items-start gap-3 rounded-xl border bg-muted/30 p-3 transition-colors hover:bg-muted/60">
      <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border bg-background shadow-sm">
        <HugeiconsIcon
          className="size-3.5 text-muted-foreground"
          icon={icon as never}
          strokeWidth={2}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 font-medium text-[11px] text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <div
          className={cn("truncate font-medium text-sm", mono && "font-mono")}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
