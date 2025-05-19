"use client";

import Head from 'next/head';
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Langit | AI Email Design Tool - Build Emails 10x Faster</title>
        <meta name="description" content="Create stunning responsive emails 10x faster with Langit, the AI-powered conversational email builder. Export to Mailchimp, Klaviyo, and more." />
        <meta name="robots" content="index, follow" />
      </Head>
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Background elements */}
      <div className="fixed top-[-20vh] right-[-10vw] w-[70vw] h-[70vh] rounded-full bg-blue-500/10 blur-[60px] opacity-40 z-0"></div>
      <div className="fixed bottom-[-20vh] left-[-10vw] w-[70vw] h-[70vh] rounded-full bg-sky-500/10 blur-[60px] opacity-40 z-0"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full py-4 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
            <div className="text-3xl text-blue-600">⟡</div>
            <span>Langit.ai</span>
          </a>

          <button 
            className="lg:hidden text-gray-700 focus:outline-none"
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
          
          <nav className={`lg:flex items-center gap-5 ${menuOpen ? 'absolute top-full left-0 w-full bg-white p-6 flex flex-col items-start gap-4 border-b border-gray-200 shadow-lg' : 'hidden'} lg:static lg:bg-transparent lg:p-0 lg:flex-row lg:border-none lg:shadow-none`}>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-blue-600 transition-colors">Templates</a>
            <a href="#integrations" className="text-gray-600 hover:text-blue-600 transition-colors">Integrations</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <button className="px-5 py-2.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold">Log In</button>
            <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:translate-y-[-2px] transition-all font-semibold">Get Started Free</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Build emails 10x faster by <span className="text-blue-600">chatting</span> with AI
            </h1>
            <p className="text-xl text-gray-600 mt-6">
              No more drag-and-drop. Langit designs clean, responsive emails from plain English with conversational AI and intuitive design tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:translate-y-[-2px] transition-all font-semibold text-lg">Get Started Free</button>
              <button className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold text-lg">See Demo</button>
            </div>
            
            {/* Platform badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium">Export to Mailchimp</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium">Export to Klaviyo</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium">Raw HTML</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium">+ 77 more</span>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">80+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Email Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Templates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10x</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Faster Creation</div>
              </div>
            </div>
          </div>

          {/* Interface Demo */}
          <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gray-100 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="ml-3 text-xs text-gray-500">Langit Email Designer</div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* Chat Panel - Left side */}
              <div className="md:w-2/5 bg-gray-50 border-r border-gray-200">
                <div className="p-4">
                  <div className="mb-3">
                    <div className="text-blue-600 font-bold text-sm">You:</div>
                    <div className="mt-1 bg-blue-100 text-blue-800 p-2 rounded-lg rounded-tl-none text-sm">Create a welcome email for new subscribers</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-emerald-600 font-bold text-sm mt-3">Langit:</div>
                    <div className="mt-1 bg-gray-200 text-gray-800 p-2 rounded-lg rounded-tl-none text-sm">I've designed a welcome email with a header, greeting, and 3 onboarding tips</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-blue-600 font-bold text-sm mt-3">You:</div>
                    <div className="mt-1 bg-blue-100 text-blue-800 p-2 rounded-lg rounded-tl-none text-sm">Make the header blue and add our logo</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-emerald-600 font-bold text-sm mt-3">Langit:</div>
                    <div className="mt-1 bg-gray-200 text-gray-800 p-2 rounded-lg rounded-tl-none text-sm">Done! I've created a blue header with your logo. Want me to add a button?<span className="inline-block w-2 h-4 bg-emerald-600 ml-1 animate-blink"></span></div>
                  </div>
                </div>
              </div>
              
              {/* Design Tools - Right side */}
              <div className="md:w-3/5 bg-white">
                <div className="p-4">
                  {/* Toolbar */}
                  <div className="flex gap-2 overflow-x-auto pb-3 mb-4 border-b border-gray-200">
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Text</button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Colors</button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Images</button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Layout</button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Buttons</button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md whitespace-nowrap hover:bg-gray-200 transition-colors">Export</button>
                  </div>
                  
                  {/* Email Preview */}
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                    <div className="w-full max-w-xs bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
                      {/* Email Header */}
                      <div className="bg-blue-600 h-16 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600">L</div>
                      </div>
                      
                      {/* Email Content Preview */}
                      <div className="p-4 space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-8 bg-blue-600 rounded-md w-1/2 mt-4 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="w-full py-12 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">Trusted by companies worldwide</h3>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16">
            <div className="text-gray-400 text-xl font-bold">ACME</div>
            <div className="text-gray-400 text-xl font-bold">Globex</div>
            <div className="text-gray-400 text-xl font-bold">Initech</div>
            <div className="text-gray-400 text-xl font-bold">Hooli</div>
            <div className="text-gray-400 text-xl font-bold">Stark</div>
          </div>
        </div>
      </section>

      {/* Features Split Section */}
      <section id="features" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              The best of <span className="text-blue-600">both worlds</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Langit combines the speed of AI with the precision of design tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Conversational AI Interface</h3>
              <p className="text-lg text-gray-600 mb-8">Describe your email in plain English and watch it come to life. No more hunting through menus or struggling with drag-and-drop.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">💬</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Natural Language Creation</h4>
                    <p className="text-gray-600">Just describe what you want and Langit builds it instantly.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">⚡</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">10x Faster Creation</h4>
                    <p className="text-gray-600">Create professional emails in minutes, not hours.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📱</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Responsive by Default</h4>
                    <p className="text-gray-600">Every email looks perfect on all devices without extra work.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Powerful Design Tools</h3>
              <p className="text-lg text-gray-600 mb-8">Fine-tune your designs with intuitive tools that give you perfect control when AI isn't enough.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">🎨</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Visual Editing Tools</h4>
                    <p className="text-gray-600">Precision tools for typography, colors, spacing, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📐</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Side-by-Side Interface</h4>
                    <p className="text-gray-600">Chat with Langit on the left, fine-tune with design tools on the right.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">📝</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">HTML & CSS Editor</h4>
                    <p className="text-gray-600">For advanced users, dive into the code when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              500+ Email <span className="text-blue-600">Templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with a template or create from scratch—all emails are fully customizable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Template Card 1 */}
             <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg hover:translate-y-[-4px]">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src="/welcome-email.png" 
        alt="Welcome Email Template" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EWelcome Email Template%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
    <div className="p-6">
      <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">Onboarding</div>
      <h3 className="font-bold text-lg mb-4">New User Welcome</h3>
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Use</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Preview</button>
      </div>
    </div>
  </div>
            
            {/* Template Card 2 */}
             <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg hover:translate-y-[-4px]">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src="/newsletter-email.png" 
        alt="Newsletter Template" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ENewsletter Template%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
    <div className="p-6">
      <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">Newsletter</div>
      <h3 className="font-bold text-lg mb-4">Monthly Update</h3>
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Use</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Preview</button>
      </div>
    </div>
  </div>
            
            {/* Template Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg hover:translate-y-[-4px]">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src="/product-email.png" 
        alt="Promotion Template" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPromotion Template%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
    <div className="p-6">
      <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">Marketing</div>
      <h3 className="font-bold text-lg mb-4">Product Launch</h3>
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Use</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Preview</button>
      </div>
    </div>
  </div>
            
            {/* Template Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg hover:translate-y-[-4px]">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src="/confirmation-email.jpg" 
        alt="Transactional Template" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ETransactional Template%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
    <div className="p-6">
      <div className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-2">Transactional</div>
      <h3 className="font-bold text-lg mb-4">Order Confirmation</h3>
      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Use</button>
        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Preview</button>
      </div>
    </div>
  </div>
</div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold">
              Browse All Templates
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              How <span className="text-blue-600">Langit</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The simplest way to create professional emails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px] text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl text-white font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Describe Your Email</h3>
              <p className="text-gray-600">Tell Langit what you need in simple language. The AI understands your goals and creates an email that matches your vision.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px] text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl text-white font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Refine Your Design</h3>
              <p className="text-gray-600">Make changes conversationally or use the visual editor. Both options work seamlessly together for the perfect result.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px] text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl text-white font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Export & Send</h3>
              <p className="text-gray-600">When you're happy with your design, export to your favorite email platform or download the HTML with just one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Works with All Your <span className="text-blue-600">Email Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Export to 80+ email platforms with perfect compatibility
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-8 md:gap-16">
            <div className="text-gray-700 text-xl font-bold">Mailchimp</div>
            <div className="text-gray-700 text-xl font-bold">Klaviyo</div>
            <div className="text-gray-700 text-xl font-bold">HubSpot</div>
            <div className="text-gray-700 text-xl font-bold">Campaign Monitor</div>
            <div className="text-gray-700 text-xl font-bold">SendGrid</div>
            <div className="text-gray-700 text-xl font-bold">+ 75 more</div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Built for Email <span className="text-blue-600">Marketers</span> and <span className="text-blue-600">Designers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional emails without complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Time Saving & Automation</h3>
              <p className="text-gray-600">Create email designs 10x faster with AI-powered generation. Save templates and components for reuse across campaigns.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Integrations & Export</h3>
              <p className="text-gray-600">Seamlessly export to 80+ email platforms including Mailchimp, Klaviyo, HubSpot, and more. No code tweaking needed.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">🧪</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Testing & Validation</h3>
              <p className="text-gray-600">Built-in spam testing, link validation, and rendering previews ensure your emails perform perfectly every time.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">👥</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Share & Collaboration</h3>
              <p className="text-gray-600">Collaborate with team members in real-time. Share designs, get feedback, and manage approvals all in one place.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">🎮</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interactive Elements</h3>
              <p className="text-gray-600">Add surveys, feedback forms, and interactive elements to your emails without complex coding or compatibility issues.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-6">🔍</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI Content Suggestions</h3>
              <p className="text-gray-600">Get intelligent content recommendations for your email copy, subject lines, and calls-to-action to boost engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What Our <span className="text-blue-600">Users Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from marketers and creators who've transformed their email workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <p className="text-gray-600 italic mb-6">"I designed our entire monthly newsletter in under 10 minutes. No more struggling with templates or hiring designers for simple changes. Langit has transformed our email workflow."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xl">A</div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Chen</h4>
                  <p className="text-gray-500 text-sm">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <p className="text-gray-600 italic mb-6">"The combination of AI conversation and design tools is brilliant. I start with AI to get 90% there, then fine-tune with the visual tools. Exports to Mailchimp work flawlessly. So much better than drag-and-drop!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xl">S</div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Miller</h4>
                  <p className="text-gray-500 text-sm">E-commerce Founder</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-4px]">
              <p className="text-gray-600 italic mb-6">"I've tried everything from custom HTML to drag-and-drop builders. Langit gives me the speed of conversations with the precision of visual tools when I need them. It's the perfect balance for our team."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xl">R</div>
                <div>
                  <h4 className="font-bold text-gray-900">Raj Patel</h4>
                  <p className="text-gray-500 text-sm">Digital Marketing Manager</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Simple, <span className="text-blue-600">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our free plan and upgrade when you're ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-8px]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Free</h3>
                <p className="text-gray-500">For individuals and small projects</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6 text-gray-900">
                <span className="text-2xl align-top">$</span>0<span className="text-xl font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 5 email designs per month
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> AI conversation interface
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Basic visual design tools
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> HTML export
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> 5 email platform exports
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors font-semibold">Start Free</button>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-blue-600 shadow-lg transition-all hover:shadow-xl hover:translate-y-[-8px] relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-blue-600 text-white text-sm font-bold py-1 px-4 rounded-full">Most Popular</div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Pro</h3>
                <p className="text-gray-500">For professionals and teams</p>
              </div>
              <div className="text-center text-5xl font-extrabold mb-6 text-gray-900">
                <span className="text-2xl align-top">$</span>20<span className="text-xl font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Unlimited email designs
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Advanced AI capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Full visual design toolkit
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> HTML/CSS code editor
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> All 80+ email platform exports
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Team collaboration
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span> Priority support
                </li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:translate-y-[-2px] transition-all font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Langit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How is Langit different from other email builders?</h3>
              <p className="text-gray-600">Langit combines AI-powered conversation with powerful design tools, giving you the best of both worlds. Describe what you want in plain English, then fine-tune with visual tools—a revolutionary workflow that's 10x faster than traditional drag-and-drop.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Can I export to my email marketing platform?</h3>
              <p className="text-gray-600">Yes! Langit supports direct exports to 80+ email platforms including Mailchimp, Klaviyo, HubSpot, Campaign Monitor, SendGrid, and many more. You can also download the raw HTML for any platform.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do I need design skills to use Langit?</h3>
              <p className="text-gray-600">Not at all! Langit is designed for everyone. Simply describe what you want in plain language, and Langit creates beautiful, responsive emails. The visual tools are there when you need precision, but they're completely optional.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Are emails mobile responsive?</h3>
              <p className="text-gray-600">Yes! All emails designed with Langit automatically look great on mobile, tablet, and desktop. We follow email best practices to ensure compatibility across all devices and email clients.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Can I use my own branding?</h3>
              <p className="text-gray-600">Absolutely. You can upload your logo, images, and specify your brand colors and fonts. Langit remembers your preferences for future designs to maintain brand consistency across all your emails.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do you handle email sending?</h3>
              <p className="text-gray-600">No, Langit focuses exclusively on email design. For sending, you'll export to your preferred email platform like Mailchimp, Klaviyo, or any other service you already use for distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-16 border border-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/20 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Design your first email in <span className="text-blue-600">60 seconds</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                No more struggling with drag-and-drop editors. Start creating beautiful, responsive emails with simple conversations.
              </p>
              <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow py-4 px-6 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-600 transition-colors"
                  required
                />
                <button type="submit" className="py-4 px-8 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:translate-y-[-2px] transition-all whitespace-nowrap">
                  Start For Free
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-4">No credit card required. Start designing in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-16 pb-6 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-4">
                <div className="text-3xl text-blue-600">⟡</div>
                <span>Langit.ai</span>
              </div>
              <p className="text-gray-500 mb-6">The AI-powered email design tool that builds beautiful emails through natural language.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-500 hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#templates" className="text-gray-500 hover:text-blue-600 transition-colors">Templates</a></li>
                <li><a href="#integrations" className="text-gray-500 hover:text-blue-600 transition-colors">Integrations</a></li>
                <li><a href="#pricing" className="text-gray-500 hover:text-blue-600 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Email Templates</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-900">Subscribe</h3>
              <p className="text-gray-500 mb-4">Stay updated with the latest features and releases</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow py-2 px-4 rounded-l-lg border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                  required
                />
                <button type="submit" className="py-2 px-4 bg-blue-600 text-white font-medium rounded-r-lg text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <div className="flex justify-center flex-wrap gap-6 mb-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Accessibility</a>
            </div>
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
  </>
  );
}
