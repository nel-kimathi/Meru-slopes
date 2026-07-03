import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CorporatePreview() {
  return (
    <Section dark>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
            Conference & Events
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight mb-6">
            Where business meets the mountain
          </h2>
          <p className="text-sand leading-relaxed mb-8">
            Five halls and boardrooms accommodating up to 350 guests. Fully equipped
            with modern conferencing facilities, catering, and a dedicated events team.
          </p>
          <Link
            href="/conference"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brass hover:text-brass-light transition-colors"
          >
            View Facilities
            <span className="inline-block w-8 h-px bg-brass" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
