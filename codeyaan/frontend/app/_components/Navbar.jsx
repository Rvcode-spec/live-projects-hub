"use client"
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
        <nav className="bg-white border-b border-gray-200 shadow-2xl py-5 px-6">
            <div className="flex items-center justify-between">
                {/* Left side - Logo */}
                <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-2 rounded-lg">
                        <Code2 className="text-white w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                        Codeyaan
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-14 text-gray-700 font-medium text-lg">
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

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4 text-lg font-medium">
                    <button className="shadow-md text-gray-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
                        Login
                    </button>
                    <button className="shadow-md bg-gradient-to-r from-sky-500 to-purple-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-700 font-medium text-lg hover:text-blue-600 hover:pl-2 transition-all duration-300"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="space-y-3 pt-4">
                        <button 
                            className="w-full shadow-md text-gray-600 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                            onClick={toggleMenu}
                        >
                            Login
                        </button>
                        <button 
                            className="w-full shadow-md bg-gradient-to-r from-sky-500 to-purple-800 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                            onClick={toggleMenu}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}