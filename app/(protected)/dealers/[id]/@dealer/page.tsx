import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { DealersApi } from "@/lib/api/dealers";

type Props = {
  params: Promise<{ id: string }>;
};

const DealerCard = async ({ params }: Props) => {
  const { id } = await params;
  const { data: dealer } = await DealersApi.getDealerDetail(id);

  if (!dealer) {
    notFound();
  }

  return (
    <Card>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Kode</p>
          <p className="font-medium font-mono">{dealer.code}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Nama</p>
          <p className="font-medium">{dealer.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Area</p>
          <p className="font-medium">{dealer.area}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealerCard;
