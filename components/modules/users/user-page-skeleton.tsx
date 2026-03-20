import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// ── Skeleton for UserInfoCard ──────────────────────────────────────────────

export function UserInfoCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Skeleton className="size-8 rounded-md" />
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="h-5 w-20 rounded-full" />
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              className="flex items-start gap-3 rounded-xl border bg-muted/30 p-3"
              key={i}
            >
              <Skeleton className="mt-0.5 size-7 shrink-0 rounded-md" />
              <div className="flex-1 space-y-1.5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ── Skeleton for ResetPasswordCard ────────────────────────────────────────

export function ResetPasswordCardSkeleton() {
  return (
    <Card className="border-destructive/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Skeleton className="size-5 rounded-md" />
          <Skeleton className="h-5 w-36" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full max-w-sm" />
          <Skeleton className="h-4 w-3/4 max-w-xs" />
        </div>
        <Skeleton className="h-9 w-40 rounded-md" />
      </CardContent>
    </Card>
  );
}

// ── Combined page-level skeleton ──────────────────────────────────────────

export function UserPageSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <UserInfoCardSkeleton />
      <ResetPasswordCardSkeleton />
    </div>
  );
}
