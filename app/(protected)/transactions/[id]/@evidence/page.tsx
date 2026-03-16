"use client";

import { Minus, Plus } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useState } from "react";
import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { Button } from "@/components/ui/button";
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
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));

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
              <div className="flex h-120 items-center justify-center p-4">
                <Image
                  alt="Odometer"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.odometerPhotoUrl}
                  style={{ transform: `scale(${zoom})` }}
                  width={1000}
                />
              </div>
              <div className="absolute right-2 bottom-2 flex gap-1">
                <Button
                  className="size-8"
                  disabled={zoom <= 0.5}
                  onClick={handleZoomOut}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Minus}
                    strokeWidth={2}
                  />
                </Button>
                <Button
                  className="size-8"
                  disabled={zoom >= 3}
                  onClick={handleZoomIn}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Plus}
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="receipt">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <div className="flex h-120 items-center justify-center p-4">
                <Image
                  alt="Struk"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.receiptPhotoUrl}
                  style={{ transform: `scale(${zoom})` }}
                  width={1000}
                />
              </div>
              <div className="absolute right-2 bottom-2 flex gap-1">
                <Button
                  className="size-8"
                  disabled={zoom <= 0.5}
                  onClick={handleZoomOut}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Minus}
                    strokeWidth={2}
                  />
                </Button>
                <Button
                  className="size-8"
                  disabled={zoom >= 3}
                  onClick={handleZoomIn}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Plus}
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="station">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <div className="flex h-120 items-center justify-center p-4">
                <Image
                  alt="SPBU"
                  className="max-h-full max-w-full rounded-lg object-contain transition-transform"
                  height={1000}
                  src={evidence.gasStationPhotoUrl}
                  style={{ transform: `scale(${zoom})` }}
                  width={1000}
                />
              </div>
              <div className="absolute right-2 bottom-2 flex gap-1">
                <Button
                  className="size-8"
                  disabled={zoom <= 0.5}
                  onClick={handleZoomOut}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Minus}
                    strokeWidth={2}
                  />
                </Button>
                <Button
                  className="size-8"
                  disabled={zoom >= 3}
                  onClick={handleZoomIn}
                  size="icon"
                  variant="secondary"
                >
                  <HugeiconsIcon
                    className="size-3"
                    icon={Plus}
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EvidenceCard;
