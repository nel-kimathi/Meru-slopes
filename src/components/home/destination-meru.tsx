import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Divider } from "@/components/ui/divider";

export function DestinationMeru() {
  return (
    <Section dark>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <ImagePlaceholder containerClassName="bg-ivory/10" />
          <div>
            <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
              Destination Meru
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight mb-6">
              Where the mountain meets the wild
            </h2>
            <p className="text-sand leading-relaxed mb-6">
              Meru is coffee country, wildlife country, mountain country. From the
              snow-capped peaks of Mt. Kenya to the savannah of Meru National Park,
              this is a land of profound beauty — and we are its gateway.
            </p>
            <p className="text-sand leading-relaxed mb-8">
              Just 50 km from Meru National Park and 60 km from Samburu, your
              adventure begins the moment you arrive.
            </p>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brass hover:text-brass-light transition-colors"
            >
              Discover Experiences
              <span className="inline-block w-8 h-px bg-brass" />
            </Link>
          </div>
        </div>
      </Container>
      <Divider pattern />
    </Section>
  );
}
