"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 200); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative w-full text-white font-sarabun overflow-hidden min-h-[700px] pt-10 ">
      <video
        autoPlay
        muted
        loop
        poster="/hero-bg-img.webp"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <source src="/HeroBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <div className="absolute inset-0 bg-[#06122d]/55 md:bg-[#06122d]/45" />
        <div
          className="absolute inset-0
                  bg-[radial-gradient(120%_90%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.65)_100%)]"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 md:h-36
                  bg-gradient-to-t from-[#020b1e]/80 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20  gap-2 md:gap-[2] lg:gap-[2]">
        <div className="flex-1">
          <h1 className="text-[27px] sm:text-[40px] md:text-[42px] font-bold leading-tight text-white uppercase">
            <span
              className="inline-block py-[20px] px-[32px] sm:px-[47px] sm:py-[20px] rounded-[60px] text-[35px] md:text-[35px] font-bold "
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/acufi-bg.webp')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // padding: "20px 47px",
                marginLeft: "-12px",
              }}
            >
              ACUFI
            </span>
            <span className="ml-3">— Modern</span>
            <br />
            Neo Bank for your Business
          </h1>
          <div className="w-[300px] h-[50px] sm:w-fit sm:h-auto mb-6 mt-6 relative lg:w-fit lg:h-auto  ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/When-Banks-Say-No…-We-Say-Lets-Talk-bg.webp')",
              }}
            ></div>

            <a
              href="#"
              className="relative block text-center py-2 px-6 md:px-16 sm:py-6 sm:px-12  lg:px-18
               text-[14px] sm:text-[20px] lg:text-[18px] font-semibold text-white"
            >
              <span className="bg-gradient-to-r from-[#8EC9F2] to-[#8490FF] bg-clip-text text-transparent relative sm:bottom-[6px]">
                When Banks Say No...We Say, Let&apos;s Talk!
              </span>
            </a>
          </div>

          <p className="text-[18px] sm:text-[18px] text-gray-200 mb-1 max-w-[550px] weight-normal">
            The Neo bank built for high-risk, high-growth businesses. We&apos;re
            not afraid of industries that others call{" "}
            <span className="font-bold text-white">&quot;unbankable&quot;</span>
            .<br />
            From short-term lending to peptides and cannabis to crypto,{" "}
            <span className="font-bold text-white">AcuFi</span> provides modern
            financial services designed for your business.
          </p>

          <div className="flex justify-start mt-2 lg:mt-4 ml-[-7px]">
            <div className="relative w-[250px] h-[160px] rounded-[20px] overflow-hidden cursor-pointer group">
              <video
                src="/Button-animation-Acufi.webm"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4 transition-transform duration-300 ease-in-out group-hover:scale-[1.03] group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-[20px]"               onClick={() => {
                    window.location.href = "https://acufi.com/lets-connect/";
                  }}>
                <div
                  className="flex justify-end w-full mr-4"
    
                >
                  <Image
                    src="https://acufi.com/images/Arrow1Icon.svg"
                    alt="Arrow Icon"
                    width={35}
                    height={35}
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:-rotate-45"
                  />
                </div>
                <p className=" text-[18px] sm:text-[18px] text-center mb-7">
                  Get Started!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: video + overlay pills */}
        <div className="flex-1 flex items-start md:items-center justify-center relative min-w-[250px]">
          <div className="relative w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[550px] md:max-w-[600px] lg:max-w-[720px] rounded-[30px] shadow-lg relative z-10"
            >
              <source
                src="https://acufi.com/wp-content/uploads/2025/08/Modern-neo-bank-1st-page-1.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>

            {/* Overlay text boxes — positioned in % so they follow the video size */}
            {showOverlay && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Box 1 */}
                <div className="absolute pointer-events-auto left-[6%] sm:left-[8%] md:left-[8%] lg:left-[8%] xl:left-[8%] top-[51.4%] sm:top-[53%] md:top-[53%] lg:top-[52%] xl:top-[54%] w-[36%] sm:w-[62%] md:w-[33%] lg:w-[30%] xl:w-[30%] text-white rounded-xl p-3 sm:p-3.5 md:p-2">
                  <p className="font-semibold text-[6px] sm:text-[9px] md:text-[14px] lg:text-[10px] xl:text-[12px] leading-snug">
                    Get underwritten in 1–2 days
                  </p>
                </div>

                {/* Box 2 */}
                <div className="absolute pointer-events-auto left-[6%] sm:left-[8%] md:left-[8%] lg:left-[8%] xl:left-[8%] top-[66.5%] sm:top-[68%] md:top-[68%] lg:top-[67%] xl:top-[69%] w-[48%] sm:w-[62%] md:w-[38%] lg:w-[40%] xl:w-[54%] text-white rounded-xl p-3 sm:p-3.5 md:p-2">
                  <p className="font-semibold text-[7px] sm:text-[9px] md:text-[14px] lg:text-[10px] xl:text-[12px] leading-snug">
                    Full-service business banking
                  </p>
                </div>

                {/* Box 3 */}
                <div className="absolute pointer-events-auto left-[6%] sm:left-[8%] md:left-[7%] lg:left-[7%] xl:left-[7%] bottom-[7.8%] sm:bottom-[10%] md:bottom-[9%] lg:bottom-[9.5%] xl:bottom-[9%] w-[66%] sm:w-[62%] md:w-[58%] lg:w-[56%] xl:w-[54%] text-white rounded-xl p-3 sm:p-3.5 md:p-4">
                  <p className="font-semibold text-[7px] sm:text-[9px] md:text-[14px] lg:text-[10px] xl:text-[12px] leading-snug">
                    Purpose-built tools for lending, cash flow, and payments
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
