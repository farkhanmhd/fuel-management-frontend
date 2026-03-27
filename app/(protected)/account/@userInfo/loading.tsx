import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserInfoLoading = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2.5">
          <Skeleton className="size-8 rounded-md" />
          <Skeleton className="h-5 w-36" />
        </div>
        <Skeleton className="h-7 w-16 rounded-lg" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
};

export default UserInfoLoading;
