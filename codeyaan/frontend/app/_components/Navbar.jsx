"use client";
import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-2xl py-5 px-6 flex items-center justify-around">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-2 rounded-lg">
          <Code2 className="text-white w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
          Codeyaan
        </h1>
      </div>

      {/* Right side - Desktop Menu */}
      <div className="hidden md:flex space-x-14 ml-auto text-gray-700 font-medium sm:text-lg md:text-xl">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-600 hover:scale-105 transition-transform duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
          <div className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Login & Sign Up Buttons */}
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
              <button className="shadow-md text-gray-700 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
                Login
              </button>
              <button className="shadow-md bg-gradient-to-r from-sky-500 to-purple-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-8 ml-10 sm:text-lg md:text-xl font-medium">
        <button className="shadow-md text-gray-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
          Login
        </button>
        <button className="shadow-md bg-gradient-to-r from-sky-500 to-purple-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
