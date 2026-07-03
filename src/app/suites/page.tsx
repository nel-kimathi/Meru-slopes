import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Divider } from "@/components/ui/divider";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const rooms = [
  {
    id: "master",
    name: "Master Ensuite",
    tag: "Signature Suite",
    description:
      "Our flagship suite. A king bed, separate lounge, bath and shower, premium linens, a private balcony — and the finest mountain view in the house. Wake to mist lifting off Mt. Kenya.",
    bedConfig: "King",
    view: "Mt. Kenya",
    maxGuests: 2,
    size: "55 m²",
    amenities: ["King bed", "Separate lounge", "Bath + shower", "Premium linens", "Mini bar", "Private balcony", "Satellite TV", "WiFi"],
  },
  {
    id: "executive",
    name: "Executive Suite",
    tag: "Premium",
    description:
      "Elevated finishes and a mini bar set the tone for this refined space. The perfect choice for the discerning business traveller or couple seeking something special.",
    bedConfig: "King",
    view: "Garden",
    maxGuests: 2,
    size: "40 m²",
    amenities: ["King bed", "Walk-in shower", "Work desk", "Mini bar", "Satellite TV", "WiFi", "Tea/coffee"],
  },
  {
    id: "superior",
    name: "Superior Room",
    tag: "Classic",
    description:
      "A spacious room with a king bed, work desk, and views of the Nyambene Hills. Designed for comfort and productivity — mountain light included.",
    bedConfig: "King",
    view: "Nyambene Hills",
    maxGuests: 2,
    size: "32 m²",
    amenities: ["King bed", "Work desk", "Nyambene Hills view", "Tea/coffee", "Satellite TV", "WiFi"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    tag: "Comfort",
    description:
      "Queen or twin configuration with a walk-in shower. A calm, well-appointed space for rest after a day of adventure.",
    bedConfig: "Queen / Twin",
    view: "Garden",
    maxGuests: 2,
    size: "28 m²",
    amenities: ["Queen/Twin beds", "Walk-in shower", "Work desk", "WiFi", "Mineral water"],
  },
  {
    id: "family",
    name: "Family Room",
    tag: "Family",
    description:
      "Space and ease for families exploring the parks. Connected layout, extra bedding options, and thoughtful touches for younger guests.",
    bedConfig: "King + Single",
    view: "Garden",
    maxGuests: 4,
    size: "45 m²",
    amenities: ["King bed + Single", "Walk-in shower", "Work desk", "Satellite TV", "WiFi", "Tea/coffee"],
  },
];

export default function SuitesPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] bg-charcoal flex items-end pb-16">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Accommodation</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Your room, named and storied
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-20 lg:space-y-32">
            {rooms.map((room, i) => (
              <div key={room.id} id={room.id}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <ImagePlaceholder containerClassName={i % 2 === 1 ? "lg:col-start-2" : ""} />
                  <div>
                    <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-2">{room.tag}</p>
                    <h2 className="font-serif text-3xl lg:text-4xl mb-4">{room.name}</h2>
                    <p className="text-charcoal-muted leading-relaxed mb-6">{room.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div><span className="text-charcoal-muted">Bed:</span> <span className="font-medium">{room.bedConfig}</span></div>
                      <div><span className="text-charcoal-muted">View:</span> <span className="font-medium">{room.view}</span></div>
                      <div><span className="text-charcoal-muted">Guests:</span> <span className="font-medium">Up to {room.maxGuests}</span></div>
                      <div><span className="text-charcoal-muted">Size:</span> <span className="font-medium">{room.size}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.amenities.map((a) => (
                        <span key={a} className="text-xs bg-sand/30 px-3 py-1.5 text-charcoal-muted">{a}</span>
                      ))}
                    </div>
                    <Button variant="primary" asChild>
                      <Link href="/reservations">Reserve This Room</Link>
                    </Button>
                  </div>
                </div>
                {i < rooms.length - 1 && <Divider className="mt-20 lg:mt-32" />}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
