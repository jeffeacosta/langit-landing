"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Code, Edit, LineChart, MessageSquare, Zap } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commandPhrases = [
    "Change the headline color to purple",
    "Add a testimonial section below",
    "Make the hero image larger",
    "Improve my conversion rate",
    "Create a pricing table"
  ];

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Typing effect
    const typingInterval = setInterval(() => {
      if (currentCharIndex < commandPhrases[currentPhraseIndex].length) {
        setTypedText(commandPhrases[currentPhraseIndex].substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Pause at the end of typing a complete phrase
        setTimeout(() => {
          setTypedText("");
          setCurrentCharIndex(0);
          setCurrentPhraseIndex((prev) => (prev + 1) % commandPhrases.length);
        }, 2000);
      }
    }, 75);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, [currentCharIndex, currentPhraseIndex]);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      
      {/* Accent color gradients */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-700 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-700 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Header */}
      <header className="relative z-10 w-full p-4 sm:p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
              <span className="text-xl font-bold">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Langit<span className="text-purple-500">.</span>ai</span>
          </div>

          {/* Desktop Nav: visible on screens ≥768px */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition duration-200">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition duration-200">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition duration-200">Pricing</a>
            <button className="border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
              Log In
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button: visible on screens <768px */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {menuOpen ? (
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
          </div>
        </div>

        {/* Mobile Menu: Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gray-900 border-b border-gray-800 mt-4 z-50">
            <div className="p-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white">How It Works</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <button className="block w-full text-left text-gray-300 hover:text-white py-2">
                Log In
              </button>
              <button className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-3 py-1 bg-gray-800 text-purple-400 rounded-full text-sm font-medium">
                The Future Of Landing Pages
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Chat Your Way To Higher Conversions
              </h1>
              <p className="text-xl text-gray-300">
                No code. No drag-and-drop. Just tell Langit what you want, and watch your perfect landing page come to life in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  Start Building For Free
                </button>
                <button className="border border-gray-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-300">
                  See Demo
                </button>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl shadow-purple-500/5 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 p-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-400 text-sm">Langit AI Interface</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 bg-black h-72 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* User command */}
                  <div className="flex">
                    <span className="text-green-500 mr-2">❯</span>
                    <span className="text-white">{typedText}</span>
                    <span className={`w-2 h-5 bg-purple-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                  </div>
                  
                  {/* AI Response */}
                  <div className="pl-4 border-l-2 border-purple-600">
                    <div className="text-purple-400">Langit AI:</div>
                    <div className="text-gray-300">Making requested changes now... Done! Your page has been updated.</div>
                  </div>
                </div>
                
                {/* Stats Panel */}
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <div className="text-sm text-gray-400 mb-2">Real-time Analytics</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-green-400 text-xl font-bold">+42%</div>
                      <div className="text-xs text-gray-500">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-blue-400 text-xl font-bold">2.4m</div>
                      <div className="text-xs text-gray-500">Avg Time</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-xl font-bold">89%</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-8">Trusted by forward-thinking companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center opacity-70">
            <div className="flex justify-center">
              <svg className="h-8" viewBox="0 0 124 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8" viewBox="0 0 124 24" fill="currentColor">
                <path d="M24 12l-8-8v5H4v6h12v5l8-8z"/>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8" viewBox="0 0 124 24" fill="currentColor">
                <path d="M12 12l-8-8v16l8-8zm8 0l-8-8v16l8-8z"/>
              </svg>
            </div>
            <div className="flex justify-center">
              <svg className="h-8" viewBox="0 0 124 24" fill="currentColor">
                <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
              </svg>
            </div>
            <div className="hidden lg:flex justify-center">
              <svg className="h-8" viewBox="0 0 124 24" fill="currentColor">
                <path d="M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
              Conversation Is The New Interface
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build, optimize, and scale your landing pages through simple conversation. No more complex menus or frustrating drag-and-drop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Editing</h3>
              <p className="text-gray-400">
                Simply tell Langit what you want to change, and watch it happen in real-time. No complex interfaces to learn.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Responsiveness</h3>
              <p className="text-gray-400">
                Every page is fully responsive out of the box. Your site will look perfect on any device, without any extra work.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built-in CRO Tools</h3>
              <p className="text-gray-400">
                Heatmaps, session recordings, and A/B testing all built right in. Optimize your conversions with data.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
                <Edit className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modular Editing</h3>
              <p className="text-gray-400">
                Make changes to specific elements without regenerating the entire page. Precision editing at your fingertips.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
              <p className="text-gray-400">
                Every page is built with best SEO practices in mind. Rank higher and get more organic traffic automatically.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="w-12 h-12 bg-yellow-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Conversion Analysis</h3>
              <p className="text-gray-400">
                Ask "Why isn't this converting?" and get AI-powered insights and suggestions based on your actual data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
              How Langit Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building a high-converting landing page has never been easier. Just chat with Langit and watch your vision come to life.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-4">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Describe Your Vision</h3>
                  <p className="text-gray-400">
                    Tell Langit what kind of landing page you need. Whether it's for a product launch, event registration, or lead generation, just describe it in natural language.
                  </p>
                </div>
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute top-0 left-1/2 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                  
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex mb-4">
                      <span className="text-green-500 mr-2">❯</span>
                      <span className="text-white">I need a landing page for my new fitness app with sign-up form</span>
                    </div>
                    <div className="pl-4 border-l-2 border-purple-600">
                      <div className="text-purple-400">Langit AI:</div>
                      <div className="text-gray-300">Creating a fitness app landing page with hero section, feature highlights, and sign-up form...</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-4">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Refine With Conversation</h3>
                  <p className="text-gray-400">
                    Want to change something? Just ask. Langit understands natural language instructions to adjust colors, layout, content, and more—all in real-time.
                  </p>
                </div>
                <div className="relative md:order-1">
                  {/* Dot */}
                  <div className="absolute top-0 left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                  
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex mb-4">
                      <span className="text-green-500 mr-2">❯</span>
                      <span className="text-white">Make the headline bigger and add a testimonial section</span>
                    </div>
                    <div className="pl-4 border-l-2 border-purple-600">
                      <div className="text-purple-400">Langit AI:</div>
                      <div className="text-gray-300">Enlarging headline and adding a testimonial section with 3 customer quotes. Would you like to add specific testimonials?</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm font-medium mb-4">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Optimize With Data</h3>
                  <p className="text-gray-400">
                    Ask Langit about your page's performance. The AI analyzes user behavior and suggests improvements to boost conversions, all through simple conversation.
                  </p>
                </div>
                <div className="relative">
                  {/* Dot */}
                  <div className="absolute top-0 left-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                  
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex mb-4">
                      <span className="text-green-500 mr-2">❯</span>
                      <span className="text-white">Why aren't people clicking my sign-up button?</span>
                    </div>
                    <div className="pl-4 border-l-2 border-purple-600">
                      <div className="text-purple-400">Langit AI:</div>
                      <div className="text-gray-300">Analysis shows users aren't scrolling down to see the button. Let's move it higher and make it more prominent. I'll also adjust the color for better contrast.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
              What Our Users Are Saying
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of marketers and founders who have revolutionized how they build landing pages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah T.</h4>
                  <p className="text-sm text-gray-400">Startup Founder</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I used to spend days tweaking landing pages. With Langit, I built a high-converting page in under 20 minutes by just chatting with the AI. Our conversion rate jumped 63%."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center font-bold text-white">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Marcus J.</h4>
                  <p className="text-sm text-gray-400">Marketing Director</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The built-in CRO tools are game-changing. I asked Langit why our sign-ups were low, and it analyzed the data and suggested specific changes. Our conversion rate doubled overnight."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center font-bold text-white">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Lisa R.</h4>
                  <p className="text-sm text-gray-400">E-commerce Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-300">
                "No more fighting with page builders or hiring expensive designers. I just tell Langit what I need, and the AI does the rest. My product pages now convert at 12% — that's 3x our previous rate!"
              </p>
              <div className="flex text-yellow-400 mt-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include the AI-powered conversational interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-4">Free</div>
              <h3 className="text-3xl font-bold mb-4">$0<span className="text-lg text-gray-400 font-normal">/month</span></h3>
              <p className="text-gray-400 mb-6">Perfect for getting started and testing the waters.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  1 landing page
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom domain
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Advanced CRO tools
                </li>
                <li className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  A/B testing
                </li>
              </ul>
              <button className="w-full border border-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500 rounded-xl p-8 shadow-lg shadow-purple-500/10 transform md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-black px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                Most Popular
              </div>
              <div className="text-purple-400 uppercase text-sm font-bold tracking-wider mb-4">Pro</div>
              <h3 className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-400 font-normal">/month</span></h3>
              <p className="text-gray-400 mb-6">Everything you need for professional landing pages.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  5 landing pages
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom domain
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  All CRO tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic A/B testing
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/20 transition duration-200">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:shadow-lg hover:shadow-purple-500/5 transition duration-300">
              <div className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-4">Enterprise</div>
              <h3 className="text-3xl font-bold mb-4">$99<span className="text-lg text-gray-400 font-normal">/month</span></h3>
              <p className="text-gray-400 mb-6">For businesses that need maximum conversion power.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited landing pages
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Enterprise analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple custom domains
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced CRO suite
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited A/B testing
                </li>
              </ul>
              <button className="w-full border border-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
            Transform How You Build Landing Pages Forever
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No more struggling with complex page builders. Just tell Langit what you want, and watch it come to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl text-lg font-bold 
              hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 ease-in-out">
              Start Building For Free
            </button>
            <button className="border border-gray-700 px-8 py-4 rounded-xl text-lg font-bold 
              hover:bg-gray-800 transition-all duration-300 ease-in-out">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-1">
                  <span className="text-xl font-bold text-black">L</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Langit<span className="text-purple-500">.</span>ai</span>
              </div>
              <p className="text-gray-400 text-sm">
                The future of landing page creation through conversation.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
<div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Langit.ai. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Join Waitlist Modal - Hidden by default, would be shown with state management */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md w-full">
          <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
          <p className="text-gray-400 mb-6">Be the first to experience the future of landing page creation.</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="you@example.com" 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" 
              />
            </div>
            <div>
              <label htmlFor="use-case" className="block text-sm text-gray-400 mb-1">What will you use Langit for?</label>
              <textarea 
                id="use-case"
                placeholder="Tell us a bit about your needs..." 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" 
                rows="3"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-medium">
              Join Waitlist
            </button>
          </div>
          <button className="mt-4 text-gray-400 hover:text-white text-sm">
            No thanks, I'll continue browsing
          </button>
        </div>
      </div>
    </div>
  );
}
