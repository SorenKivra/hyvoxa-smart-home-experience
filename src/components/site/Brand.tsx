import { cn } from "@/lib/utils";
import logo from "@/assets/hyvoxa-logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={logo}
        alt="Hyvoxa logo"
        width={32}
        height={32}
        className="size-8 object-contain"
      />
      <span className="font-display text-lg font-extrabold tracking-[-0.04em] uppercase">
        Hyvoxa
      </span>
    </span>
  );
}
