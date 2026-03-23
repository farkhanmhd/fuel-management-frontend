import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DealerCardLoading = () => {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 space-y-3 lg:grid-cols-3">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-5 w-24" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-5 w-36" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-5 w-28" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DealerCardLoading;
