"use client";

import Image from "next/image";
import { ImageZoom } from "@/components/animate-ui/primitives/effects/image-zoom";
import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Client } from "@/components/utils/client";

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const EvidenceCard = () => {
  const evidence = getTransactionDetail("1").evidence;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bukti Transaksi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-6 space-y-3">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm">Odometer</p>
            <Client>
              <p className="font-medium font-mono">
                {evidence.odometer.toLocaleString("id-ID")} km
              </p>
            </Client>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm">Total Dibayar</p>
            <Client>
              <p className="font-medium font-mono">
                {formatIDR(evidence.totalPaid)}
              </p>
            </Client>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm">Liter Dibeli</p>
            <Client>
              <p className="font-medium font-mono">
                {evidence.litrePurchased.toFixed(2)} L
              </p>
            </Client>
          </div>
        </div>

        <Tabs defaultValue="odometer">
          <TabsList variant="line">
            <TabsTrigger value="odometer">Odometer</TabsTrigger>
            <TabsTrigger value="receipt">Struk</TabsTrigger>
            <TabsTrigger value="station">SPBU</TabsTrigger>
          </TabsList>
          <TabsContent value="odometer">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <ImageZoom
                className="flex h-120 items-center justify-center p-4"
                zoomOnHover={false}
                zoomScale={2}
              >
                <Image
                  alt="Odometer"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.odometerPhotoUrl}
                  width={1000}
                />
              </ImageZoom>
            </div>
          </TabsContent>
          <TabsContent value="receipt">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <ImageZoom
                className="flex h-120 items-center justify-center p-4"
                zoomOnHover={false}
                zoomScale={2}
              >
                <Image
                  alt="Struk"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.invoicePhotoUrl}
                  width={1000}
                />
              </ImageZoom>
            </div>
          </TabsContent>
          <TabsContent value="station">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <ImageZoom
                className="flex h-120 items-center justify-center p-4"
                zoomOnHover={false}
                zoomScale={2}
              >
                <Image
                  alt="SPBU"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.gasStationPhotoUrl}
                  width={1000}
                />
              </ImageZoom>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EvidenceCard;
