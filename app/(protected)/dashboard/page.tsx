"use client";

import {
  CarIcon,
  CoinsDollarIcon,
  DriveIcon,
  FuelStationIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Area, AreaChart, Bar, BarChart, XAxis, YAxis } from "recharts";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const monthlyData = [
  { month: "Jan", fuel: 4200, spending: 63_000_000 },
  { month: "Feb", fuel: 3800, spending: 57_000_000 },
  { month: "Mar", fuel: 4500, spending: 67_500_000 },
  { month: "Apr", fuel: 4100, spending: 61_500_000 },
  { month: "May", fuel: 4800, spending: 72_000_000 },
  { month: "Jun", fuel: 5200, spending: 78_000_000 },
];

const recentTransactions = [
  {
    id: "1",
    date: "2026-03-13T08:30:00+07:00",
    driverName: "Ahmad Santoso",
    licensePlate: "BB 1234 AB",
    modelName: "Toyota Innova",
    transactionTotal: 350_000,
    litrePurchased: 45.5,
    previousKilometer: 454_322,
    currentKilometer: 456_788,
    distanceCovered: 2466,
    kiloMeterPerLitre: 12.5,
  },
  {
    id: "2",
    date: "2026-03-13T09:15:00+07:00",
    driverName: "Budi Prakoso",
    licensePlate: "BB 5678 CD",
    modelName: "Toyota Hilux",
    transactionTotal: 280_000,
    litrePurchased: 36.2,
    previousKilometer: 317_800,
    currentKilometer: 321_000,
    distanceCovered: 3200,
    kiloMeterPerLitre: 10.2,
  },
  {
    id: "3",
    date: "2026-03-13T10:00:00+07:00",
    driverName: "Citra Dewi",
    licensePlate: "B 9012 GHI",
    modelName: "Mitsubishi XPander",
    transactionTotal: 420_000,
    litrePurchased: 54.3,
    previousKilometer: 412_500,
    currentKilometer: 420_000,
    distanceCovered: 7500,
    kiloMeterPerLitre: 10.2,
  },
  {
    id: "4",
    date: "2026-03-12T08:45:00+07:00",
    driverName: "Dedi Kurniawan",
    licensePlate: "B 3456 JKL",
    modelName: "Honda CR-V",
    transactionTotal: 315_000,
    litrePurchased: 40.7,
    previousKilometer: 389_200,
    currentKilometer: 392_800,
    distanceCovered: 3600,
    kiloMeterPerLitre: 11.8,
  },
  {
    id: "5",
    date: "2026-03-12T11:30:00+07:00",
    driverName: "Eka Pratama",
    licensePlate: "H 7890 MNO",
    modelName: "Toyota Fortuner",
    transactionTotal: 500_000,
    litrePurchased: 64.6,
    previousKilometer: 278_900,
    currentKilometer: 286_500,
    distanceCovered: 7600,
    kiloMeterPerLitre: 9.5,
  },
  {
    id: "6",
    date: "2026-03-12T14:20:00+07:00",
    driverName: "Fitri Handayani",
    licensePlate: "J 2345 PQR",
    modelName: "Nissan Serena",
    transactionTotal: 185_000,
    litrePurchased: 23.9,
    previousKilometer: 512_300,
    currentKilometer: 514_800,
    distanceCovered: 2500,
    kiloMeterPerLitre: 14.2,
  },
  {
    id: "7",
    date: "2026-03-11T07:00:00+07:00",
    driverName: "Gunawan",
    licensePlate: "L 6789 STU",
    modelName: "Mitsubishi Pajero",
    transactionTotal: 450_000,
    litrePurchased: 58.1,
    previousKilometer: 145_600,
    currentKilometer: 152_200,
    distanceCovered: 6600,
    kiloMeterPerLitre: 8.7,
  },
  {
    id: "8",
    date: "2026-03-11T09:30:00+07:00",
    driverName: "Hendra Wijaya",
    licensePlate: "N 0123 VWX",
    modelName: "Toyota Avanza",
    transactionTotal: 225_000,
    litrePurchased: 29.0,
    previousKilometer: 367_800,
    currentKilometer: 370_500,
    distanceCovered: 2700,
    kiloMeterPerLitre: 13.1,
  },
];

const stats = [
  {
    title: "Total Transaksi",
    value: "1,247",
    icon: FuelStationIcon,
  },
  {
    title: "Total Liter",
    value: "48,520 L",
    icon: CarIcon,
  },
  {
    title: "Total Driver Aktif",
    value: "42",
    icon: DriveIcon,
  },
  {
    title: "Total Pengeluaran",
    value: "Rp 727,8 Jt",
    icon: CoinsDollarIcon,
  },
];

const chartConfig = {
  fuel: {
    label: "Liter",
    color: "var(--chart-1)",
  },
  spending: {
    label: "Pengeluaran",
    color: "var(--chart-2)",
  },
};

const DashboardPage = () => {
  return (
    <div className="space-y-6 px-1">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="font-medium text-muted-foreground text-sm">
                {stat.title}
              </CardTitle>
              <HugeiconsIcon
                className="h-4 w-4 text-muted-foreground"
                icon={stat.icon}
                strokeWidth={2}
              />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Konsumsi BBM Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-62.5 w-full" config={chartConfig}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="fuelGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="100%"
                      stopColor="var(--chart-4)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  axisLine={false}
                  dataKey="month"
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => `${value / 1000}k`}
                  tickLine={false}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value: number) => [
                    `${value.toLocaleString()} L`,
                    "Liter",
                  ]}
                />
                <Area
                  dataKey="fuel"
                  fill="url(#fuelGradient)"
                  stroke="var(--chart-3)"
                  strokeWidth={2}
                  type="monotone"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pengeluaran Bulanan</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-62.5 w-full" config={chartConfig}>
              <BarChart data={monthlyData}>
                <XAxis
                  axisLine={false}
                  dataKey="month"
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  fontSize={12}
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => `Rp ${value / 1_000_000}jt`}
                  tickLine={false}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value: number) => [
                    `Rp ${value.toLocaleString()}`,
                    "Pengeluaran",
                  ]}
                />
                <Bar
                  dataKey="spending"
                  fill="var(--chart-3)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex justify-between">
          <CardTitle>Transaksi Terbaru</CardTitle>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="/transactions"
          >
            Lihat Semua
          </Link>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto rounded-lg border">
            <table className="w-full caption-bottom text-sm">
              <thead className="bg-primary text-primary-foreground [&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-10 px-2 text-left align-middle font-medium">
                    Tanggal
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium">
                    Driver
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium">
                    Aset
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium">
                    Liter
                  </th>
                  <th className="h-10 px-2 text-right align-middle font-medium">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {recentTransactions.map((transaction) => (
                  <tr
                    className="border-b transition-colors hover:bg-muted/50"
                    key={transaction.id}
                  >
                    <td className="p-2 align-middle">
                      {new Date(transaction.date).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-2 align-middle">
                      {transaction.driverName}
                    </td>
                    <td className="p-2 align-middle">
                      {transaction.licensePlate}
                    </td>
                    <td className="p-2 align-middle">
                      {transaction.litrePurchased} L
                    </td>
                    <td className="p-2 text-right align-middle">
                      Rp {transaction.transactionTotal.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
