"use client";

import Image from "next/image";
import Link from "next/link";

export default function AcufiBankVerification() {
  return (
    <div className="font-sarabun bg-[#001334] pb-10 w-full flex flex-col items-center justify-center">
      <div className="bg-[#001334] py-8 md:py-12 px-4">
        <h1 className="text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl">
          AcuFi Bank Verification
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between bg-[#0B2D58] px-6 sm:px-10 text-white rounded-t-[14px] mx-4 md:mx-8 lg:mx-[50px] w-[95%] lg:w-[85%] py-8 md:py-10 xl:py-12">
        <div className="flex-1 min-w-[280px] max-w-full lg:min-w-[55%]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Verify Bank Account Ownership In Seconds
          </h2>

          <p className="text-[18px] leading-relaxed">
            Prevent fraud and funding errors and approve with confidence.
            <br />
            Acufi’s <span className="font-bold text-[18px]">Bank Verification</span>{" "}
            instantly confirms whether a bank account truly belongs to your
            applicant, before you disburse a single dollar.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-4 pt-6">
            {[
              {
                img: "/vector-icon.svg",
                label: (
                  <span className="font-bold underline ">866-711-4350</span>
                ),
                key: "866-711-4350",
              },
              {
                img: "/email.svg",
                label: "sales@acufi.com",
                key: "sales@acufi.com",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="bg-[#133D72] border border-[#FFFFFF1A] rounded-lg p-3 flex items-center gap-3 text-sm sm:text-base backdrop-blur-[16px] shadow-[0_4px_16px_0_#062A5829]"
              >
                <Image
                  src={item.img}
                  alt={typeof item.label === "string" ? item.label : item.key}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex flex-wrap gap-3 mt-6 ">
             <Link href="https://acufi.com/acuview-get-started/">
            <button
              type="button"
              className=" flex items-center justify-center gap-2 bg-white text-blue-600 px-5 py-1 h-[52px] w-[268px] rounded-full font-bold shadow-[0px_4px_4px_0px_#FFFFFF40] cursor-pointer"
            >
              <Image
                src="/ExploreIcon.svg"
                alt="Explore"
                width={20}
                height={20}
              />
              <span>Schedule Your Demo Today!</span>
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex-1 w-[90%] sm:w-[70%] md:w-[50%] mt-6 lg:mt-0 flex justify-center">
          <object
            type="image/svg+xml"
            data="/Bank-verification.svg"
            className="w-[80%] md:w-full h-auto max-w-[420px]"
            aria-label="AcuFi Bank Verification"
          >
            AcuFi Bank Verification
          </object>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col xl:flex-row gap-2 mt-2 text-white mx-4 md:mx-8 lg:mx-[50px] w-[95%] lg:w-[85%] justify-center">
        {/* What You Get */}
        <div className="w-full bg-[#0B2D58] p-4 sm:p-5 xl:rounded-b-[14px] xl:w-1/2 ">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
            What You Get
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                img: "/Real-time-account-ownership-match.svg",
                label: "Real-Time Account Ownership Match",
              },
              {
                img: "/Coverage-across-12000-U.S.-banks.svg",
                label: "Identity And Bank Data Cross-Verification",
              },
              {
                img: "/Identity-and-bank-data-cross-verification.svg",
                label: "Coverage Across 12,000+ U.S. Banks",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-3 flex items-center gap-3 text-[18px]"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Proven Impact */}
        <div className="w-full bg-[#0B2D58] p-4 sm:p-5 rounded-b-[14px] xl:w-1/2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
            Proven Impact
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                img: "/73-faster-onboarding.svg",
                label: "73% Faster Onboarding",
              },
              {
                img: "/15x-reduction-in-fraud.svg",
                label: "15x Reduction In Fraud",
              },
              {
                img: "/Confidence-in-every-approval.svg",
                label: "Confidence In Every Approval",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-3 flex items-center gap-3 text-[18px]"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
