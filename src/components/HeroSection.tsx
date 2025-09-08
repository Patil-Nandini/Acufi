"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full text-white font-sarabun overflow-hidden min-h-[700px] pt-10 ">
      {/* Full background video */}
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

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20  gap-2 md:gap-12">
        <div className="flex-1">
          <h1 className="text-[32px] md:text-[42px] font-bold leading-tight text-white uppercase">
            <span
              className="inline-block px-4 py-4 rounded-[60px] text-[35px] md:text-[35px] font-bold"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/acufi-bg.webp')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "20px 47px",
              }}
            >
              ACUFI
            </span>
            <span className="ml-3">— Modern</span>
            <br />
            Neo Bank for your Business
          </h1>
          {/* <h1
            className="m-0 uppercase font-bold text-white leading-[1.05]
               text-[36px] sm:text-[28px] md:text-[42px] lg:text-[52px]"
          >
            <span
              className="align-middle inline-block rounded-[60px]
               font-bold px-5 md:px-6 py-3 md:py-4 mr-2
               text-[26px] sm:text-[28px] md:text-[32px] lg:text-[34px]"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/acufi-bg.webp')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              ACUFI
            </span>

            <span className="hidden lg:inline ml-2 ">— MODERN NEO</span>
            <br className="hidden lg:block" />
            <span className="hidden lg:inline">BANK FOR YOUR BUSINESS</span>

            <span className="hidden md:inline lg:hidden ml-2">
              — MODERN NEO BANK FOR
            </span>
            <br className="hidden md:block lg:hidden" />
            <span className="hidden md:inline lg:hidden">YOUR BUSINESS</span>

            <span className="inline md:hidden ml-2 leading-[1.20] ">
              — MODERN{" "}
            </span>
            <br className="md:hidden " />
            <span className="md:hidden leading-[1.20]">
              NEO BANK FOR YOUR BUSINESS
            </span>
          </h1> */}

          {/* <div className="relative isolate w-fit max-w-[92vw] mt-4 mb-6 md:py-4">
            <span
              className="absolute -inset-[10px] -z-10 rounded-[30px]
                   bg-[radial-gradient(60%_160%_at_50%_-40%,rgba(142,201,242,0.35),rgba(142,201,242,0)_70%)]
                   blur-[12px]"
            />
            <div
              className="rounded-[26px] p-[6px]
                  bg-[linear-gradient(180deg,rgba(142,201,242,0.65),rgba(132,144,255,0.35)_60%,rgba(132,144,255,0.22))]
                  ring-1 ring-white/25 shadow-[0_2px_20px_rgba(132,144,255,0.15)]"
            >
              <a
                href="#"
                className="relative block rounded-[22px] overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-[22px]
                      bg-[linear-gradient(180deg,#0B1E3F_0%,#0B1B39_58%,#091634_100%)]
                      ring-1 ring-white/10"
                />
                <div className="relative px-5 py-3 sm:px-7 sm:py-3.5 md:px-9 md:py-4">
                  <span
                    className="block text-center font-semibold tracking-[-0.01em] leading-[1.15]
                         whitespace-normal sm:whitespace-nowrap text-[12px]
                         sm:!text-[clamp(16px,1.6vw,22px)]
                         bg-gradient-to-r from-[#8EC9F2] to-[#8490FF]
                         bg-clip-text text-transparent"
                  >
                    When Banks Say No... We Say, Let's Talk!
                  </span>
                </div>
              </a>
            </div>
          </div> */}
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

          <div className="flex justify-start mt-2 lg:mt-4">
            <div className="relative w-[250px] h-[160px] rounded-[20px] overflow-hidden cursor-pointer group">
              <video
                src="/Button-animation-Acufi.webm"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-4 transition-transform duration-300 ease-in-out group-hover:scale-[1.03] group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-[20px]">
                <div className="flex justify-end w-full mr-4">
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
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Box 1 (top) */}
              <div
                className="
          absolute pointer-events-auto
         left-[6%] sm:left-[8%] md:left-[8%] lg:left-[8%] xl:left-[8%]
       top-[51.4%] sm:top-[53%] md:top-[53%] lg:top-[52%] xl:top-[52%]
          w-[36%] sm:w-[62%] md:w-[58%] lg:w-[30%] xl:w-[30%]
          text-white rounded-xl p-3 sm:p-3.5 md:p-4
        "
              >
                <p className="font-semibold text-[6px] sm:text-[9px] md:text-[12px] lg:text-[10px] xl:text-[12px] leading-snug">
                  Get underwritten in 1–2 days
                </p>
              </div>

              {/* Box 2 (middle) */}
              <div
                className="
          absolute pointer-events-auto
        left-[6%] sm:left-[8%] md:left-[8%] lg:left-[8%] xl:left-[8%]
        top-[66.5%] sm:top-[68%] md:top-[68%] lg:top-[67%] xl:top-[67%]
          w-[48%] sm:w-[62%] md:w-[58%] lg:w-[40%] xl:w-[54%]
          text-white rounded-xl p-3 sm:p-3.5 md:p-4
        "
              >
                <p className="font-semibold text-[7px] sm:text-[9px] md:text-[12px] lg:text-[10px] xl:text-[12px]  leading-snug">
                  Full-service business banking
                </p>
              </div>

              {/* Box 3 (bottom) */}
              <div
                className="
          absolute pointer-events-auto
        left-[6%]  sm:left-[8%] md:left-[8%] lg:left-[8%] xl:left-[8%]
        bottom-[7.8%]  sm:bottom-[10%] md:bottom-[10%] lg:bottom-[9%] xl:bottom-[8%]
          w-[66%] sm:w-[62%] md:w-[58%] lg:w-[56%] xl:w-[54%]
          text-white rounded-xl p-3 sm:p-3.5 md:p-4
        "
              >
                <p className="font-semibold text-[7px] sm:text-[9px] md:text-[12px] lg:text-[10px] xl:text-[12px]  leading-snug">
                  Purpose-built tools for lending, cash flow, and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
