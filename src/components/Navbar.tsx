'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white border-[0.5px] py-10 px-4 flex items-center justify-between w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-white font-bold text-2xl">
          <span className="text-white">EM</span>
          <span className="text-blue-500"> Tech ai</span>
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="font-sans text-white text-2xl flex absolute left-1/2 transform -translate-x-1/2 gap-12">
        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>


      {/* Hamburger button for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {/* Simple hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-4 bg-black p-4 rounded shadow-lg flex flex-col space-y-4 text-white text-sm md:hidden">
          <Link href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}





























