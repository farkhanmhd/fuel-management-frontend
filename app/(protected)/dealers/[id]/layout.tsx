import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "next-view-transitions";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
  dealer: React.ReactNode;
}

const DealerDetailLayout = ({ dealer, children }: Props) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-center gap-2">
          <Link
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            href="/dealers"
          >
            <HugeiconsIcon
              className="size-4"
              icon={ArrowLeft}
              strokeWidth={2}
            />
            <span>Kembali</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">{dealer}</div>
        {children}
      </div>
    </Suspense>
  );
};

export default DealerDetailLayout;
