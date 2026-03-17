import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "next-view-transitions";
import { Suspense } from "react";

interface Props {
  asset: React.ReactNode;
  dealer: React.ReactNode;
  driver: React.ReactNode;
  transactions: React.ReactNode;
}

const AssetDetailLayout = ({ asset, dealer, driver, transactions }: Props) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-center gap-2">
          <Link
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            href="/assets"
          >
            <HugeiconsIcon
              className="size-4"
              icon={ArrowLeft}
              strokeWidth={2}
            />
            <span>Kembali</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {asset}
          {dealer}
          {driver}
          <div className="flex flex-col gap-4 lg:col-span-3">
            {transactions}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AssetDetailLayout;
