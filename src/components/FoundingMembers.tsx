import Image from "next/image";
import Link from "next/link";

export default function FoundingMembersPage() {
  return (
    <div
      className="bg-gray-50 font-sarabun text-gray-800 overflow-x-hidden w-full flex justify-center items-center bg-no-repeat bg-cover bg-center w-[100%]"
      style={{
        backgroundImage: "url('/bg-founding-members.webp')",
      }}
    >
      <div className="relative container mx-auto px-4 py-16 sm:py-24 w-[80%] lg:w-[90%]  ">
        <section className="relative grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-[#0F1720]-900">
              Founding Member <br /> Benefits
            </h1>
            <p className="mt-6 text-[18px] text-[#0F1720]-600">
              Join our exclusive founding member program and get priority access
              to all AcuFi features.
            </p>
            <div className="mt-10 space-y-8 ml-5">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <object
                      type="image/svg+xml"
                      data="/Flexible-Integration-Options.svg"
                      className="w-22 h-22"
                      aria-label="Flexible Integration Options icon"
                    >
                      <Image
                        src="/Flexible-Integration-Options.svg"
                        alt="Flexible Integration Options icon"
                        width={88}
                        height={88}
                        className="w-22 h-22"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Flexible Integration Options
                  </h3>
                  <p className="mt-1 text-gray-600 text-[18px]">
                    Multiple API endpoints, webhooks, and integration methods to
                    fit seamlessly into your existing tech stack. Our
                    developer-friendly documentation makes implementation
                    straightforward.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <object
                      type="image/svg+xml"
                      data="/Easy-3-Step-Setup .svg"
                      className="w-22 h-22"
                      aria-label="Easy 3-Step Setup icon"
                    >
                      <Image
                        src="/Easy-3-Step-Setup.svg"
                        alt="Easy 3-Step Setup icon"
                        width={88}
                        height={88}
                        className="w-22 h-22"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Easy 3-Step Setup
                  </h3>
                  <p className="mt-1 text-gray-600 text-[18px]">
                    Get started in minutes, not months. Our streamlined
                    onboarding process gets you from sign up to first
                    transaction in three simple steps with dedicated support
                    throughout.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-start gap-4">
              <Link href="https://acufi.com/lets-connect/">
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
              </Link>
            </div>
          </div>

          <div className="flex justify-center xl:justify-end items-center w-full">
            <Image
              src="/Maskgroup.webp"
              alt="Cash flow is the new credit score illustration"
              width={1200}
              height={800}
              className="w-[85%] h-auto lg:w-[60%] xl:w-[85%]"
            />
          </div>
        </section>

        <section className="mt-24 sm:mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/SET-UP-PROCESS.webp"
              alt="Setup Process"
              width={800}
              height={400}
              className="mx-auto mb-4 hidden md:block"
            />

            <Image
              src="/SET-UP-PROCESS-Mobile.webp"
              alt="Setup Process Mobile"
              width={400}
              height={300}
              className="mx-auto mb-4 block md:hidden"
            />
          </div>

          {/* Steps Grid */}
          <div className="gap-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center md:gap-[176px]">
            {/* STEP 1 */}
            <div
              className="relative p-4 md:p-6 flex flex-col items-center text-center bg-cover bg-center 
                 w-[300px] h-[220px] sm:w-[320px] sm:h-[240px]  md:w-[240px] md:h-[180px] lg:w-[290px] lg:h-[220px]   xl:w-[320px] xl:h-[240px]
                 rounded-xl"
              style={{ backgroundImage: "url('/SET-UP-PROCESS-bg.webp')" }}
            >
              <object
                className="w-20 h-20 md:w-[60] md:h-[60] lg:w-[100] lg:h-[100] mt-2  mb-1 md:mb-1 md:mt-0"
                type="image/svg+xml"
                data="/step-up-process-1.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <Image
                  src="/step-up-process-1.svg"
                  alt="Step 1"
                  width={64}
                  height={64}
                  className="mb-4 w-16 h-16 lg:w-12 lg:h-12"
                />
              </object>
              <h4 className="text-base font-semibold text-black">STEP 1</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2] text-[14px] md:text-[14px] xl:text-[16px]">
                ACCOUNT CREATION & VERIFICATION
              </h4>
            </div>

            {/* STEP 2 */}
            <div
              className="relative p-4 md:p-6 flex flex-col items-center text-center bg-cover bg-center 
                 w-[300px] h-[220px] sm:w-[320px] sm:h-[240px] md:w-[240px] md:h-[180px] lg:w-[290px] lg:h-[220px]   xl:w-[320px] xl:h-[240px]
                 rounded-xl"
              style={{ backgroundImage: "url('/SET-UP-PROCESS-bg.webp')" }}
            >
              <object
                className="w-20 h-20 md:w-[60] md:h-[60] lg:w-[100] lg:h-[100] mt-2  mb-1 md:mb-1 md:mt-0"
                type="image/svg+xml"
                data="https://acufi.com/images/step-up-process-2.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <Image
                  src="/step-up-process-2.svg"
                  alt="Step 2"
                  width={64}
                  height={64}
                  className="mb-4"
                />
              </object>
              <h4 className="text-base font-semibold text-black">STEP 2</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2] text-[14px] md:text-[14px] xl:text-[16px]">
                API INTEGRATION & TESTING
              </h4>
            </div>

            {/* STEP 3 */}
            <div
              className="relative p-4 md:p-6 flex flex-col items-center text-center bg-cover bg-center 
                w-[300px] h-[220px] sm:w-[320px] sm:h-[240px] md:w-[240px] md:h-[180px] lg:w-[290px] lg:h-[220px]   xl:w-[320px] xl:h-[240px]
                 rounded-xl"
              style={{ backgroundImage: "url('/SET-UP-PROCESS-bg.webp')" }}
            >
              <object
                className="w-20 h-20 md:w-[60] md:h-[60] lg:w-[100] lg:h-[100] mt-2  mb-1 md:mb-1 md:mt-0"
                type="image/svg+xml"
                data="https://acufi.com/images/step-up-process-3.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <Image
                  src="/step-up-process-3.svg"
                  alt="Step 3"
                  width={64}
                  height={64}
                  className="mb-4"
                />
              </object>
              <h4 className="text-base font-semibold text-black">STEP 3</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2] text-[14px] md:text-[14px] xl:text-[16px]">
                GO LIVE & START GROWING
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
