"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254711620219";
const MESSAGE = "Hello! I'd like to make an enquiry about Meru Slopes Hotel.";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-ivory shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
