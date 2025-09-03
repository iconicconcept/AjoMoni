"use client";

import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/data/data";

const Testimonials = () => {
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set responsive itemsPerPage and measure viewport width
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1); // mobile
      else if (w < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(3); // desktop

      if (viewportRef.current) {
        setViewportWidth(viewportRef.current.clientWidth);
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // clamp currentIndex whenever itemsPerPage changes
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(0, TestimonialCard.length - itemsPerPage))
    );
  }, [itemsPerPage]);

  // pixel-based sizing to avoid percent rounding issues that cause left alignment
  const itemWidth = viewportWidth ? Math.floor(viewportWidth / itemsPerPage) : 0;
  const trackWidth = itemWidth * TestimonialCard.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, Math.max(0, TestimonialCard.length - itemsPerPage))
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const isStartDisabled = currentIndex === 0;
  const isEndDisabled = currentIndex >= TestimonialCard.length - itemsPerPage;

  return (
    <div id="testimonials" className="py-11 mt-4 md:mt-6 mb-2">
      {/* <-- increased horizontal padding here as requested */}
      <div className="container mx-auto px-6">
        <h2 className="text-center text-[16px] font-normal text-gray-950 mb-2">
          Testimonials
        </h2>
        <h2 className="text-center text-2xl lg:text-3xl leading-tighter font-bold text-gray-950 mb-8">
          Proof in praise <br /> read our customers testimonials.
        </h2>

        <div className="relative">
          {/* viewport — measured width */}
          <div ref={viewportRef} className="overflow-hidden">
            {/* track — explicit width in px; center when track is narrower than viewport */}
            <div
              className="flex"
              style={{
                width: trackWidth ? `${trackWidth}px` : "100%",
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                transition: "transform 300ms ease-in-out",
                margin: trackWidth && trackWidth < viewportWidth ? "0 auto" : undefined,
              }}
            >
              {TestimonialCard.map((card, idx) => (
                <div
                  key={idx}
                  className="box-border flex flex-col justify-start items-start gap-6 px-4 py-4"
                  style={{
                    width: itemWidth ? `${itemWidth}px` : undefined,
                    flex: "0 0 auto",
                    maxWidth: itemWidth ? `${itemWidth}px` : undefined,
                  }}
                >
                  {/* image kept as-is (not circular) and centered horizontally inside the card */}
                  <img src={card.src} alt={card.alt} className="mx-auto" />
                  <p className="text-[15px] font-normal text-center w-full">
                    {card.paragraph}
                  </p>
                  <h3 className="text-[17px] font-bold text-center w-full">
                    {card.author}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={prevSlide}
            disabled={isStartDisabled}
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
              isStartDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-500"
            }`}
          >
            <img src="toggleleft.png" alt="prev" className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={isEndDisabled}
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full transition-colors duration-300 ${
              isEndDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-500"
            }`}
          >
            <img src="toggleright.png" alt="next" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
