"use client";
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0A0E2C] text-white font-sarabun overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-10">
        <div className="flex-1 z-10">
          <h1 className="text-[32px] md:text-[42px] font-bold leading-tight text-white uppercase">
            <span
              className="inline-block px-6 py-3 rounded-[60px] text-[35px] md:text-[35px] font-bold"
              style={{
                backgroundImage:
                  "url('https://acufi.com/wp-content/uploads/2025/07/acufi-bg.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              ACUFI
            </span>
            — Modern Neo Bank for your Business
          </h1>

          <div
            className="p-6 rounded-xl border [border-width:1.81px] 
    [background:linear-gradient(116.3deg,rgba(208,232,255,0.2)_30.52%,rgba(245,250,255,0.2)_88.02%)] 
bg-gradient-to-b from-[#D0E8FF] to-[#F5FAFF]/60] 
  "
          >
            <a
              href="#"
              className="px-10 py-3 rounded-lg text-lg font-semibold 
         bg-gradient-to-r from-[#0d1c4b] to-[#1a3fa0] 
         border border-white/30 shadow-[0_0_10px_rgba(0,183,255,0.6)] 
         hover:shadow-[0_0_18px_rgba(0,183,255,0.9)] 
      "
            >
              <span className="text-white">When Banks Say No... </span>
              <span className="text-[#4da6ff]">We Say, Let's Talk!</span>
            </a>
          </div>

          <p className="mt-6 text-[16px]  text-gray-200">
            The Neo bank built for high-risk, high-growth businesses. We&apos;re
            not afraid of industries that others call{" "}
            <span className="font-semibold">“unbankable”</span>. <br />
            From short-term lending to peptides and cannabis to crypto,{" "}
            <span className="font-semibold">AcuFi</span> provides modern
            financial services designed for your business.
          </p>

          <div className="flex justify-start mt-6">
            {/* Card 1 */}
            <div
              className="group relative w-[250px] h-[160px] rounded-[20px] p-5 cursor-pointer 
                      bg-[url('https://acufi.com/wp-content/uploads/2025/07/BlueBg.png')] 
                      bg-center bg-no-repeat bg-cover text-white 
                      transition-transform duration-300 ease-in-out 
                      hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
            >
              <div className="flex flex-col">
                <div className="flex justify-end">
                  <object
                    type="image/svg+xml"
                    data="https://acufi.com/images/Arrow1Icon.svg"
                    className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:-rotate-45"
                  >Arrow Icon</object>
                </div>
                <p className="m-0 text-[16px] text-left">
                  Join the lender network
                </p>
                <strong className="mt-1 block text-[18px] text-left">
                  Free 90-Day Trial
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-[20px] shadow-lg"
          >
            <source src="https://acufi.com/wp-content/uploads/2025/08/Modern-neo-bank-1st-page-1.webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
