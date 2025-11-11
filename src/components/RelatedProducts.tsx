// src/components/RelatedProducts.tsx
"use client";

import Image from "next/image";
import React from "react";

const icons = [
  { id: 1, src: "/Icon1.svg", alt: "Product icon 1" },
  { id: 2, src: "/Icon2.svg", alt: "Product icon 2" },
  { id: 3, src: "/Icon3.svg", alt: "Product icon 3" },
  { id: 4, src: "/Icon4.svg", alt: "Product icon 4" },
  { id: 5, src: "/Icon5.svg", alt: "Product icon 5" },
];

export default function RelatedProducts() {
  return (
    <section
      aria-labelledby="related-products-heading"
      className="w-full bg-[#eaf6ff] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="related-products-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
            Related Products
          </h2>
        </div>

        {/* Icons row */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {icons.map((icon, idx) => (
            <div
              key={icon.id}
              className={`
                flex items-center justify-center
                rounded-full bg-white shadow-md
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                ${idx === 2 ? "ring-4 ring-white/80 shadow-lg scale-[1.03]" : ""}
              `}
              aria-hidden={false}
              title={`Related product ${icon.id}`}
            >
              <Image src={icon.src} alt={icon.alt} width={64} height={64} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
          ))}
        </div>

        {/* Central card wrapper */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[920px]">
            {/* Outer card background / soft border */}
            <div className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(18,63,111,0.06)] border border-white/60 p-6 md:p-8">
              {/* Search-like title bar */}
              <div className="mx-auto max-w-[760px]">
                <div className="relative">
                  <div
                    className="
                      bg-white rounded-full shadow-inner border border-slate-100
                      px-4 py-3 md:px-6 md:py-4
                      flex items-center gap-4
                      w-full
                    "
                  >
                    {/* small left icon */}
                    <div className="w-9 h-9 rounded-md flex items-center justify-center bg-[#e7f5ff]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 12h18" stroke="#0570c9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <span className="block text-sm md:text-base font-semibold text-slate-800">AcuCheck</span>
                    </div>
                  </div>
                </div>

                {/* description card (inside outer card) */}
                <div className="mt-5 md:mt-6 bg-white rounded-xl p-4 md:p-6 border border-slate-50 shadow-sm">
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    AcuCheck analyzes real-time cash flow, verifies income and the ability to pay, and
                    flags financial risk to help you make smarter, faster, and safer lending decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button - centered under the card */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="inline-flex items-center gap-3 bg-[#0560c9] hover:bg-[#0a62d1] text-white font-medium px-6 py-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#0b66d9]/30"
              >
                {/* small rocket icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2l3 6-3 3-3-3 3-6z" fill="#fff" opacity="0.9" />
                </svg>
                <span className="text-sm md:text-base">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* subtle decorative grid lines for big screens (purely visual) */}
        <div className="hidden lg:block">
          <div className="absolute inset-x-0 -bottom-16 h-48 pointer-events-none">
            {/* decorative shapes could be added here if desired */}
          </div>
        </div>
      </div>
    </section>
  );
}
