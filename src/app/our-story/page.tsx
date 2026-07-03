import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export default function OurStoryPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">About</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Our Story
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ImagePlaceholder />
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-6">
                A retreat rooted in the mountain
              </h2>
              <div className="space-y-4 text-charcoal-muted leading-relaxed">
                <p>
                  Meru Slopes Hotel was born from a simple belief: that Kenyan hospitality,
                  when done with genuine care and attention to detail, can stand alongside
                  the finest in the world. Nestled on the lush slopes of Meru County, just
                  300 metres from the vibrant heart of Meru town, our hotel is a sanctuary
                  for travellers seeking both adventure and repose.
                </p>
                <p>
                  Our name pays homage to the land we call home — the rolling slopes of
                  Nyambene Hills and the majestic Mt. Kenya that watches over us. Every
                  aspect of Meru Slopes, from the warm terracotta of our walls to the
                  brass accents that catch the morning light, is a reflection of the
                  landscape that surrounds us.
                </p>
                <p>
                  We are a family of hospitality professionals who believe that a hotel
                  should feel like a home — albeit one with five conference halls, a
                  swimming pool, and a restaurant that rivals anything in the region.
                  Our team is drawn from the local community, bringing authentic Meru
                  warmth to every interaction.
                </p>
                <p>
                  As we grow, we remain committed to the principles that define us:
                  genuine Kenyan hospitality, sustainable practices that protect the
                  wild places around us, and an unwavering belief that every guest
                  deserves to feel truly welcomed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Divider pattern />

      <Section dark>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-ivory mb-6">Our Philosophy</h2>
            <p className="text-sand leading-relaxed text-lg">
              &ldquo;Kenyan warmth, international standards. We believe the two are not
              mutually exclusive — that genuine hospitality, rooted in a specific place
              and culture, is the rarest and most valuable luxury of all.&rdquo;
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
