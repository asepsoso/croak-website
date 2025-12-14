import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponseCardProps } from '../types';
import { Copy, Share2, RefreshCw } from 'lucide-react';

export const ResponseCard: React.FC<ResponseCardProps> = ({ output, loading, onAsk }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      transition={{ duration: 0.5, delay: 0.1 }} 
      className="bg-[#07131A] border border-[#0F2D1F] rounded-2xl p-8 shadow-xl w-full md:w-[420px] relative overflow-hidden flex flex-col justify-between min-h-[300px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7f5bff0a] to-[#0aff9d0a] blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-3 text-white">
            <span className={`inline-block w-3 h-3 bg-[#00FF8C] rounded-full ${loading ? 'animate-ping' : ''}`} />
            CROAK • Oracle
          </h2>

          <div className="bg-[#02090E] border border-[#0F2D1F] rounded-xl p-6 min-h-[160px] flex items-center justify-center text-center text-xl text-[#8bffd1] tracking-wide font-medium relative overflow-hidden shadow-inner">
             <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-[#00FF8C] animate-pulse">Consulting the swamp...</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="content" 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    "{output}"
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <button 
            className="flex-1 px-4 py-3 bg-[#0D1F1A] border border-[#00FF8C33] text-[#00FF8C] rounded-lg hover:bg-[#0f2d1f] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            disabled={loading}
          >
            <Share2 size={18} />
            <span className="hidden sm:inline">Share</span>
          </button>
          
          <button 
            onClick={handleCopy}
            className="flex-1 px-4 py-3 bg-[#0D1F1A] border border-[#00FF8C33] text-[#00FF8C] rounded-lg hover:bg-[#0f2d1f] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            disabled={loading}
          >
            <Copy size={18} />
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
          
          <button 
            onClick={onAsk}
            className="flex-1 px-4 py-3 bg-[#0D1F1A] border border-[#00FF8C33] text-[#00FF8C] rounded-lg hover:bg-[#0f2d1f] transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            disabled={loading}
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            <span className="hidden sm:inline">Chaos</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
