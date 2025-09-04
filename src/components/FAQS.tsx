"use client";
import Image from "next/image";
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
      "Unlike traditional banks, AcuFi is purpose-built for high-risk and high-growth industries. We offer faster account underwriting (1–3 days), real-time lending intelligence, and payment processing designed for sectors most banks avoid-like short term lending, cannabis, crypto and nutraceuticals.",
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
    <section className="relative w-full bg-[#F8F8FC] overflow-hidden font-sarabun">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-10 text-[#0F1720] mt-15">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto px-4  flex flex-col md:flex-row items-start justify-center gap-6 py-12">
        <div className="flex-1">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-[14px] shadow transition-all ${
                  open === i
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 focus:outline-[#F1F2F9]"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-medium text-[#0F1720] text-left">
                    {faq.question}
                  </span>
                  {open === i ? (
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 40,
                        height: 40,
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
                        width="24"
                        height="24"
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
                        width: 40,
                        height: 40,
                        background: "#E5E8EF",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
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
                  <div className="px-7 pb-5 pt-0 text-[#0F1720] text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start pt-6 w-[80%]">
          <object
            type="image/svg+xml"
            data="/AcuFi-faq.svg"
            style={{ width: "80%" }}
            aria-label="AcuFi FAQ illustration"
          >
            AcuFi FAQ illustration
          </object>
          <div className="text-center">
            <div className="font-bold text-[#181F2C] mb-1">
              Still, have questions ?
            </div>
            <div className="text-[#181F2C] mb-4 text-sm">
              Can’t find the answer you’re looking for?
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-60 min-h-[70px] text-white font-semibold"
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
                width={20}
                height={20}
                className="pb-[15px] mr-2"
              />
              <span className="pb-[15px]">Get Your Demo!</span>
            </button>
          </div>
        </div>
      </div>
      <Image
        src="/faq-setting.webp"
        alt="FAQ Gear"
        width={140}
        height={140}
        className="absolute left-0 top-8 w-[80px] md:w-[140px] opacity-80 pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
}
