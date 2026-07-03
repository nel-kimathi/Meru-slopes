import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80", alt: "Pool with mountain view" },
  { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80", alt: "Resort pool at dusk" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", alt: "African sunset" },
  { src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80", alt: "Mountain landscape" },
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80", alt: "Savannah at golden hour" },
  { src: "https://images.unsplash.com/photo-1596178060671-7a80dc8053ed?w=600&q=80", alt: "Luxury hotel garden" },
];

export function GalleryPreview() {
  return (
    <Section id="gallery">
      <Container>
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">Gallery</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Life at the slopes
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-terracotta hover:text-terracotta-dark transition-colors"
          >
            Request a Tour
            <span className="inline-block w-8 h-px bg-terracotta" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
