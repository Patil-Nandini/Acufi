"use client";
import Image from "next/image";

export default function AcuView() {
  return (
    <section
      className="w-full font-sarabun bg-cover bg-center flex flex-col items-center pb-13"
      style={{ backgroundImage: "url('/AcuViewBg.png')" }}
    >
      <div className="pb-8 py-8 sm:py-12">
        <h1 className="text-center font-bold text-[#0F1720] text-2xl sm:text-3xl lg:text-4xl">
          AcuView
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-white  rounded-t-[14px] px-5 sm:px-8 lg:px-9 w-[95%] lg:w-[85%] py-8 gap-8">
        <div className="flex-[1.4] w-full mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F1720] mb-4">
            Real-Time Loan Intelligence
          </h2>
          <p className="text-[18px] text-[#0F1720] mb-4 leading-relaxed">
            <span className="font-bold text-[18px]">AcuView</span> is the
            world’s first and only{" "}
            <span className="font-bold text-[18px]">
              real-time loan intelligence network
            </span>
            , built exclusively for lenders who can’t afford to guess.
          </p>
          <p className="text-[18px] text-[#0F1720] leading-relaxed">
            While others rely on outdated data, AcuView gives you instant
            visibility into borrower activity across an expanding network of
            storefront and online lenders. You&apos;ll know if an applicant is
            stacking loans before you fund, not after they default.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-col  sm:flex-row gap-2 mt-6">
            <button
              type="button"
              className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[240px] sm:w-[300px] px-7 sm:px-15px"
              style={{
                backgroundImage: "url('/AcuViewButtonBg.webp')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                paddingBottom: "25px",
                // paddingLeft: "15px",
                // paddingRight: "15px",
              }}
              aria-label="Start Your Free 90-Day Trial"
              onClick={() =>
                (window.location.href =
                  "https://acufi.com/acuview-get-started/")
              }
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
              className="flex items-center justify-center w-[230px] sm:w-[270px]  h-[60px] text-[#085AAC] font-semibold border-2 border-[#085AAC] rounded-full shadow-md px-5 cursor-pointer"
              // style={{ height: "55px" }}
              onClick={() =>
                (window.location.href = "https://acufi.com/lets-connect/")
              }
            >
              <Image
                src="/VideoIcon.png"
                alt="Demo Icon"
                width={25}
                height={25}
              />
              <span className="ml-2">See AcuView in Action</span>
            </button>
          </div> */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
  <button
    type="button"
    className="flex items-center justify-center h-[90px] text-white font-semibold cursor-pointer w-[270px] sm:w-[300px] px-7"
    style={{
      backgroundImage: "url('/AcuViewButtonBg.webp')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      paddingBottom: "25px",
    }}
    aria-label="Start Your Free 90-Day Trial"
    onClick={() =>
      (window.location.href = "https://acufi.com/lets-connect/")
    }
  >
    <Image
      src="/RocketIcon.png"
      alt="Rocket Icon"
      width={20}
      height={20}
    />
    <span className="ml-2 whitespace-nowrap">
      Start Your Free 30-Day Trial
    </span>
  </button>

  <button
    className="flex items-center justify-center w-[230px] sm:w-[270px] h-[60px] text-[#085AAC] font-semibold border-2 border-[#085AAC] rounded-full shadow-md px-5 cursor-pointer"
    onClick={() =>
      (window.location.href = "https://acufi.com/acuview-get-started/")
    }
  >
    <Image
      src="/VideoIcon.png"
      alt="Demo Icon"
      width={25}
      height={25}
    />
    <span className="ml-2 whitespace-nowrap">
      See AcuView in Action
    </span>
  </button>
</div>

        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-[100%]">
          <object
            type="image/svg+xml"
            data="/Real-time-loan- intelligence.svg"
            className="w-[90%]"
            // className="w-[85%] sm:w-[70%] md:w-[85%] lg:w-full  h-auto"
          >
            Real-Time Loan Intelligence
          </object>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row flex-wrap gap-2 mt-2 w-full max-w-[94%] lg:max-w-[85%]">
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
            className="flex-1 min-w-[280px] bg-white text-[#0F1720] p-3 sm:p-8 shadow-md"
          >
            <div className="relative flex items-center">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold border-b border-[#156DDE] pb-3 w-full">
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
                <li key={i} className="flex items-start gap-3 text-[17px]">
                  <Image
                    src={section.icons[i]}
                    alt="Icon"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] mr-2"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-b-[14px] mt-2 w-full max-w-[94%] lg:max-w-[85%] p-6 md:p-10 flex justify-center items-center relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-[75%] md:w-[95%] lg:w-[75%] rounded-[20px]"
        >
          <source src="/AcuViewMatrix.webm" type="video/webm" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="block md:hidden max-w-[280px] w-[280px] rounded-[16px]"
        >
          <source src="/MetrixMobile.webm" type="video/webm" />
        </video>

        <div
          className="
      absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2
      flex flex-col md:flex-row justify-center items-center text-center
      gap-6 md:gap-10
      w-[60%] md:w-[65%] px-4 sm:px-0
      max-[767px]:flex-col max-[767px]:gap-[122px] md:gap-[73px] max-[767px]:max-w-[300px]
    "
        >
          {[
            {
              value: "37%",
              color: "text-[#F83F3F]",
              desc: "And Growing Reduction In Stacking-Related Defaults",
            },
            {
              value: "99%",
              color: "text-[#14B80C]",
              desc: "Faster Customer Verification",
            },
            {
              value: "< 1 sec",
              color: "text-[#3475FB]",
              desc: "Insights Delivery Time",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`
    w-full md:w-[27%]
    ${i === 0 ? "max-[767px]:w-[60%]" : ""}
    ${i === 1 ? "max-[767px]:w-[70%]" : ""}
    ${i === 2 ? "max-[767px]:w-[70%]" : ""}
  `}
            >
              <h2
                className={`
            font-bold ${stat.color}
            text-lg sm:text-xl lg:text-[30px]
            max-[767px]:text-[20px]
          `}
              >
                {stat.value}
              </h2>
              <p
                className="
           text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] text-[#0F1720]
            max-[767px]:text-[16px] max-[767px]:font-normal
          "
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
