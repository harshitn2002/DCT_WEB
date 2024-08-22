"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Carousel from "./Carousel"; // Adjust the import path as needed

function ServiceContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const openCard = searchParams.get("openCard");
      if (openCard !== null) {
        const cardIndex = parseInt(openCard, 10);
        const card = document.getElementById(`card-${cardIndex}`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth" });
          const cardButton = card.querySelector("button");
          if (cardButton) {
            cardButton.click();
          }
        }
      }
    }
  }, [searchParams]);

  return <Carousel />;
}

export default function ServicesPage() {
  return (
    <div className="services-section flex flex-col items-center justify-center mt-20 text-white">
      <h1 className="text-[10vh] font-bold mq750:text-[5vh]">DCT SERVICES</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ServiceContent />
      </Suspense>
    </div>
  );
}
