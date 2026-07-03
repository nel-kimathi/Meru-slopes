import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "Sarah M.",
    quote: "A hidden gem at the foot of Mt. Kenya. The staff made us feel like family, and the views were simply unforgettable.",
    source: "TripAdvisor",
  },
  {
    name: "James K.",
    quote: "The perfect base for exploring Meru National Park. Comfortable rooms, excellent dining, and genuine Kenyan hospitality.",
    source: "Google",
  },
  {
    name: "Elizabeth W.",
    quote: "We held our wedding here — it was everything we dreamed of. The gardens at golden hour are pure magic.",
    source: "Booking.com",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
            Guest Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            What our guests say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <p className="text-charcoal-muted leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-serif text-sm text-charcoal">{t.name}</p>
              <p className="text-xs text-charcoal-muted tracking-widest uppercase mt-1">
                {t.source}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
