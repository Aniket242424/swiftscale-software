import React from 'react';
import { motion } from 'framer-motion';

/**
 * Inline SVG logo — themable, vector-sharp at any size.
 *
 * Color tokens:
 *  - tone="light" → for dark backgrounds (default; used by Navbar/Footer)
 *  - tone="dark"  → for light backgrounds (use on Legal/marketing print pages)
 */
const Logo = ({ className = '', size = 'default', tone = 'light' }) => {
  const dims = {
    small: { mark: 28, text: 'text-base', sub: 'text-[8px]' },
    default: { mark: 36, text: 'text-lg', sub: 'text-[9px]' },
    large: { mark: 52, text: 'text-2xl', sub: 'text-[11px]' }
  };
  const d = dims[size] || dims.default;

  const wordColor = tone === 'dark' ? 'text-navy' : 'text-white';
  const subColor = tone === 'dark' ? 'text-navy/60' : 'text-white/55';

  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Mark */}
      <svg
        width={d.mark}
        height={d.mark}
        viewBox="0 0 64 64"
        fill="none"
        aria-label="SwiftScale mark"
      >
        <defs>
          <linearGradient id="ssMarkGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="ssMarkAccent" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>

        {/* Motion lines (speed) */}
        <g stroke="url(#ssMarkAccent)" strokeLinecap="round" strokeWidth="2.5" opacity="0.7">
          <line x1="4" y1="34" x2="12" y2="34" />
          <line x1="2" y1="40" x2="10" y2="40" />
          <line x1="6" y1="46" x2="14" y2="46" />
        </g>

        {/* Swooping S */}
        <path
          d="M48 14 C 44 9, 36 6, 28 8 C 18 11, 14 18, 18 24 C 22 30, 38 30, 42 36 C 46 42, 42 50, 32 54 C 24 57, 16 56, 12 52"
          stroke="url(#ssMarkGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Highlight */}
        <path
          d="M44 14 C 40 11, 34 10, 28 11"
          stroke="url(#ssMarkAccent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold font-poppins ${wordColor} ${d.text} tracking-tight`}>
          Swift<span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Scale</span>
        </span>
        <span className={`${subColor} ${d.sub} font-semibold tracking-[0.22em] uppercase mt-0.5`}>
          Software LLP
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
