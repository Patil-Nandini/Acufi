"use client";
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0A0E2C] text-white font-sarabun overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-10">
        <div className="flex-1 z-10">
          <h1 className="text-[32px] md:text-[42px] font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#2D4FFF] to-[#0AE0FF] text-transparent bg-clip-text">
              ACUFI
            </span>{" "}
            — MODERN NEO BANK FOR YOUR BUSINESS
          </h1>

          <div className="p-6 rounded-xl border [border-width:1.81px] 
    [background:linear-gradient(116.3deg,rgba(208,232,255,0.2)_30.52%,rgba(245,250,255,0.2)_88.02%)] 
    [border-image-source:linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.6)_99.41%)] 
  ">
 When Banks Say No… We Say, Let's Talk!
</div>

          <p className="mt-6 text-[16px] leading-relaxed text-gray-200">
            The Neo bank built for high-risk, high-growth businesses. We&apos;re
            not afraid of industries that others call{" "}
            <span className="font-semibold italic">“unbankable”</span>. <br />
            From short-term lending to peptides and cannabis to crypto,{" "}
            <span className="font-semibold">AcuFi</span> provides modern
            financial services designed for your business.
          </p>

          <div className="mt-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A6AFF] to-[#00E0FF] font-semibold shadow-lg hover:opacity-90 transition">
              <span>Get Started!</span>
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600 font-bold">
                →
              </span>
            </button>
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
