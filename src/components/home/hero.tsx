"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Meru Slopes Hotel mountain view"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/60" />
      <div className="absolute inset-0 bg-charcoal/10" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brass text-sm tracking-[0.25em] uppercase mb-6"
          >
            Meru Slopes Hotel
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight max-w-4xl mx-auto"
          >
            Catch the real feeling of the slopes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-ivory/80 text-lg max-w-xl mx-auto font-sans leading-relaxed"
          >
            An intimate mountain retreat where Kenyan hospitality meets four-star comfort,
            at the foot of Mt. Kenya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/reservations"
              className="inline-flex h-14 items-center justify-center px-10 bg-terracotta text-ivory text-sm font-medium tracking-widest uppercase transition-all hover:bg-terracotta-dark"
            >
              Reserve Your Stay
            </Link>
            <Link
              href="/suites"
              className="inline-flex h-14 items-center justify-center px-10 border border-ivory/40 text-ivory text-sm font-medium tracking-widest uppercase transition-all hover:bg-ivory/10"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-[1px] bg-ivory/40" />
      </motion.div>
    </section>
  );
}
