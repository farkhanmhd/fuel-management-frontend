import { getTransactionDetail } from "@/components/modules/transactions/detail-data";
import { LocationMap } from "@/components/modules/transactions/location-map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ id: string }>;
};

const LocationPage = async ({ params }: Props) => {
  const { id } = await params;
  const detail = getTransactionDetail(id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lokasi Pengisian</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <LocationMap
          latitude={detail.location.latitude}
          longitude={detail.location.longitude}
        />
        <div>
          <p className="text-muted-foreground text-sm">Koordinat</p>
          <p className="font-medium font-mono">
            {detail.location.latitude.toFixed(4)},{" "}
            {detail.location.longitude.toFixed(4)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationPage;
