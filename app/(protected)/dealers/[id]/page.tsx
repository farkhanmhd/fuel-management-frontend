"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetsPage from "./@assets/page";
import DriversPage from "./@drivers/page";
import TransactionsPage from "./@transactions/page";

const DealerDetailPage = () => {
  return (
    <Tabs defaultValue="transactions">
      <TabsList variant="line">
        <TabsTrigger value="transactions">Transaksi</TabsTrigger>
        <TabsTrigger value="assets">Aset</TabsTrigger>
        <TabsTrigger value="drivers">Driver</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions">
        <TransactionsPage />
      </TabsContent>
      <TabsContent value="assets">
        <AssetsPage />
      </TabsContent>
      <TabsContent value="drivers">
        <DriversPage />
      </TabsContent>
    </Tabs>
  );
};

export default DealerDetailPage;
