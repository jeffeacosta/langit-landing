"use client";

export default function LangitLanding() {
  // Simple mobile menu toggle function
  const toggleMenu = () => {
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
      mainNav.classList.toggle('active');
    }
  };

  // Setup smooth scrolling after component mounts
  const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
        
        // Close mobile menu if open
        const mainNav = document.getElementById('mainNav');
        if (mainNav) {
          mainNav.classList.remove('active');
        }
      });
    });
  };

  // Run setup after component mounts
  if (typeof window !== 'undefined') {
    // Only run on client-side
    setTimeout(setupSmoothScrolling, 100);
  }

  return (
    <>
      <head>
        <title>Langit.ai | Chat Your Way to Landing Page Perfection</title>
        <meta name="description" content="The first conversational AI landing page builder. No drag-and-drop. Just chat." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* CSS Reset */
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          /* Variables */
          :root {
            --color-primary: #8a6fff;
            --color-primary-dark: #6649cc;
            --color-secondary: #ff6b6b;
            --color-text: #e1e1ff;
            --color-text-dim: #9494b8;
            --color-background: #0a0a1a;
            --color-card: #12122b;
            --color-border: #2d2d4d;
            --font-main: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            --transition-main: all 0.3s ease;
          }

          /* Base Styles */
          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: var(--font-main);
            background-color: var(--color-background);
            color: var(--color-text);
            line-height: 1.6;
            overflow-x: hidden;
            background-image: 
              radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.025) 2%, transparent 0%);
            background-size: 100px 100px;
            font-size: 16px;
          }

          h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
          }

          p {
            margin-bottom: 1rem;
          }

          a {
            color: var(--color-text);
            text-decoration: none;
            transition: var(--transition-main);
          }

          a:hover {
            color: var(--color-primary);
          }

          button {
            border: none;
            background: transparent;
            font-family: inherit;
            color: inherit;
            cursor: pointer;
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            transition: var(--transition-main);
          }

          img {
            max-width: 100%;
            height: auto;
          }

          input {
            font-family: inherit;
            font-size: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            background-color: rgba(255, 255, 255, 0.05);
            color: var(--color-text);
            transition: var(--transition-main);
          }

          input:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 2px rgba(138, 111, 255, 0.2);
          }

          ul {
            list-style: none;
          }

          /* Container */
          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          /* Navbar */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            padding: 1rem 0;
            background-color: rgba(10, 10, 26, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(45, 45, 77, 0.5);
            transition: var(--transition-main);
          }

          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 1.5rem;
            color: var(--color-text);
          }

          .logo-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            margin-right: 0.5rem;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            border-radius: 50%;
            color: var(--color-background);
            font-weight: bold;
          }

          .nav-list {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .nav-item a {
            font-weight: 500;
            position: relative;
          }

          .nav-item a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: var(--color-primary);
            transition: var(--transition-main);
          }

          .nav-item a:hover::after {
            width: 100%;
          }

          .nav-buttons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .btn-primary {
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            color: white;
            box-shadow: 0 4px 16px rgba(138, 111, 255, 0.3);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(138, 111, 255, 0.4);
          }

          .btn-outline {
            border: 1px solid var(--color-primary);
            color: var(--color-primary);
          }

          .btn-outline:hover {
            background-color: rgba(138, 111, 255, 0.1);
            transform: translateY(-2px);
          }

          .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 24px;
            height: 18px;
            cursor: pointer;
          }

          .mobile-menu-toggle span {
            width: 100%;
            height: 2px;
            background-color: var(--color-text);
            transition: var(--transition-main);
          }

          /* Section Styles */
          .section {
            padding: 6rem 0;
          }

          .section-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .section-subtitle {
            font-size: 1.125rem;
            color: var(--color-text-dim);
            max-width: 800px;
            margin: 0 auto;
          }

          /* Hero Section */
          .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding-top: 5rem;
          }

          .hero-content {
            max-width: 650px;
            position: relative;
            z-index: 2;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            line-height: 1.1;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--color-text-dim);
            margin-bottom: 2rem;
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .hero-highlight {
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 800;
          }

          .hero-highlight-border {
            position: relative;
          }

          .hero-highlight-border::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          }

          .hero-stats {
            display: flex;
            gap: 2rem;
            margin-top: 3rem;
          }

          .hero-stat {
            display: flex;
            flex-direction: column;
          }

          .hero-stat-number {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .hero-stat-label {
            font-size: 0.875rem;
            color: var(--color-text-dim);
          }

          .hero-image {
            position: absolute;
            top: 50%;
            right: -10%;
            transform: translateY(-50%);
            width: 60%;
            max-width: 700px;
            z-index: 1;
            opacity: 0.8;
          }

          .hero-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
          }

          .hero-glow-1 {
            top: 10%;
            right: 15%;
            width: 300px;
            height: 300px;
            background-color: rgba(138, 111, 255, 0.2);
          }

          .hero-glow-2 {
            bottom: 10%;
            left: 5%;
            width: 200px;
            height: 200px;
            background-color: rgba(255, 107, 107, 0.15);
          }

          /* Features Section */
          .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .feature-card {
            background-color: var(--color-card);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--color-border);
            transition: var(--transition-main);
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
            border-color: var(--color-primary);
          }

          .feature-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .feature-title {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .feature-text {
            color: var(--color-text-dim);
          }

          /* How It Works Section */
          .how-it-works {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }

          .steps {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .step {
            display: flex;
            gap: 1.5rem;
          }

          .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            border-radius: 50%;
            font-weight: 700;
            font-size: 1.25rem;
            flex-shrink: 0;
          }

          .step-title {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .step-text {
            color: var(--color-text-dim);
          }

          .demo-container {
            display: flex;
            justify-content: center;
          }

          .terminal {
            width: 100%;
            max-width: 500px;
            background-color: #1e1e3f;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--color-border);
          }

          .terminal-header {
            background-color: rgba(0, 0, 0, 0.2);
            padding: 0.75rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid var(--color-border);
          }

          .terminal-dots {
            display: flex;
            gap: 0.5rem;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .dot-red {
            background-color: #ff5f56;
          }

          .dot-yellow {
            background-color: #ffbd2e;
          }

          .dot-green {
            background-color: #27c93f;
          }

          .terminal-body {
            padding: 1.5rem;
            font-family: monospace;
            font-size: 0.875rem;
            line-height: 1.6;
          }

          .typed-text {
            color: var(--color-primary);
            font-weight: 700;
          }

          .response-text {
            color: #27c93f;
            font-weight: 700;
          }

          .cursor {
            display: inline-block;
            width: 8px;
            height: 16px;
            background-color: var(--color-text);
            margin-left: 4px;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          /* Testimonial Section */
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .testimonial {
            background-color: var(--color-card);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--color-border);
            transition: var(--transition-main);
          }

          .testimonial:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
            border-color: var(--color-primary);
          }

          .testimonial-text {
            font-style: italic;
            margin-bottom: 1.5rem;
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .author-avatar {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.25rem;
          }

          .author-info h4 {
            margin-bottom: 0.25rem;
          }

          .author-info p {
            font-size: 0.875rem;
            color: var(--color-text-dim);
            margin: 0;
          }

          /* Pricing Section */
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .pricing-card {
            background-color: var(--color-card);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--color-border);
            transition: var(--transition-main);
            position: relative;
            overflow: hidden;
          }

          .pricing-card.featured {
            transform: scale(1.05);
          }

          .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
            border-color: var(--color-primary);
          }

          .pricing-card.featured:hover {
            transform: translateY(-5px) scale(1.05);
          }

          .badge {
            position: absolute;
            top: 1rem;
            right: -2rem;
            background: var(--color-primary);
            color: white;
            padding: 0.25rem 2rem;
            transform: rotate(45deg);
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          .pricing-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .pricing-name {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }

          .pricing-description {
            color: var(--color-text-dim);
            font-size: 0.875rem;
          }

          .pricing-price {
            text-align: center;
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 2rem;
          }

          .pricing-currency {
            font-size: 1.5rem;
            vertical-align: super;
          }

          .pricing-period {
            font-size: 1rem;
            color: var(--color-text-dim);
            font-weight: normal;
          }

          .pricing-features {
            margin-bottom: 2rem;
          }

          .pricing-feature {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
          }

          .feature-check {
            color: var(--color-primary);
            margin-right: 0.5rem;
            font-weight: 700;
          }

          .pricing-button {
            display: block;
            width: 100%;
            text-align: center;
          }

          /* CTA Section */
          .cta {
            background-color: var(--color-card);
            border-radius: 24px;
            padding: 4rem;
            text-align: center;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
          }

          .cta-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: 0;
          }

          .cta-glow-1 {
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            background-color: rgba(138, 111, 255, 0.2);
          }

          .cta-glow-2 {
            bottom: -50px;
            left: -50px;
            width: 200px;
            height: 200px;
            background-color: rgba(255, 107, 107, 0.15);
          }

          .cta-content {
            position: relative;
            z-index: 1;
          }

          .cta-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .cta-text {
            font-size: 1.125rem;
            color: var(--color-text-dim);
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-form {
            display: flex;
            gap: 1rem;
            max-width: 500px;
            margin: 0 auto;
          }

          .cta-input {
            flex: 1;
          }

          .cta-button {
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            color: white;
            box-shadow: 0 4px 16px rgba(138, 111, 255, 0.3);
            white-space: nowrap;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(138, 111, 255, 0.4);
          }

          /* Footer */
          footer {
            padding: 5rem 0 2rem;
            border-top: 1px solid var(--color-border);
          }

          .footer-content {
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 3rem;
            margin-bottom: 3rem;
          }

          .footer-description {
            color: var(--color-text-dim);
            margin-bottom: 1.5rem;
          }

          .footer-socials {
            display: flex;
            gap: 1rem;
          }

          .social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-color: var(--color-card);
            border: 1px solid var(--color-border);
            transition: var(--transition-main);
          }

          .social-icon:hover {
            background-color: var(--color-primary);
            color: white;
            transform: translateY(-2px);
          }

          .footer-column-title {
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
          }

          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .footer-link a {
            color: var(--color-text-dim);
            transition: var(--transition-main);
          }

          .footer-link a:hover {
            color: var(--color-primary);
            padding-left: 0.5rem;
          }

          .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
            color: var(--color-text-dim);
            font-size: 0.875rem;
          }

          /* Media Queries */
          @media (max-width: 1024px) {
            .hero-title {
              font-size: 3rem;
            }

            .section-title {
              font-size: 2rem;
            }

            .cta {
              padding: 3rem 2rem;
            }

            .hero-image {
              width: 50%;
              opacity: 0.6;
            }
          }

          @media (max-width: 768px) {
            .mobile-menu-toggle {
              display: flex;
            }

            .nav-list {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background-color: var(--color-background);
              flex-direction: column;
              padding: 1.5rem;
              gap: 1.5rem;
              border-bottom: 1px solid var(--color-border);
              transform: translateY(-150%);
              transition: transform 0.3s ease;
              opacity: 0;
            }

            .nav-list.active {
              transform: translateY(0);
              opacity: 1;
            }

            .how-it-works {
              grid-template-columns: 1fr;
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .hero-image {
              display: none;
            }

            .footer-content {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .cta-form {
              flex-direction: column;
            }

            .pricing-card.featured {
              transform: scale(1);
            }

            .pricing-card.featured:hover {
              transform: translateY(-5px);
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 2rem;
            }

            .section-title {
              font-size: 1.75rem;
            }

            .hero-buttons {
              flex-direction: column;
            }

            .hero-stats {
              flex-direction: column;
              gap: 1rem;
            }

            .cta {
              padding: 2rem 1rem;
            }

            .cta-title {
              font-size: 1.75rem;
            }
          }
        `}} />
      </head>

      <body>
        {/* Navbar */}
        <nav className="navbar">
          <div className="container navbar-container">
            <a href="#" className="logo">
              <div className="logo-icon">⟡</div>
              <span>Langit.ai</span>
            </a>
            <div className="mobile-menu-toggle" id="menuToggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="nav-list" id="mainNav">
              <li className="nav-item"><a href="#features">Features</a></li>
              <li className="nav-item"><a href="#how-it-works">How It Works</a></li>
              <li className="nav-item"><a href="#pricing">Pricing</a></li>
              <li className="nav-item"><a href="#">Blog</a></li>
              <li className="nav-buttons">
                <a href="#" className="btn-outline">Log In</a>
                <a href="#" className="btn-primary">Get Started</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Chat Your Way to Landing Page <span className="hero-highlight">Perfection</span>
              </h1>
              <p className="hero-subtitle">
                The first conversational AI landing page builder. No drag-and-drop. Just tell Langit what you want, and watch your page transform in real-time.
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn-primary">Get Early Access</a>
                <a href="#how-it-works" className="btn-outline">See How It Works</a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">93%</span>
                  <span className="hero-stat-label">Time Saved</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">52%</span>
                  <span className="hero-stat-label">Higher Conversion</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">3,500+</span>
                  <span className="hero-stat-label">Early Adopters</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Powerful Features Behind the <span className="hero-highlight">Conversation</span></h2>
              <p className="section-subtitle">Langit combines the ease of conversation with enterprise-grade landing page capabilities.</p>
            </div>

            <div className="features">
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3 className="feature-title">Natural Language Editing</h3>
                <p className="feature-text">Edit any element with simple text commands. "Make the headline bigger" or "Change the button color to blue" - Langit understands it all.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3 className="feature-title">AI Conversion Insights</h3>
                <p className="feature-text">Langit analyzes visitor behavior and suggests improvements to boost conversions. It learns what works for your audience and adapts accordingly.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">Fully Responsive</h3>
                <p className="feature-text">Every page automatically works perfectly on all devices. Just ask Langit to optimize for mobile or desktop and it handles the rest.</p>
              </div>
            </div>

            <div className="features" style={{ marginTop: "32px" }}>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3 className="feature-title">Built-in CRO Tools</h3>
                <p className="feature-text">Analytics, heatmaps, session recordings, and A/B testing—all included and accessible through natural conversation.</p>
              </div>

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
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section" id="how-it-works" style={{ backgroundColor: "rgba(4, 20, 40, 0.3)}}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">The <span className="hero-highlight">Intelligence</span> Behind the Interface</h2>
              <p className="section-subtitle">Langit doesn't just generate pages—it thinks critically about conversion optimization.</p>
            </div>

            <div className="how-it-works">
              <div className="steps">
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

              <div className="demo-container">
                <div className="terminal" style={{ width: "100%" }}>
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
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our <span className="hero-highlight">Users Say</span></h2>
              <p className="section-subtitle">Marketers and founders are transforming their landing page workflows with Langit.</p>
            </div>

            <div className="testimonial-grid">
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
        <section className="section" id="pricing" style={{ backgroundColor: "rgba(18, 18, 36, 0.3)" }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Simple, <span className="hero-highlight">Transparent</span> Pricing</h2>
              <p className="section-subtitle">No complicated tiers. Choose the plan that works for your business.</p>
            </div>

            <div className="pricing-grid">
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
        <section className="section">
          <div className="container">
            <div className="cta">
              <div className="cta-glow cta-glow-1"></div>
              <div className="cta-glow cta-glow-2"></div>
              <div className="cta-content">
                <h2 className="cta-title">Ready to <span className="hero-highlight">Transform</span> Your Landing Page Experience?</h2>
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
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <div className="footer-logo">
                  <div className="logo-icon">⟡</div>
                  <span>Langit.ai</span>
                </div>
                <p className="footer-description">Building the future of conversational landing page creation and optimization.</p>
                <div className="footer-socials">
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

              <div className="footer-column">
                <h3 className="footer-column-title">Product</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">Features</a></li>
                  <li className="footer-link"><a href="#">Pricing</a></li>
                  <li className="footer-link"><a href="#">Testimonials</a></li>
                  <li className="footer-link"><a href="#">Integrations</a></li>
                  <li className="footer-link"><a href="#">API</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Resources</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">Blog</a></li>
                  <li className="footer-link"><a href="#">Documentation</a></li>
                  <li className="footer-link"><a href="#">Tutorials</a></li>
                  <li className="footer-link"><a href="#">Changelog</a></li>
                  <li className="footer-link"><a href="#">Roadmap</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-column-title">Company</h3>
                <ul className="footer-links">
                  <li className="footer-link"><a href="#">About Us</a></li>
                  <li className="footer-link"><a href="#">Careers</a></li>
                  <li className="footer-link"><a href="#">Press</a></li>
                  <li className="footer-link"><a href="#">Contact</a></li>
                  <li className="footer-link"><a href="#">Terms & Privacy</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2025 Langit, Inc. All rights reserved. The AI-powered landing page builder that speaks your language.</p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
