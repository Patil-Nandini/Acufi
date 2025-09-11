"use client";
import Image from "next/image";
import Link from "next/link";

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
    <div className="font-sarabun bg-[#001334] w-full flex flex-col items-center">
      <div className="pb-8 py-8 sm:py-12">
        <h1 className="text-center font-bold text-white text-4xl sm:text-3xl lg:text-4xl">
          AcuCheck
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#0B2D58] text-white rounded-t-[14px] px-5 sm:px-8 lg:px-9 w-[95%] lg:w-[85%] py-8 gap-8">
        <div className="flex-[1.6] text-left ">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Cash Flow Is The New Credit Score
          </h2>
          <p className="text-[18px] mb-4 ">
            Make smarter decisions using real-time banking data.
          </p>
          <p className="text-[18px] leading-relaxed">
            <span className="font-bold text-[18px]">AcuCheck</span> flips the
            script on traditional credit reports by delivering live insights
            straight from your applicant&apos;s bank account.
            <br />
            Instead of relying on stale scores and outdated assumptions,
            AcuCheck helps you see what matters most: the borrower&apos;s{" "}
            <span className="font-bold text-lg sm:text-xl">Ability to Pay</span>
            .
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-start">
            <Link href="https://acufi.com/under-renovation/">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-5 py-1 h-[62px] w-[268px] rounded-full font-bold shadow-[0px_4px_4px_0px_#FFFFFF40] cursor-pointer"
              >
                <Image
                  src="/ExploreIcon.svg"
                  alt="Explore"
                  width={20}
                  height={20}
                />
                <span>Explore AcuCheck in Action</span>
              </button>
            </Link>

            <Link href="https://acufi.com/acucheck-get-started/">
              <button
                className="
        relative overflow-hidden 
        flex items-center justify-center gap-2 
        px-6 py-7 sm:py-6 h-[80px] md:h-[72px] w-[280px] md:w-[250px] ml-[-7px]
        text-white font-semibold
         cursor-pointer
      "
              >
                <span
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('RequestDemoAcuCheck.png')" }}
                />
                <Image
                  src="/RequestDemoWhite.svg"
                  alt="Demo"
                  width={20}
                  height={20}
                  className="relative pb-[10px]"
                />
                <span className="relative pb-[10px]">Request A Demo</span>
                <span className="absolute top-[-6] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] pointer-events-none" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end w-[100%]">
          <object
            type="image/svg+xml"
            data="/Cash-flow-in-the-new-credit-score.svg"
            className="w-sm:[75%] w-lg:[90%]"
            // className="w-[100%] sm:w-[70%] md:w-full max-w-[500px] h-auto"
          >
            Cash flow illustration
          </object>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-2 mt-2 text-white w-[95%] lg:w-[85%]">
        <div className="basis-[65%] bg-[#0B2D58] px-5 py-5 sm:px-8 lg:px-9 ">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
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
                <Image
                  src={`/${f.icon}`}
                  alt={`${f.title} icon`}
                  width={32}
                  height={36}
                  className="w-8 h-9"
                />
                <div>
                  <h4 className="font-semibold text-[20px] mb-1 ">{f.title}</h4>
                  <p className="text-[18px] font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-full xl:w-[35%] bg-[#0B2D58] p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            Built For Better Lending
          </h3>
          <ul className="flex flex-col gap-5">
            {[
              "Loan Stacking Detection",
              "Automated Income Verification",
              "Enhanced Ability-To-Pay Calculations",
              "Support For Online & Storefront Lending",
              "Fast, Frictionless Borrower Experience",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3  text-[18px]">
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

      {/* Know Your Customer */}
      <div className="bg-[#0B2D58] text-white mt-2 mb-15 p-6 sm:p-9 w-[95%] lg:w-[85%] rounded-b-[14px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Know Your Customer
        </h2>

        {/* Ownership */}
        <div className="border-b border-white/30 pb-5 mb-5">
          <h3 className="text-lg sm:text-xl font-medium mb-4">
            Bank Account Ownership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
            {items.map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-4 flex items-center gap-3 text-[16px] h-full min-h-[70px]"
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.label}
                  width={36}
                  height={36}
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium mb-4">
            Bank Account History
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
            {historyItems.map((item) => (
              <div
                key={item.label}
                className="bg-[#133D72] border border-[#29425E] rounded-lg p-4 flex items-center gap-3 text-[16px] h-full min-h-[70px]"
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.label}
                  width={40}
                  height={40}
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
