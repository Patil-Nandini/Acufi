"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
 
  const products = [
    {
      name: "AcuCheck",
      desc: "Cash Flow Is the New Credit Score",
      icon: "/AcuChcek-Favicon.webp",
    },
    {
      name: "AcuPay",
      desc: "For Fast, Flexible, and Secure Payments",
      icon: "/AcuPay.png",
    },
    {
      name: "AcuView",
      desc: "Real-Time Loan Intelligence At Your Fingertips",
      icon: "/favicon-acuview.svg",
    },
    {
      name: "Verafi.me",
      desc: "Real-time Onboarding with Secured, AI-powered Authentication",
      icon: "/Verafi.png",
    },
    {
      name: "Bank Verification",
      desc: "Bank Account Ownership Verification within Seconds",
      icon: "/Customer-Stories.png",
    },
  ];
 
  return (
    <header className="w-full absolute top-0 left-0 z-20 border-b-[1px] border-b-[#636E76] bg-[rgba(255,255,255,0.1)]">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/AcufiLogo.png"
            alt="AcuFi Logo"
            width={150}
            height={40}
            priority
          />
        </div>
 
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-white font-medium ">
          <div className="relative group">
            <button className="flex font-medium text-white font-semibold text-md  transition">
              Products
              <svg
                className="w-4 h-4 mt-1.5 ml-2 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="border-[20px] border-[#C3E1FF] rounded absolute top-full mt-2.5 w-80 bg-white rounded-xl shadow-lg p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <h4 className="text-gray-700 font-semibold mb-4 uppercase text-sm">
                Products
              </h4>{" "}
              <ul className="space-y-4">
                {" "}
                {products.map((product) => (
                  <li
                    key={product.name}
                    className="flex items-center space-x-3"
                  >
                    {" "}
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                      {" "}
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={28}
                        height={28}
                      />{" "}
                    </div>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-semibold text-[14px] text-[#0F1720] hover:underline cursor-pointer">
                        {" "}
                        {product.name}{" "}
                      </span>{" "}
                      <span className="text-[#677489] text-[12px] leading-snug">
                        {" "}
                        {product.desc}{" "}
                      </span>{" "}
                    </div>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>
 
          <span className="font-semibold text-md cursor-pointer">
            Use Cases
          </span>
          <span className="font-semibold text-md cursor-pointer">
            Developer
          </span>
          <span className="font-semibold text-md cursor-pointer">
            Resources
          </span>
          <span className="font-semibold text-md cursor-pointer">Login</span>
        </nav>
 
        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="flex items-center space-x-2 px-5 py-2 border-2 border-white rounded-full text-white font-medium shadow-[0px_5px_18px_-9.3px_#01459FCC] cursor-pointer">
            <Image
              src="/RocketIcon.png"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            <span>Get Started</span>
          </button>
        </div>
 
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white w-7 h-7 cursor-pointer" />
            ) : (
               <Image
              src="/Hamburger.png"
              alt="Rocket Icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            )}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <div>
            <button
              className="flex justify-between w-full text-[#0F1720] font-semibold cursor-pointer"
              onClick={() => setShowProducts(!showProducts)}
            >
              Products
              <svg
                className={`w-4 h-4 mt-1 ml-2 transition-transform duration-200 ${
                  showProducts ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
 
            {/* Mobile Products List */}
            {showProducts && (
              <ul className="mt-3 space-y-3">
                {products.map((product) => (
                  <li
                    key={product.name}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                      <Image
                        src={product.icon}
                        alt={product.name}
                        width={28}
                        height={28}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-[14px] text-[#0F1720]">
                        {product.name}
                      </span>
                      <span className="text-[#677489] text-[12px] leading-snug">
                        {product.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
 
          <span className="block font-semibold text-[#0F1720] ">Use Cases</span>
          <span className="block font-semibold text-[#0F1720]">Developer</span>
          <span className="block font-semibold text-[#0F1720]">Resources</span>
          <span className="block font-semibold text-[#0F1720]">Login</span>
 
          <button className="flex w-full justify-center items-center space-x-2 px-5 py-2 border-2 border-[#01459FCC] rounded-full text-[#01459FCC] font-medium shadow cursor-pointer">
            <Image
              src="/RocketIcon.png"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            <span>Get Started</span>
          </button>
        </div>
      )}
    </header>
  );
}