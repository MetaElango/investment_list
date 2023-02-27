"use client";

import Hero from "@/components/Hero";
import RatingMethodology from "@/components/RatingMethodology";

export default function Rating() {
  return (
    <>
      <Hero firstLine="Rating" secondLine="Methodology" thirdLine={null} />
      <RatingMethodology />
    </>
  );
}
