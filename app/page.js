"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#08080d] text-white min-h-screen">
      {/* Background elements */}
      <div className="fixed top-[-20vh] right-[-10vw] w-[70vw] h-[70vh] rounded-full bg-blue-500/20 blur-[60px] opacity-40 z-0"></div>
      <div className="fixed bottom-[-20vh] left-[-10vw] w-[70vw] h-[70vh] rounded-full bg-emerald-500/20 blur-[60px] opacity-40 z-0"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full py-6 z-50 backdrop-blur-md bg-[#08080d]/80 border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <div className="text-3xl text-blue-500">⟡</div>
            <span>Langit.ai</span>
          </a>

          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <nav className={`lg:flex items-center gap-5 ${menuOpen ? 'absolute top-full left-0 w-full bg-[#121224] p-6 flex flex-col items-start gap-4 border-b border-white/10' : 'hidden'} lg:static lg:bg-transparent lg:p-0 lg:flex-row lg:border-none`}>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <button className="px-5 py-2.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold">Log In</button>
            <button className="px-5 py-2.5 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold">Start Free</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Build Landing Pages With <span className="text-blue-500">Conversation</span>
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              No drag-and-drop. No design skills needed. Simply chat with Langit to create beautiful, responsive landing pages in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold text-lg">Start For Free</button>
              <button className="px-8 py-4 rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold text-lg">See Demo</button>
            </div>
          </div>

          {/* Chat Demo */}
          <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#343546] px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="ml-3 text-xs text-gray-300">Langit Chat</div>
            </div>
            <div className="bg-[#1E1E2E] p-5 font-mono text-gray-200 text-sm leading-relaxed max-h-[400px] overflow-y-auto">
              <div className="mb-4">
                <span className="text-blue-500 font-bold">You:</span> Help me build a landing page for my yoga studio<br />
                <span className="text-emerald-500 font-bold mt-2 block">Langit:</span> Created a basic landing page for your yoga studio. What kind of color scheme would you prefer?
              </div>
              <div className="mb-4">
                <span className="text-blue-500 font-bold">You:</span> Make it purple and green - serene vibes<br />
                <span className="text-emerald-500 font-bold mt-2 block">Langit:</span> Updated to a purple and green color scheme. Want to add a hero image?
              </div>
              <div className="mb-4">
                <span className="text-blue-500 font-bold">You:</span> Yes, add a image of someone doing yoga on a beach<br />
                <span className="text-emerald-500 font-bold mt-2 block">Langit:</span> Added a beach yoga hero image. Should I include a section for class schedules?
              </div>
              <div className="mb-4">
                <span className="text-blue-500 font-bold">You:</span> Perfect. Center the headline and make it "Find Your Inner Peace"<br />
                <span className="text-emerald-500 font-bold mt-2 block">Langit:</span> Centered the headline and changed it to "Find Your Inner Peace". The page is looking great!<span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-blink"></span>
              </div>
            </div>
            <div className="bg-[#121224] p-5">
              <div className="w-full h-[240px] rounded-lg overflow-hidden relative border border-white/10 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-green-600/30"></div>
                <div className="absolute top-0 left-0 w-full p-6 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Find Your Inner Peace</h2>
                  <p className="text-white/90 mb-6 max-w-sm mx-auto">Discover tranquility and balance at Serenity Yoga Studio</p>
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg">Book a Class</button>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-600/90 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <div className="text-white/80 text-xs">Preview Mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-blue-500">Langit</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a landing page as easily as having a conversation. No design tools. No drag-and-drop. Just chat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">💬</div>
              <h3 className="text-xl font-bold mb-4">Tell Langit What You Want</h3>
              <p className="text-gray-300">Describe your landing page needs in simple language. Langit understands your goals and creates a page that matches your vision.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">✨</div>
              <h3 className="text-xl font-bold mb-4">See Real-Time Updates</h3>
              <p className="text-gray-300">Langit builds your page as you chat. Request changes and see them happen instantly, with no code or design skills required.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4">Launch & Optimize</h3>
              <p className="text-gray-300">Publish your page in seconds and use Langit's built-in analytics to track performance. Make improvements with a simple chat.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-[#121224] rounded-xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
                <p className="text-gray-300 mb-6">Here are some commands you can use with Langit:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">→</div>
                    <p>"Add a testimonial section with 3 quotes"</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">→</div>
                    <p>"Make the headline more attention-grabbing"</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">→</div>
                    <p>"Change the button color to green and make it larger"</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">→</div>
                    <p>"Add an FAQ section with 5 common questions"</p>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-[#343546] px-4 py-3 flex items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                  </div>
                  <div className="bg-[#1E1E2E] p-5 font-mono text-gray-200 text-sm leading-relaxed">
                    <div>
                      <span className="text-blue-500 font-bold">You:</span> Move the signup form above the fold<br /><br />
                      <span className="text-emerald-500 font-bold">Langit:</span> Done! I've moved the signup form to the top section of your page where visitors will see it immediately without scrolling.<br /><br />
                      <span className="text-blue-500 font-bold">You:</span> How's my page performing?<br /><br />
                      <span className="text-emerald-500 font-bold">Langit:</span> Your page has had 423 visitors in the past week with a 3.2% conversion rate. The signup form is getting good engagement since we moved it above the fold!<span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-blink"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need, <span className="text-blue-500">Nothing You Don't</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Langit focuses on what matters most: helping you create effective landing pages without the complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">📱</div>
              <h3 className="text-xl font-bold mb-4">Fully Responsive</h3>
              <p className="text-gray-300">Every page automatically looks perfect on all devices - no extra work needed. Mobile-friendly by default.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Pages load in under 1 second, keeping visitors engaged and improving your SEO ranking.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4">Built-in Analytics</h3>
              <p className="text-gray-300">Track visitors, bounce rates, and see which sections perform best - all without leaving Langit.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🔍</div>
              <h3 className="text-xl font-bold mb-4">SEO-Optimized</h3>
              <p className="text-gray-300">Every page is built with search engines in mind, helping you rank higher and get found online.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🔄</div>
              <h3 className="text-xl font-bold mb-4">Modular Editing</h3>
              <p className="text-gray-300">Changes are quick and stable - no full page regenerations. Edit specific sections without affecting others.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">📁</div>
              <h3 className="text-xl font-bold mb-4">File Attachments</h3>
              <p className="text-gray-300">Upload images and files directly through chat. No complicated media libraries to manage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-blue-500">Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              People just like you are building amazing landing pages with Langit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"I built my landing page in 15 minutes, no lie. No more struggling with templates or hiring designers for simple changes."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">A</div>
                <div>
                  <h4 className="font-bold">Alex Chen</h4>
                  <p className="text-gray-400 text-sm">Indie Game Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"Langit saved me a ton of time — no more struggling with templates. I just tell it what I want, and it builds exactly what I had in mind."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold">Sarah Miller</h4>
                  <p className="text-gray-400 text-sm">Freelance Marketer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"Editing my page feels like texting a friend who just gets it. I've tried everything from Wix to WordPress, and nothing is this fast or intuitive."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">R</div>
                <div>
                  <h4 className="font-bold">Raj Patel</h4>
                  <p className="text-gray-400 text-sm">E-commerce Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, <span className="text-blue-500">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free plan and upgrade when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:translate-y-[-8px] hover:shadow-xl hover:border-blue-500/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-gray-400">Perfect for getting started</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6">
                <span className="text-2xl align-top">$</span>0<span className="text-xl font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 1 landing page
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Hosted under Langit's subdomain
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Basic analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> AI chat editing
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold">Start Free</button>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border-2 border-blue-500 transition-all hover:transform hover:translate-y-[-8px] hover:shadow-xl relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded-full">Popular Choice</div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-400">For creators and small businesses</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6">
                <span className="text-2xl align-top">$</span>12<span className="text-xl font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Unlimited landing pages
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Custom domains
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Full analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> SEO optimization
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> File uploads
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Version history
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Langit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Do I need coding knowledge to use Langit?</h3>
              <p className="text-gray-300">Not at all! Langit is designed for non-technical users. Simply describe what you want in plain language, and Langit handles the rest.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Can I use my own domain name?</h3>
              <p className="text-gray-300">Yes! With our Pro plan, you can connect your own custom domain to your Langit landing pages in just a few clicks.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">How long does it take to build a page?</h3>
              <p className="text-gray-300">Most users create their first landing page in under 5 minutes. Refinements and edits happen instantly as you chat with Langit.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Can I add my own images and files?</h3>
              <p className="text-gray-300">Absolutely. You can upload images and files directly through the chat interface. Just tell Langit where you want them placed.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Is Langit SEO-friendly?</h3>
              <p className="text-gray-300">Yes! All Langit pages are built with SEO best practices in mind. They load quickly and are structured to help you rank higher in search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#121224] to-[#08080d] rounded-3xl p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Build your first landing page in <span className="text-blue-500">60 seconds</span></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                No design tools. No drag-and-drop. Just chat.
              </p>
              <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow py-4 px-6 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button type="submit" className="py-4 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all whitespace-nowrap">
                  Start For Free
                </button>
              </form>
              <p className="text-gray-400 text-sm mt-4">No credit card required. Start building in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-blue-500">Langit</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Langit compares to traditional landing page builders.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-center bg-blue-500 text-white rounded-t-lg font-bold text-lg">Langit</th>
                  <th className="p-4 text-center text-gray-400 bg-[#121224] font-bold text-lg">Traditional Builders</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-left font-medium">Time to Build</td>
                  <td className="p-4 text-center bg-blue-500/10 text-blue-500 font-bold">Minutes</td>
                  <td className="p-4 text-center text-gray-300 bg-[#121224]">Hours to Days</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-left font-medium">Learning Curve</td>
                  <td className="p-4 text-center bg-blue-500/10 text-blue-500 font-bold">None (Just Chat)</td>
                  <td className="p-4 text-center text-gray-300 bg-[#121224]">Steep</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-left font-medium">Design Skills Needed</td>
                  <td className="p-4 text-center bg-blue-500/10 text-blue-500 font-bold">None</td>
                  <td className="p-4 text-center text-gray-300 bg-[#121224]">Some</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-left font-medium">Editing Experience</td>
                  <td className="p-4 text-center bg-blue-500/10 text-blue-500 font-bold">Conversational</td>
                  <td className="p-4 text-center text-gray-300 bg-[#121224]">Drag & Drop</td>
                </tr>
                <tr>
                  <td className="p-4 text-left font-medium">Mobile Optimization</td>
                  <td className="p-4 text-center bg-blue-500/10 text-blue-500 font-bold rounded-b-lg">Automatic</td>
                  <td className="p-4 text-center text-gray-300 bg-[#121224]">Manual Adjustments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-12 pb-6 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                <div className="text-3xl text-blue-500">⟡</div>
                <span>Langit.ai</span>
              </div>
              <p className="text-gray-400 mb-6">The conversational AI landing page builder that speaks your language.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#121224] flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#121224] flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2025 Langit, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
