import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FrogAvatar, SmallFrogIcon } from './components/FrogAvatar';
import { ResponseCard } from './components/ResponseCard';
import { getCroakWisdom } from './services/geminiService';
import { LandingPage } from './components/LandingPage';

export default function App() {
  const [output, setOutput] = useState("Your next trade? Pain.");
  const [loading, setLoading] = useState(false);

  const askCroak = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    
    // Artificial delay for effect if the API is too fast, gives the animation time to play
    const minDelay = new Promise(resolve => setTimeout(resolve, 800));
    const wisdomPromise = getCroakWisdom();

    const [wisdom] = await Promise.all([wisdomPromise, minDelay]);
    
    setOutput(wisdom);
    setLoading(false);
  }, [loading]);

  return (
    <div className="bg-[#050B12] text-white">
      <LandingPage />
      
      <div id="app" className="min-h-screen w-full flex flex-col items-center py-12 px-4 select-none relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00FF8C] opacity-[0.03] blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7f5bff] opacity-[0.03] blur-[120px] rounded-full" />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} 
            className="flex flex-col items-center gap-4 relative z-10 mb-8"
        >
            <div className="flex items-center gap-4">
            <SmallFrogIcon />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,255,140,0.3)]">
                CROAK AI
            </h1>
            </div>
            <p className="text-gray-400 text-center max-w-md px-4">
                The smartest dumb frog on Solana. Built for chaos.
            </p>
        </motion.div>

        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            
            {/* Avatar Section */}
            <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }} 
            className="bg-[#07131A] border border-[#0F2D1F] rounded-2xl p-8 shadow-xl w-full max-w-[340px] flex flex-col items-center justify-center relative overflow-hidden"
            >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0aff9d0a] to-[#7f5bff0a] blur-2xl pointer-events-none" />

            <div className="py-4">
                <FrogAvatar isAnimating={loading} />
            </div>

            <button 
                onClick={askCroak} 
                disabled={loading}
                className={`
                    mt-8 px-8 py-4 bg-[#00FF8C] text-black rounded-xl text-lg font-bold tracking-wider
                    transition-all shadow-[0_0_20px_rgba(0,255,140,0.4)]
                    hover:bg-[#00e67d] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,140,0.6)]
                    active:scale-95 disabled:opacity-70 disabled:grayscale disabled:scale-100
                    flex items-center gap-2
                `}
            >
                {loading ? 'CROAKING...' : 'ASK CROAK'}
            </button>
            </motion.div>

            {/* Response Section */}
            <ResponseCard output={output} loading={loading} onAsk={askCroak} />
        </div>

        <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 text-xs text-gray-600 text-center max-w-md"
        >
            Not financial advice. If you listen to a frog, you deserve the rug.
        </motion.p>
      </div>
    </div>
  );
}