import { getAssetDetail } from "@/components/modules/assets/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const AssetCard = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getAssetDetail(id);

  const statusColors: Record<string, string> = {
    MDS: "bg-blue-100 text-blue-800",
    NEQ: "bg-green-100 text-green-800",
    SEWA: "bg-yellow-100 text-yellow-800",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aset Kendaraan</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Plat Kendaraan</p>
          <p className="font-medium font-mono">{detail.asset.licensePlate}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Model</p>
          <p className="font-medium">{detail.asset.modelName}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Tahun</p>
          <p className="font-medium font-mono">{detail.asset.assetYear}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Total KM</p>
          <p className="font-medium font-mono">
            {detail.asset.totalKiloMeter.toLocaleString("id-ID")} km
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Total Liter</p>
          <p className="font-medium font-mono">
            {detail.asset.totalLitre.toLocaleString("id-ID")} L
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Rata-rata KM/L</p>
          <p className="font-medium font-mono">
            {detail.asset.averageKmPerLitre.toFixed(2)} km/L
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Status</p>
          <span
            className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-medium text-xs ${statusColors[detail.asset.status]}`}
          >
            {detail.asset.status}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetCard;
