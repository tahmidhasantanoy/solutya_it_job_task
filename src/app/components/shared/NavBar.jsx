// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#426AE2] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-white">
            COCA
          </Link>
        </div>

        {/* Center - Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Right - Button or Icon */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block text-sm bg-[#426AE2] text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
          <button className="text-sm bg-[#23F0A9] text-black px-5 py-4 rounded-3xl">
            Sign up for free
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="text-black hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-black hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
            <button className="text-sm bg-[#23F0A9] text-black px-5 py-4 rounded-3xl">
              Sign up for free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
