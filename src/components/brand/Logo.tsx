import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = false,
}) => {
  const isLight = variant === 'light';
  const brandColor = '#7651C8';
  const accentColor = '#BDA8F0';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        {/* Dual-Agent loop icon symbol */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform hover:scale-105 duration-300"
        >
          {/* Outer agent orbit */}
          <circle
            cx="16"
            cy="20"
            r="12"
            stroke={brandColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-90"
          />
          {/* Inner agent orbit */}
          <circle
            cx="24"
            cy="20"
            r="12"
            stroke={accentColor}
            strokeWidth="3.5"
            strokeDasharray="18 10"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3.5" fill={brandColor} />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center tracking-tight">
          <span
            className={`font-extrabold ${textSizes[size]} ${
              isLight ? 'text-white' : 'text-[#0B1926]'
            }`}
          >
            Hire
          </span>
          <span
            className={`font-black ${textSizes[size]}`}
            style={{ color: brandColor }}
          >
            Loop
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-semibold tracking-widest ${
              isLight ? 'text-gray-300' : 'text-[#777184]'
            }`}
          >
            Smarter Interviews • Better Hiring Decisions
          </span>
        )}
      </div>
    </div>
  );
};
