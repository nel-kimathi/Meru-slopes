"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const roomTypes = [
  "Master Ensuite",
  "Executive Suite",
  "Superior Room",
  "Deluxe Room",
  "Family Room",
];

const addOns = [
  { id: "breakfast", label: "Breakfast Included" },
  { id: "airport", label: "Airport Transfer" },
  { id: "dinner", label: "Dinner Package" },
  { id: "game-drive", label: "Game Drive Arrangement" },
  { id: "coffee", label: "Meru Coffee Farm Tour" },
];

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    roomType: "",
    adults: "2",
    children: "0",
    promoCode: "",
    specialRequests: "",
    addOns: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleToggleAddOn = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter((a) => a !== id)
        : [...prev.addOns, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = "info@meruslopeshotel.com";
    const subject = `Reservation Inquiry: ${formData.roomType || "No room selected"}`;
    const bodyLines = [
      "New Reservation Inquiry",
      "---",
      `Check-in: ${formData.checkIn || "Not specified"}`,
      `Check-out: ${formData.checkOut || "Not specified"}`,
      `Room Type: ${formData.roomType || "Not specified"}`,
      `Adults: ${formData.adults}`,
      `Children: ${formData.children}`,
      `Add-ons: ${formData.addOns.length ? formData.addOns.join(", ") : "None"}`,
      `Promo Code: ${formData.promoCode || "None"}`,
      `Special Requests: ${formData.specialRequests || "None"}`,
    ];
    window.location.href = `mailto:${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative h-[50vh] min-h-[350px] bg-charcoal flex items-end pb-16">
          <Container className="relative z-10">
            <h1 className="font-serif text-4xl sm:text-5xl text-ivory">Thank you</h1>
          </Container>
        </section>
        <Section>
          <Container className="text-center max-w-xl">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-terracotta text-2xl">✓</span>
            </div>
            <h2 className="font-serif text-3xl mb-4">Your inquiry has been submitted</h2>
            <p className="text-charcoal-muted leading-relaxed mb-8">
              Our reservations team will review your request and respond within 24 hours.
              You will receive a confirmation at the email address you provided.
            </p>
            <Button variant="primary" asChild>
              <a href="/">Return to Home</a>
            </Button>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[350px] bg-charcoal flex items-end pb-16">
        <Container className="relative z-10">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Reservations</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Begin your stay
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-charcoal-muted leading-relaxed mb-10 text-center">
              Complete the form below and our team will confirm your reservation within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                  Room Type
                </label>
                <select
                  value={formData.roomType}
                  onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                >
                  <option value="">Select a room type</option>
                  {roomTypes.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                    Adults
                  </label>
                  <select
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                    Children
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-3">
                  Add-Ons
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {addOns.map((addon) => (
                    <label
                      key={addon.id}
                      className={`flex items-center gap-3 px-4 py-3 border text-sm cursor-pointer transition-colors ${
                        formData.addOns.includes(addon.id)
                          ? "border-terracotta bg-terracotta/5"
                          : "border-sand hover:border-charcoal-muted"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.addOns.includes(addon.id)}
                        onChange={() => handleToggleAddOn(addon.id)}
                        className="accent-terracotta"
                      />
                      {addon.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                  Promo Code
                </label>
                <input
                  type="text"
                  value={formData.promoCode}
                  onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                  placeholder="Enter promo code"
                  className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-charcoal-muted mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows={4}
                  placeholder="Any special requirements or preferences..."
                  className="w-full px-4 py-3 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta transition-colors resize-none"
                />
              </div>

              <div className="text-center">
                <p className="text-xs text-charcoal-muted mb-4">
                  By submitting this form, you agree to our privacy policy. Our team will
                  respond within 24 hours to confirm your reservation.
                </p>
                <Button type="submit" variant="primary" size="lg">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
