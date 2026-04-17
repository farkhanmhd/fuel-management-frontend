"use client";

import { ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const { back } = useRouter();
  return (
    <Button className="px-0" onClick={back} variant="link">
      <HugeiconsIcon className="size-4" icon={ArrowLeft} strokeWidth={2} />
      <span className="text-base">Kembali</span>
    </Button>
  );
};
