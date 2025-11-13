// src/components/HeroBankVerification.tsx
"use client";

import Image from "next/image";
import React from "react";

export default function WhyBankVerification() {
  const cards = [
    {
      id: 1,
      img: "/BankVer1.png",
      title: "Bank Verification",
      desc: "Verify the customer owns the bank account on their loan application.",
    },
    {
      id: 2,
      img: "/BankVer2.png",
      title: "Fraud Prevention",
      desc: "Bank account takeovers, impersonation, and account mismatches.",
    },
    {
      id: 3,
      img: "/BankVer3.png",
      title: "Identity Matching",
      desc: "Confirm the name, routing number & bank account match.",
    },
  ];

  return (
    <section
      className="
        w-full flex 
        p-4 rounded-3xl 
        bg-[#C5DCFD]
      "
    >
      <div className="w-[100%] ">
        {/* Container with inner border / padded card area */}
        <div
          className="
           
            px-6 py-10 md:px-10 md:py-14  bg-[url('/BankVerificationBg.png')] bg-no-repeat bg-center bg-cover rounded-3xl lg:h-[100vh]
          "
        >
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12  ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b2340]">
              Why Bank Verification Matters
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#334155]">
              Traditional verification methods are slow, error-prone, and vulnerable to fraud.
              By the time you discover the mismatch, it's already too late.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {cards.map((c) => (
              <article
                key={c.id}
                className="
                  relative flex flex-col items-center text-center
                  rounded-2xl overflow-hidden
                  p-6 md:p-8
                  bg-[url('/CardBg.png')] bg-no-repeat bg-center bg-contain
                  min-h-[360px]
                "
              >
                {/* Top image (will be replaced by animation later) */}
                <div
                  className="
                    w-full flex justify-center
                    transform transition-all duration-500 ease-out
                    hover:-translate-y-4 hover:scale-[1.02]
                  "
                >
                  <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[290px] flex items-center justify-center">
                    <Image
                      src={c.img}
                      alt={c.title}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Content below */}
                <div className="my-6 flex-1 flex flex-col justify-start">
                  <h3 className="text-lg md:text-xl font-semibold text-[#0b2340]">{c.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-[#334155] leading-relaxed w-[200px]">
                    {c.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
