// components/Comparison.tsx

import Image from "next/image";

export default function Comparison() {
  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://acufi.com/wp-content/uploads/2025/07/A-platform-That-Grows-with-You-bg.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        <div
          className="hidden lg:block absolute"
          style={{
            top: "90px",
            left: "-110px",
            zIndex: 10,
          }}
        >
          <img
            src="https://acufi.com/wp-content/uploads/2025/08/man-Image-with-White.webp"
            alt="Man"
            className="max-h-[760px] w-auto"
            style={{
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.15))",
            }}
          />
        </div>

        <div className="text-center max-w-3xl mb-12">
          <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-full">
            AcuFi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
            A platform That Grows with You
          </h2>
          <p className="text-gray-600 mt-2">
            See how AcuFi compares with traditional banking solutions.
          </p>
        </div>

        <div className="w-[88%] py-12 relative top-[124px]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="overflow-x-auto">
           <table className="w-full border border-gray-200 overflow-hidden bg-white rounded-[30px]">
                <thead
                  className="text-white "
                  style={{
                    background:
                      "linear-gradient(90.37deg, #095ABB -4.45%, #0D86D4 103.35%)",
                  }}
                >
                  <tr>
                    <th className="py-4 px-18 text-left">Features</th>
                    <th className="py-4 px-18 text-left">Acufi</th>
                    <th className="py-4 px-18 text-left">Traditional Banks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D4D4D8]">
                  <tr className="bg-[white]">
                    <td className="py-4 px-18">Account Setup Time</td>
                    <td className="py-4 px-18 text-green-600 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        1 - 3 Days
                      </div>
                    </td>
                    <td className="py-4 px-18 text-red-500 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        2 - 6 Weeks
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-18">Credit Risk Insights</td>
                    <td className="py-4 px-18 text-green-600 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Real-Time Cash Flow analysis + Loan Stacking
                      </div>
                    </td>
                    <td className="py-4 px-18 text-red-500 font-medium">
                      <div className="flex items-start">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                          alt=""
                          className="w-5 h-5 mr-2 mt-1"
                        />
                        Outdated Reports <br />
                        (30 - 60 days)
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[#white]">
                    <td className="py-4 px-18">Approval Rates</td>
                    <td className="py-4 px-18 text-green-600 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        High Approval Rates
                      </div>
                    </td>
                    <td className="py-4 px-18 text-red-500 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Declined
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-18">Customization</td>
                    <td className="py-4 px-18 text-green-600 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Flexible & Tailored
                      </div>
                    </td>
                    <td className="py-4 px-18 text-red-500 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Minimal
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-[white]">
                    <td className="py-4 px-18">Processes</td>
                    <td className="py-4 px-18 text-green-600 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Streamlined Digital Process
                      </div>
                    </td>
                    <td className="py-4 px-18 text-red-500 font-medium">
                      <div className="flex items-center">
                        <img
                          src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Paper-heavy, Slow
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:hidden w-full mt-8">
          {/* Acufi */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#095ABB] to-[#0D86D4] text-white py-3 text-center font-semibold">
              Acufi
            </div>
            <div className="divide-y">
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Account Setup Time
                </p>
                <p className="text-green-600 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  1 - 3 Days
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Credit Risk Insights
                </p>
                <p className="text-green-600 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  Real-Time Cash Flow analysis + Loan Stacking
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Industry Support
                </p>
                <p className="text-green-600 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  Short-term lending, Peptides, Cannabis, Crypto, etc.
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Fraud Detection
                </p>
                <p className="text-green-600 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  Behavioral + Warnings
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Onboarding Experience
                </p>
                <p className="text-green-600 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Frame-2147226778.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  100% Digital
                </p>
              </div>
            </div>
          </div>

          {/* Traditional Banks */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#095ABB] to-[#0D86D4] text-white py-3 text-center font-semibold">
              Traditional Banks
            </div>
            <div className="divide-y">
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Account Setup Time
                </p>
                <p className="text-red-500 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  2 - 6 Weeks
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Credit Risk Insights
                </p>
                <p className="text-red-500 flex items-start text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                    className="w-5 h-5 mr-2 mt-1"
                    alt=""
                  />
                  Outdated Reports (30 - 60 days)
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Industry Support
                </p>
                <p className="text-red-500 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  Declined
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Fraud Detection
                </p>
                <p className="text-red-500 flex items-center text-sm">
                  <img
                    src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                  />
                  Minimal
                </p>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-700 mb-2">
                  Onboarding Experience
                </p>
                <p className="text-red-500 flex items-center text-sm">
                  <Image
                    src="https://acufi.com/wp-content/uploads/2025/07/Icons.svg"
                    alt="cross"
                    width={20}
                    height={20}
                    className="icon"
                  />
                  Paper-heavy, slow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <button
            type="button"
            className="flex items-center justify-center w-55 min-h-[70px] text-white font-semibold cursor-pointer"
            style={{
              backgroundImage:
                "url('https://acufi.com/wp-content/uploads/2025/07/button-bg.webp')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              paddingBottom: "15px",
            }}
            aria-label="Get A Demo"
          >
            <object
              type="image/svg+xml"
              data="https://acufi.com/images/rocket.svg"
              className="w-10 h-7 mr-2"
              aria-label="Rocket icon"
            >
              Rocket icon
            </object>
            <span>Get A Demo!</span>
          </button>
        </div>
      </div>
    </section>
  );
}
