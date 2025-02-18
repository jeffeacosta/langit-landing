import BackgroundAnimation from "@/components/BackgroundAnimation";
export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-[#0a0a0a] to-[#1a1a2e] text-white min-h-screen flex flex-col items-center px-6 pt-20 pb-20">
    <BackgroundAnimation />
{/* Header */}
<header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 flex-nowrap">
  <div className="text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">
    Langit.ai
  </div>
  <div className="flex space-x-3 flex-shrink-0">
    <button className="bg-primary text-black px-4 py-2 rounded-lg font-bold hover:bg-blue-300 transition-all duration-300 whitespace-nowrap">
      Create Free Website
    </button>
    <button className="border border-primary text-primary px-4 py-2 rounded-lg font-bold hover:bg-primary hover:text-black transition-all duration-300 whitespace-nowrap">
      Sign In
    </button>
  </div>
</header>
    <div className="max-w-3xl text-center mt-24">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Build Your Website in Seconds with AI
      </h1>
      <p className="mt-4 text-lg text-textLight">
        No code. No hassle. Just describe it, and Langit builds it for you.
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
            src="/langit-screenshot.png" 
            alt="Langit Demo Screenshot" 
            className="max-w-full rounded-lg shadow-md" 
            style={{ maxHeight: '500px' }} 
          />
        </div>
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

