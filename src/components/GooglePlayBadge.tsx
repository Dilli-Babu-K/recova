import React from 'react';

interface GooglePlayBadgeProps {
  className?: string;
  size?: 'normal' | 'large' | 'compact';
}

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.Recova.app';

/**
 * Official Google Play "Get it on Google Play" Badge
 * Uses the exact official Google Play store badge asset as provided in user image (images (2).png).
 */
export default function GooglePlayBadge({
  className = '',
  size = 'normal',
}: GooglePlayBadgeProps) {
  const heights = {
    compact: 'h-[38px] sm:h-[40px]',
    normal: 'h-[44px] sm:h-[48px]',
    large: 'h-[50px] sm:h-[56px]',
  }[size];

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={`inline-block transition-transform duration-200 hover:scale-105 active:scale-95 select-none ${className}`}
    >
      <img
        src="/google-play-badge.svg"
        alt="Get it on Google Play"
        className={`${heights} w-auto object-contain drop-shadow-xs`}
        loading="eager"
      />
    </a>
  );
}
