"use client";

import Image from "next/image";
import React from "react";

export default function HeroBankVerification() {
  return (
    <section className="w-full flex flex-col  py-10 bg-[url('/Hero_bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="w-[92%] mx-auto flex flex-col gap-10">
        {/* Heading row: stacked on small, inline on md+ */}
        <div className="flex flex-col  md:gap-6 gap-4 text-left ml-35 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#071a2b]">
            Verify Bank Accounts in Seconds.
          </h1>

          {/* Lend with + pill — inline on md+ */}
          <div className="flex items-center gap-3 mt-1 md:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#071a2b]">
              Lend with
            </h1>

            <div className="inline-flex items-center px-5 py-2 rounded-full text-white font-semibold tracking-wide select-none bg-[url('/Confidence_bg.png')] bg-no-repeat bg-cover pl-[18px] pr-[18px]">
              <span className="text-sm sm:text-base md:text-lg">CONFIDENCE</span>
            </div>
          </div>
        </div>

        {/* Frame container (BankingFrame as background) */}
        <div className="relative w-full max-w-[2400px] mx-auto -mt-40">
          <div
            className="relative w-full bg-[url('/BankingFrame.png')] bg-no-repeat bg-center bg-contain
                       h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px] 2xl:h-[860px]"
          >
            {/* LEFT-side stack (card then button) */}
            <div
              className="absolute left-8 top-10 md:left-12 md:top-16 lg:left-46 lg:top-65
                         flex flex-col items-start gap-2
                         w-[250px] sm:w-[300px] md:w-[320px]"
            >
              {/* DESIGNED CARD (Figma-like) */}
              <div className="relative ">
                {/* Shield badge overlapping top center */}
                <div
    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full  flex items-center justify-center
      bg-[url('/shield_icon.svg')] bg-no-repeat bg-center bg-contain"
  ></div>


                <div className="mt-8  bg-[url('/herocard_bg.png')] bg-cover bg-center bg-no-repeat rounded-3xl p-10 overflow-hidden
                                w-[250px] sm:w-[300px] md:w-[320px] h-[200px] sm:h-[240px] md:h-[330px]">
                  {/* Card content */}
                  <p className="text-sm text-[#243646]">No more delays.</p>
                  <p className="text-sm text-[#243646] mt-1">No more fraud.</p>

                  <p className="text-sm text-[#243646] mt-3 leading-relaxed">
                    <strong>AcuFi's Bank Verification</strong> gives you
                    real-time banking data to validate bank account ownership.
                  </p>
                </div>
              </div>

              {/* Contact / Book a Demo button (dark rounded as in figma) */}
              <div
                className="relative overflow-hidden cursor-pointer group rounded-[16px]
                           w-[220px] sm:w-[240px] md:w-[320px] h-[184px] flex items-center justify-center
                             bg-[url('/Primary_button_bg.png')] bg-cover bg-center bg-no-repeat
                        text-white "
                onClick={() => {
                  window.location.href = "https://acufi.com/lets-connect/";
                }}
              >
                {/* subtle rocket background can be a bg-image if you have it */}
                <div className="absolute inset-0 opacity-10" />
                <div className="relative z-10 flex items-center justify-between w-[88%]">
                  <div>
                    <p className="text-base font-medium">Contact Sales</p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    {/* arrow icon (local or remote) */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14" stroke="#071a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5l7 7-7 7" stroke="#071a2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder right/center artwork area (keep empty so visuals match Figma) */}
            <div className="absolute right-12 top-24 w-[420px] md:w-[520px] lg:w-[620px]">
              {/* main illustration (optional) - leave empty or add Image */}
            </div>

          
           
          </div>
        </div>
      </div>
    </section>
  );
}
