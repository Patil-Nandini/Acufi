"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const VerafiSection = () => {
  useEffect(() => {
    const features = [
      "Supports US & Canadian IDs <br />(passport + driver's license)",
      "Real-time face match & anti-<br />spoofing liveness detection",
      "White-labeled, mobile & PWA-<br />compatible UI",
      "Built-in compliance (GDPR, CCPA,<br />PIPEDA)",
      "Full audit trails and API-based<br />integration",
      "Azure-powered document and <br />face intelligence",
    ];

    let currentIndex = 0;
    const featureTextElement = document.getElementById("featureText");

    function rotateFeatureText() {
      if (featureTextElement) {
        featureTextElement.style.opacity = "0";
        setTimeout(() => {
          featureTextElement.innerHTML = features[currentIndex];
          featureTextElement.style.opacity = "1";
          currentIndex = (currentIndex + 1) % features.length;
        }, 600);
      }
    }

    if (featureTextElement && window.innerWidth < 1024) {
      featureTextElement.innerHTML = features[0];
      setInterval(rotateFeatureText, 3000);
    }
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col items-center py-8 md:py-12"
      style={{ backgroundImage: "url('/verafi-bg.webp')" }}
    >
      {/* Heading */}
      <div className="px-4 mb-6">
        <h1 className="text-center font-bold text-black text-2xl sm:text-3xl md:text-4xl pb-4">
          VeraFi.me
        </h1>
      </div>

      {/* Top content */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-[95%] lg:w-[85%] bg-white rounded-t-[14px] px-4 md:px-8 py-6 md:py-10">
        {/* Left text */}
        <div className="flex-1 min-w-[280px] px-5 md:px-5">
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-semibold mb-4 text-[#0F1720]">
            Know Who’s Behind the Screen
          </h2>
          <p className="text-[18px] leading-relaxed mb-4 text-[#0F1720]">
            <span className="font-extrabold text-[18px">VeraFi</span> offers{" "}
            <span className="font-extrabold text-[18px]">
              AI-powered, real-time onboarding
            </span>{" "}
            with advanced fraud protection, designed specifically for high-risk
            industries.
          </p>
          <p className="text-[18px] leading-relaxed text-[#0F1720] ">
            Unlike traditional providers, VeraFi goes beyond simple data
            extraction. It enables{" "}
            <span className="font-extrabold">secure, human authentication</span>{" "}
            through document scanning, facial recognition, liveness detection,
            and optional speech verification.
          </p>
        </div>

        {/* Right video */}
        <div className="flex-1 min-w-[280px] flex justify-center items-center mt-6 lg:mt-0 px-2 md:px-5">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[90%] sm:w-[75%] md:w-[70%] lg:w-[80%] max-w-[420px]"
          >
            <source src="/verafi-new.webm" type="video/webm" />
            Your browser does not support HTML video
          </video>
        </div>
      </div>

      {/* Key Features */}
      <div className="w-[95%] lg:w-[85%] bg-white px-4 md:px-6 py-6 flex flex-col items-center">
        <h2
          className="relative text-[26px] text-[#0F1720] font-bold border-b border-[#156dde] pb-4 px-2 text-center w-fit
  before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2
  before:w-3 before:h-3 before:rounded-full before:[background:linear-gradient(96.11deg,#2D6CED_-133.89%,#026BD4_164.42%)]
  before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
  after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-[100%] after:-translate-y-1/2
  after:w-3 after:h-3 after:rounded-full after:[background:linear-gradient(96.11deg,#2D6CED_-133.89%,#026BD4_164.42%)]
  after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
        >
          Key Features
        </h2>

        {/* Desktop wheel */}
        <div className="relative hidden lg:block mx-auto mt-8 w-full lg:max-w-[92vw] xl:max-w-[1000px] 2xl:max-w-[1100px]">
          <Image
            src="/with-only-lines-1.webp"
            alt="Features Wheel"
            width={1000}
            height={390}
            className="w-full h-auto"
          />
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[25%] xl:w-[27.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[20%] lg:left-[5%] xl:left-[2.7%]">
            Supports US & Canadian IDs <br />
            (passport + driver’s license)
          </div>
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[25%] xl:w-[27.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[43%] lg:-left-[1.7%] xl:-left-[4%]">
            Real-time face match & anti-
            <br />
            spoofing liveness detection
          </div>
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[25%] xl:w-[27.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[66%] lg:left-[3%] xl:left-[0.7%]">
            White-labeled, mobile & PWA-
            <br />
            compatible UI
          </div>
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[25%] xl:w-[27.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[20%] lg:right-[4.5%] xl:right-[2.2%]">
            Azure-powered document and <br />
            face intelligence
          </div>
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[25%] xl:w-[27.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[42%] lg:-right-[1.7%] xl:-right-[4%]">
            Full audit trails and API-based <br />
            integration
          </div>
          <div className="absolute text-white lg:text-[12px] xl:text-[14px] lg:p-3 xl:p-4 lg:w-[26%] xl:w-[30.5%] text-center bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat top-[66%] lg:right-[2.2%] xl:-right-[2.2%]">
            Built-in compliance (GDPR, CCPA, <br />
            PIPEDA)
          </div>
        </div>

        {/* Tablet/Mobile rotating pill */}
        <div className="block lg:hidden mt-6 w-full max-w-[420px] mx-auto">
          <object
            type="image/svg+xml"
            data="https://acufi.com/images/Key-Features.svg"
            className="w-full h-auto"
            aria-label="Key Features"
          />
          <div
            id="featureText"
            className="relative text-white text-[14px] p-4 text-center w-full max-w-[300px] mx-auto mt-[-50px] bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          >
            Supports US & Canadian IDs <br /> (passport + driver’s license)
          </div>
        </div>
      </div>

      {/* Bottom sections */}
      <div className="flex flex-col lg:flex-row gap-2 w-[95%] lg:w-[85%] mt-2">
        {/* Benefits */}
        <div className="flex-1 bg-white text-[#0F1720] p-6 md:p-8 rounded-b-[14px]">
          <h2
            className="relative block text-[26px] font-semibold text-[#0F1720] mb-6 border-b border-[#156dde] pb-2 pl-2
            before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2
            before:w-3 before:h-3 before:rounded-full before:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
            after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-full after:-translate-y-1/2
            after:w-3 after:h-3 after:rounded-full after:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
          >
            Benefit
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                img: "/IconLendersOne.svg",
                text: (
                  <>
                    Faster onboarding (
                    <span className="font-extrabold text-[18px]">73%</span> Time
                    Reduction)
                  </>
                ),
              },
              { img: "/BenifitTwo.svg", text: "Reduced Fraud Risk" },
              {
                img: "/BenifitThree.svg",
                text: (
                  <>
                    <span className="font-extrabold mr-2 text-[18px]">
                      10-Second
                    </span>
                    Video Verification
                  </>
                ),
              },
              { img: "/BenifitFour.svg", text: "Ready To Use SDK" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start md:items-center text-[18px] leading-snug gap-2"
              >
                <Image
                  src={item.img}
                  alt="Benefit"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] mt-1"
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who For */}
        <div className="flex-1 bg-white text-[#0F1720] p-6 md:p-8 rounded-b-[14px]">
          <h2
            className="relative block text-[26px] font-semibold text-[#0F1720] mb-6 border-b border-[#156dde] pb-2 pl-2
            before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2
            before:w-3 before:h-3 before:rounded-full before:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
            after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-full after:-translate-y-1/2
            after:w-3 after:h-3 after:rounded-full after:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
          >
            Who Is VeraFi Built For?
          </h2>
          <div className="flex flex-col gap-4">
            {[
              { img: "/Lenders.svg", text: "Lenders" },
              { img: "/StartUp.svg", text: "Fintech Startups" },
              {
                img: "/Business.svg",
                text: "Any Business That Needs Advanced Customer Verification",
              },
            ].map((item, idx) => (
              <p
                key={idx}
                className="flex items-center gap-3 text-[18px] px-4 py-3 rounded-[10px] border border-transparent bg-[#ECF6FF] [background-image:linear-gradient(#ECF6FF,#ECF6FF),linear-gradient(270.54deg,#FFFFFF_2.69%,#71AFFF_78.63%)] [background-origin:border-box] [background-clip:padding-box,border-box]"
              >
                <Image
                  src={item.img}
                  alt="Audience"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] mr-2"
                />
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerafiSection;
