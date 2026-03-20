import { getDriverDetail } from "@/components/modules/drivers/detail-data";
import { Card, CardContent } from "@/components/ui/card";

const DriverCard = () => {
  const detail = getDriverDetail("1");

  return (
    <Card>
      <CardContent className="grid grid-cols-1 space-y-3 lg:grid-cols-3">
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">NIP</p>
          <p className="font-medium font-mono">{detail.driver.nip}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Nama</p>
          <p className="font-medium">{detail.driver.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Departemen</p>
          <p className="font-medium">{detail.driver.department}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Dealer</p>
          <p className="font-medium">{detail.driver.dealerName}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-muted-foreground text-sm">Area</p>
          <p className="font-medium">{detail.driver.area}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverCard;
