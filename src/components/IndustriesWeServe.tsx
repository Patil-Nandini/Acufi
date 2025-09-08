// components/Industries.tsx

const industries = [
  {
    title: "Short Term Lending",
    desc: "Solutions for payday, installment and title lenders.",
    svg: (
      <object
        type="image/svg+xml"
        data="/Short-Term-lending.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Short Term Lending icon"
      >
        Short Term Lending icon
      </object>
    ),
  },
  {
    title: "Title Lending",
    desc: "Specialized banking for auto title loan providers.",
    svg: (
      <object
        type="image/svg+xml"
        data="/Title-Lending.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Title Lending icon"
      >
        Title Lending icon
      </object>
    ),
  },
  {
    title: "CBD & Cannabis",
    desc: "Financial services for the legal cannabis industry.",
    svg: (
      <object
        type="image/svg+xml"
        data="/CBD-Cannabis.svg"
        width="180"
        height="150"
        className="block"
        aria-label="CBD & Cannabis icon"
      >
        CBD & Cannabis icon
      </object>
    ),
  },
  {
    title: "Credit Repair",
    desc: "Banking solutions for credit repair services.",
    svg: (
      <object
        type="image/svg+xml"
        data="/Credit-Repair.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Credit Repair icon"
      >
        Credit Repair icon
      </object>
    ),
  },
  {
    title: "Nutraceuticals & Supplements",
    desc: "Payment processing for supplement companies.",
    svg: (
      <object
        type="image/svg+xml"
        data="Nutraceuticals-Supplements.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Nutraceuticals & Supplements icon"
      >
        Nutraceuticals & Supplements icon
      </object>
    ),
  },
  {
    title: "Debt Relief",
    desc: "Financial services for debt settlement companies.",
    svg: (
      <object
        type="image/svg+xml"
        data="/Debt-Relief.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Debt Relief icon"
      >
        Debt Relief icon
      </object>
    ),
  },
  {
    title: "Affiliate & Lead Generation Marketing",
    desc: "High-risk payment processing for marketers.",
    svg: (
      <object
        type="image/svg+xml"
        data="/Affiliate-Lead-Generation-Marketing.svg"
        width="180"
        height="150"
        className="block"
        aria-label="Affiliate & Lead Generation Marketing icon"
      >
        Affiliate & Lead Generation Marketing icon
      </object>
    ),
  },
];

export default function Industries() {
  return (
    <section
      className="py-16 px-6 md:px-12 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage:
          "url('/IndustriesWeServe-bg.webp')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Industries We Serve
        </h2>
        <p className="text-gray-600 mt-2" style={{ color: "#0F1720" }}>
          If You’ve Been Called{" "}
          <span
            className="font-semibold text-gray-900"
            style={{ color: "#0F1720" }}
          >
            “Hard to Bank”
          </span>
          , You’re in the Right Place.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center space-between gap-14"
            >
              <div className="w-[100px] sm:w-20 h-20 z-10 mb-[-2rem] flex items-center justify-center">
                {item.svg}
              </div>

              <div className="w-[280px] h-[130] bg-white rounded-2xl shadow-sm hover:shadow-md transition px-4 py-2 text-center">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#17012C" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-md text-gray-400 mt-2"
                  style={{ color: "#0F1720" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
