import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Logo } from "@/components/ui/logo";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "Suites & Rooms", href: "/suites" },
      { label: "Dining", href: "/dining" },
      { label: "Experiences", href: "/experiences" },
      { label: "Weddings", href: "/weddings" },
      { label: "Conference", href: "/conference" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Location", href: "/location" },
      { label: "Upcoming Events", href: "/events" },
      { label: "Gallery", href: "/#gallery" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Reservations", href: "/reservations" },
      { label: "Careers", href: "#" },
      { label: "Press & Media", href: "#" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="py-section-mobile lg:py-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-serif text-sm tracking-widest uppercase mb-4 text-brass">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-sand hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-8 lg:my-12 bg-charcoal-light" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <Logo logoSrc="/images/logo.png" dark className="text-lg" />
            <p className="text-sm text-sand mt-1">
              P.O. Box 2554-60200 Meru, Kenya
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-sm text-sand">
              +254 711 620 219 / +254 719 475 631
            </p>
            <p className="text-sm text-sand">
              info@meruslopeshotel.com
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-light text-center">
          <p className="text-xs text-charcoal-muted">
            &copy; {new Date().getFullYear()} Meru Slopes Hotel. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
