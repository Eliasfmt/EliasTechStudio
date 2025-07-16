/* src/app/page.tsx
   ───────────────────────────────────────────────────────────── */
'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  /* ─────────────────────────────────────────────────────────── */
  /* Typing-effect state                                         */
  const fullText = 'prrompt:Please write me a title ....';
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!typing) return;                          // nothing to do

    let i = 0;
    const id = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText[i]);
        i += 1;
      } else {
        clearInterval(id);
        setTyping(false);                         // stop typing
      }
    }, 100);                                      // speed: 100 ms / char

    return () => clearInterval(id);               // cleanup on hot-reload
  }, [typing]);
  /* ─────────────────────────────────────────────────────────── */

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          'linear-gradient(90deg, #14081A 0%, #2137C4 50%, #161417 100%)',
      }}
    >
      {/* Navbar includes the Google-Translate dropdown */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-50 py-32 px-4">
        {typing ? (
          /* Mark the moving headline as “do-not-translate” */
          <h2
            className="text-lg font-mono text-sky-400 mb-10 notranslate"
            translate="no"
          >
            {displayedText}_
          </h2>
        ) : (
          /* Static headline (also safe to keep notranslate) */
          <h2
            className="font-extrabold mb-6 text-center notranslate"
            translate="no"
          >
            <span className="text-3xl sm:text-5xl text-white">
              Turning ideas into
            </span>
            <br />
            <span className="text-5xl sm:text-8xl text-blue-500">
              Intelligent Applications
            </span>
          </h2>
        )}

        {/* Sub-headline */}
        <p className="max-w-xl text-white text-2xl mb-10">
          From analyzing trends to building smart applications, I’m passionate
          about using data and AI to craft powerful solutions. My goal is to
          turn complexity into clarity and help businesses make smarter, faster
          decisions.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4">
          <a
            href="/projects"
            className="px-8 py-3 bg-blue-600 text-white text-xl font-medium rounded hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-blue-600 text-blue-300 text-xl font-medium rounded hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}


