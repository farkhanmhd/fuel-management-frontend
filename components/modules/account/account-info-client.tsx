"use client";

import { UserIcon, UserIdVerificationIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { UserData } from "@/lib/api/users";

type InfoField = {
  name: "username" | "name";
  label: string;
  mono?: boolean;
  icon: IconSvgElement;
};

interface AccountInfoClientProps {
  user: UserData;
}

const fields: InfoField[] = [
  {
    name: "username" as const,
    label: "Username",
    mono: true,
    icon: UserIdVerificationIcon,
  },
  { name: "name" as const, label: "Nama Lengkap", icon: UserIcon },
];

export function AccountInfoClient({ user }: AccountInfoClientProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {fields.map(({ name, label, mono, icon }) => (
          <div
            className="group flex items-start gap-3 rounded-xl border bg-muted/30 p-3 transition-colors hover:bg-muted/60"
            key={name}
          >
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
              <p
                className={`truncate font-medium text-sm ${mono ? "font-mono" : ""}`}
                title={user[name]}
              >
                {user[name]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
