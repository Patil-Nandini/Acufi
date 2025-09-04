"use client";

import Image from "next/image";

export default function AcuCheck() {
  const items = [
    { img: "EmploymentVerification.png", label: "Employment Verification" },
    { img: "IncomeVerification.png", label: "Income Verification" },
    { img: "IncomeStability.png", label: "Income Stability" },
    { img: "AbilityToPay.png", label: "Ability To Pay" },
  ];
  const historyItems = [
    {
      img: "BankAccountHistory.png",
      label: "Up to 2 Years of Bank Account History",
    },
    { img: "NFSFrequency.png", label: "NSF Frequency" },
  ];
  return (
    <div className="font-sarabun bg-[#001334] pb-10 w-[100%] flex justify-center flex-col items-center">
      <div className="bg-[#001334] py-12">
        <h1 className="text-center font-bold text-white text-4xl">AcuCheck</h1>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between bg-[#0B2D58] text-white rounded-t-[14px] px-10  mx-[20px] lg:mx-[50px] w-[80%] py-10">
        <div className="flex-1 min-w-[50%]">
          <h2 className="text-3xl md:text-3xl font-semibold mb-4">
            Cash Flow Is The New Credit Score
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Make smarter decisions using real-time banking data.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold">AcuCheck</span> flips the script on
            traditional credit reports by delivering live insights straight from
            your applicant&apos;s bank account.
            <br />
            Instead of relying on stale scores and outdated assumptions,
            AcuCheck helps you see what matters most: the borrower&apos;s{" "}
            <span className="font-bold">Ability to Pay</span>.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-blue-600 px-5 py-2 rounded-full font-bold cursor-pointer"
              style={{
                boxShadow: "0px 4px 4px 0px #FFFFFF40",
              }}
            >
              <Image
                src="/ExploreIcon.svg"
                alt="Explore Icon"
                width={20}
                height={20}
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
              />
              <span>Request A Demo</span>
            </button>
          </div>
        </div>

        <div className="flex-1 w-[70%] md:w-[50%] mt-6 md:mt-0 flex justify-center md:mt-6">
          <object
            type="image/svg+xml"
            data="/Cash-flow-in-the-new-credit-score.svg"
            className="w-[80%] md:w-full h-auto max-w-[550px]"
            aria-label="Cash flow is the new credit score illustration"
          >
            Cash flow is the new credit score illustration
          </object>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-2 text-white mx-5 lg:mx-[50px] w-[80%] justify-center ">
        <div className="basis-[70%] bg-[#0B2D58] p-7 md:p-10 ">
          <h2 className="text-3xl md:text-3xl font-semibold mb-6">
            Why AcuCheck Outperforms Credit Bureaus?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "CreditIconOne.svg",
                title: "Real-Time Cash Flow Analysis",
                desc: "Know Exactly How Much A Borrower Earns, Spends, And Saves.",
              },
              {
                icon: "CreditIconFour.svg",
                title: "Instant Affordability Checks",
                desc: "Quickly Determine If The Borrower Can Afford A New Loan Payment.",
              },
              {
                icon: "CreditIconTwo.svg",
                title: "Machine Learning",
                desc: "Enhanced Technology That Continuously Learns For Better Decision-Making.",
              },
              {
                icon: "CreditIconFive.svg",
                title: "Lower Defaults, Better Risk Models",
                desc: "Identify Cash Shortfalls And Income Instability Before A Loan Becomes A Charge-Off.",
              },
              {
                icon: "CreditIconThree.svg",
                title: "Continuous Monitoring",
                desc: "Get Warned Before A Borrower Defaults.",
              },
            ].map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 flex-shrink-0">
                  <object
                    type="image/svg+xml"
                    data={`/${f.icon}`}
                    className="w-10 h-10"
                    aria-label={`${f.title} icon`}
                  >
                    {f.title} icon
                  </object>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                  <p className="text-sm md:text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[35%] bg-[#0B2D58] p-5">
          <h3 className="text-3xl md:text-3xl font-semibold mb-6">
            Built For Better Lending
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              "Loan Stacking Detection",
              "Automated Income Verification",
              "Enhanced Ability-To-Pay Calculations",
              "Support For Online & Storefront Lending",
              "Fast, Frictionless Borrower Experience",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg">
                <Image
                  src="/GreenCheckMarkIcon.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#0B2D58] text-white mt-2 p-5 md:p-10  md:p-10 mx-5 lg:mx-[50px] rounded-b-[14px] w-[80%]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Know Your Customer
        </h2>

        <div className="border-b border-white/30 pb-5 mb-5">
          <h3 className="text-lg md:text-xl font-medium mb-4">
            Bank Account Ownership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-4 flex items-center gap-3 text-sm md:text-base"
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-medium mb-4">
            Bank Account History
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {historyItems.map((item) => (
              <div
                key={item.label}
                className="bg-[#123865] rounded-lg p-4 flex items-center gap-3 text-sm md:text-base shadow"
              >
                <Image
                  src={`/${item.img}`} 
                  alt={item.label}
                  width={40}
                  height={40}
                  className="w-10 h-10"
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
