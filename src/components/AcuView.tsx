"use client";

import Image from "next/image";

export default function AcuView() {
  return (
    <section
      className="w-full font-sarabun bg-cover bg-center py-6 px-4 md:px-6 flex flex-col items-center pb-10"
      style={{ backgroundImage: "url('/AcuViewBg.png')" }}
    >
      <div className="py-8 md:py-12">
        <h1 className="text-center font-bold text-black text-3xl md:text-4xl">
          AcuView
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-t-[14px] px-6 md:px-10 py-8 md:py-10 w-full max-w-[80%]">
        <div className="flex-1 w-full mb-8 lg:mb-0 lg:pr-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F1720] mb-4">
            Real-Time Loan Intelligence
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-[#0F1720] mb-4">
            <span className="font-bold">AcuView</span> is the world’s first and
            only{" "}
            <span className="font-bold">
              real-time loan intelligence network
            </span>
            , built exclusively for lenders who can’t afford to guess.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#0F1720]">
            While others rely on outdated data, AcuView gives you instant
            visibility into borrower activity across an expanding network of
            storefront and online lenders. You&apos;ll know if an applicant is
            stacking loans before you fund, not after they default.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              type="button"
              className="flex items-center justify-center w-75 min-h-[80px] text-white font-semibold cursor-pointer"
              style={{
                backgroundImage: "url('/AcuViewButtonBg.webp')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                paddingBottom: "20px",
                paddingLeft: "22px",
                paddingRight: "22px",
              }}
              aria-label="Get A Demo"
            >
              <Image
                src="/RocketIcon.png"
                alt="Rocket Icon"
                width={20}
                height={20}
              />
              <span className="ml-2">Start Your Free 90-Day Trial</span>
            </button>

            <button
              className="flex items-center justify-center w-65 min-h-[30px] text-[#085AAC] font-semibold border-2 border-[#085AAC] rounded-full shadow-md px-5"
              style={{ height: "55px" }}
            >
              <Image
                src="/VideoIcon.png"
                alt="Demo Icon"
                width={25}
                height={25}
              />
              <span className="ml-2">See AcuView in Action</span>
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <object
            type="image/svg+xml"
            data="/Real-time-loan- intelligence.svg"
            className="w-[80%] sm:w-[60%] md:w-[70%] lg:w-full max-w-[450px] h-auto"
            aria-label="Cash flow is the new credit score illustration"
          >
            Real-Time Loan Intelligence
          </object>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap gap-2 mt-2 w-full max-w-[80%]">
        {[
          {
            title: "The Lender Network Effect",
            items: [
              "The More Lenders Join, The Stronger The System Becomes",
              "Protected By Patented Technology, Which Means Your Customer List Stays Safe",
              "Tap Into 1M+ Borrower Data Points And Growing Daily",
            ],
            icons: [
              "/IconLendersOne.svg",
              "/IconLendersTwo.svg",
              "/IconLendersThree.svg",
            ],
          },
          {
            title: "Real-Time Borrower Surveillance",
            items: [
              "Instantly Detect If A Borrower Is Applying At Multiple Lenders",
              "See Loan Activities Across Online And Storefront Lenders",
              "Receive Alerts Before Final Approval",
            ],
            icons: [
              "/IconLendersFour.svg",
              "/IconLendersFive.svg",
              "/IconLendersSix.svg",
            ],
          },
          {
            title: "Fraud Detection At Its Finest",
            items: [
              "Cross-Check Identity, Income, And Banking Details",
              "Flag Suspicious Borrowing Patterns And Data Mismatches In Real Time",
              "Reveal Hidden Risks That Traditional Reports Miss.",
            ],
            icons: [
              "/IconLendersSeven.svg",
              "/IconLendersEight.svg",
              "/IconLendersNine.svg",
            ],
          },
        ].map((section, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-[280px] bg-white text-[#0F1720] p-6 shadow-md relative"
          >
            <div className="relative flex items-center">
              <h3 className="text-lg md:text-xl font-semibold border-b border-[#156DDE] pb-3 w-full text-start">
                {section.title}
              </h3>
              <span
                className="absolute"
                style={{
                  left: 0,
                  top: "100%",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #156dde 0%, #0a54c2 100%)",
                  boxShadow:
                    "-1.62px -1.62px 6.47px rgba(255,255,255,0.25) inset, 0px 0px 17.56px 3.24px rgba(27,114,222,0.33)",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <span
                className="absolute"
                style={{
                  right: 0,
                  top: "100%",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, #156dde 0%, #0a54c2 100%)",
                  boxShadow:
                    "-1.62px -1.62px 6.47px rgba(255,255,255,0.25) inset, 0px 0px 17.56px 3.24px rgba(27,114,222,0.33)",
                  transform: "translate(50%, -50%)",
                }}
              />
            </div>
            <ul className="flex flex-col gap-3 mt-6">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base"
                >
                  <Image
                    src={section.icons[i]}
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-b-[14px] mt-2 w-full max-w-[80%] p-6 md:p-10 flex justify-center items-center relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-[75%] rounded-[20px]"
        >
          <source src="/AcuViewMatrix.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="block md:hidden w-[90%] max-w-[300px] rounded-[16px]"
        >
          <source src="/MetrixMobile.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row justify-around items-center text-center gap-6 md:gap-4 w-[80%] md:w-[65%]">

          <div className="w-full md:w-[30%]">
            <h2 className="text-[18px] md:text-[22px] lg:text-[30px] font-bold text-[#F83F3F]">
              37%
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0F1720]">
              And Growing Reduction <br /> In Stacking-Related Defaults
            </p>
          </div>

          <div className="w-full md:w-[20%]">
            <h2 className="text-[18px] md:text-[22px] lg:text-[30px] font-bold text-[#14B80C]">
              99%
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0F1720]">
              Faster Customer <br /> Verification
            </p>
          </div>

          <div className="w-full md:w-[20%]">
            <h2 className="text-[18px] md:text-[22px] lg:text-[30px] font-bold text-[#3475FB]">
              &lt; 1 sec
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#0F1720]">
              Insights Delivery <br /> Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
