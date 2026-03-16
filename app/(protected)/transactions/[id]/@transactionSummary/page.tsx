import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const TransactionSummaryPage = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getTransactionDetail(id);
  const fuelTypeLabels: Record<string, string> = {
    pertalite: "Pertalite",
    pertamax: "Pertamax",
    "pertamax-turbo": "Pertamax Turbo",
    dexlite: "Dexlite",
    solar: "Solar",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Transaksi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-muted-foreground text-sm">Tanggal</p>
          <p className="font-medium font-mono">
            {new Date(detail.transactionSummary.date).toLocaleDateString(
              "id-ID",
              {
                day: "2-digit",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Jenis BBM</p>
          <p className="font-medium">
            {fuelTypeLabels[detail.transactionSummary.fuelType] ||
              detail.transactionSummary.fuelType}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Odometer Awal</p>
          <p className="font-medium font-mono">
            {detail.transactionSummary.previousOdometer.toLocaleString("id-ID")}{" "}
            km
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Odometer Akhir</p>
          <p className="font-medium font-mono">
            {detail.transactionSummary.currentOdometer.toLocaleString("id-ID")}{" "}
            km
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Jarak Tempuh</p>
          <p className="font-medium font-mono">
            {detail.transactionSummary.distance} km
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionSummaryPage;
