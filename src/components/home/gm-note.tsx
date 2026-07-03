import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Divider } from "@/components/ui/divider";

export function GMNote() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <ImagePlaceholder aspect="aspect-[3/4]" containerClassName="w-full max-w-sm mx-auto lg:mx-0" />
          </div>
          <div className="lg:col-span-3">
            <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
              A Note from the General Manager
            </p>
            <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed text-charcoal mb-6">
              &ldquo;Meru Slopes is not just a hotel — it is our home, and we welcome you
              as family. Every guest who walks through our doors becomes part of our
              story, and we are committed to making your stay as warm and memorable
              as the mountain light that greets you each morning.&rdquo;
            </blockquote>
            <p className="font-serif text-lg text-charcoal">— Joseph Mwenda</p>
            <p className="text-sm text-charcoal-muted">General Manager</p>
          </div>
        </div>
      </Container>
      <Divider pattern />
    </Section>
  );
}
