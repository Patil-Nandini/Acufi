"use client";

import Image from "next/image";

export default function AcuPay() {
  return (
    <div className="font-sarabun bg-[#001334] pb-10 w-[100%] flex flex-col items-center justify-center">
      <div className="bg-[#001334] py-12">
        <h1 className="text-center font-bold text-white text-4xl">AcuPay</h1>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between bg-[#0B2D58] px-10 text-white rounded-t-[14px] mx-[20px] lg:mx-[50px] w-[80%]">
        <div className="flex-1 min-w-[55%]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Modern Payment Processing… Built for High-Risk Businesses 
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold">AcuPay</span> delivers fast, flexible,
            and compliant payment solutions for industries that traditional
            processors avoid.
            <br />
            Whether you're collecting payments, loan payments, or subscriptions,
            AcuPay helps you get paid, stay compliant, and scale with
            confidence.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-[#4976E7] px-5 py-2 rounded-full font-bold shadow cursor-pointer"
            >
              <Image
                src="/ExploreIcon.svg"
                alt="Explore AcuCheck Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="ml-2">Explore AcuCheck in Action</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border-2 border-white px-5 py-2 rounded-full text-white shadow cursor-pointer"
            >
              <Image
                src="/RequestDemoWhite.svg"
                alt="Request Demo Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Request A Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-[70%] md:w-[50%] mt-6 md:mt-0 flex justify-center md:mt-6">
          <object
            type="image/svg+xml"
            data="/Modern-payment-processing-New.svg"
            className="w-[80%] md:w-full h-auto max-w-[550px]"
            aria-label="Modern-payment-processing"
          >
            Modern-payment-processing
          </object>
        </div>
      </div>
      {/* <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ minWidth: "340px", maxWidth: "410px", height: "380px" }}
        >
          <div
            className="relative bg-transparent rounded-[28px] w-full h-full overflow-hidden transform -rotate-3"
            style={{
              backgroundImage: "url('/ACH-Processing-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-start items-start p-8 transform rotate-3">
              <h3 className="text-white font-bold text-2xl mb-5">
                ACH Processing
              </h3>
              <ul className="flex flex-col gap-4 text-white text-base font-normal">
                {[
                  "Same-Day And Next-Day ACH Settlements",
                  "Ideal For Recurring Payments And Loan Repayments",
                  "Lower Fees Than Card Processing",
                  "NACHA-Compliant Risk Monitoring",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image
                      src="/GreenCheckMarkIcon.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mx-4 w-[5%]">
          <object
            type="image/svg+xml"
            data="/pin.svg"
            className="w-[180px] h-[180px]"
            aria-label="Payment Connectivity"
          >
            Payment Connectivity Icon
          </object>
        </div>

        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ minWidth: "340px", maxWidth: "410px", height: "380px" }}
        >
          <div
            className="relative bg-transparent rounded-[28px] w-full h-full overflow-hidden transform rotate-3"
            style={{
              backgroundImage: "url('/Credit-Debit-Card-Processing.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end items-start p-8 transform -rotate-3">
              <h3 className="text-white font-bold text-2xl mb-5">
                Credit & Debit Card Processing
              </h3>
              <ul className="flex flex-col gap-4 text-white text-base font-normal">
                {[
                  "Accept All Major Card Brands",
                  "Built-In Fraud Protection And Chargeback Mitigation",
                  "Fast, Secure Digital Checkout Experiences",
                  "Supports High Volume And High-Ticket Transactions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image
                      src="/GreenCheckMarkIcon.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
 
      <div className="relative bg-[#0B2D58] px-10 pb-5 flex items-center w-[80%] justify-between">

        <div
          className="transform -rotate-3  w-[400px] h-[400] p-9 pl-18 pr-10 rounded-xl text-[#FFFFFF] flex flex-col gap-3 relative z-10"
          style={{
            backgroundImage: "url('/ACH-Processing-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="font-semibold text-lg">ACH Processing</h3>
          <ul className="flex flex-col gap-4">
            <li>✅ Same-Day And Next-Day ACH Settlements</li>
            <li>✅ Ideal For Recurring Payments And Loan Repayments</li>
            <li>✅ Lower Fees Than Card Processing</li>
            <li>✅ NACHA-Compliant Risk Monitoring</li>
          </ul>
        </div>
        <object
          type="image/svg+xml"
          data="/pin.svg"
          className="w-[300px] h-[200px]"
          aria-label="Payment Connectivity"
        >
          Payment Connectivity Icon
        </object>
        <div className="transform rotate-3  w-[400px] h-[400] p-9 pl-10 pr-15 rounded-xl text-[#FFFFFF] flex flex-col gap-3 relative z-10 ml-[-50px]"  style={{
              backgroundImage: "url('/Credit-Debit-Card-Processing.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
          <h3 className="font-semibold text-lg">
            Credit & Debit Card Processing
          </h3>
          <ul className="flex flex-col gap-4">
            <li>✅ Accept All Major Card Brands</li>
            <li>✅ Built-In Fraud Protection And Chargeback Mitigation</li>
            <li>✅ Fast, Secure Digital Checkout Experiences</li>
            <li>✅ Supports High Volume And High-Ticket Transactions</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-2 text-white mx-5 lg:mx-[50px] w-[80%] justify-center ">
        <div className="w-[50%]  bg-[#0B2D58] p-5 md:p-5 rounded-b-[14px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Why AcuPay Works For You
          </h3>
          <ul className="flex flex-col gap-4">
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
              <li key={item.text} className="flex items-center gap-3 text-lg">
                <img src={item.icon} alt="Feature Icon" className="w-6 h-6" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[50%]  bg-[#0B2D58] p-5 md:p-5 rounded-b-[14px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Membership & Subscription Billing
          </h3>
          <div className="grid grid-cols-1 gap-4">
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
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-2 flex items-center gap-3 text-sm md:text-base"
              >
                <img src={item.img} alt={item.label} className="w-8 h-8" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
