"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Stay",
    href: "/suites",
    children: [
      { label: "Superior Room", href: "/suites#superior" },
      { label: "Deluxe Room", href: "/suites#deluxe" },
      { label: "Family Room", href: "/suites#family" },
      { label: "Executive Suite", href: "/suites#executive" },
      { label: "Master Ensuite", href: "/suites#master" },
    ],
  },
  {
    label: "Dining",
    href: "/dining",
    children: [
      { label: "Slopes Restaurant", href: "/dining#slopes" },
      { label: "The Oak Pub", href: "/dining#oak" },
      { label: "Pizza City", href: "/dining#pizza" },
    ],
  },
  { label: "Experiences", href: "/experiences" },
  { label: "Weddings", href: "/weddings" },
  { label: "Conference", href: "/conference" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Logo logoSrc="/images/logo.png" dark={!scrolled} />

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all rounded-sm",
                      scrolled
                        ? "text-charcoal hover:text-terracotta hover:bg-black/5"
                        : "text-ivory/90 hover:text-ivory hover:bg-white/10",
                      isActive(item.href) && (scrolled ? "text-terracotta" : "text-ivory"),
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {item.children && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-ivory shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-3 text-sm text-charcoal-muted hover:text-terracotta hover:bg-ivory-dark transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="primary" size="sm" asChild className="hidden sm:inline-flex">
                <Link href="/reservations">Reserve</Link>
              </Button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden transition-colors",
                  !scrolled ? "text-ivory" : "text-charcoal",
                )}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory pt-20"
          >
            <nav className="flex flex-col p-8 gap-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-3 text-lg font-serif border-b border-sand transition-colors",
                      isActive(item.href) ? "text-terracotta" : "text-charcoal",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-charcoal-muted hover:text-terracotta"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="primary" size="lg" asChild className="mt-4">
                <Link href="/reservations" onClick={() => setMobileOpen(false)}>
                  Reserve Now
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
