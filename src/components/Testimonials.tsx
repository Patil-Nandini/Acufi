"use client";
import React from "react";

const Testimonials = () => {
  function slidePrev(): void {
    const track = document.getElementById("testimonial-track");
    if (!track) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; 
    track.scrollLeft -= cardWidth;
  }

  function slideNext(): void {
    const track = document.getElementById("testimonial-track");
    if (!track) return;
    const card = track.children[0] as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 24; 
    track.scrollLeft += cardWidth;
  }

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-25    flex justify-center"
      style={{
        backgroundImage:
          "url('https://acufi.com/wp-content/uploads/2025/07/testimonials-bgi.webp')",
      }}
    >
      <div className="w-full max-w-[1160px] px-4 flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What People Say About Us
          </h2>
          <p className="text-[18px] text-[#0F1720] mt-2">
            Lenders Say It's Best
          </p>
        </div>

        <div className="hidden lg:flex gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Adara G
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  Regional Manager
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              Three banks rejected us. AcuFi approved us in 48 hours.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar-1.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Isla B
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  SVP Fraud Director
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              AcuFi gave us real banking tools that work for high-risk
              businesses.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar-2.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Apollo C
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  Director of Corporate Accounting and Finance
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              AcuFi isn’t just a bank—it’s the partner we wish we had years ago.
            </p>
          </div>
        </div>

        <div className="relative flex lg:hidden w-full">
          <div className="overflow-hidden w-full">
            <div
              id="testimonial-track"
              className="flex gap-6 transition-transform duration-400 ease-in-out"
            >
              <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Adara G
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  Regional Manager
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              Three banks rejected us. AcuFi approved us in 48 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar-1.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Isla B
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  SVP Fraud Director
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              AcuFi gave us real banking tools that work for high-risk
              businesses.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 flex-1">
            <div className="flex items-center gap-3 border-b border-[#eee] pb-3 min-h-[100px]">
              <img
                src="https://acufi.com/wp-content/uploads/2025/07/Avatar-2.png"
                alt="User"
                className="w-[60px] h-[60px]"
              />
              <div className="text-left">
                <h4 className="text-[22px] font-semibold text-[#0F1720]">
                  Apollo C
                </h4>
                <span className="text-[18px] font-semibold text-[#0F1720] block">
                  Director of Corporate Accounting and Finance
                </span>
              </div>
            </div>
            <div className="text-[#ff9900] text-[32px] my-2 text-left">
              ★★★★★
            </div>
            <p className="text-[18px] font-medium text-[#0F1720] text-left">
              AcuFi isn’t just a bank—it’s the partner we wish we had years ago.
            </p>
          </div>
            </div>
          </div>

          <div className="absolute right-2 bottom-[-50px] flex gap-2">
            <button onClick={() => slidePrev()}>
              <img
                src="https://acufi.com/images/BackwardIcon.svg"
                alt="Previous"
                className="w-10"
              />
            </button>
            <button onClick={() => slideNext()}>
              <img
                src="https://acufi.com/images/ForwardIcon.svg"
                alt="Next"
                className="w-10"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
