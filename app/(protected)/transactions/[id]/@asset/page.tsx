import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const AssetPage = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getTransactionDetail(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aset</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-muted-foreground text-sm">Plat Kendaraan</p>
          <p className="font-medium font-mono">{detail.asset.licensePlate}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Model</p>
          <p className="font-medium">{detail.asset.model}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Jenis BBM</p>
          <p className="font-medium">{detail.asset.fuelType}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetPage;
