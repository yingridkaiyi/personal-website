"use client";

import { motion } from "framer-motion";

export default function TypingCharacter() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Container for the illustration */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle / Aura */}
        <circle cx="100" cy="100" r="90" fill="#C1BFFF" opacity="0.5" />
        
        {/* Desk */}
        <rect x="40" y="140" width="120" height="10" rx="2" fill="#BDB96A" />
        <rect x="50" y="150" width="10" height="40" fill="#BDB96A" />
        <rect x="140" y="150" width="10" height="40" fill="#BDB96A" />

        {/* Laptop Base */}
        <rect x="70" y="135" width="60" height="5" fill="#4a4a4a" />
        {/* Laptop Screen */}
        <rect x="75" y="100" width="50" height="35" fill="#e5e7eb" />
        <rect x="77" y="102" width="46" height="31" fill="#3b82f6" />

        {/* Girl Body */}
        <path d="M85 140 C 85 140, 80 120, 100 120 C 120 120, 115 140, 115 140 Z" fill="#CF6DFC" />
        
        {/* Head */}
        <circle cx="100" cy="95" r="20" fill="#fca5a5" /> {/* Skin tone */}
        
        {/* Hair - Black/Dark Asian Hair */}
        <path d="M80 95 C 80 75, 120 75, 120 95 C 120 105, 115 115, 100 115 C 85 115, 80 105, 80 95" fill="#1a1a1a" />
        <path d="M80 95 Q 75 110 70 115" stroke="#1a1a1a" strokeWidth="8" fill="none" /> {/* Left hair strand */}
        <path d="M120 95 Q 125 110 130 115" stroke="#1a1a1a" strokeWidth="8" fill="none" /> {/* Right hair strand */}
        
        {/* Arms - Typing Animation */}
        <motion.path 
          d="M85 125 Q 70 135 75 140" 
          stroke="#CF6DFC" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M85 125 Q 70 135 75 140", "M85 125 Q 70 130 75 135"] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "reverse" }}
        />
        <motion.path 
          d="M115 125 Q 130 135 125 140" 
          stroke="#CF6DFC" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M115 125 Q 130 135 125 140", "M115 125 Q 130 130 125 135"] }}
          transition={{ repeat: Infinity, duration: 0.2, repeatType: "reverse", delay: 0.1 }}
        />

      </svg>
      
      {/* Floating Code Bubbles */}
      <motion.div 
        className="absolute top-10 right-10 bg-white p-2 rounded-lg text-xs font-mono shadow-md text-lf-purple"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        &lt;Code /&gt;
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-4 bg-white p-2 rounded-lg text-xs font-mono shadow-md text-lf-green"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
      >
        def data():
      </motion.div>
    </div>
  );
}




