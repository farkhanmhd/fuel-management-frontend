import type { Metadata } from "next";
import { Suspense } from "react";
import { BackButton } from "@/components/navigations/back-button";

interface Props {
  asset: React.ReactNode;
  children: React.ReactNode;
  driver: React.ReactNode;
  evidence: React.ReactNode;
  transactionSummary: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Detail Transaksi",
};

const TransactionDetailLayout = ({
  evidence,
  transactionSummary,
  driver,
  asset,
}: Props) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-center gap-2">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-3">{evidence}</div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            {transactionSummary}
            {driver}
            {asset}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default TransactionDetailLayout;
