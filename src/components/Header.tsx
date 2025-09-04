"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#0B1C39] to-[#0B2D58] shadow-md">
      <div className="w-[80%] mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/AcufiLogo.png"
            alt="AcuFi Logo"
            width={150}
            height={40}
            priority
          />
        </div>

        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Products</span>
            <svg
              className="w-4 h-4"
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
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Use Cases</span>
            <svg
              className="w-4 h-4"
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
          </div>
          <span className="cursor-pointer hover:text-gray-300">Developer</span>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Resources</span>
            <svg
              className="w-4 h-4"
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
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span>Login</span>
            <svg
              className="w-4 h-4"
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
          </div>
        </nav>

        <div>
          <button className="flex items-center space-x-2 px-5 py-2 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-[#0A1E42] transition">
            <Image
              src="/RocketIcon.png"
              alt="Rocket Icon"
              width={20}
              height={20}
            />
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
}
