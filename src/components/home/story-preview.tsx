import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function StoryPreview() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ImagePlaceholder src="/images/our-story.jpg" alt="Mount Kenya view from Meru Slopes Hotel" />
          <div>
            <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              A retreat rooted in the mountain
            </h2>
            <p className="text-charcoal-muted leading-relaxed mb-6">
              Nestled in the lush slopes of Meru County, our hotel is a haven of tranquility
              where the rhythms of Kenyan hospitality meet the serenity of Mt. Kenya&apos;s
              foothills. Every corner tells a story of the land, the people, and the warmth
              that defines Meru.
            </p>
            <p className="text-charcoal-muted leading-relaxed mb-8">
              From our perch just 300 metres from Meru&apos;s vibrant town centre, we offer
              a gateway to adventure — and a quiet place to return to.
            </p>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-terracotta hover:text-terracotta-dark transition-colors"
            >
              Read Our Story
              <span className="inline-block w-8 h-px bg-terracotta" />
            </Link>
          </div>
        </div>
      </Container>
      <Divider pattern />
    </Section>
  );
}
