import React from 'react';
import recovaLogoImg from '../assets/images/regenerated_image_1792152806821.png';

interface RecovaLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

/**
 * Official Recova App Logo:
 * Uses the regenerated logo asset provided by the user (src/assets/images/regenerated_image_1792152806821.png).
 */
export default function RecovaLogo({
  className = '',
  iconOnly = false,
  size = 'md',
  theme = 'light',
}: RecovaLogoProps) {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }[size];

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official App Logo image */}
      <img
        src={recovaLogoImg}
        alt="Recova Logo"
        className={`${iconDimensions} rounded-xl shadow-xs shrink-0 object-contain border border-neutral-200/80 bg-white p-0.5`}
      />

      {!iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <span
            className={`${textSizes} font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Recova
          </span>
          <span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase mt-0.5">
            Recovery & Sleep
          </span>
        </div>
      )}
    </div>
  );
}
