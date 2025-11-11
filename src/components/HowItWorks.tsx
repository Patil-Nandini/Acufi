// src/components/HowItWorks.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  title: string;
  desc: string;
  img?: string; // path in /public
};

const steps: Step[] = [
  {
    id: 1,
    title: "Borrower Connects",
    desc: "Customers securely link their bank account via our application or portal.",
    img: "/Step2.png",
  },
  {
    id: 2,
    title: "Real-Time Checks",
    desc: "AcuFi verifies account ownership, activity, and identity consistency.",
    img: "/Step1.png",
  },
  {
    id: 3,
    title: "Instant Decision",
    desc: "Results returned in under 3 seconds, ready to approve or decline.",
    img: "/Step2.png",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(2); // default active step (center)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("opacity-100", "translate-y-0");
            target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { root: null, threshold: 0.18 }
    );

    const cards = section.querySelectorAll<HTMLElement>("[data-animate-step]");
    cards.forEach((c) => {
      c.classList.add("opacity-0", "translate-y-6");
      observer.observe(c);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
      className="w-full bg-gradient-to-b from-[#031a3a] via-[#041a39] to-[#021425] text-white py-12 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Heading */}
        <header className="text-center mb-8 md:mb-12">
          <h2 id="how-it-works-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            How It Works (3-Step Flow)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Simple integration, instant results.
          </p>
        </header>

        {/* Timeline top row */}
        <div className="relative mb-10">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative">
              <div className="h-[2px] bg-white/8 rounded-full absolute inset-x-0 -top-5 transform -translate-y-1/2 py-1" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full flex justify-between items-start px-2 sm:px-6">
                {steps.map((s) => (
                  <div key={s.id} className="flex flex-col items-start ">
                    <div
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-100/90 shadow-[0_0_14px_rgba(255,255,255,0.06)]"
                      aria-hidden
                    />
                   
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main grid + decorative area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-10">
          {/* Left column: Step 1 (on wide screens these are columns; on mobile stacked) */}
          {steps.map((s) => (
            <article
              key={s.id}
              data-animate-step
              role="button"
              tabIndex={0}
              aria-pressed={activeStep === s.id}
              onClick={() => setActiveStep(s.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveStep(s.id);
                }
              }}
              className={`relative flex flex-col items-start rounded-2xl p-6 sm:p-8
                 cursor-pointer transition-all duration-300 ease-out
                ${
                  activeStep === s.id
                    ? ""
                    : ""
                }`}
            >
              <div className="mb-4">
                <div className="inline-block  bg-slate-800/40 text-slate-200 rounded-md px-3 py-1 text-xs font-semibold ">
                  Step {s.id}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-200/90 mb-4">{s.desc}</p>

           
            </article>
          ))}
        </div>

        {/* Decorative central flow area — shows the active step image/animation */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1100px] h-[260px] md:h-[300px] lg:h-[260px]">
          

          

            {/* Active step media display (centered, above connectors) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[360px]">
              {mounted && steps.find((s) => s.id === activeStep)?.img ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={steps.find((s) => s.id === activeStep)!.img!}
                    alt={`Active step ${activeStep}`}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-white/3 rounded-lg flex items-center justify-center" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
