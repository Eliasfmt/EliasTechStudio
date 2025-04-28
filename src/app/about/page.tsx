'use client';
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-black via-indigo-950 via-indigo-900 via-blue-800 via-blue-500 to-cyan-300 text-white">
      {/* Navbar */}
      <Navbar />
      {/* About Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold mb-10 text-blue-500">About Me</h1>
        <p className="text-gray-400 text-center max-w-4xl mx-auto leading-relaxed px-4">
        I started my career in the finance sector, working in collections, where I first realized<br />
        how important organized information was for driving better results. Managing accounts<br />
        and tracking payments showed me that structured data wasn’t just helpful — it was essential.<br /><br />

        Later, when I transitioned into sales across industries like pest control, solar, and water filtration,<br />
        that lesson became even clearer. I discovered that by carefully tracking client data, organizing<br />
        customer information, and analyzing trends, I could consistently boost my sales performance.<br /><br />

        This hands-on experience sparked a deeper passion for data and its potential. Wanting to build<br />
        a stronger foundation, I pursued a Master’s degree in Business Intelligence, building on my<br />
        background in Economics and sharpening my skills in SQL, Python, and Power BI.<br /><br />

        Now, with AI transforming the data landscape, I’m excited to combine traditional analysis<br />
        with AI-driven tools to unlock faster, smarter insights. I believe that behind every great decision,<br />
        there’s powerful data telling the real story.
          </p>
      </section>
    </main>
  );
}