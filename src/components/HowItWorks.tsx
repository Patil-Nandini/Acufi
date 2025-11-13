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
      <div className="max-w-[1590px] mx-auto">
        {/* Heading */}
        <header className="text-center mb-8 md:mb-12">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            How It Works (3-Step Flow)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Simple integration, instant results.
          </p>
        </header>

        {/* Timeline top row */}
        <div className="relative mb-16">
          <div className="mx-auto max-w-[1520px]">
            <div className="relative">
              {/* Connector line - softer & slightly blurred */}
              <div
                className="absolute inset-x-0 -top-5 transform -translate-y-1/2 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #001334 0%, #75BDF9 31%, #75BDF9 45%, #75BDF9 54%, #75BDF9 63%, #001334 100%)",
                  filter: "blur(2px)",
                  opacity: 0.8,
                }}
              />

              {/* Steps with refined glow/shadow */}
              <div className="absolute left-0 -top-5 -translate-y-1/2 w-full flex justify-between items-start">
                {steps.map((s, idx) => {
                  const isActive = s.id === activeStep;

                  return (
                    <div
                      key={s.id}
                      className="relative flex flex-col items-center"
                    >
                      {/* Outer diffuse halo (larger for active, softer for inactive) */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                          isActive ? "scale-125" : "scale-100"
                        }`}
                        aria-hidden
                      >
                        {/* Use a larger but softer blur for active, smaller diffuse for inactive */}
                        <div
                          style={{
                            // radial gradient halo (soft)
                            background: isActive
                              ? "radial-gradient(circle, rgba(117,189,249,0.65) 0%, rgba(10,36,70,0.12) 40%, transparent 100%)"
                              : "radial-gradient(circle, rgba(117,189,249,0.18) 0%, transparent 70%)",
                          }}
                          className={
                            isActive
                              ? "w-24 h-24 rounded-full blur-[40px]"
                              : "w-20 h-20 rounded-full blur-[36px]"
                          }
                        />
                      </div>

                      {/* The main dot itself - softened via a small blur + gradient */}
                      <div
                        aria-hidden
                        className={`relative z-10 rounded-full transition-all duration-500`}
                        style={
                          isActive
                            ? {
                                width: "26px",
                                height: "26px",
                                background:
                                  "linear-gradient(180deg, #75BDF9 0%, #FFFFFF 100%)",
                                filter: "blur(4px)",
                                boxShadow:
                                  "0 0 40px rgba(117,189,249,0.8), 0 0 80px rgba(117,189,249,0.4)",
                              }
                            : {
                                width: "26px",
                                height: "26px",
                                background:
                                  "linear-gradient(180deg, #75BDF9 0%, #FFFFFF 100%)",
                                filter: "blur(20px)",
                                boxShadow: "0 0 20px rgba(117,189,249,0.25)",
                              }
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main grid + decorative area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-20">
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
    className={`
      relative flex flex-col
      cursor-pointer transition-all duration-300 ease-out
      p-6 sm:p-8 rounded-2xl
      ${s.id === 1 ? "items-start text-left lg:items-start lg:text-left" : ""}
      ${s.id === 2 ? "items-center text-center lg:items-center lg:text-center" : ""}
      ${s.id === 3 ? "items-end text-right lg:items-end lg:text-right" : ""}
    `}
  >
    <div className="mb-4">
      <div
        className={`
          inline-flex items-center justify-center
          rounded-xl px-6 py-3
          border border-[#D1D9E6]/20
          backdrop-blur-[2px]
          transition-all duration-300
          bg-gradient-to-b from-[#0B2D58] to-[#FFFFFF]/10
          ${activeStep === s.id
            ? "text-[#75BDF9] font-extrabold text-[30px] leading-[100%] tracking-[-0.02em]"
            : "text-[#5B91BE] font-normal text-[24px] leading-[100%] tracking-[-0.02em]"
          }
        `}
      
      >
        Step {s.id}
      </div>
    </div>

    <h3
      className={`
        mb-2 transition-all duration-300
        ${activeStep === s.id
          ? "text-white font-extrabold text-[24px] leading-[100%] tracking-[-0.02em]"
          : "text-[#A7A7A7] font-normal text-[24px] leading-[100%] tracking-[-0.02em]"
        }
      `}
    
    >
      {s.title}
    </h3>

    <p
      className={`
        mb-4 transition-all duration-300
        ${activeStep === s.id
          ? "text-white font-medium text-[20px] leading-[100%] tracking-[-0.02em]"
          : "text-[#A7A7A7] font-normal text-[20px] leading-[100%] tracking-[-0.02em]"
        }
      `}
     
    >
      {s.desc}
    </p>
  </article>
))}

        </div>

        {/* Decorative central flow area — shows the active step image/animation */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-[1100px] h-[260px] md:h-[300px] lg:h-[260px]">
            {/* Active step media display (centered, above connectors) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] md:w-[420px] lg:w-[1580px]">
              {mounted && steps.find((s) => s.id === activeStep)?.img ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={steps.find((s) => s.id === activeStep)!.img!}
                    alt={`Active step ${activeStep}`}
                    width={800}
                    height={600}
                    className="w-full h-[560px] object-contain"
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
