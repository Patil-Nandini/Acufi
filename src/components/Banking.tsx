"use client";

import BankingFeatureCard from "./BankingFeatureCard";
import TechFeatureItem from "./TechFeatureItem";

export default function BankingPage() {
  return (
    <div className="bg-white sarabun w-full flex align-center justify-center mt-12">
      <div className=" w-full flex items-center justify-center flex-col">
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold text-#0F1720-700">
            Banking That Understands Your Business
          </h1>
          <p className="mt-6 text-lg text-[#0F1720] max-w-2xl mx-auto">
            <span style={{ color: "#0F1720", fontWeight: 600 }}>AcuFi</span> was
            born out of necessity, to serve industries the banking world refused
            to touch. Traditional banks don't understand short-term lending.
            They turn them away, but we don't.
          </p>
        </section>

        <section className="mt-16 max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BankingFeatureCard
              title="1-2 Day Underwriting"
              description="Fast account approval"
              imageSrc="/Underwriting.png"
              altText="Underwriting Illustration"
            />
            <BankingFeatureCard
              title="Industry Expertise"
              description="Specialized support for high-risk industries with fraud prevention tools"
              imageSrc="/Expertise.png"
              altText="Industry Expertise Illustration"
            />
            <BankingFeatureCard
              title="Growth Tools"
              description="Predictive borrower scoring and loan stacking detection"
              imageSrc="/GrowthTools.png"
              altText="Growth Tools Illustration"
            />
          </div>
        </section>

        <section
          className="relative py-24 w-full"
          style={{
            backgroundImage: "url('/for-dev.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto px-4 w-[90%]">
            <div className="flex flex-row w-[100%] items-center gap-16 py-4">
              <div className="w-[50%] flex flex-col justify-center align-center">
                <h1 className="text-4xl md:text-4xl font-bold text-[#0F1720]">
                  Banking That Helps Grow
                  <br /> Your Business
                </h1>
                <p className="mt-4 text-lg text-[#0F1720]">
                  Technology that traditional banks don't have.
                </p>
                <div className="mt-10 space-y-7">
                  <TechFeatureItem
                    number={1}
                    icon={
                      <img src="/One.png" alt="AcuCheck" className="w-8 h-8" />
                    }
                    name="AcuCheck"
                  />
                  <TechFeatureItem
                    number={2}
                    icon={
                      <img src="/Two.png" alt="AcuView" className="w-8 h-8" />
                    }
                    name="AcuView"
                    className="ml-0 md:ml-[100px]"
                  />
                  <TechFeatureItem
                    number={3}
                    icon={
                      <img src="/Three.png" alt="AcuPay" className="w-8 h-8" />
                    }
                    name="AcuPay"
                  />
                </div>
              </div>
              {/* Right: Video only */}
              <div className="w-[50%] flex items-center justify-end py-4">
                <div className="w-[95%] flex justify-center items-center">
                  <video autoPlay loop muted playsInline className="w-[80%]">
                    <source src="/Banking-that-helps.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
