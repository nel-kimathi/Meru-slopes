"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = "info@meruslopeshotel.com";
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ];
    const subject = encodeURIComponent(formData.subject || "Website Enquiry");
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`;
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
            <div className="w-16 h-16 rounded-full bg-terracotta/5 flex items-center justify-center mx-auto mb-6">
              <span className="text-terracotta text-2xl">✓</span>
            </div>
            <h2 className="font-serif text-3xl mb-4">Message sent</h2>
            <p className="text-charcoal-muted mb-8">We&apos;ll respond within 24 hours.</p>
            <Button variant="primary" asChild>
              <Link href="/">Return to Home</Link>
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
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Get in touch
          </h1>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-2xl mb-6">We&apos;d love to hear from you</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full h-12 px-4 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-sand bg-transparent text-charcoal text-sm focus:outline-none focus:border-terracotta resize-none"
                />
                <Button type="submit" variant="primary">Send Message</Button>
              </form>
            </div>

            <div>
              <div className="aspect-[4/3] bg-ivory/10 mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d37.65!3d0.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDMnMDAuMCJOIDM3wrAzOScwMC4wIkU!5e0!3m2!1sen!2ske!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Meru Slopes Hotel Location"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg mb-2">Address</h3>
                  <p className="text-sm text-charcoal-muted">P.O. Box 2554-60200 Meru, Kenya</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Phone</h3>
                  <p className="text-sm text-charcoal-muted">+254 711 620 219</p>
                  <p className="text-sm text-charcoal-muted">+254 719 475 631</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">Email</h3>
                  <p className="text-sm text-charcoal-muted">info@meruslopeshotel.com</p>
                  <p className="text-sm text-charcoal-muted">mslopeshotel@yahoo.com</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/254711620219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-terracotta hover:text-terracotta-dark transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
