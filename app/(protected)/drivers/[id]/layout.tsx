import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  assets: React.ReactNode;
  driver: React.ReactNode;
  transactions: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Informasi Driver",
};

const DriverDetailLayout = ({ driver, transactions, assets }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          href="/drivers"
        >
          <HugeiconsIcon className="size-4" icon={ArrowLeft} strokeWidth={2} />
          <span>Kembali</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 px-0.5">{driver}</div>
      <Tabs defaultValue="transactions">
        <TabsList variant="line">
          <TabsTrigger value="transactions">Riwayat Transaksi</TabsTrigger>
          <TabsTrigger value="assets">Aset</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">{transactions}</TabsContent>
        <TabsContent value="assets">{assets}</TabsContent>
      </Tabs>
    </div>
  );
};

export default DriverDetailLayout;
