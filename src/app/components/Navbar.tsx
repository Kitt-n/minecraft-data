/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <Image
            src="/mc-data-logo.svg"
            width={50}
            height={50}
            priority
            alt="MC Data"
          />
          <span className="ml-3 text-2xl font-semibold text-black">
            VillageMC Data
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 rounded-lg text-sm p-2.5"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:w-auto ${isMenuOpen ? "block" : "hidden"
            }`}
          id="navbar-menu"
        >
          <ul className="flex flex-col mt-4 p-4 bg-white border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:items-center md:border-0 md:bg-transparent">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Items
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
