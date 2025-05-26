'use client';

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main  className="min-h-screen text-white"
      style={{ background: "linear-gradient(90deg, #142475 0%, #347CBF 50%, #142475 100%)"
      }} > 
      <Navbar />

      <section className="flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Get In Touch</h1>

        <form 
            action="https://formsubmit.co/eliasfmt@gmail.com" 
            method="POST"
            className="w-full max-w-md flex flex-col gap-4">

          <input
            type="hidden"
            name="project"
            value="Personal Portfolio"
          />
          <input
            type="text"
            name="name"
            placeholder="Name..."
            className="p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message..."
            className="p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none min-h-[150px]"
            required          
          ></textarea>

            {/* Optional: You can add hidden fields if you want (like a project name) */}
            <input type="hidden" name="_subject" value="New message from Personal Portfolio Contact Form!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.em-tech.ai//thankyou" /> 

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}