'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-black border-b border-white border-[0.5px] py-2">
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <h1 className="text-white font-bold text-xl">
          <span className="text-white">Elias</span>
          <span className="text-blue-500"> Tech Studio</span>
        </h1>
      </div>
      <ul className="flex justify-center gap-15 text-white text-sm">
        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  );
}