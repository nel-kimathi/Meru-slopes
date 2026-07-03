import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const halls = [
  { name: "Simba Hall", capacity: "150 theatre / 100 banquet", description: "Our flagship hall — spacious, fully equipped, and naturally lit." },
  { name: "Chui Hall", capacity: "80 theatre / 60 banquet", description: "Mid-sized and versatile. Perfect for breakout sessions and workshops." },
  { name: "Kifaru Hall", capacity: "50 theatre / 40 banquet", description: "An intimate space for focused meetings and presentations." },
  { name: "Boardroom", capacity: "20 boardroom", description: "Executive boardroom with premium furnishings for high-stakes discussions." },
  { name: "Garden Pavilion", capacity: "100 cocktail", description: "Open-air function space for networking events and evening receptions." },
];

const standardInclusions = [
  "Projection screen & TV",
  "Video conferencing equipment",
  "Flip chart & stationery",
  "Morning & afternoon tea",
  "Buffet lunch & dinner",
  "High-speed WiFi",
  "Dedicated events coordinator",
];

const addOns = [
  "LCD projector",
  "PA system",
  "Photocopying / printing",
  "Photography",
  "Telephony services",
];

export default function ConferencePage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Conference & Events</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Where business meets the mountain
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-charcoal-muted leading-relaxed text-lg">
              Five versatile spaces accommodating up to 350 guests. Each hall is named
              after the wildlife that roams the slopes of Mt. Kenya — and equipped with
              everything you need for a productive, memorable event.
            </p>
          </div>

          <Divider className="mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {halls.map((hall) => (
              <div key={hall.name} className="border border-sand p-6">
                <h3 className="font-serif text-xl mb-2">{hall.name}</h3>
                <p className="text-xs text-terracotta tracking-widest uppercase mb-3">{hall.capacity}</p>
                <p className="text-sm text-charcoal-muted">{hall.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="font-serif text-xl mb-4">Standard Package Includes</h3>
              <ul className="space-y-3">
                {standardInclusions.map((item) => (
                  <li key={item} className="text-sm text-charcoal-muted flex items-start gap-3">
                    <span className="text-terracotta mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Available Add-Ons</h3>
              <ul className="space-y-3">
                {addOns.map((item) => (
                  <li key={item} className="text-sm text-charcoal-muted flex items-start gap-3">
                    <span className="text-terracotta mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Divider className="my-16" />

          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">Request a Proposal</h2>
            <p className="text-charcoal-muted mb-8 max-w-xl mx-auto">
              Tell us about your event and we&apos;ll prepare a tailored proposal within 24 hours.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Submit an Enquiry</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
