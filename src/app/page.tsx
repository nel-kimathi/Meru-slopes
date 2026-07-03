import { Hero } from "@/components/home/hero";
import { StoryPreview } from "@/components/home/story-preview";
import { RoomsPreview } from "@/components/home/rooms-preview";
import { DiningPreview } from "@/components/home/dining-preview";
import { DestinationMeru } from "@/components/home/destination-meru";
import { WeddingsPreview } from "@/components/home/weddings-preview";
import { CorporatePreview } from "@/components/home/corporate-preview";
import { Testimonials } from "@/components/home/testimonials";
import { Sustainability } from "@/components/home/sustainability";
import { GMNote } from "@/components/home/gm-note";
import { Awards } from "@/components/home/awards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryPreview />
      <RoomsPreview />
      <DiningPreview />
      <DestinationMeru />
      <WeddingsPreview />
      <CorporatePreview />
      <Testimonials />
      <Sustainability />
      <GMNote />
      <Awards />
    </>
  );
}
