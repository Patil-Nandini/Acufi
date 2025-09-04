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
      className="w-[100%] bg-cover bg-center bg-no-repeat  flex justify-center items-center flex-col py-10"
      style={{
        backgroundImage: "url('/verafi-bg.webp')",
      }}
    >
      <div className=" py-10">
        <h1 className="text-center font-bold text-black text-4xl">VeraFi.me</h1>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <div className="w-[85%] flex flex-wrap items-center justify-center px-5 pt-5 pb-0 text-[#0F1720] bg-white rounded-t-[14px]">
          <div className="flex-1 min-w-[50%] p-5">
            <h2 className="text-[26px] font-semibold mb-4 text-[#0F1720]">
              Know Who’s Behind the Screen
            </h2>
            <p className="text-[16px] font-normal leading-[160%] mb-4">
              <span className="font-extrabold">VeraFi</span> offers{" "}
              <span className="font-extrabold">
                AI-powered, real-time onboarding
              </span>{" "}
              with advanced fraud protection, which is designed specifically for
              high-risk industries.
            </p>
            <p className="text-[16px] font-normal leading-[160%]">
              Unlike traditional providers, VeraFi goes beyond simple data
              extraction. It enables{" "}
              <span className="font-extrabold">
                secure, human authentication
              </span>{" "}
              through document scanning, facial recognition, liveness detection,
              and optional speech Verification.
            </p>
          </div>

          <div className="flex-1 min-w-[50%] flex justify-center items-center p-5">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[70%] block mx-auto"
            >
              <source src="/verafi-new.webm" type="video/webm" />
              Your browser does not support HTML video
            </video>
          </div>

          <div className="w-full flex flex-col justify-center items-center text-[#0F1720] bg-white flex-wrap">
            <h2
              className="relative text-[26px] font-semibold border-b border-[#156dde] pb-4 px-2 text-center w-fit 
          before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 
          before:w-3 before:h-3 before:rounded-full before:bg-[linear-gradient(96.11deg,#2D6CED_-133.89%,#026BD4_164.42%)] before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
          after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-[100%] after:-translate-y-1/2 
          after:w-3 after:h-3 after:rounded-full after:bg-[linear-gradient(96.11deg,#2D6CED_-133.89%,#026BD4_164.42%)] after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
            >
              Key Features
            </h2>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="relative w-4/5 mx-auto hidden lg:block">
              <div className="relative z-[1] mx-auto">
                <Image
                  src="/with-only-lines-1.webp"
                  alt="Features Wheel"
                  width={1000}
                  height={390}
                  className="w-[1000px] h-[390px] block"
                />
              </div>

              <div
                className="absolute text-white text-[14px] p-4 w-[275px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        top-[70px] -left-[-25px]"
              >
                Supports US & Canadian IDs <br />
                (passport + driver’s license)
              </div>

              <div
                className="absolute text-white text-[14px] p-4 w-[275px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        top-[160px] left-[-38px]"
              >
                Real-time face match & anti-
                <br />
                spoofing liveness detection
              </div>

              <div
                className="absolute text-white text-[14px] p-4 w-[275px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        top-[250px] left-[10px]"
              >
                White-labeled, mobile & PWA-
                <br />
                compatible UI
              </div>
              <div
                className="absolute text-white text-[14px] p-4 w-[275px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        top-[70px] left-[702px]"
              >
                Azure-powered document and <br />
                face intelligence
              </div>

              <div
                className="absolute text-white text-[14px] p-4 w-[275px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        bottom-[160px] left-[765px]"
              >
                Full audit trails and API-based
                <br />
                integration
              </div>
              <div
                className="absolute text-white text-[14px] p-4 w-[305px] text-center
        bg-[url('/pill-with-white.webp')]
        bg-cover bg-center bg-no-repeat
        bottom-[70px] -left-[-715px]"
              >
                Built-in compliance (GDPR, CCPA,
                <br />
                PIPEDA)
              </div>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden flex-col justify-center items-center bg-white">
            <div className="block mb-8 max-w-[400px] w-full">
              <Image
                src="/Key-Features.svg"
                alt="Key Features"
                width={420}
                height={0}
                className="w-full max-w-[420px] mx-auto block"
              />
              <div
                id="featureText"
                className="relative text-white text-[14px] p-5 text-center w-full max-w-[320px] mx-auto mt-[-51px] 
              bg-[url('/pill-with-white.webp')] bg-cover bg-center bg-no-repeat 
              transition-opacity duration-600"
              >
                Supports US & Canadian IDs <br />
                (passport + driver’s license)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-[85%] justify-between ">
        <div className="flex-1 bg-white text-[#0F1720] p-8 mt-3 rounded-b-[14px]">
          <h2
            className="relative block text-[26px] font-semibold text-[#0F1720] mb-6 border-b border-[#156dde] pb-4 pl-2
            before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 
            before:w-3 before:h-3 before:rounded-full before:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
            after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-full after:-translate-y-1/2 
            after:w-3 after:h-3 after:rounded-full after:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
          >
            Benefit
          </h2>
          <div className="flex flex-col gap-5">
            <p className="flex items-center text-[16px] font-normal leading-[1.4]">
              <Image
                src="/IconLendersOne.svg"
                alt="Faster Onboarding"
                width={27}
                height={24}
                className="w-[27px] h-[24px] mr-2"
              />
              Faster onboarding (<span className="font-extrabold">73% -</span>{" "}
              Time Reduction)
            </p>

            <p className="flex items-center text-[16px] font-normal leading-[1.4]">
              <Image
                src="/BenifitTwo.svg"
                alt="Reduced Fraud Risk"
                width={27}
                height={24}
                className="w-[27px] h-[24px] mr-2"
              />
              Reduced Fraud Risk
            </p>

            <p className="flex items-center text-[16px] font-normal leading-[1.4]">
              <Image
                src="/BenifitThree.svg"
                alt="10-Second Video Verification"
                width={27}
                height={24}
                className="w-[27px] h-[24px] mr-2"
              />
              <span className="font-extrabold">10-Second</span> Video
              Verification
            </p>

            <p className="flex items-center text-[16px] font-normal leading-[1.4]">
              <Image
                src="/BenifitFour.svg"
                alt="Ready To Use SDK"
                width={27}
                height={24}
                className="w-[27px] h-[24px] mr-2"
              />
              Ready To Use SDK
            </p>
          </div>
        </div>

        <div className="flex-1 bg-white text-[#0F1720] p-8 mt-3 rounded-b-[14px]">
          <h2
            className="relative block text-[26px] font-semibold text-[#0F1720] mb-6 border-b border-[#156dde] pb-4 pl-2
            before:content-[''] before:absolute before:top-full before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 
            before:w-3 before:h-3 before:rounded-full before:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] before:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]
            after:content-[''] after:absolute after:top-full after:right-0 after:translate-x-full after:-translate-y-1/2 
            after:w-3 after:h-3 after:rounded-full after:bg-[radial-gradient(circle,#156dde_0%,#0a54c2_100%)] after:shadow-[inset_-1.62px_-1.62px_6.47px_rgba(255,255,255,0.25),0px_0px_17.56px_3.24px_rgba(27,114,222,0.33)]"
          >
            Who Is VeraFi Built For?
          </h2>
          <div className="flex flex-col gap-5">
            <p
              className="flex items-center gap-2 text-[16px] font-normal leading-[1.4] bg-[#ECF6FF] px-4 py-2 rounded-[10px] border border-transparent bg-clip-padding 
              [background-image:linear-gradient(#ECF6FF,#ECF6FF),linear-gradient(270.54deg,#FFFFFF_2.69%,#71AFFF_78.63%)] bg-origin-border"
            >
              <Image
                src="/Lenders.svg"
                alt="Check"
                width={27}
                height={24}
                className="w-[27px] h-[24px]"
              />
              Lenders
            </p>
            <p
              className="flex items-center gap-2 text-[16px] font-normal leading-[1.4] bg-[#ECF6FF] px-4 py-2 rounded-[10px] border border-transparent bg-clip-padding 
              [background-image:linear-gradient(#ECF6FF,#ECF6FF),linear-gradient(270.54deg,#FFFFFF_2.69%,#71AFFF_78.63%)] bg-origin-border"
            >
              <Image
                src="/StartUp.svg"
                alt="Check"
                width={27}
                height={24}
                className="w-[27px] h-[24px]"
              />
              Fintech Startups
            </p>
            <p
              className="flex items-center gap-2 text-[16px] font-normal leading-[1.4] bg-[#ECF6FF] px-4 py-2 rounded-[10px] border border-transparent bg-clip-padding 
              [background-image:linear-gradient(#ECF6FF,#ECF6FF),linear-gradient(270.54deg,#FFFFFF_2.69%,#71AFFF_78.63%)] bg-origin-border"
            >
              <Image
                src="/Business.svg"
                alt="Check"
                width={27}
                height={24}
                className="w-[27px] h-[24px]"
              />
              Any Business That Needs Advanced Customer Verification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerafiSection;
