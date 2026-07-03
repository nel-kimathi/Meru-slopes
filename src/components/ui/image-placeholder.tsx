import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
  containerClassName?: string;
}

export function ImagePlaceholder({
  src,
  alt = "",
  aspect = "aspect-[4/3]",
  className,
  containerClassName,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={cn(aspect, "overflow-hidden", containerClassName)}>
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", className)}
        />
      </div>
    );
  }

  return <div className={cn(aspect, "bg-sand/30", containerClassName, className)} />;
}
