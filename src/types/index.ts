export interface Room {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  heroImage: Image;
  gallery: Image[];
  amenities: string[];
  bedConfig: string;
  view: string;
  maxGuests: number;
  size: string;
  priceFrom: number;
  featured: boolean;
}

export interface DiningVenue {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: Image;
  hours: string;
  cuisine: string;
  capacity: number;
  chefName?: string;
  chefQuote?: string;
  chefImage?: Image;
}

export interface Experience {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: Image;
  duration: string;
  includes: string[];
  type: "excursion" | "cultural" | "wellness" | "corporate";
}

export interface Event {
  _id: string;
  title: string;
  slug: string;
  date: string;
  endDate?: string;
  description: string;
  image: Image;
  category: "wedding" | "conference" | "entertainment" | "seasonal";
}

export interface Image {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  quote: string;
  avatar?: Image;
  rating: number;
  source: "tripadvisor" | "google" | "booking";
}

export interface SiteSettings {
  name: string;
  tagline: string;
  heroVideoUrl: string;
  heroPosterUrl: string;
  gmName: string;
  gmMessage: string;
  gmPhoto: Image;
  contact: ContactInfo;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  email1: string;
  email2: string;
  address: string;
  googleMapsUrl: string;
  whatsapp: string;
}
