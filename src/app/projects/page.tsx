'use client';

import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
      <main
      className="min-h-screen text-white"
      style={{ background: "linear-gradient(90deg, #181E4D 0%, #1140A6 50%, #51B6F5 100%)"
      }} > 

      <Navbar />

      {/* Featured Projects Section */}
      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-200">
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
            <h3 className="text-2xl font-bold mb-4">AI-Powered PDF & DOCX Assistant</h3>
            <p className="text-gray-400 mb-4">
            Securely chat with your documents using AI — instant Q&A, summaries, and a built-in General 
            AI mode.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">AWS S3</span>
            </div>
            <a href="#project2" className="text-blue-400 hover:underline">View Project ➔</a>

            <video 
            src="/videos/LLMpdfDemo.mp4" 
            controls 
            className="w-full mt-4 rounded-md h-40 object-cover"
            />

          </div>
        </div>
      </section>

        {/* Data Visualization Projects  */}

      <section className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-200">
          Data Visualization Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Visualization Project Card 1 */}
          <div className="bg-[#0a0a0a] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Database & BI Dashboard for a Pest Control Business</h3>
            <p className="text-gray-400 mb-4">
            Simulated a full data pipeline—from database creation with synthetic pest control data to interactive 
            visualization. Built with PostgreSQL on Google Cloud SQL and connected to Power BI for real-time business insights.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Power BI</span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">Google Cloud SQL</span>
            </div>
            <a href="/projects/pcVisualization" className="text-blue-400 hover:underline">View Project</a>

            <img
              src="/image/pcVisualizationImages/PCDashboard.png"
              alt="Pest Control Dashboard"
              className="w-full mt-4 rounded-md h-40 object-cover"
            />

          </div>

          {/* Visualization Project Card 2 */}
          
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
            <p className="text-gray-400 text-center max-w-5xl mx-auto">
            Client data query assistant built with Python, LangChain, OpenAI, and AWS RDS.
            This tool enables users to securely query loan and customer data using natural language, delivering instant,
             accurate answers from internal records. Developed with a modern stack including Next.js and Tailwind CSS, 
             and deployed via Render and Vercel. Designed to streamline internal operations for a Latin American financial 
             company.
            </p>
      </section>

      <section id="project2" className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-6">AI-Powered PDF & DOCX Assistant</h2>
        <div className="flex justify-center mb-6">
            <video 
            src="/videos/LLMpdfDemo.mp4" 
            controls 
            className="w-full max-w-4xl mx-auto rounded-md mb-8"
            />
        </div>   
            <p className="text-gray-400 text-center max-w-5xl mx-auto">
            Doc Saver Chat is a full-stack AI tool that lets users upload PDF/DOCX files and ask 
            natural-language questions with instant, contextual answers. It also supports a “General AI” 
            mode for standalone chat without documents. Built with FastAPI, Next.js, LangChain, and OpenAI, 
            the app performs document chunking, embedding, and vector search using PostgreSQL. Features include 
            anonymous access, session tracking, upload rate limiting, and a dual-mode user flow. Deployed via Render and 
            Vercel, the project demonstrates scalable NLP integration and production-ready UX.

            </p>
      </section>

    </main>
  );
}