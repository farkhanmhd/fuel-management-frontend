import { getAssetDetail } from "@/components/modules/assets/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const DealerCard = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getAssetDetail(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dealer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Kode</p>
          <p className="font-medium font-mono">{detail.dealer.code}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Nama</p>
          <p className="font-medium">{detail.dealer.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Area</p>
          <p className="font-medium">{detail.dealer.area}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealerCard;
