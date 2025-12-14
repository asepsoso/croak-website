import React from 'react';
import { motion } from 'framer-motion';
import { FrogAvatarProps } from '../types';

export const FrogAvatar: React.FC<FrogAvatarProps> = ({ isAnimating }) => {
  return (
    <motion.div 
      animate={isAnimating ? { y: [0, -6, 0] } : { y: 0 }} 
      transition={{ duration: isAnimating ? 0.5 : 3, repeat: Infinity, repeatType: "reverse" }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_25px_rgba(0,255,140,0.4)]">
        {/* Main Head Body */}
        <circle cx="100" cy="100" r="90" fill="#0D1F1A" stroke="#00FF8C" strokeWidth="8" />
        
        {/* Eyes Background */}
        <circle cx="70" cy="80" r="22" fill="#fff" />
        <circle cx="130" cy="80" r="22" fill="#fff" />
        
        {/* Pupils - Animate looking around */}
        <motion.circle 
          cx="70" 
          cy="80" 
          r="10" 
          fill="#0D1F1A"
          animate={{ cx: [70, 75, 65, 70], cy: [80, 82, 78, 80] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.circle 
          cx="130" 
          cy="80" 
          r="10" 
          fill="#0D1F1A" 
          animate={{ cx: [130, 135, 125, 130], cy: [80, 82, 78, 80] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
        />
        
        {/* Mouth - Animates when "talking" */}
        <motion.path 
          d="M60 130 Q100 165 140 130" 
          stroke="#00FF8C" 
          strokeWidth="12" 
          fill="none" 
          strokeLinecap="round"
          animate={isAnimating ? { d: ["M60 130 Q100 165 140 130", "M60 130 Q100 145 140 130", "M60 130 Q100 165 140 130"] } : {}}
          transition={{ duration: 0.2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export const SmallFrogIcon: React.FC = () => (
  <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
    <svg width="48" height="48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(0,255,140,0.6)]">
      <circle cx="100" cy="100" r="90" fill="#0D1F1A" stroke="#00FF8C" strokeWidth="8" />
      <circle cx="70" cy="80" r="18" fill="#fff" />
      <circle cx="130" cy="80" r="18" fill="#fff" />
      <circle cx="70" cy="80" r="8" fill="#0D1F1A" />
      <circle cx="130" cy="80" r="8" fill="#0D1F1A" />
      <path d="M60 130 Q100 155 140 130" stroke="#00FF8C" strokeWidth="10" fill="none" strokeLinecap="round" />
    </svg>
  </motion.div>
);
