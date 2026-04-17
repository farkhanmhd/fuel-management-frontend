import {
  Alert01FreeIcons,
  Refresh01FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

interface ErrorStateProps {
  description?: string;
  message?: string;
  onRetry?: () => void;
  title?: string;
}

export const ErrorState = ({
  title,
  description,
  message,
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-12 text-center">
      <HugeiconsIcon
        className="mb-5 text-destructive opacity-85"
        icon={Alert01FreeIcons}
        size={64}
        strokeWidth={1.5}
      />
      <p className="mb-1.5 font-medium text-base">{title}</p>
      <p className="mb-5 max-w-xs text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      {message && (
        <p className="mb-6 max-w-sm break-all rounded-md border bg-muted px-3.5 py-2 font-mono text-muted-foreground text-xs">
          {message}
        </p>
      )}
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          <HugeiconsIcon
            className="text-destructive opacity-85"
            icon={Refresh01FreeIcons}
            size={64}
            strokeWidth={2}
          />
          Try again
        </Button>
      )}
    </div>
  );
};
