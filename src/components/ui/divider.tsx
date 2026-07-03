import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  pattern?: boolean;
}

export function Divider({ className, pattern }: DividerProps) {
  if (pattern) {
    return (
      <div className={cn("flex items-center justify-center gap-1.5 py-8", className)} aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-[2px] w-8",
              i % 2 === 0 ? "bg-terracotta" : "bg-brass",
            )}
          />
        ))}
      </div>
    );
  }

  return <div className={cn("h-px w-full bg-sand", className)} aria-hidden />;
}
