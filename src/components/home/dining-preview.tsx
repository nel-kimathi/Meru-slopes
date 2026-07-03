import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const venues = [
  {
    name: "Slopes Restaurant",
    description: "120 seats of multi-cuisine excellence — breakfast, lunch, and dinner served with a view of the mountain.",
    tag: "Fine Dining",
  },
  {
    name: "The Oak Pub",
    description: "A relaxed evening retreat. Drinks, live entertainment, and the warmth of good company.",
    tag: "Bar & Lounge",
  },
  {
    name: "Pizza City",
    description: "Casual, family-friendly, quick-bite perfection after a day on the slopes.",
    tag: "Casual",
  },
];

export function DiningPreview() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
              Culinary Experiences
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              A taste of the mountain
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-8">
              From the aroma of freshly roasted Meru coffee at dawn to the sizzle of
              Kenyan-International fusion under the stars — every meal at Meru Slopes
              is a destination in itself.
            </p>
            <div className="space-y-6 mb-8">
              {venues.map((v) => (
                <div key={v.name} className="border-l-2 border-terracotta pl-4">
                  <p className="text-xs tracking-[0.15em] uppercase text-terracotta mb-1">{v.tag}</p>
                  <h3 className="font-serif text-lg text-charcoal mb-1">{v.name}</h3>
                  <p className="text-sm text-charcoal-muted">{v.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/dining"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Explore Dining
              <span className="inline-block w-8 h-px bg-terracotta" />
            </Link>
          </div>
          <ImagePlaceholder src="/images/dining.jpg" alt="Slopes Restaurant dining experience" />
        </div>
      </Container>
    </Section>
  );
}
