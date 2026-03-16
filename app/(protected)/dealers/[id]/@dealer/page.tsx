import { getDealerDetail } from "@/components/modules/dealers/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DealerCard = () => {
  const detail = getDealerDetail("1");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Dealer</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 space-y-3 lg:grid-cols-3">
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
