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
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <motion.div
          className="w-full h-full bg-gradient-to-br from-teal to-purple rounded-xl flex items-center justify-center shadow-lg"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* SwiftScale "SS" Icon */}
          <div className="relative">
            <motion.div
              className="text-white font-bold"
              style={{ fontSize: size === 'small' ? '14px' : size === 'default' ? '16px' : '18px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SS
            </motion.div>
            
            {/* Animated accent line */}
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/60 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
          
          {/* Floating particles effect */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-teal-300 rounded-full opacity-60"
            animate={{ 
              y: [-2, 2, -2],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60"
            animate={{ 
              y: [2, -2, 2],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>

      {/* Company Name */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className={`font-bold font-poppins bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent ${textSizes[size]}`}>
          SwiftScale
        </span>
        <span className="text-xs text-white/60 font-medium -mt-1">
          Software
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
