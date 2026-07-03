import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const featuredRooms = [
  {
    name: "Master Ensuite",
    description: "King bed, separate lounge, private balcony with the finest mountain views.",
    tag: "Signature Suite",
    image: "/images/master-ensuite.jpg",
  },
  {
    name: "Executive Suite",
    description: "Premium finishes, mini bar, and elevated comfort for the discerning traveller.",
    tag: "Premium",
    image: "/images/executive-suite.jpg",
  },
  {
    name: "Superior Room",
    description: "King bed, work desk, Nyambene Hills view — where mountain light greets you each morning.",
    tag: "Classic",
    image: "/images/superior-rooms.jpg",
  },
];

export function RoomsPreview() {
  return (
    <Section dark>
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
            Suites & Rooms
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory">
            Your room, named and storied
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredRooms.map((room) => (
            <div key={room.name} className="group cursor-pointer">
              <ImagePlaceholder src={room.image} alt={room.name} containerClassName="mb-6" />
              <p className="text-brass text-xs tracking-[0.2em] uppercase mb-2">{room.tag}</p>
              <h3 className="font-serif text-xl text-ivory mb-3">{room.name}</h3>
              <p className="text-sand text-sm leading-relaxed">{room.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/suites"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brass hover:text-brass-light transition-colors"
          >
            View All Rooms
            <span className="inline-block w-8 h-px bg-brass" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
