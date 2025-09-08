"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I get approved for an AcuFi account?",
    answer:
      "Most AcuFi customers are underwritten and onboarded within 1–3 business days.",
  },
  {
    question: "What industries do AcuFi specialize in?",
    answer:
      "AcuFi supports a wide range of high-risk and emerging industries, including Short-term lending, cannabis, crypto, CBD, credit repair, debt relief, nutraceuticals, and affiliate marketing platforms.",
  },
  {
    question: "What makes AcuFi different from traditional banks?",
    answer:
      "Unlike traditional banks, AcuFi is purpose-built for high-risk and high-growth industries. We offer faster account underwriting (1–3 days), real-time lending intelligence, and payment processing designed for sectors most banks avoid—like short term lending, cannabis, crypto and nutraceuticals.",
  },
  {
    question: "Can I use AcuFi if I’ve been rejected by other banks?",
    answer:
      "Absolutely. AcuFi is created for businesses that have been labelled “unbankable” by traditional institutions. We specialize in helping overlooked industries get access to Modern banking.",
  },
  {
    question: "Is AcuFi secure and compliant for high-risk industries?",
    answer:
      "Yes. AcuFi is PCI-DSS ready, NACHA-compliant, and uses enterprise-grade encryption for all data. We are purposefully built to meet compliance and security needs for regulated and high-risk markets.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(1);

  return (
    <section className="relative w-full bg-[#F8F8FC] overflow-hidden font-sarabun px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#0F1720]">
        Frequently Asked Questions
      </h2>

      {/* Layout wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
        {/* FAQ list (Left side - More width) */}
        <div className="w-full lg:w-[60%] mt-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-[14px] shadow transition-all `}
              >
                <button
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 focus:outline-[#F1F2F9]"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-[#0F1720] text-left">
                    {faq.question}
                  </span>
                  {open === i ? (
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background:
                          "linear-gradient(193.06deg, #108FDB 5.92%, #0862B5 89.21%)",
                        boxShadow: `
                    0px 2px 6px 0px #4A3AFF1A,
                    0px 1px 1.5px 0px #FFFFFF40 inset,
                    0px -1px 1px 0px #0000001F inset
                  `,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 10.5L12 14.5L16 10.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background: "#E5E8EF",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10.5 8L14.5 12L10.5 16"
                          stroke="#181F2C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                {faq.answer && open === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#0F1720] text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side illustration (Smaller width) */}
        <div className="w-full lg:w-[40%] flex flex-col items-center justify-start">
          <object
            type="image/svg+xml"
            data="/AcuFi-faq.svg"
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] mb-6"
            aria-label="AcuFi FAQ illustration"
          >
            AcuFi FAQ illustration
          </object>
          <div className="text-center px-4 flex flex-col items-center justify-center">
            <div className="font-bold text-[#181F2C] mb-1 text-base sm:text-lg">
              Still, have questions?
            </div>
            <div className="text-[#181F2C] mb-4 text-xs sm:text-sm md:text-base">
              Can’t find the answer you’re looking for?
            </div>
            <>
              <Link href="https://acufi.com/lets-connect/">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 w-48 sm:w-50 min-h-[60px] sm:min-h-[70px] text-white font-semibold text-sm sm:text-base cursor-pointer"
                  style={{
                    backgroundImage: "url('/button-bg.webp')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                  aria-label="Get A Demo!"
                >
                  <Image
                    src="/RocketIcon.png"
                    alt="Rocket Icon"
                    className="mb-6"
                    width={18}
                    height={18}
                  />
                  <span className="mb-6">Get Your Demo!</span>
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>

      {/* Gear image */}
      <Image
        src="/faq-setting.webp"
        alt="FAQ Gear"
        width={140}
        height={140}
        className="absolute left-0 top-6 w-[60px] sm:w-[80px] md:w-[120px] lg:w-[140px] opacity-80 pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
}
