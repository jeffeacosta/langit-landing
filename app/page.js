"use client";

import { useState } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-[#0a0a0a] to-[#1a1a2e] text-white min-h-screen flex flex-col items-center px-6 pt-20 pb-20">
      <BackgroundAnimation />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-4 sm:p-6">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between relative">
         {/* Logo */}
<div className="whitespace-nowrap">
  <img src="/langitdemologo.png" alt="Langit.ai Logo" className="h-8 w-auto" />
</div>

          {/* Desktop Buttons: visible on screens ≥640px */}
          <div className="hidden sm:flex space-x-4">
            <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-300 transition-all duration-300">
              Create Free Website
            </button>
            <button className="border border-primary text-primary px-4 py-2 rounded-lg font-bold hover:bg-primary hover:text-black transition-all duration-300">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Menu: visible on screens <640px */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary focus:outline-none"
            >
              {menuOpen ? (
                // Close icon (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-cardDark rounded-md shadow-lg py-2 z-20">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-blue-300 transition-all duration-300"
                >
                  Create Free Website
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-sm text-primary hover:bg-blue-300 transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    <div className="max-w-3xl text-center mt-24">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Fire Your Web Designer. Build a Stunning Website in Seconds with AI.
      </h1>
      <p className="mt-4 text-lg text-textLight">
        Describe it. Watch it come to life. No tech skills needed.
      </p>
      <button className="mt-6 bg-primary text-black px-8 py-4 rounded-xl text-lg font-bold 
        hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out">
        Try for Free
      </button>
    </div>
    {/* How It Works Section */}
<section className="mt-20 max-w-4xl text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-primary">
    How It Works
  </h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Step 1 */}
    <div className="bg-cardDark p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold">1. Describe Your Site</h3>
      <p className="mt-2 text-textLight">Type in what kind of website you want, and Langit understands your vision.</p>
    </div>
    {/* Step 2 */}
    <div className="bg-cardDark p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold">2. AI Builds It</h3>
      <p className="mt-2 text-textLight">Our AI instantly generates a sleek, responsive website for you.</p>
    </div>
    {/* Step 3 */}
    <div className="bg-cardDark p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
      <h3 className="text-xl font-bold">3. Refine & Publish</h3>
      <p className="mt-2 text-textLight">Easily tweak your site using simple text commands, then launch it!</p>
    </div>
  </div>
</section>
 {/* NEW Demo Screenshot Section */}
 <section className="mt-20 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Langit Demo</h2>
        <p className="mt-4 text-lg text-textLight">Take a peek at how Langit can generate a website.</p>
        <div className="flex justify-center mt-6">
          <img 
            src="/langit-screenshot2.png" 
            alt="Langit Demo Screenshot" 
            className="max-w-full rounded-lg shadow-md" 
            style={{ maxHeight: '500px' }} 
          />
        </div>
      </section>
{/* Why Langit? Section */}
<section className="mt-20 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-primary">
    Why Langit?
  </h2>
  <p className="mt-4 text-lg text-textLight">
    The smartest AI website builder—turn your ideas into stunning, live websites in seconds. 🚀 Langit lets you generate sleek, responsive sites just by describing them. No templates, no coding—just pure creative freedom. With real-time AI adjustments, you can refine every detail effortlessly. Need a bold headline? A sleek call-to-action? Just say it, and Langit makes it happen. ✨ The future of web design is here—faster, easier, and 100% you.
  </p>
</section>
{/* Email Capture Section */}
<section className="mt-20 max-w-3xl text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-primary">
    Stay Updated
  </h2>
  <p className="mt-4 text-lg text-textLight">
    Join our waitlist and get notified when we launch!
  </p>
  <div className="mt-6 flex justify-center">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="p-3 rounded-l-lg outline-none text-black" 
    />
    <button className="bg-primary text-black px-6 py-3 rounded-r-lg font-bold hover:bg-blue-300 transition-all duration-300">
      Get Notified
    </button>
  </div>
</section>
  </div>
  
  );
}

