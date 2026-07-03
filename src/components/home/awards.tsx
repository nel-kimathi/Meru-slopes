import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Star, Award, ThumbsUp } from "lucide-react";

const recognitions = [
  {
    icon: Star,
    label: "TripAdvisor",
    value: "4.5 / 5",
    detail: "Traveller Choice Award",
  },
  {
    icon: ThumbsUp,
    label: "Google Reviews",
    value: "4.3 / 5",
    detail: "Rated by 200+ guests",
  },
  {
    icon: Award,
    label: "Booking.com",
    value: "8.6 / 10",
    detail: "Traveller Review Award",
  },
];

export function Awards() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">
            Recognition
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Trusted by travellers
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-3xl mx-auto">
          {recognitions.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label} className="text-center">
                <div className="w-14 h-14 rounded-full bg-terracotta/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-terracotta" />
                </div>
                <p className="text-xs tracking-widest uppercase text-terracotta mb-1">{r.label}</p>
                <p className="font-serif text-2xl text-charcoal mb-1">{r.value}</p>
                <p className="text-sm text-charcoal-muted">{r.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
