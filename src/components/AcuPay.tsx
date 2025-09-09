"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AcuPay() {
  return (
    <div className="font-sarabun bg-[#001334] pb-10 w-full flex flex-col items-center justify-center ">
      {/* Title */}
      <div className="py-10 sm:py-12">
        <h1 className="text-center font-bold text-white text-2xl sm:text-3xl md:text-4xl">
          AcuPay
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#0B2D58] text-white rounded-t-[14px] px-5 sm:px-8 lg:px-9 w-[95%] lg:w-[85%] py-8 gap-8">
        <div className="flex-[1.6] text-left ">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Modern Payment Processing… Built for High-Risk Businesses
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="font-bold">AcuPay</span> delivers fast, flexible,
            and compliant payment solutions for industries that traditional
            processors avoid.
            <br />
            Whether you&apos;re collecting payments, loan payments, or
            subscriptions, AcuPay helps you get paid, stay compliant, and scale
            with confidence.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-start ">
            <Link href="https://acufi.com/under-renovation/">
              <button
                type="button"
                className=" flex items-center justify-center gap-2 bg-white text-blue-600 px-5 py-1 h-[62px] w-[268px] rounded-full font-bold shadow-[0px_4px_4px_0px_#FFFFFF40] cursor-pointer"
              >
                <Image
                  src="/ExploreIcon.svg"
                  alt="Explore"
                  width={20}
                  height={20}
                />
                <span>Explore AcuPay in Action</span>
              </button>
            </Link>
            {/* <Link href="#">
              <button
                className="
        relative overflow-hidden 
        flex items-center justify-center gap-2 
        px-6 py-7 sm:py-6 h-[72px] w-[255px]
        text-white font-semibold
         cursor-pointer
      "
              >
                <span
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/AcuCheck2Bg.webp')" }}
                />
                <Image
                  src="/RequestDemoWhite.svg"
                  alt="Demo"
                  width={20}
                  height={20}
                  className="relative"
                />
                <span className="relative">Request A Demo</span>
                <span className="absolute top-[-6] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] pointer-events-none" />
              </button>
            </Link> */}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-[100%]">
          <object
            type="image/svg+xml"
            data="/Modern-payment-processing-New.svg"
            className="w-[80%] sm:w-[70%] md:w-full h-auto max-w-[500px]"
            aria-label="Modern-payment-processing"
          >
            Modern-payment-processing
          </object>
        </div>
      </div>

      <div className="relative bg-[#0B2D58] px-4 sm:px-8 md:px-10 py-6 flex flex-col lg:flex-row items-center w-full lg:w-[85%] justify-between gap-0">
        <div
          className="lg:-rotate-10 w-[345] sm:w-[350px] h-[333px] sm:h-[350px] lg:w-[550px] xl:w-[350px] p-6 sm:p-8 rounded-xl text-white flex flex-col gap-2 relative z-10"
          style={{
            backgroundImage: "url('/ACH-Processing-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-semibold text-base sm:text-lg lg:text-sm xl:text-lg xl:pl-10  pl-10 lg:pl-8">
            ACH Processing
          </h3>
          <ul className="flex flex-col gap-[20px] lg:gap-[25px] text-[14px] pl-10 xl:pl-8 lg:pl-6 font-sarabun">
            {[
              "Same-Day And Next-Day ACH Settlements",
              "Ideal For Recurring Payments And Loan Repayments",
              "Lower Fees Than Card Processing",
              "NACHA-Compliant Risk Monitoring",
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-0 lg:pl-1">
                <Image
                  src="/GreenCheckMarkIcon.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="leading-4 lg:leading-3.5 xl:leading-5 tracking-[-0.01em] pl-0.5">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <object
            type="image/svg+xml"
            data="/ACH-processing-Vertical-for-Mobile.svg"
            className="w-[180px] h-[140px] sm:w-[250px] sm:h-[200px] lg:hidden"
            aria-label="Payment Connectivity Mobile"
          />
          <object
            type="image/svg+xml"
            data="/pin.svg"
            className="hidden lg:block w-[350px] h-[250px] lg:w-[160px] lg:h-[200px] xl:w-[400px] xl:h-[300px]"
            aria-label="Payment Connectivity Desktop"
          />
        </div>

        {/* Card 2 */}
        <div
          className="lg:rotate-10 w-[345px] sm:w-[350px] h-[333px] sm:h-[350px] lg:w-[600px] xl:w-[350px]
          p-10 sm:p-8 lg:p-4 xl:p-4 rounded-xl text-white flex flex-col gap-2 relative z-10"
          style={{
            backgroundImage: "url('/Credit-Debit-Card-Processing.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-semibold text-base sm:text-lg lg:text-sm  xl:text-lg xl:p-4 sm:pl-1 lg:pl-5 tracking-tighter">
            Credit & Debit Card Processing
          </h3>
          <ul className="flex flex-col  lg:gap-[25px] xl:gap-2 gap-[20px] lg:gap-[25px] text-[14px]  lg:pl-4 font-sarabun">
            {[
              "Accept All Major Card Brands",
              "Built-In Fraud Protection And <br/> Chargeback Mitigation",
              "Fast, Secure Digital Checkout<br/> Experiences",
              "Supports High Volume And <br/>High-Ticket Transactions",
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-0 xl:gap-2 lg:pl-1 xl:pl-3 sm:pl-0 pl-0"
              >
                <Image
                  src="/GreenCheckMarkIcon.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6 flex-shrink-0"
                />
                <span className="leading-4 lg:leading-3.5 xl:leading-5 tracking-[-0.01em] pl-0.5">
                  {feature.split(/<br\s*\/?>/i).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part.trim()}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-2 mt-2 text-white mx-4 sm:mx-10 lg:mx-20 w-full lg:w-[85%]">
        <div className="w-full xl:w-1/2 bg-[#0B2D58] p-4 sm:p-6 rounded-b-[14px]">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Why AcuPay Works For You
          </h3>
          <ul className="flex flex-col gap-3 text-sm sm:text-base">
            {[
              {
                text: "Built for high-risk industries like short-term lending, cannabis, and nutraceuticals",
                icon: "/Built-for-high-risk-industries-like-short-term-lending-cannabis-and-nutraceuticals.svg",
              },
              {
                text: "Transparent pricing with no hidden fees",
                icon: "/Transparent-pricing-with-no-hidden-fees.svg",
              },
              {
                text: "Developer-friendly APIs and a full reporting dashboard",
                icon: "/Developer-friendly-APIs-and-a-full-reporting-dashboard.svg",
              },
              {
                text: "Backed by AcuFi’s bank-grade security and compliance infrastructure",
                icon: "/Backed-by-AcuFis-bank-grade-security-and-compliance-infrastructure.svg",
              },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-2 sm:gap-3 text-[16px]"
              >
                <Image
                  src={item.icon}
                  alt="Feature Icon"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px] mr-2"
                />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Box */}
        <div className="w-full xl:w-1/2 bg-[#0B2D58] p-4 sm:p-6 rounded-b-[14px]">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Membership & Subscription Billing
          </h3>
          <div className="grid grid-cols-1 gap-3 text-sm sm:text-base">
            {[
              {
                img: "/Automate-monthly-recurring-payments.svg",
                label: "Automate Monthly Recurring Payments",
              },
              {
                img: "/Flexible-billing-intervals-easy-plan-management.svg",
                label: "Flexible Billing Intervals, Easy Plan Management",
              },
              {
                img: "/Real-time-insights-and-Revenue-tracking.svg",
                label: "Real-Time Insights And Revenue Tracking",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-3 flex items-center gap-3 text-[16px]"
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  width={32}
                  height={32}
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
