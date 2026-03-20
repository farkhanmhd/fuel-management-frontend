import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  children: React.ReactNode;
  driver: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Informasi Driver",
};

const DriverDetailLayout = ({ driver, children }: Props) => {
  return (
    <Suspense>
      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-center gap-2">
          <Link
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            href="/drivers"
          >
            <HugeiconsIcon
              className="size-4"
              icon={ArrowLeft}
              strokeWidth={2}
            />
            <span>Kembali</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">{driver}</div>
        {children}
      </div>
    </Suspense>
  );
};

export default DriverDetailLayout;
