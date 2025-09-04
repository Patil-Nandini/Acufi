"use client";

import Image from "next/image";

export default function AcufiBankVerification() {
  return (
    <div className="font-sarabun bg-[#001334] pb-10 w-[100%] flex flex-col items-center justify-center">
      <div className="bg-[#001334] py-12">
        <h1 className="text-center font-bold text-white text-4xl">
           AcuFi Bank Verification
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between bg-[#0B2D58] px-10 text-white rounded-t-[14px] mx-[20px] lg:mx-[50px] w-[80%]">
        <div className="flex-1 min-w-[55%]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Verify Bank Account Ownership In Seconds
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Prevent fraud and funding errors and approve with confidence.
            <br />
            Acufi’s <span className="font-bold">Bank Verification</span>{" "}
            instantly confirms whether a bank account truly belongs to your
            applicant, before you disburse a single dollar.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-4 pt-6">
            {[
              {
                img: "/vector-icon.svg",
                label: (
                  <span className="font-bold underline">866-711-4350</span>
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
                className="bg-[#133D72] border border-[#FFFFFF1A] rounded-lg p-2 flex items-center gap-3 text-sm md:text-base backdrop-blur-[16px] shadow-[0_4px_16px_0_#062A5829]"
              >
                <Image
                  src={item.img}
                  alt={typeof item.label === "string" ? item.label : item.key}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                {item.label}
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-[#4976E7] px-5 py-2 rounded-full font-bold shadow cursor-pointer"
            >
              <Image
                src="/ExploreIcon.svg"
                alt="Explore AcuCheck"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="ml-2">Explore AcuCheck in Action</span>
            </button>
          </div>
        </div>
        <div className="flex-1 w-[70%] md:w-[50%] mt-6 md:mt-0 flex justify-center md:mt-6">
          <object
            type="image/svg+xml"
            data="/Bank-verification.svg"
            className="w-[80%] md:w-full h-auto max-w-[420px]"
            aria-label=" AcuFi Bank Verification"
          >
             AcuFi Bank Verification
          </object>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2 text-white mx-5 lg:mx-[50px] w-[80%] justify-center  ">
        <div className="w-[50%]  bg-[#0B2D58] p-5 md:p-5 rounded-b-[14px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
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
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-2 flex items-center gap-3 text-sm md:text-base"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[50%]  bg-[#0B2D58] p-5 md:p-5  rounded-b-[14px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
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
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-2 flex items-center gap-3 text-sm md:text-base"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="w-8 h-8"
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
