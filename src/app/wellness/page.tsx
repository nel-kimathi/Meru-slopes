import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const amenities = [
  {
    name: "Swimming Pool",
    description: "A tranquil outdoor pool surrounded by tropical gardens. Cool off after a day of adventure or simply float while watching the sun sink behind Mt. Kenya.",
  },
  {
    name: "Fitness Centre",
    description: "Well-equipped gym with modern cardio and resistance equipment. Open daily for guests who refuse to miss a workout — even on safari.",
  },
  {
    name: "Gardens & Grounds",
    description: "Our lush gardens are an invitation to wander, read, or simply sit still. Indigenous plants, shaded seating, and the constant soundtrack of birdsong.",
  },
  {
    name: "Kids' Corner",
    description: "A safe, supervised space for younger guests. Arts, games, and activities inspired by Kenyan wildlife and storytelling.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Wellness & Leisure</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Rest, restore, reconnect
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-charcoal-muted leading-relaxed text-lg">
              At Meru Slopes, wellness isn&apos;t a spa menu — it&apos;s the feeling of swimming
              at golden hour, the calm of a garden bench under a jacaranda, the clarity
              that comes with mountain air. Our leisure offerings are modest in footprint
              but rich in experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {amenities.map((a) => (
              <div key={a.name} className="group">
                <ImagePlaceholder containerClassName="mb-6" />
                <h2 className="font-serif text-2xl mb-3">{a.name}</h2>
                <p className="text-charcoal-muted leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
