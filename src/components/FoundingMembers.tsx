export default function FoundingMembersPage() {
  return (
    <div
      className="bg-gray-50 font-sarabun text-gray-800 overflow-x-hidden w-full flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bg-founding-members.webp')",
      }}
    >
      <div className="relative container mx-auto px-4 py-16 sm:py-24 w-[80%]">
        {/* Section 1: Benefits */}
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-[#0F1720]-900">
              Founding Member Benefits
            </h1>
            <p className="mt-6 text-lg text-[#0F1720]-600">
              Join our exclusive founding member program and get priority access
              to all AcuFi features.
            </p>
            <div className="mt-10 space-y-8">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <object
                      type="image/svg+xml"
                      data="/Flexible-Integration-Options.svg"
                      className="w-22 h-22"
                      aria-label="Flexible Integration Options icon"
                    >
                      <img
                        src="/Flexible-Integration-Options.svg"
                        alt="Flexible Integration Options icon"
                        className="w-22 h-22"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Flexible Integration Options
                  </h3>
                  <p className="mt-1 text-gray-600">
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
                      data="https://acufi.com/images/Easy-3-Step-Setup .svg"
                      className="w-22 h-22"
                      aria-label="Easy 3-Step Setup icon"
                    >
                      <img
                        src="https://acufi.com/images/Easy-3-Step-Setup .svg"
                        alt="Easy 3-Step Setup icon"
                        className="w-22 h-22"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Easy 3-Step Setup
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Get started in minutes, not months. Our streamlined
                    onboarding process gets you from sign up to first
                    transaction in three simple steps with dedicated support
                    throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-full">
            <img
              src="https://acufi.com/wp-content/uploads/2025/07/Maskgroup.webp"
              alt="Cash flow is the new credit score illustration"
              className="w-[85%] h-auto"
            />
          </div>
        </section>

        <section className="mt-24 sm:mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://acufi.com/wp-content/uploads/2025/07/SET-UP-PROCESS.webp"
              alt="Setup Process"
              className="mx-auto mb-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              className="relative p-8 flex flex-col items-center text-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/SET-UP-PROCESS-bg.webp')",
              }}
            >
              <object
                className="w-26 h-26 mb-4"
                type="image/svg+xml"
                data="https://acufi.com/images/step-up-process-1.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <img
                  src="https://acufi.com/images/step-up-process-1.svg"
                  alt="Step 1: Account Creation & Verification icon"
                  className="w-16 h-16 mb-4"
                />
              </object>
              <h4 className="text-md font-semibold text-black">STEP 1</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2]">
                ACCOUNT CREATION & VERIFICATION
              </h4>
            </div>

           <div
              className="relative p-8 flex flex-col items-center text-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/SET-UP-PROCESS-bg.webp')",
              }}
            >
              <object
                className="w-26 h-26 mb-4"
                type="image/svg+xml"
                data="https://acufi.com/images/step-up-process-2.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <img
                  src="https://acufi.com/images/step-up-process-2.svg"
                  alt="Step 1: Account Creation & Verification icon"
                  className="w-16 h-16 mb-4"
                />
              </object>
              <h4 className="text-md font-semibold text-black">STEP 2</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2]">
                  API INTEGRATION & TESTING
              </h4>
            </div>

             <div
              className="relative p-8 flex flex-col items-center text-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/SET-UP-PROCESS-bg.webp')",
              }}
            >
              <object
                className="w-26 h-26 mb-4"
                type="image/svg+xml"
                data="https://acufi.com/images/step-up-process-3.svg"
                aria-label="Step 1: Account Creation & Verification icon"
              >
                <img
                  src="https://acufi.com/images/step-up-process-3.svg"
                  alt="Step 1: Account Creation & Verification icon"
                  className="w-16 h-16 mb-4"
                />
              </object>
              <h4 className="text-md font-semibold text-black">STEP 3</h4>
              <h4 className="mt-2 font-semibold text-[#0F1720B2]">
                GO LIVE & START GROWING
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
