import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const venues = [
  {
    id: "slopes",
    name: "Slopes Restaurant",
    tag: "Fine Dining",
    capacity: "120 seats",
    hours: "Breakfast 6:30–9:30 | Lunch 12:30–2:30 | Dinner 7:00–11:00pm",
    description:
      "Our flagship dining venue. A multi-cuisine buffet and à la carte menu that celebrates Kenyan ingredients with international technique. From freshly roasted Meru coffee at dawn to slow-cooked stews under the evening stars.",
    chef: {
      name: "Chef David Kamau",
      quote: "Every dish tells a story of the mountain — the coffee, the honey, the fresh produce from our local farmers.",
    },
  },
  {
    id: "oak",
    name: "The Oak Pub",
    tag: "Bar & Lounge",
    capacity: "60 guests",
    hours: "Open daily from 4:00pm",
    description:
      "A relaxed evening retreat. Dark wood, warm lighting, a carefully curated drinks list, and live entertainment that carries you gently into the Meru night.",
  },
  {
    id: "pizza",
    name: "Pizza City",
    tag: "Casual Dining",
    capacity: "40 guests",
    hours: "Open daily 11:00am–10:00pm",
    description:
      "Family-friendly, quick, and satisfying. Wood-fired pizzas, fresh salads, and a cheerful atmosphere that welcomes guests of all ages after a day of adventure.",
  },
];

export default function DiningPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Culinary Experiences</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            A taste of the mountain
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {venues.map((venue, i) => (
              <div key={venue.id} id={venue.id}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <ImagePlaceholder containerClassName={i % 2 === 1 ? "lg:col-start-2" : ""} />
                  <div>
                    <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-2">{venue.tag}</p>
                    <h2 className="font-serif text-3xl lg:text-4xl mb-4">{venue.name}</h2>
                    <p className="text-sm text-charcoal-muted mb-2">{venue.capacity}</p>
                    <p className="text-sm text-terracotta mb-4">{venue.hours}</p>
                    <p className="text-charcoal-muted leading-relaxed mb-6">{venue.description}</p>
                    {"chef" in venue && venue.chef && (
                      <div className="border-l-2 border-terracotta pl-4 mb-6">
                        <p className="text-sm text-charcoal-muted italic mb-1">
                          &ldquo;{venue.chef.quote}&rdquo;
                        </p>
                        <p className="text-xs font-medium text-charcoal">— {venue.chef.name}</p>
                      </div>
                    )}
                    <Button variant="primary" asChild>
                      <Link href="/reservations">Reserve a Table</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
