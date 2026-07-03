import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Sustainability() {
  return (
    <Section dark>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
            Sustainability & Community
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight mb-6">
            Rooted in responsibility
          </h2>
          <p className="text-sand leading-relaxed">
            We source locally, employ locally, and partner with conservation efforts
            in Meru and Samburu National Parks. Every stay at Meru Slopes contributes
            to the communities and wild places that make this region extraordinary.
          </p>
        </div>
      </Container>
    </Section>
  );
}
