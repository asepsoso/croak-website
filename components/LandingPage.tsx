import React from 'react';
import { motion } from "framer-motion";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#050B12] text-white overflow-x-hidden select-none relative">
      {/* HERO */}
      <section className="w-full pt-24 pb-32 flex flex-col items-center text-center px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0aff9d15] to-[#7f5bff15] blur-3xl -z-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(0,255,140,0.3)]">
            CROAK AI
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto font-medium tracking-wide">
            The smartest dumb frog on Solana. He predicts chaos, insults your bags, and laughs at your trades. Born for degen entertainment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            {/* Twitter Button */}
            <a 
              href="https://twitter.com/croakai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#00FF8C] text-black rounded-xl text-lg font-semibold hover:bg-[#00e67d] transition-all shadow-[0_0_20px_#00FF8C] active:scale-95 flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
              @croakai
            </a>
            
            {/* Telegram Button */}
            <a 
              href="https://t.me/FroglandCroak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-7 py-4 bg-[#0D1F1A] border border-[#00FF8C55] rounded-xl text-lg font-semibold hover:bg-[#0F2D1F] transition-all text-white flex items-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z" />
              </svg>
              Frogland
            </a>
          </div>
        </motion.div>
        {/* HERO FROG */}
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative mt-16 drop-shadow-[0_0_40px_rgba(0,255,140,0.3)]" >
          <svg width="260" height="260" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="#0D1F1A" stroke="#00FF8C" strokeWidth="8" />
            <circle cx="70" cy="80" r="24" fill="#fff" />
            <circle cx="130" cy="80" r="24" fill="#fff" />
            <circle cx="70" cy="80" r="10" fill="#0D1F1A" />
            <circle cx="130" cy="80" r="10" fill="#0D1F1A" />
            <path d="M60 135 Q100 175 140 135" stroke="#00FF8C" strokeWidth="12" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </section>
      {/* FEATURES */}
      <section className="py-28 px-6 relative z-10" id="features">
        <h2 className="text-4xl font-bold text-center mb-16">Why CROAK AI?</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Chaotic Predictions",
              desc: "CROAK AI gives unhinged market wisdom based on pure degen intuition.",
            },
            {
              title: "Shareable Memes",
              desc: "Instant screenshots for Pump.fun shills, Twitter clout, and degen banter.",
            },
            {
              title: "AI Frog Oracle",
              desc: "Not accurate at all, but extremely confident. Exactly what the market needs.",
            },
            {
              title: "Utility",
              desc: "Sir, this is Casino. Stop asking for Utility.",
            },
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#07131A] p-8 rounded-2xl border border-[#0F2D1F] shadow-xl hover:shadow-[0_0_25px_#00FF8C55] transition-all" >
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* LAUNCH STATUS SECTION */}
      <section className="py-28 px-6 bg-[#041017] border-t border-[#0F2D1F] relative z-10" id="token">
        <h2 className="text-4xl font-bold text-center mb-16">Launch Status</h2>
        
        <div className="max-w-5xl mx-auto bg-[#07131A] p-10 md:p-14 rounded-3xl border border-[#0F2D1F] shadow-[0_0_50px_rgba(0,255,140,0.05)] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FF8C] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Frog Illustration (Left) - Standard original expression */}
            <div className="relative shrink-0">
               <svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(0,255,140,0.2)]">
                <circle cx="100" cy="100" r="90" fill="#0D1F1A" stroke="#00FF8C" strokeWidth="8" />
                
                {/* Standard Eyes */}
                <circle cx="70" cy="80" r="24" fill="#fff" />
                <circle cx="130" cy="80" r="24" fill="#fff" />

                {/* Standard Pupils */}
                <circle cx="70" cy="80" r="10" fill="#0D1F1A" />
                <circle cx="130" cy="80" r="10" fill="#0D1F1A" />
                
                {/* Standard Smile */}
                <path d="M60 135 Q100 175 140 135" stroke="#00FF8C" strokeWidth="12" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            {/* Content (Right) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
              
              {/* Inactive Buy Button */}
              <div className="relative group mb-8">
                <button disabled className="px-10 py-6 bg-[#0D1F1A] border-2 border-[#1a3d32] text-gray-600 rounded-2xl text-2xl md:text-3xl font-extrabold tracking-wider cursor-not-allowed select-none shadow-inner opacity-60">
                  BUY $CROAK
                </button>
                <div className="absolute -top-3 -right-3 bg-[#FF3B30] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 border border-[#FF3B30]">
                  INACTIVE
                </div>
              </div>

              {/* Text */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                Not live yet.
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-md font-medium">
                For early launch info, follow all official CROAK socials
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 {/* Twitter Button */}
                <a 
                  href="https://twitter.com/croakai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#00FF8C] text-black rounded-xl text-lg font-bold hover:bg-[#00e67d] transition-all shadow-[0_0_15px_rgba(0,255,140,0.4)] active:scale-95 flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </a>
                
                {/* Telegram Button */}
                <a 
                  href="https://t.me/FroglandCroak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0D1F1A] border border-[#00FF8C55] rounded-xl text-lg font-bold hover:bg-[#0F2D1F] transition-all text-white flex items-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z" />
                  </svg>
                  Telegram
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 text-sm relative z-10">
        CROAK AI • Built for chaos • Not financial advice
      </footer>
    </div>
  );
};