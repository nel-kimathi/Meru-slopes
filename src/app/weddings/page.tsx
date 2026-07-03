import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Garden Ceremony",
    capacity: "Up to 100 guests",
    description:
      "Exchange vows in our lush garden with Mt. Kenya as your backdrop. Includes dedicated wedding coordinator, floral arrangements, catering, and a complimentary bridal suite.",
    includes: ["Wedding coordinator", "Garden setup & decoration", "Catering (3-course)", "Bridal suite", "Sound system", "Photography package"],
  },
  {
    name: "Grand Hall Celebration",
    capacity: "Up to 200 guests",
    description:
      "Our elegant indoor hall, fully styled for your reception. Dance the night away under warm lighting, with a menu curated by our head chef.",
    includes: ["Event coordinator", "Hall setup & styling", "Catering (5-course)", "Open bar (4 hours)", "DJ & sound", "Bridal suite", "Photography & videography"],
  },
  {
    name: "Intimate Elopement",
    capacity: "Up to 20 guests",
    description:
      "A quiet, beautiful ceremony for those who prefer intimacy over grandeur. Every detail, from the flowers to the menu, crafted around your story.",
    includes: ["Wedding coordinator", "Intimate garden setup", "Private dining (3-course)", "Champagne toast", "Photography"],
  },
];

export default function WeddingsPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Weddings & Celebrations</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Your story begins here
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mb-16">
            <p className="text-charcoal-muted leading-relaxed text-lg">
              Set against the majesty of Mt. Kenya, Meru Slopes offers an intimate,
              elegant setting for your wedding day. Whether you dream of a garden ceremony
              bathed in golden light or a grand celebration under chandeliers — our team
              brings your vision to life with Kenyan warmth and international refinement.
            </p>
          </div>

          <Divider className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-sand p-8 flex flex-col">
                <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-2">{pkg.capacity}</p>
                <h2 className="font-serif text-2xl mb-4">{pkg.name}</h2>
                <p className="text-charcoal-muted text-sm leading-relaxed mb-6 flex-1">{pkg.description}</p>
                <div className="mb-8">
                  <p className="text-xs tracking-widest uppercase text-charcoal-muted mb-3">Includes</p>
                  <ul className="space-y-1.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="text-sm text-charcoal-muted flex items-start gap-2">
                        <span className="text-terracotta">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
