import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function WeddingsPreview() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ImagePlaceholder />
          <div>
            <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
              Weddings & Celebrations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Your story begins here
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-6">
              Exchange vows against the backdrop of Mt. Kenya. Our gardens and halls
              provide an intimate setting for your most cherished celebration —
              styled with Kenyan warmth and international refinement.
            </p>
            <Link
              href="/weddings"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Explore Wedding Packages
              <span className="inline-block w-8 h-px bg-terracotta" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
