'use client';

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-r from-black via-blue-900 to-blue-600">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">Thank You!</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl">
          Your message has been received. I will get back to you as soon as possible!
        </p>

        <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition">
            Return Home
          </Link>
          <Link href="/projects" className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded hover:bg-blue-600 hover:text-white transition">
            View Projects
          </Link>
        </div>
      </section>
    </main>
  );
}