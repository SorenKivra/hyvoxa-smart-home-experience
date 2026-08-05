import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid size-8 place-items-center">
        <span className="absolute inset-0 rounded-[10px] border border-primary/40" />
        <span className="absolute inset-0 rounded-[10px] border border-primary/30 animate-pulse-ring" />
        <span className="size-2 rounded-full bg-primary" />
      </span>
      <span className="font-display text-lg font-extrabold tracking-[-0.04em] uppercase">
        Hyvoxa
      </span>
    </span>
  );
}
