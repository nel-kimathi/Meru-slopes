"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-sand shadow-lg"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
            <button
              onClick={() => setDismissed(true)}
              className="hidden lg:block text-charcoal-muted hover:text-charcoal transition-colors"
              aria-label="Dismiss booking bar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex-1 flex items-center gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2 text-charcoal-muted">
                <CalendarDays className="h-4 w-4 text-terracotta" />
                <span className="hidden sm:inline">Check-in</span>
                <span className="text-charcoal font-medium">—</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-muted">
                <CalendarDays className="h-4 w-4 text-terracotta" />
                <span className="hidden sm:inline">Check-out</span>
                <span className="text-charcoal font-medium">—</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-muted">
                <Users className="h-4 w-4 text-terracotta" />
                <span className="text-charcoal font-medium">2 Guests</span>
              </div>
            </div>

            <Button variant="primary" size="default" asChild>
              <Link href="/reservations">Check Availability</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
