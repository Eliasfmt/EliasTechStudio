'use client';

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


export default function Home() {
  const [showTyping, setShowTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  

  const fullText = `prrompt:Please write me a title ....`;

  useEffect(() => {
    if (showTyping) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText((prev) => prev + fullText[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowTyping(false);   // ✅ Immediately hide it here
        }
      }, 100); // Typing speed (150 ms per letter)
  
      return () => clearInterval(interval);
    }
  }, [showTyping]);

  return (
    <main className="min-h-screen text-white bg-gradient-to-r from-black via-indigo-950 via-indigo-800
                    via-blue-900 via-blue-800 via-blue-700 via-blue-600 via-blue-500 via-blue-400 
                    via-blue-300 via-blue-400 via-blue-500 to-blue-800">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-50 py-32 px-4">
      {showTyping ? (
    <h2 className="text-lg font-mono text-sky-400 mb-10">
      {displayedText}_
      </h2>
  ) : (
    <h2 className="font-extrabold mb-6 text-center">
  <span className="text-3xl sm:text-4xl text-white">Turning ideas into</span>
  <br />
  <span className="text-5xl sm:text-6xl text-blue-500">Intelligent Applications</span>
</h2>
  )}

  {/* These always stay visible */}
  <p className="max-w-xl text-gray-400 text-lg mb-10">
      From analyzing trends to building smart applications, I’m passionate about using data and AI to craft powerful solutions.
      My goal is to turn complexity into clarity and help businesses make smarter, faster decisions.
  </p>
  
  <div className="flex gap-4">
    <a href="/projects" className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
      View Projects
    </a>
    <a href="/contact" className="px-6 py-3 border border-blue-600 text-blue-400 font-medium rounded hover:bg-blue-600 hover:text-white transition">
      Contact Me
    </a>
  </div>
</section>
    </main>
  );
}

