import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const distances = [
  { place: "Meru Town Centre", distance: "300 m" },
  { place: "Isiolo International Airport", distance: "30 km south" },
  { place: "Meru National Park", distance: "~50 km" },
  { place: "Samburu National Park", distance: "~60 km" },
  { place: "Nairobi", distance: "~3 hours drive" },
  { place: "Nanyuki Airstrip", distance: "~1 hour drive" },
];

export default function LocationPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Location</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Where to find us
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl mb-6">At the foot of the mountain</h2>
              <p className="text-charcoal-muted leading-relaxed mb-8">
                Meru Slopes Hotel sits in the lush highlands of Meru County, perfectly
                positioned between the vibrant town centre and the wild landscapes that
                make this region extraordinary. Whether you&apos;re here for business, adventure,
                or simply to breathe the mountain air — everything is within reach.
              </p>

              <Divider className="mb-8" />

              <div className="space-y-4">
                {distances.map((d) => (
                  <div key={d.place} className="flex items-center justify-between py-3 border-b border-sand/50">
                    <span className="text-charcoal">{d.place}</span>
                    <span className="text-sm text-terracotta font-medium">{d.distance}</span>
                  </div>
                ))}
              </div>

              <Divider className="my-8" />

              <div className="space-y-3 text-sm text-charcoal-muted">
                <p><strong className="text-charcoal">Address:</strong> P.O. Box 2554-60200 Meru, Kenya</p>
                <p><strong className="text-charcoal">Phone:</strong> +254 711 620 219 / +254 719 475 631</p>
                <p><strong className="text-charcoal">Email:</strong> info@meruslopeshotel.com</p>
              </div>
            </div>

            <ImagePlaceholder />
          </div>
        </Container>
      </Section>
    </>
  );
}
