import type { Metadata } from "next";
import { Suspense } from "react";
import { BackButton } from "@/components/navigations/back-button";

interface Props {
  asset: React.ReactNode;
  dealer: React.ReactNode;
  driver: React.ReactNode;
  transactions: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Informasi Aset",
};

const AssetDetailLayout = ({ asset, dealer, driver, transactions }: Props) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-center gap-2">
          <BackButton />
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
