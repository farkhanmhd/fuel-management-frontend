"use client";

import { MapPin } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Map as MapContainer,
  MapMarker,
  MarkerContent,
} from "@/components/ui/map";
import { cn } from "@/lib/utils";

type LocationMapProps = {
  longitude: number;
  latitude: number;
  className?: string;
};

export const LocationMap = ({
  longitude,
  latitude,
  className,
}: LocationMapProps) => {
  return (
    <div className={cn("h-64 w-full overflow-hidden rounded-lg", className)}>
      <MapContainer center={[longitude, latitude]} zoom={15}>
        <MapMarker latitude={latitude} longitude={longitude}>
          <MarkerContent>
            <HugeiconsIcon
              className="size-8 fill-primary stroke-white text-white"
              icon={MapPin}
            />
          </MarkerContent>
        </MapMarker>
      </MapContainer>
    </div>
  );
};
