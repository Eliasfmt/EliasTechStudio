'use client';

import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-950 via-indigo-900 via-blue-800 via-blue-500 to-sky-300 text-white">
      <Navbar />

      {/* Featured Projects Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Project Card 1 */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Client Query Assistant</h3>
            <p className="text-gray-400 mb-4">
            Smart client data retrieval system for businesses, ask natural language questions, 
            and instantly retrieve loan records.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">LangChain</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">OpenAI API</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">AWS RDS</span>
            </div>
            <a href="#project1" className="text-blue-400 hover:underline">View Project ➔</a>

            <video 
            src="/videos/Sql Queries LLM App.mp4" 
            controls 
            className="w-full mt-4 rounded-md h-40 object-cover"
            />

          </div>

          {/* Project Card 2 */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">AI Analytics Dashboard</h3>
            <p className="text-gray-400 mb-4">
              ML-powered data visualization platform with predictive analytics and interactive reports.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">D3.js</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Flask</span>
            </div>
            <a href="#project2" className="text-blue-400 hover:underline">View Project ➔</a>

            <video 
            src="/videos/ai-analytics-preview.mp4" 
            controls 
            className="w-full mt-4 rounded-md h-40 object-cover"
            />

          </div>
        </div>
      </section>

      {/* Project Details Sections (Hidden Below) */}
      <section id="project1" className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-6">Client Query Assistant</h2>
        <div className="flex justify-center mb-6">
            <video 
            src="/videos/Sql Queries LLM App.mp4" 
            controls 
            className="w-full max-w-4xl mx-auto rounded-md mb-8"
            />
        </div>   
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
            Client data query assistant powered by Python, LangChain, OpenAI, and AWS RDS.
            Users ask natural questions to retrieve loan and customer info instantly.
            Built with Next.js, Tailwind CSS, and deployed via Render and Vercel.
            </p>
      </section>

      <section id="project2" className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-6">AI Analytics Dashboard</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto">
          [Insert full description, video, screenshots about AI Analytics Dashboard project here.]
        </p>
      </section>

    </main>
  );
}