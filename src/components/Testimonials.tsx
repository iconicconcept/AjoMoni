"use client";

import { useEffect, useState } from "react";
import { TestimonialCard } from "@/data/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ toggle logic
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, TestimonialCard.length - itemsPerPage)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const isStartDisabled = currentIndex === 0;
  const isEndDisabled = currentIndex >= TestimonialCard.length - itemsPerPage;

  return (
    <div id="testimonials" className="py-11 mt-4 md:mt-6">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[16px] font-normal text-gray-950 mb-2">
          Testimonials
        </h2>
        <h2 className="text-center sm:text-2xl lg:text-3xl font-bold text-gray-950 mb-8">
          Proof in praise <br /> read our customers testimonials.
        </h2>

        <div className="relative">
          {/* slider container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {TestimonialCard.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-3 px-1 py-1"
                  style={{
                    flex: `0 0 ${100 / itemsPerPage}%`,
                    maxWidth: `${100 / itemsPerPage}%`,
                  }}
                >
                  {/* 👇 image stays normal size (no circle) */}
                  <img src={card.src} alt={card.alt} className="" />
                  <p className="text-[15px] font-normal text-center">
                    {card.paragraph}
                  </p>
                  <h3 className="text-[17px] font-bold text-center">
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
