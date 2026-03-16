"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetsPage from "./@assets/page";
import TransactionsPage from "./@transactions/page";

const DriverDetailPage = () => {
  return (
    <Tabs defaultValue="transactions">
      <TabsList variant="line">
        <TabsTrigger value="transactions">Riwayat Transaksi</TabsTrigger>
        <TabsTrigger value="assets">Aset</TabsTrigger>
      </TabsList>
      <TabsContent value="transactions">
        <TransactionsPage />
      </TabsContent>
      <TabsContent value="assets">
        <AssetsPage />
      </TabsContent>
    </Tabs>
  );
};

export default DriverDetailPage;
