'use client';

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
        <li><a href="/" className="hover:text-blue-400">Home</a></li>
        <li><a href="/about" className="hover:text-blue-400">About</a></li>
        <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}