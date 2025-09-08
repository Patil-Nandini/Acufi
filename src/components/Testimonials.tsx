"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Adara G",
    role: "Regional Manager",
    avatar: "/Avatar.png",
    comment: "Three banks rejected us. AcuFi approved us in 48 hours.",
  },
  {
    name: "Isla B",
    role: "SVP Fraud Director",
    avatar: "/Avatar-1.png",
    comment:
      "AcuFi gave us real banking tools that work for high-risk businesses.",
  },
  {
    name: "Apollo C",
    role: "Director of Corporate Accounting and Finance",
    avatar: "/Avatar-2.png",
    comment:
      "AcuFi isn’t just a bank—it’s the partner we wish we had years ago.",
  },
];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isCarousel, setIsCarousel] = useState(false);

  // Determine visible cards and carousel based on screen width
  const updateLayout = () => {
    if (window.innerWidth < 768) {
      setVisibleCards(3); // show all stacked
      setIsCarousel(false);
    } else if (window.innerWidth < 1024) {
      setVisibleCards(2); // tablet
      setIsCarousel(true);
    } else {
      setVisibleCards(3); // desktop
      setIsCarousel(false);
    }
    setCurrentIndex(0);
    if (trackRef.current) trackRef.current.style.transform = "translateX(0)";
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const slideNext = () => {
    if (!trackRef.current) return;
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
      const cardWidth = trackRef.current.children[0].clientWidth + 24;
      trackRef.current.style.transform = `translateX(-${
        cardWidth * (currentIndex + 1)
      }px)`;
    }
  };

  const slidePrev = () => {
    if (!trackRef.current) return;
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const cardWidth = trackRef.current.children[0].clientWidth + 24;
      trackRef.current.style.transform = `translateX(-${
        cardWidth * (currentIndex - 1)
      }px)`;
    }
  };

  return (
    <section
      className="w-full py-16 flex justify-center"
      style={{
        backgroundImage: "url('/testimonials-bgi.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1160px] px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What People Say About Us
          </h2>
          <p className="text-[18px] text-[#0F1720] mt-2">
            Lenders Say It&apos;s Best
          </p>
        </div>

        {/* Desktop / Mobile column layout */}
        {!isCarousel && (
          <div
            style={{ gap: "20px" }}
            className={`flex flex-col w-full ${
              visibleCards === 3
                ? "lg:flex-row lg:gap-6 lg:justify-center"
                : "flex-col gap-10"
            }`}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-[0px_2px_4px_0px_#00000040] p-6 
        ${visibleCards === 3 ? "lg:flex-1" : "w-full"}`}
              >
                <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="text-[22px] font-semibold text-[#0F1720]">
                      {t.name}
                    </h4>
                    <span className="text-[18px] font-semibold text-[#0F1720] block">
                      {t.role}
                    </span>
                  </div>
                </div>
                <div className="text-[#ff9900] text-[32px] my-2 text-left">
                  ★★★★★
                </div>
                <p className="text-[18px] font-medium text-[#0F1720] text-left">
                  {t.comment}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tablet Carousel */}
        {isCarousel && (
          <div className="relative w-full">
            <div className="overflow-hidden w-full">
              <div
                ref={trackRef}
                className="flex flex-col md:flex-row gap-6 transition-transform duration-300 ease-in-out"
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-none"
                    style={{ width: "calc(50% - 12px)" }}
                  >
                    <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={60}
                        height={60}
                        className="w-[60px] h-[60px] rounded-full"
                      />
                      <div className="text-left">
                        <h4 className="text-[22px] font-semibold text-[#0F1720]">
                          {t.name}
                        </h4>
                        <span className="text-[18px] font-semibold text-[#0F1720] block">
                          {t.role}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#ff9900] text-[32px] my-2 text-left">
                      ★★★★★
                    </div>
                    <p className="text-[18px] font-medium text-[#0F1720] text-left">
                      {t.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-2 bottom-[-50px] flex gap-2">
              <button onClick={slidePrev}>
                <Image
                  src="/BackwardIcon.svg"
                  alt="Previous"
                  width={40}
                  height={40}
                  className="w-10"
                />
              </button>
              <button onClick={slideNext}>
                <Image
                  src="/ForwardIcon.svg"
                  alt="Next"
                  width={40}
                  height={40}
                  className="w-10"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
