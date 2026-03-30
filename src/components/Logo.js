import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-10 h-10", 
    large: "w-12 h-12"
  };

  const textSizes = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl"
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Lightning bolt icon */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal to-purple shadow-lg shadow-teal/30">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"/>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold font-poppins text-white ${size === 'small' ? 'text-base' : size === 'large' ? 'text-2xl' : 'text-lg'}`}>
          Swift<span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Scale</span>
        </span>
        <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Software</span>
      </div>
    </motion.div>
  );
};

export default Logo;
