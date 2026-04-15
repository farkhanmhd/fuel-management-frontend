import type { Metadata } from "next";
import { BackButton } from "@/components/navigations/back-button";

interface Props {
  assets: React.ReactNode;
  dealer: React.ReactNode;
  drivers: React.ReactNode;
  transactions: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Informasi Dealer",
};

const DealerDetailLayout = ({ dealer }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <BackButton />
      </div>
      <div className="flex flex-col gap-4 px-0.5">{dealer}</div>
    </div>
  );
};

export default DealerDetailLayout;
