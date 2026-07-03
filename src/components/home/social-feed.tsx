import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Camera } from "lucide-react";

const posts = [
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
    alt: "Golden hour at the slopes",
  },
  {
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80",
    alt: "Poolside relaxation",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&q=80",
    alt: "Kenyan sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8053ed?w=400&q=80",
    alt: "Garden pathways",
  },
];

export function SocialFeed() {
  return (
    <Section dark noPadding>
      <div className="py-section-mobile lg:py-section">
        <Container>
          <div className="text-center mb-10">
            <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
              Follow Us
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory">
              @meruslopeshotel
            </h2>
          </div>
        </Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {posts.map((post, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square">
              <img
                src={post.src}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                <Camera className="h-6 w-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
        <Container>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brass hover:text-brass-light transition-colors"
            >
              Follow on Instagram
              <span className="inline-block w-8 h-px bg-brass" />
            </a>
          </div>
        </Container>
      </div>
    </Section>
  );
}
