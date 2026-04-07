// permissions-form-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

const MOCK_GROUPS = [{ count: 3 }, { count: 6 }, { count: 4 }, { count: 2 }];

export function PermissionsFormSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-9 w-28" />
      </div>

      {/* Accordion groups */}
      <div className="space-y-1">
        {MOCK_GROUPS.map((group, gi) => (
          <div className="rounded-md border px-1" key={gi}>
            {/* AccordionTrigger row */}
            <div className="flex items-center gap-2.5 px-3 py-3">
              <Skeleton className="size-4 rounded-sm" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-8 rounded-full" />
            </div>

            {/* AccordionContent — only expand the first group */}
            {gi === 0 && (
              <div className="grid grid-cols-1 gap-1.5 px-3 pb-3 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: group.count }).map((_, i) => (
                  <div
                    className="flex items-center gap-2.5 rounded-md border border-transparent px-2.5 py-2"
                    key={i}
                  >
                    <Skeleton className="size-4 rounded-sm" />
                    <Skeleton className="h-5 w-14 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
