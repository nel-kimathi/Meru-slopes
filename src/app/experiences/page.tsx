import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const experiences = [
  {
    title: "Mt. Kenya & Meru National Park Excursions",
    duration: "Full day",
    description:
      "Game drives and guided walks through Meru National Park — the wild landscape that inspired Elsa the Lioness. Our concierge arranges everything from park fees to packed lunches.",
    includes: ["Park entry fees", "Professional guide", "Game-drive vehicle", "Packed lunch", "Hotel transfers"],
  },
  {
    title: "Samburu National Park Day Trips",
    duration: "Full day",
    description:
      "A journey into the rugged beauty of Samburu — rare wildlife, dramatic landscapes, and the rich culture of the Samburu people. Approximately 60 km from the hotel.",
    includes: ["Park entry fees", "Professional guide", "Game-drive vehicle", "Packed lunch", "Hotel transfers"],
  },
  {
    title: "Meru Coffee Experience",
    duration: "Half day",
    description:
      "Meru is coffee country. Visit a local coffee farm, walk the plantations, and taste some of Kenya's finest beans — from cherry to cup.",
    includes: ["Farm tour", "Tasting session", "Local guide", "Hotel transfers"],
  },
  {
    title: "Cultural Village Visits",
    duration: "Half day",
    description:
      "Experience the warmth and heritage of Meru's communities. Visit local craft markets, meet artisans, and learn about traditions that have shaped this region for generations.",
    includes: ["Local guide", "Craft market visit", "Cultural performance", "Hotel transfers"],
  },
  {
    title: "Team Building & Retreat Programs",
    duration: "Custom",
    description:
      "Corporate groups and retreats — our team curates programs that combine the mountain setting with structured activities, from guided hikes to collaborative workshops.",
    includes: ["Custom itinerary", "Facilitation", "Meals", "Conference space", "Accommodation"],
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Beyond the Hotel</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Discover the mountain, the wild, the culture
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-charcoal-muted leading-relaxed text-lg">
              Meru Slopes is your gateway to one of Kenya's most extraordinary regions.
              From the snow-capped peaks of Mt. Kenya to the vast savannah of Meru and
              Samburu — every day offers a new adventure.
            </p>
          </div>

          <Divider className="mb-12" />

          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, i) => (
              <div key={exp.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <ImagePlaceholder containerClassName={i % 2 === 1 ? "lg:col-start-2" : ""} />
                <div>
                  <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-2">
                    {exp.duration}
                  </p>
                  <h2 className="font-serif text-2xl lg:text-3xl mb-4">{exp.title}</h2>
                  <p className="text-charcoal-muted leading-relaxed mb-6">{exp.description}</p>
                  <div className="mb-8">
                    <p className="text-xs tracking-widest uppercase text-charcoal-muted mb-3">What&apos;s included</p>
                    <ul className="space-y-2">
                      {exp.includes.map((item) => (
                        <li key={item} className="text-sm text-charcoal-muted flex items-start gap-2">
                          <span className="text-terracotta mt-0.5">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="primary" asChild>
                    <Link href="/contact">Enquire About This Experience</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
