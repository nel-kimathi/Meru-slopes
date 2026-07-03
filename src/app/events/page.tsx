import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "New Year's Eve Gala",
    date: "December 31, 2026",
    category: "Entertainment",
    description: "Ring in the new year with a spectacular gala dinner, live music, and fireworks over Mt. Kenya.",
  },
  {
    title: "Meru Coffee Festival Weekend",
    date: "March 15–17, 2026",
    category: "Seasonal",
    description: "A weekend celebrating Meru's finest coffee — tastings, farm tours, and barista workshops.",
  },
  {
    title: "Corporate Leadership Retreat",
    date: "April 10–13, 2026",
    category: "Conference",
    description: "A 3-day executive retreat combining strategic sessions with team-building on the mountain.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Events</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            What&apos;s happening at the slopes
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-charcoal-muted leading-relaxed text-lg">
              From seasonal celebrations to corporate gatherings, Meru Slopes hosts events
              that bring people together against the backdrop of the mountain.
            </p>
          </div>

          <Divider className="mb-12" />

          <div className="space-y-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <div key={event.title} className="border border-sand p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="lg:w-48 lg:shrink-0">
                    <p className="text-xs text-terracotta tracking-widest uppercase">{event.category}</p>
                    <p className="font-serif text-lg mt-1">{event.date}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                    <p className="text-sm text-charcoal-muted">{event.description}</p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Enquire</Link>
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-charcoal-muted">No upcoming events at this time.</p>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
