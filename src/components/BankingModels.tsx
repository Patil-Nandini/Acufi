"use client";
import Image from "next/image";
import React from "react";

const BankingModels = () => {
  return (
    <div
      className="font-sarabun text-gray-800 overflow-x-hidden w-full flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://acufi.com/wp-content/uploads/2025/07/checks-bg.webp')",
      }}
    >
      <section className="relative text-center max-w-4xl mx-auto flex flex-col items-center justify-center px-4">
        <object
          type="image/svg+xml"
          data="/Ready-to-break.svg"
          aria-label="Ready to Break"
          className="w-full sm:w-4/5"
        />

        <div
          className="relative flex flex-col w-full max-w-5xl items-center bg-no-repeat bg-center bg-cover opacity-89 min-h-0 sm:min-h-[500px]"
          style={{
            backgroundImage: "url('/layout-webp.webp')",
          }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-[#0F1720]-900 mt-8">
            Ready to Break Free from Outdated Banking Models?
          </h2>
          <p className="mt-6 text-lg text-[#0F1720]-600">
            Let&apos;s build your financial foundation... Fast, Compliant, and
            Industry-ready.
          </p>

          <div className="mt-16 flex justify-center gap-4">
            <button
              className="flex items-center gap-2 font-semibold py-3 px-8 transition-colors cursor-pointer"
              style={{
                backgroundColor: "#fff",
                color: "#085AAC",
                border: "2px solid #085AAC",
                borderRadius: "45px",
                boxShadow: "0px 5px 18px -9.3px #01459FCC",
              }}
            >
              <Image
                src="/customer-support.svg"
                alt="support"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingModels;
