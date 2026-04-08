"use client";

import { useForm, useStore } from "@tanstack/react-form";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Permission } from "@/lib/api/permissions";

type Props = {
  grouped: [string, Permission[]][];
};

const ACTION_ORDER = ["create", "read", "update", "delete"];

const sortByAction = (perms: Permission[]) =>
  [...perms].sort((a, b) => {
    const actionA = a.type;
    const actionB = b.type;
    const ai = ACTION_ORDER.indexOf(actionA);
    const bi = ACTION_ORDER.indexOf(actionB);
    if (ai !== -1 && bi !== -1) {
      return ai - bi;
    }
    return actionA.localeCompare(actionB);
  });

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

export function PermissionsForm({ grouped }: Props) {
  const totalAll = grouped.reduce((acc, [, p]) => acc + p.length, 0);

  const form = useForm({
    defaultValues: {
      permissionIds: [] as string[],
    },
    onSubmit: async ({ value }) => {
      try {
        await new Promise((r) => setTimeout(r, 800));
        toast.success(`${value.permissionIds.length} permission(s) saved`);
      } catch {
        toast.error("Failed to save permissions");
      }
    },
  });

  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name="permissionIds">
        {(field) => {
          const selected = field.state.value;

          const toggle = (id: string) => {
            field.handleChange(
              selected.includes(id)
                ? selected.filter((v) => v !== id)
                : [...selected, id]
            );
          };

          const toggleGroup = (perms: Permission[]) => {
            const ids = perms.map((p) => p.id);
            const allChecked = ids.every((id) => selected.includes(id));
            field.handleChange(
              allChecked
                ? selected.filter((v) => !ids.includes(v))
                : [...new Set([...selected, ...ids])]
            );
          };

          return (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold tracking-tight">Permissions</h2>
                  <p className="mt-0.5 text-muted-foreground">
                    {selected.length} of {totalAll} selected
                  </p>
                </div>
                <Button
                  disabled={isSubmitting || selected.length === 0}
                  type="submit"
                >
                  {isSubmitting ? "Saving…" : "Save Changes"}
                </Button>
              </div>

              {/* Groups */}
              <Accordion className="space-y-1" type="multiple">
                {grouped.map(([group, perms]) => {
                  const sorted = sortByAction(perms);
                  const ids = sorted.map((p) => p.id);
                  const allChecked = ids.every((id) => selected.includes(id));
                  const someChecked =
                    ids.some((id) => selected.includes(id)) && !allChecked;
                  const selectedCount = ids.filter((id) =>
                    selected.includes(id)
                  ).length;

                  return (
                    <AccordionItem
                      className="relative rounded-md border px-1"
                      key={group}
                      value={group}
                    >
                      <Checkbox
                        checked={allChecked}
                        className="absolute top-3.75 left-4 z-50"
                        data-indeterminate={someChecked}
                        onCheckedChange={() => toggleGroup(sorted)}
                      />
                      {/* 2. The Trigger now only contains the text/labels */}
                      <AccordionTrigger className="cursor-pointer py-3 pl-12">
                        <div className="flex w-full items-center gap-2.5">
                          <span className="text-left font-semibold text-muted-foreground uppercase tracking-widest">
                            {group}
                          </span>
                          <Badge className="uppercase" variant="secondary">
                            {selectedCount}/{ids.length}
                          </Badge>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-3">
                        <div className="grid grid-cols-1 gap-1.5 px-3 sm:grid-cols-2 lg:grid-cols-3">
                          {sorted.map((perm) => {
                            const action = perm.type;
                            const label = perm.resource;
                            const badge = ACTION_BADGE_CLASS[action] ?? {
                              variant: "outline" as const,
                              className: "",
                            };

                            return (
                              <Label
                                className="group flex cursor-pointer items-center gap-2.5 rounded-md border border-transparent px-2.5 py-2 text-sm transition-colors hover:border-border hover:bg-muted/50"
                                htmlFor={`perm-${perm.id}`}
                                key={perm.id}
                              >
                                <Checkbox
                                  checked={selected.includes(perm.id)}
                                  id={`perm-${perm.id}`}
                                  onCheckedChange={() => toggle(perm.id)}
                                />
                                <Badge
                                  className={`font-bold uppercase ${badge.className}`}
                                  variant={badge.variant}
                                >
                                  {action}
                                </Badge>
                                <span className="truncate text-foreground uppercase">
                                  {label}
                                </span>
                              </Label>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          );
        }}
      </form.Field>
    </form>
  );
}
