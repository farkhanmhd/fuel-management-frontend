import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const DriverPage = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getTransactionDetail(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Driver</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-muted-foreground text-sm">NIP</p>
          <p className="font-medium font-mono">{detail.driver.nip}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Nama</p>
          <p className="font-medium">{detail.driver.name}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Departemen</p>
          <p className="font-medium">{detail.driver.department}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverPage;
