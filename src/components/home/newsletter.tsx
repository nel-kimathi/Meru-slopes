"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <Section dark>
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-brass text-xs tracking-[0.2em] uppercase mb-4">
            Stay Connected
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory mb-6">
            Join our mailing list
          </h2>
          {subscribed ? (
            <p className="text-sand text-sm">
              Thank you for subscribing. We&apos;ll share stories from the slopes.
            </p>
          ) : (
            <>
              <p className="text-sand text-sm mb-8">
                Receive exclusive offers, event invitations, and stories from the slopes.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 h-12 px-5 bg-ivory/10 border border-sand/30 text-ivory placeholder:text-sand/60 text-sm focus:outline-none focus:border-brass transition-colors"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-brass text-charcoal text-sm font-medium tracking-widest uppercase hover:bg-brass-light transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
