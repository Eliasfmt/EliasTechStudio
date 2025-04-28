'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white border-[0.5px] py-2 px-4 flex items-center justify-between w-full relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-white font-bold text-xl">
          <span className="text-white">Elias</span>
          <span className="text-blue-500"> Tech Studio</span>
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12 text-white text-sm">
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






























// 'use client';

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     // <nav className="relative bg-black border-b border-white border-[0.5px] py-2">
//     //   <div className="absolute left-6 top-1/2 -translate-y-1/2">

//     //     <h1 className="text-white font-bold text-xl">
//     //       <span className="text-white">Elias</span>
//     //       <span className="text-blue-500"> Tech Studio</span>
//     //     </h1>

//     //   <ul className="flex justify-center gap-15 text-white text-sm">
//     //     <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
//     //     <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
//     //     <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
//     //     <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
//     //   </ul>

//     //   </div>
//     // </nav>

//     <nav className="flex items-center justify-between bg-black border-b border-white px-4 py-2">
//   {/* Logo on the far left */}
//   <div className="text-white text-xl font-bold">
//     <span className="text-white">Elias</span><span className="text-blue-500"> Tech Studio</span>
//   </div>

//   {/* Middle Navigation Links */}
//   <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
//     <ul className="flex gap-8 text-white text-sm">
//       <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
//       <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
//       <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
//       <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
//     </ul>
//   </div>

//   {/* Mobile Links below or stacked */}
//   <div className="flex flex-col md:hidden text-white text-sm absolute top-full left-0 w-full bg-black">
//     <ul className="flex flex-col items-center gap-2 py-2">
//       <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
//       <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
//       <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
//       <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
//     </ul>
//   </div>
// </nav>




//   );
// }
