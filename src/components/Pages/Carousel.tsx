// src/components/Carousel.tsx
import React, { useEffect, useState } from "react";

export default function Carousel({
  CarouselData,
}: {
  CarouselData: React.ReactNode[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === CarouselData.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [CarouselData.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
      {CarouselData[currentIndex]}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 ">
        {CarouselData.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 w-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-gray-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
