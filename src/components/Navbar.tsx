// 'use client';

// import { useState } from "react";
// import GoogleTranslate from "@/components/GoogleTranslate";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black border-b border-white border-[0.5px] py-10 px-4 flex items-center justify-between w-full relative">
//       {/* Logo */}
//       <div className="flex items-center">
//         <h1 className="text-white font-bold text-xl">
//           <span className="text-white">EM</span>
//           <span className="text-blue-500"> Tech </span>
//         </h1>
//       </div>

//       {/* Desktop Navigation Links */}
//       <ul className="hidden md:flex font-sans text-white text-xl absolute left-1/2 transform -translate-x-1/2 gap-12">
//         <li><a href="/" className="hover:text-blue-400">Home</a></li>
//         <li><a href="/about" className="hover:text-blue-400">About</a></li>
//         <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
//         <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
//         <li><a href="/blogs" className="hover:text-blue-400">Blogs</a></li>
//       </ul>

//       {/* Google Translate (Desktop Only) */}
//       <div className="hidden md:flex items-center gap-2 absolute right-4 top-1/2 transform -translate-y-1/2">
//         <GoogleTranslate />
//       </div>

//       {/* Hamburger button for mobile */}
//       <div className="md:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute top-14 right-4 bg-black p-4 rounded shadow-lg flex flex-col space-y-4 text-white text-sm md:hidden">
//           <a href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a>
//           <a href="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a>
//           <a href="/projects" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a>
//           <a href="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</a>
//           <a href="/blogs" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Blogs</a>
//         </div>
//       )}
//     </nav>
//   );
// }



'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';          // tiny icon set
//import GoogleTranslate from '@/components/GoogleTranslate';

import dynamic from 'next/dynamic';
const GoogleTranslate = dynamic(
  () => import('./GoogleTranslate'),
  { ssr: false }          // run only in the browser
);

/* Tailwind required */
/* If lucide-react isn’t installed yet:  npm i lucide-react  */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (

  <header className="w-full bg-black text-white shadow-md">
      {/* ------- Desktop / tablet bar -------------------------------- */}
      <nav
        className="
          w-full
          grid grid-cols-[auto_1fr_auto]
          items-center
          px-4 py-3 md:py-4
        "
      >
        {/* Left – logo */}
        <Link href="/" className="text-3xl font-bold">
          EM&nbsp;<span className="text-blue-500">Tech</span>
        </Link>

        {/* Center – navigation links */}
        <ul className="hidden md:flex justify-center gap-12 font-sans text-2xl">
          <li><Link href="/"         className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/about"    className="hover:text-blue-400">About</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link href="/contact"  className="hover:text-blue-400">Contact</Link></li>
          <li><Link href="/blogs"    className="hover:text-blue-400">Blogs</Link></li>
        </ul>

        {/* Right – translator + hamburger */}
        <div className="flex items-center justify-end gap-4">
          {/* Translator hidden on very small screens to save space */}
          <div className="hidden md:block">
            <GoogleTranslate />
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ------- Mobile drawer -------------------------------------- */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            {/* Translator is shown inside the drawer for mobile users */}
            <GoogleTranslate />
            <li><Link href="/"         onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about"    onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link href="/contact"  onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link href="/blogs"    onClick={() => setOpen(false)}>Blogs</Link></li>
          </ul>
        </div>
      )}
    </header>

  );
}




