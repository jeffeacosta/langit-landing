"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#08080d] text-white">
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
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <button className="px-5 py-2.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold">Log In</button>
            <button className="px-5 py-2.5 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold">Sign Up Free</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Chat Your Way to Landing Page <span className="text-blue-500">Perfection</span>
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              Langit is the first AI platform that lets you build & optimize high-converting landing pages through simple conversations. No code. No design skills. Just tell it what you want.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold text-lg">Start For Free</button>
              <button className="px-8 py-4 rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold text-lg">See Demo</button>
            </div>
          </div>

          {/* Terminal Demo */}
          <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#343546] px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
            </div>
            <div className="bg-[#1E1E2E] p-5 font-mono text-gray-200 text-sm leading-relaxed">
              <div>
                <span className="text-blue-500 font-bold">You:</span> Change the hero button to red<br />
                <span className="text-emerald-500 font-bold">Langit:</span> Updated button color to red. Anything else?<br /><br />
                <span className="text-blue-500 font-bold">You:</span> Add a testimonial section below features<br />
                <span className="text-emerald-500 font-bold">Langit:</span> Added testimonial section with 3 cards. Need specific quotes?<br /><br />
                <span className="text-blue-500 font-bold">You:</span> Why isn't this converting well?<br />
                <span className="text-emerald-500 font-bold">Langit:</span> Based on heatmap data, visitors aren't scrolling past the hero. I recommend making your value prop clearer and moving your sign-up form above the fold.<span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-blink"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Finally, Landing Pages Built on <span className="text-blue-500">Your Terms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No more wrestling with clunky editors or complex templates. Just tell Langit what you want—in plain language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">💬</div>
              <h3 className="text-xl font-bold mb-4">Conversational Editing</h3>
              <p className="text-gray-300">Simply type what you want changed and watch it happen instantly. No more hunting through menus or complex settings.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">📱</div>
              <h3 className="text-xl font-bold mb-4">Fully Responsive</h3>
              <p className="text-gray-300">Every page automatically works perfectly on all devices. Just ask Langit to optimize for mobile or desktop and it handles the rest.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4">Built-in CRO Tools</h3>
              <p className="text-gray-300">Analytics, heatmaps, session recordings, and A/B testing—all included and accessible through natural conversation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4">SEO Optimized</h3>
              <p className="text-gray-300">Ask Langit to optimize your page for specific keywords, and it'll automatically implement best practices to boost your rankings.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Every page loads in under 1 second. Ask for performance improvements, and Langit instantly optimizes your page speed.</p>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-2xl mb-6">🧩</div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Modules</h3>
              <p className="text-gray-300">Request specific sections like testimonials, pricing tables, or contact forms, and Langit will build them on the fly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-blue-500">Intelligence</span> Behind the Interface
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Langit doesn't just generate pages—it thinks critically about conversion optimization.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Start with a conversation</h3>
                  <p className="text-gray-300">Describe your landing page needs in simple language. Langit asks smart follow-up questions to understand your goals completely.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Watch your page come alive</h3>
                  <p className="text-gray-300">Langit builds your page in real-time based on your instructions. See changes instantly as you request them.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Refine with natural commands</h3>
                  <p className="text-gray-300">"Move this section up." "Make the headline more compelling." "Add social proof." Langit handles it all without you touching code.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Optimize with AI insights</h3>
                  <p className="text-gray-300">Ask "Why aren't people converting?" and get data-backed suggestions that Langit can implement immediately.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-[#343546] px-4 py-3 flex items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                </div>
                <div className="bg-[#1E1E2E] p-5 font-mono text-gray-200 text-sm leading-relaxed">
                  <div>
                    <span className="text-blue-500 font-bold">You:</span> Make the headline more punchy<br />
                    <span className="text-emerald-500 font-bold">Langit:</span> Updated headline to "Skyrocket Your Conversions Without Touching Code"<br /><br />
                    <span className="text-blue-500 font-bold">You:</span> Show me the heatmap for mobile users<br />
                    <span className="text-emerald-500 font-bold">Langit:</span> [Displaying heatmap] I notice mobile users aren't seeing your pricing table. Should I move it higher?<br /><br />
                    <span className="text-blue-500 font-bold">You:</span> Yes, and add a testimonial from Sarah J.<br />
                    <span className="text-emerald-500 font-bold">Langit:</span> Moved pricing section up and added Sarah's testimonial from your database. Your page should convert 23% better now based on my analysis.<span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-blink"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="text-blue-500">Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Marketers and founders are transforming their landing page workflows with Langit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"I used to spend days tweaking landing pages in Webflow. With Langit, I describe what I want and it's done in minutes. Our conversion rate is up 37% since switching."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">M</div>
                <div>
                  <h4 className="font-bold">Mia Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Growth Lead, Fintech Startup</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"As a non-technical founder, I was always the bottleneck in our landing page testing. Langit lets me test new ideas in seconds without bothering our developers."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">J</div>
                <div>
                  <h4 className="font-bold">James Chen</h4>
                  <p className="text-gray-400 text-sm">Founder, SaaS Platform</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/50">
              <p className="text-gray-300 italic mb-6">"I asked Langit why our page wasn't converting, and it suggested moving our testimonials above the fold. That one change doubled our sign-up rate overnight."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-xl">S</div>
                <div>
                  <h4 className="font-bold">Sophia Patel</h4>
                  <p className="text-gray-400 text-sm">CMO, E-commerce Brand</p>
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
              No complicated tiers. Choose the plan that works for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:translate-y-[-8px] hover:shadow-xl hover:border-blue-500/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-400">Perfect for small businesses and solopreneurs</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6">
                <span className="text-2xl align-top">$</span>29<span className="text-xl font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 1 landing page
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 10,000 monthly visitors
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Basic analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Conversational editing
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Custom domain
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold">Get Started</button>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border-2 border-blue-500 transition-all hover:transform hover:translate-y-[-8px] hover:shadow-xl md:scale-105 relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-blue-500 text-white text-sm font-bold py-1 px-4 rounded-full">Most Popular</div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-400">For growing businesses and marketing teams</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6">
                <span className="text-2xl align-top">$</span>79<span className="text-xl font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 5 landing pages
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 50,000 monthly visitors
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Heatmaps & session recordings
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> A/B testing
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Team collaboration
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all font-semibold">Get Started</button>
            </div>

            <div className="bg-[#121224] rounded-xl p-8 border border-white/10 transition-all hover:transform hover:translate-y-[-8px] hover:shadow-xl hover:border-blue-500/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <p className="text-gray-400">For high-volume marketing campaigns</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6">
                <span className="text-2xl align-top">$</span>199<span className="text-xl font-normal text-gray-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Unlimited landing pages
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 250,000 monthly visitors
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Enterprise analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Advanced CRO tools
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Multivariate testing
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Priority support
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 transition-colors font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#121224] to-[#08080d] rounded-3xl p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/20 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to <span className="text-blue-500">Transform</span> Your Landing Page Experience?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Join thousands of marketers who've ditched traditional page builders for conversational AI.
              </p>
              <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow py-4 px-6 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button type="submit" className="py-4 px-8 bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:translate-y-[-2px] transition-all">
                  Get Early Access
                </button>
              </form>
            </div>
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
              <p className="text-gray-400 mb-6">Building the future of conversational landing page creation and optimization.</p>
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
                <a href="#" className="w-10 h-10 rounded-full bg-[#121224] flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#121224] flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© 2025 Langit, Inc. All rights reserved. The AI-powered landing page builder that speaks your language.</p>
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
