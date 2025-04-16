"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Setup event listeners after mount
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
        
        // Close mobile menu if open
        setMenuOpen(false);
      });
    });
    
    // Fix grid lines in SVG/icons by adding additional CSS
    const style = document.createElement('style');
    style.textContent = `
      svg, .feature-icon, .step-number, .author-avatar {
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative bg-[#08080d] text-white min-h-screen flex flex-col items-center">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[-20vh] right-[-10vw] w-[70vw] h-[70vh] rounded-full bg-glow-primary filter blur-[60px] opacity-60 z-0 animate-pulse"></div>
      <div className="absolute bottom-[-20vh] left-[-10vw] w-[70vw] h-[70vh] rounded-full bg-glow-secondary filter blur-[60px] opacity-60 z-0 animate-pulse"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full py-6 z-50 backdrop-blur-md bg-[#08080d]/80 border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <div className="text-3xl text-primary">⟡</div>
            <span className="text-white">Langit.ai</span>
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
            <button className="px-5 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold">Log In</button>
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:translate-y-[-2px] transition-all font-semibold">Sign Up Free</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Chat Your Way to Landing Page <span className="text-primary">Perfection</span>
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              Langit is the first AI platform that lets you build & optimize high-converting landing pages through simple conversations. No code. No design skills. Just tell it what you want.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 hover:translate-y-[-2px] transition-all font-semibold text-lg">Start For Free</button>
              <button className="px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-semibold text-lg">See Demo</button>
            </div>
          </div>

          {/* Terminal Demo */}
          <div className="terminal w-full max-w-xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
              </div>
            </div>
            <div className="terminal-body">
              <div>
                <span className="typed-text">You:</span> Change the hero button to red<br />
                <span className="response-text">Langit:</span> Updated button color to red. Anything else?<br /><br />
                <span className="typed-text">You:</span> Add a testimonial section below features<br />
                <span className="response-text">Langit:</span> Added testimonial section with 3 cards. Need specific quotes?<br /><br />
                <span className="typed-text">You:</span> Why isn't this converting well?<br />
                <span className="response-text">Langit:</span> Based on heatmap data, visitors aren't scrolling past the hero. I recommend making your value prop clearer and moving your sign-up form above the fold.<span className="cursor"></span>
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
              Finally, Landing Pages Built on <span className="text-primary">Your Terms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No more wrestling with clunky editors or complex templates. Just tell Langit what you want—in plain language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Conversational Editing</h3>
              <p className="feature-text">Simply type what you want changed and watch it happen instantly. No more hunting through menus or complex settings.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3 className="feature-title">Fully Responsive</h3>
              <p className="feature-text">Every page automatically works perfectly on all devices. Just ask Langit to optimize for mobile or desktop and it handles the rest.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Built-in CRO Tools</h3>
              <p className="feature-text">Analytics, heatmaps, session recordings, and A/B testing—all included and accessible through natural conversation.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">SEO Optimized</h3>
              <p className="feature-text">Ask Langit to optimize your page for specific keywords, and it'll automatically implement best practices to boost your rankings.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-text">Every page loads in under 1 second. Ask for performance improvements, and Langit instantly optimizes your page speed.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3 className="feature-title">AI-Powered Modules</h3>
              <p className="feature-text">Request specific sections like testimonials, pricing tables, or contact forms, and Langit will build them on the fly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-primary">Intelligence</span> Behind the Interface
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Langit doesn't just generate pages—it thinks critically about conversion optimization.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Start with a conversation</h3>
                  <p className="step-text">Describe your landing page needs in simple language. Langit asks smart follow-up questions to understand your goals completely.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Watch your page come alive</h3>
                  <p className="step-text">Langit builds your page in real-time based on your instructions. See changes instantly as you request them.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Refine with natural commands</h3>
                  <p className="step-text">"Move this section up." "Make the headline more compelling." "Add social proof." Langit handles it all without you touching code.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Optimize with AI insights</h3>
                  <p className="step-text">Ask "Why aren't people converting?" and get data-backed suggestions that Langit can implement immediately.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="terminal w-full">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <div className="dot dot-red"></div>
                    <div className="dot dot-yellow"></div>
                    <div className="dot dot-green"></div>
                  </div>
                </div>
                <div className="terminal-body">
                  <div>
                    <span className="typed-text">You:</span> Make the headline more punchy<br />
                    <span className="response-text">Langit:</span> Updated headline to "Skyrocket Your Conversions Without Touching Code"<br /><br />
                    <span className="typed-text">You:</span> Show me the heatmap for mobile users<br />
                    <span className="response-text">Langit:</span> [Displaying heatmap] I notice mobile users aren't seeing your pricing table. Should I move it higher?<br /><br />
                    <span className="typed-text">You:</span> Yes, and add a testimonial from Sarah J.<br />
                    <span className="response-text">Langit:</span> Moved pricing section up and added Sarah's testimonial from your database. Your page should convert 23% better now based on my analysis.<span className="cursor"></span>
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
              What Our <span className="text-primary">Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Marketers and founders are transforming their landing page workflows with Langit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial">
              <p className="testimonial-text">"I used to spend days tweaking landing pages in Webflow. With Langit, I describe what I want and it's done in minutes. Our conversion rate is up 37% since switching."</p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <h4>Mia Rodriguez</h4>
                  <p>Growth Lead, Fintech Startup</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">"As a non-technical founder, I was always the bottleneck in our landing page testing. Langit lets me test new ideas in seconds without bothering our developers."</p>
              <div className="testimonial-author">
                <div className="author-avatar">J</div>
                <div className="author-info">
                  <h4>James Chen</h4>
                  <p>Founder, SaaS Platform</p>
                </div>
              </div>
            </div>

            <div className="testimonial">
              <p className="testimonial-text">"I asked Langit why our page wasn't converting, and it suggested moving our testimonials above the fold. That one change doubled our sign-up rate overnight."</p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <h4>Sophia Patel</h4>
                  <p>CMO, E-commerce Brand</p>
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
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No complicated tiers. Choose the plan that works for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Starter</h3>
                <p className="pricing-description">Perfect for small businesses and solopreneurs</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>29<span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> 1 landing page
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> 10,000 monthly visitors
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Basic analytics
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Conversational editing
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Custom domain
                </li>
              </ul>
              <button className="pricing-button btn-outline">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="badge">Most Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-name">Pro</h3>
                <p className="pricing-description">For growing businesses and marketing teams</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>79<span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> 5 landing pages
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> 50,000 monthly visitors
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Advanced analytics
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Heatmaps & session recordings
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> A/B testing
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Team collaboration
                </li>
              </ul>
              <button className="pricing-button btn-primary">Get Started</button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Business</h3>
                <p className="pricing-description">For high-volume marketing campaigns</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>199<span className="pricing-period">/mo</span>
              </div>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Unlimited landing pages
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> 250,000 monthly visitors
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Enterprise analytics
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Advanced CRO tools
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Multivariate testing
                </li>
                <li className="pricing-feature">
                  <span className="feature-check">✓</span> Priority support
                </li>
              </ul>
              <button className="pricing-button btn-outline">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-[#0c0c14]">
        <div className="container mx-auto px-6">
          <div className="cta">
            <div className="cta-glow cta-glow-1"></div>
            <div className="cta-glow cta-glow-2"></div>
            <div className="cta-content">
              <h2 className="cta-title">Ready to <span className="text-primary">Transform</span> Your Landing Page Experience?</h2>
              <p className="cta-text">Join thousands of marketers who've ditched traditional page builders for conversational AI.</p>
              <form className="cta-form">
                <input type="email" placeholder="Enter your email" className="cta-input" required />
                <button type="submit" className="cta-button">Get Early Access</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 text-2xl font-bold mb-4">
                <div className="text-3xl text-primary">⟡</div>
                <span className="text-white">Langit.ai</span>
              </div>
              <p className="text-gray-400 mb-6">Building the future of conversational landing page creation and optimization.</p>
              <div className="flex gap-4">
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon">
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

      {/* Add styles */}
      <style jsx global>{`
        :root {
          --primary: #3B82F6;
          --primary-dark: #2563EB;
          --secondary: #10B981;
          --bg-dark: #08080d;
          --bg-card: #121224;
          --text-light: #D1D5DB;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(var(--bg-dark) 1px, transparent 1px),
            linear-gradient(90deg, var(--bg-dark) 1px, transparent 1px);
          background-size: 40px 40px;
          background-color: rgba(18, 18, 36, 0.15);
        }

        .bg-glow-primary {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(8, 8, 13, 0) 70%);
        }
        
        .bg-glow-secondary {
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(8, 8, 13, 0) 70%);
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { opacity: 0.6; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-pulse {
          animation: pulse 8s infinite;
        }

        .feature-card {
          background-color: var(--bg-card);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background-color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden; 
          transform: translate3d(0, 0, 0);
          isolation: isolate;
          will-change: transform;
        }

        .feature-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .feature-text {
          color: var(--text-light);
          line-height: 1.6;
        }

        .terminal {
          border-radius: 8px;
          overflow: hidden;
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .terminal-header {
          background: #343546;
          padding: 10px 15px;
          display: flex;
          align-items: center;
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background-color: #FF5F56; }
        .dot-yellow { background-color: #FFBD2E; }
        .dot-green { background-color: #27C93F; }

        .terminal-body {
          background: #1E1E2E;
          padding: 20px;
          font-family: monospace;
          color: #e2e8f0;
          line-height: 1.6;
        }

        .typed-text {
          color: var(--primary);
          font-weight: bold;
        }

        .response-text {
          color: var(--secondary);
          font-weight: bold;
        }

        .cursor {
          background-color: var(--primary);
          animation: blink 1s step-end infinite;
          display: inline-block;
          width: 10px;
          height: 18px;
          vertical-align: text-bottom;
          margin-left: 2px;
        }

        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }

        .step {
          display: flex;
          gap: 20px;
        }

        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .step-text {
          color: var(--text-light);
          line-height: 1.6;
        }

        .testimonial {
          background-color: var(--bg-card);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .testimonial:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: var(--primary);
        }

        .testimonial-text {
          font-size: 18px;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 24px;
          color: var(--text-light);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 20px;
        }

        .author-info h4 {
          font-size: 18px;
          margin-bottom: 4px;
        }

        .author-info p {
          color: var(--text-light);
          font-size: 14px;
        }

        .pricing-card {
          background-color: var(--bg-card);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: var(--primary);
        }

        .pricing-card.featured {
          border: 2px solid var(--primary);
          position: relative;
          transform: scale(1.05);
        }

        .pricing-card.featured:hover {
          transform: translateY(-8px) scale(1.05);
        }

                  .badge {
          position: absolute;
          top: -15px;
          right: 30px;
          background-color: var(--primary);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
        }

        .pricing-header {
          margin-bottom: 24px;
        }

        .pricing-name {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .pricing-description {
          color: var(--text-light);
        }

        .pricing-price {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 24px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .pricing-currency {
          font-size: 24px;
          margin-right: 4px;
        }

        .pricing-period {
          font-size: 16px;
          color: var(--text-light);
          margin-left: 4px;
          align-self: flex-end;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .pricing-feature {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-check {
          color: var(--secondary);
          margin-right: 12px;
        }

        .pricing-button {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary {
          background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
        }

        .cta {
          background: linear-gradient(135deg, rgba(18, 18, 36, 0.9) 0%, rgba(8, 8, 13, 0.9) 100%);
          border-radius: 24px;
          padding: 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          z-index: 0;
          filter: blur(40px);
        }

        .cta-glow-1 {
          top: -100px;
          right: -100px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(0, 0, 0, 0) 70%);
        }

        .cta-glow-2 {
          bottom: -100px;
          left: -100px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(0, 0, 0, 0) 70%);
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .cta-text {
          font-size: 20px;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .cta-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }

        .cta-input {
          flex: 1;
          padding: 16px 20px;
          border-radius: 8px 0 0 8px;
          border: none;
          font-size: 16px;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-right: none;
        }

        .cta-input:focus {
          outline: none;
          border-color: var(--primary);
        }

        .cta-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .cta-button {
          padding: 16px 30px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 0 8px 8px 0;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-button:hover {
          background: linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 100%);
          box-shadow: 0 15px 20px -3px rgba(59, 130, 246, 0.4);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background-color: var(--primary);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .cta {
            padding: 40px 20px;
          }

          .cta-form {
            flex-direction: column;
          }

          .cta-input {
            border-radius: 8px;
            border-right: 1px solid rgba(255, 255, 255, 0.2);
            margin-bottom: 16px;
          }

          .cta-button {
            border-radius: 8px;
          }

          .pricing-card.featured {
            transform: scale(1);
          }

          .pricing-card.featured:hover {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
