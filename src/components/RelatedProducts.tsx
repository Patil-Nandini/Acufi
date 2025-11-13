// src/components/RelatedProducts.tsx
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const initialIcons = [
  {
    id: 1,
    src: "/IconAcuCheck.svg",
    alt: "Product icon 1",
    title: "AcuCheck",
    description:
      "AcuCheck analyzes real-time cash flow, verifies income and the ability to pay, and flags financial risk to help you make smarter, faster, and safer lending decisions.",
  },
  {
    id: 2,
    src: "/IconAcuView.svg",
    alt: "Product icon 2",
    title: "AcuView",
    description:
      "AcuView delivers real-time intelligence to verify borrowers, prevent loan stacking, reduce fraud, and help you make compliant & confident lending decisions.",
  },
  {
    id: 3,
    src: "/IconAcuPay.svg",
    alt: "Product icon 3",
    title: "AcuPay",
    description: "Fast, Compliant, and Secure Payments, all built for risk.",
  },
  {
    id: 4,
    src: "/IconVerafi.svg",
    alt: "Product icon 4",
    title: "VeraFi.me",
    description:
      "VeraFi.me is our identity verification solution that helps you onboard verified users, reduce fraud risk, and meet KYC requirements with ease.",
  },
  {
    id: 5,
    src: "/IconAcuSync.svg",
    alt: "Product icon 5",
    title: "AcuSync.ai",
    description:
      "AcuSync.ai enables secure, automated data transfer across databases and formats, thus reducing manual effort while ensuring complete data integrity and validation.",
  },
];

export default function RelatedProducts() {
  const [icons, setIcons] = useState(initialIcons);
  const centerIndex = 2; // center slot index for visible row (5 items)

  // framer-motion controls for the sliding animation
  const controls = useAnimation();

  // refs for DOM elements used for measurement and animation
  const listRef = useRef<HTMLUListElement | null>(null); // the animated icons list
  const containerRef = useRef<HTMLDivElement | null>(null); // wrapper that holds connectors and icons

  // stepRef: measured width + gap used for animated slide
  const stepRef = useRef<number>(0);

  // connector positions (x in px relative to container's left, y for top)
  const [connPositions, setConnPositions] = useState<{ x: number; y: number }[]>([]);

  // autoplay state
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayInterval = 3000;

  // compute step (width + gap) used by slide animation
  const computeStep = () => {
    const list = listRef.current;
    if (!list) return;
    const first = list.querySelector("li");
    if (!first) return;
    const firstRect = (first as HTMLElement).getBoundingClientRect();
    const computedStyle = getComputedStyle(list);
    const gapVal = computedStyle.gap || computedStyle.getPropertyValue("column-gap") || "0px";
    const gapPx = parseFloat(gapVal || "0");
    stepRef.current = firstRect.width + gapPx;
  };

  // Measure icon centers (pixel-perfect) and set connector positions.
  // This measures each <li> center relative to the containerRef left/top.
  const measureConnectorPositions = () => {
    const list = listRef.current;
    const container = containerRef.current;
    if (!list || !container) return;

    const containerRect = container.getBoundingClientRect();
    const lis = Array.from(list.querySelectorAll("li"));
    if (lis.length === 0) return;

    const positions = lis.map((li) => {
      const r = (li as HTMLElement).getBoundingClientRect();
      const centerX = r.left + r.width / 2 - containerRect.left;
      // put connector slightly below icon (8px gap)
      const topY = r.bottom - containerRect.top + 8;
      return { x: centerX, y: topY };
    });

    setConnPositions(positions);
  };

  // initial compute of step & connector positions after layout
  useLayoutEffect(() => {
    computeStep();
    // measure after next paint (safeguard for image loads / layout)
    const raf = requestAnimationFrame(() => {
      computeStep();
      measureConnectorPositions();
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute on resize and when images load. We intentionally do not recompute
  // when icons array rotates because connectors must remain fixed slots.
  useEffect(() => {
    computeStep();
    measureConnectorPositions();

    const ro = new ResizeObserver(() => {
      computeStep();
      measureConnectorPositions();
    });

    if (containerRef.current) ro.observe(containerRef.current);
    if (listRef.current) {
      ro.observe(listRef.current);
      listRef.current.querySelectorAll("li").forEach((li) => ro.observe(li));
    }

    // Re-measure when images load (next/image => actual img tags)
    const imgs = Array.from(document.querySelectorAll("img"));
    let loadedCount = 0;
    const onImgEvent = () => {
      loadedCount += 1;
      if (loadedCount >= imgs.length) {
        computeStep();
        measureConnectorPositions();
      }
    };
    imgs.forEach((img) => {
      if ((img as HTMLImageElement).complete) {
        onImgEvent();
      } else {
        img.addEventListener("load", onImgEvent, { once: true });
        img.addEventListener("error", onImgEvent, { once: true });
      }
    });

    // fallback
    const t = setTimeout(() => measureConnectorPositions(), 500);

    return () => {
      ro.disconnect();
      clearTimeout(t);
      imgs.forEach((img) => {
        img.removeEventListener("load", onImgEvent as EventListener);
        img.removeEventListener("error", onImgEvent as EventListener);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // slide once: animate list left by -stepRef.current then rotate icons array
  const slideOnce = async () => {
    const step = stepRef.current || 0;
    if (step === 0) return;
    await controls.start({
      x: -step,
      transition: { duration: 0.75, ease: [0.22, 0.9, 0.28, 1] },
    });
    // after animation, rotate array (move first to last)
    setIcons((prev) => {
      const copy = prev.slice();
      const first = copy.shift();
      if (first) copy.push(first);
      return copy;
    });
    // reset transform to 0 instantly (so icons visually occupy same connector slots)
    controls.set({ x: 0 });
  };

  // autoplay interval
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      slideOnce();
    }, autoplayInterval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  // on icon click: compute how many shifts required to bring clicked icon to center slot
  const onIconClick = (clickedIndex: number) => {
    // clickedIndex is index in current icons array; centerIndex is desired target
    const shiftCount = (clickedIndex - centerIndex + icons.length) % icons.length;
    if (shiftCount === 0) return; // already centered
    setIsPlaying(false);
    const doShifts = async (n: number) => {
      for (let i = 0; i < n; i++) {
        // await each animated slide
        // small delay between slides looks smoother
        await slideOnce();
      }
    };
    doShifts(shiftCount).then(() => {
      setTimeout(() => setIsPlaying(true), 3000);
    });
  };

  const active = icons[centerIndex];

  return (
    <section aria-labelledby="related-products-heading" className="w-full bg-[#eaf6ff] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="related-products-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
            Related Products
          </h2>
        </div>

        {/* Icons row - container holds connectors (absolute) + animated icons (on top) */}
        <div
          className="relative flex justify-center items-center mb-8 sm:mb-12 bg-[url('/IconsBackground.png')] bg-contain bg-center bg-no-repeat pt-32 pb-24"
        >
          <div className="w-full max-w-[980px] relative" ref={containerRef}>
            {/* Static connectors (pixel-perfect positions) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {connPositions.length > 0 &&
                connPositions.map((pos, idx) => {
                  const isCenter = idx === centerIndex;
                  return (
                    <span
                      key={`connector-${idx}`}
                      className={`absolute transform -translate-x-1/2 w-0 h-16 md:h-20 border-l-2 border-dashed ${
                        isCenter ? "border-[#0b66d9] opacity-90" : "border-[#d3e1eb] opacity-60"
                      }`}
                      style={{ left: pos.x, top: pos.y }}
                    />
                  );
                })}
            </div>

            {/* Animated icons on top */}
            <div className="relative z-10 overflow-visible">
              <motion.ul
                ref={listRef}
                className="flex items-center gap-4 sm:gap-24 lg:gap-26 px-4"
                animate={controls}
                initial={{ x: 0 }}
                style={{ willChange: "transform" }}
              >
                {icons.map((icon, idx) => {
                  const isActive = idx === centerIndex;
                  return (
                    <li key={icon.id} className="flex-shrink-0 relative">
                      <button
                        type="button"
                        onClick={() => onIconClick(idx)}
                        className={`relative flex items-center justify-center rounded-full bg-white shadow-md focus:outline-none
                          ${isActive ? "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" : "w-12 h-12 sm:w-14 sm:h-14 md:w-28 md:h-28"}
                          transition-all duration-300`}
                        title={icon.title}
                        aria-pressed={isActive}
                      >
                        {isActive && <span className="absolute inset-0 rounded-full" style={{ boxShadow: "0 12px 34px rgba(7,70,200,0.18)" }} />}
                        <div
                          className={`relative rounded-full bg-white flex items-center justify-center ${isActive ? "w-[86%] h-[86%]" : "w-[80%] h-[80%]"}`}
                        >
                          <Image src={icon.src} alt={icon.alt} width={56} height={56} className="object-contain" />
                        </div>
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Central card wrapper */}
        <div className="flex justify-center bg-[url('/DivBackground.png')] bg-contain bg-no-repeat bg-top p-12 -mt-32">
          <div className="relative w-full max-w-[920px]">
            {/* Outer card background / soft border */}
            <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(18,63,111,0.06)] border border-white/60 p-6 md:p-4">
              {/* Inner outer card */}
              <div className="relative rounded-2xl bg-white shadow-[0_10px_30px_rgba(18,63,111,0.06)] border border-white/80 p-6 md:p-8">
                <div className="absolute top-4 left-6">
                  <Image src="/Related_threedotsicon.svg" alt="Options" width={28} height={28} className="opacity-80" />
                </div>

                {/* Search-like title bar - extended */}
                <div className="relative w-[180%] -left-[40%] mx-auto flex justify-center">
                  <div className="bg-white shadow-inner border border-slate-100 px-4 py-3 md:px-6 md:py-4 flex items-center gap-4 w-full max-w-[960px] rounded-xl relative">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center">
                      <Image src="/Related_arrowIcon.svg" alt="arrow icon" width={38} height={38} />
                    </div>

                    <div className="flex-1 text-center border border-slate-50 bg-[#F8FAFF] shadow-[inset_0px_2px_16px_#C6D7E2] rounded-xl py-2">
                      <span className="block text-sm md:text-base font-semibold text-slate-800">{active.title}</span>
                    </div>
                  </div>
                </div>

                {/* description */}
                <div className="
                mt-5 md:mt-6 rounded-xl p-4 md:p-6 border border-slate-50
                 bg-[#F8FAFF] shadow-[inset_0px_2px_16px_#C6D7E2] w-full max-w-[820px] mx-auto
  h-[120px] 
  flex items-center justify-center">
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">{active.description}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center -mb-8">
              <button
                type="button"
                className="mt-5 pb-5 inline-flex h-[65px] w-[240px] items-center justify-center rounded-full text-white font-semibold"
                style={{
                  backgroundImage: "url('/AcuViewButtonBg.webp')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                aria-label="Get Your Demo"
              >
                <Image src="/RocketIcon.png" alt="Rocket Icon" width={20} height={20} />
                <span className="ml-2 whitespace-nowrap">Get Your Demo!</span>
              </button>
            </div>
          </div>
        </div>

        {/* decorative grid lines (visual) */}
        <div className="hidden lg:block">
          <div className="absolute inset-x-0 -bottom-16 h-48 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
