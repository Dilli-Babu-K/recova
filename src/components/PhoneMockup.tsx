import React, { useState } from 'react';
import screenHome from '../assets/images/screen-home-ultra.png';
import screenSleep from '../assets/images/screen-sleep-ultra.png';
import screenStats from '../assets/images/screen-stats-ultra.png';
import { Activity, Moon, BarChart3, CheckCircle2 } from 'lucide-react';

export type ScreenType = 'home' | 'sleep' | 'stats';

interface PhoneMockupProps {
  initialScreen?: ScreenType;
  allowSwitching?: boolean;
  className?: string;
  showGlassGlow?: boolean;
  activeScreenProp?: ScreenType;
  onScreenChange?: (screen: ScreenType) => void;
  size?: 'sm' | 'md' | 'lg' | 'adaptive';
  altText?: string;
  showCaption?: boolean;
}

const screenData: Record<
  ScreenType,
  {
    image: string;
    title: string;
    tabLabel: string;
    badge: string;
    description: string;
    metric: string;
  }
> = {
  home: {
    image: screenHome,
    title: 'Daily Recovery & Readiness',
    tabLabel: 'Recovery',
    badge: 'Score 67 • Adapting to Training',
    description: 'Daily recovery score, 9h sleep duration indicator, streak tracking, and personalized habit suggestions.',
    metric: '67 RECOVERY',
  },
  sleep: {
    image: screenSleep,
    title: 'Sleep Tracking & Protocols',
    tabLabel: 'Sleep',
    badge: '7h 11m Restorative Duration',
    description: 'Automatic sleep detection, athletic target benchmark, and actionable pre-bed cooling protocol.',
    metric: '7h 11m REST',
  },
  stats: {
    image: screenStats,
    title: 'Weekly Statistics & Load Curve',
    tabLabel: 'Statistics',
    badge: '7-Day History & Load Response',
    description: 'Weekly recovery consistency bars alongside load versus recovery response curves.',
    metric: '100% READY PEAK',
  },
};

/**
 * Professional Apple-Style Titanium Phone Mockup
 * Renders high-resolution 2X screenshots (1440x3104) inside a precision bezel.
 * Fully responsive across mobile, tablet, and desktop without clipping.
 */
export default function PhoneMockup({
  initialScreen = 'home',
  allowSwitching = false,
  className = '',
  showGlassGlow = false,
  activeScreenProp,
  onScreenChange,
  size = 'adaptive',
  altText,
  showCaption = false,
}: PhoneMockupProps) {
  const [internalScreen, setInternalScreen] = useState<ScreenType>(initialScreen);
  const activeScreen = activeScreenProp !== undefined ? activeScreenProp : internalScreen;

  const handleScreenSwitch = (screen: ScreenType) => {
    if (onScreenChange) {
      onScreenChange(screen);
    } else {
      setInternalScreen(screen);
    }
  };

  // Dimensional sizes matching 720 : 1555 (1 : 2.16) aspect ratio
  // Carefully tuned to prevent horizontal overflow on smaller screens
  const sizeClasses = {
    sm: 'w-[145px] xs:w-[165px] sm:w-[185px]',
    md: 'w-[180px] xs:w-[210px] sm:w-[240px]',
    lg: 'w-[220px] sm:w-[260px] md:w-[300px]',
    adaptive: 'w-[140px] xs:w-[165px] sm:w-[210px] md:w-[250px] lg:w-[280px] xl:w-[305px]',
  }[size];

  const current = screenData[activeScreen];

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Switcher Tabs when allowSwitching is enabled */}
      {allowSwitching && (
        <div className="mb-4 inline-flex items-center gap-1 p-1 rounded-full bg-neutral-900 border border-neutral-800 shadow-md">
          <button
            type="button"
            onClick={() => handleScreenSwitch('home')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeScreen === 'home'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Recovery</span>
          </button>

          <button
            type="button"
            onClick={() => handleScreenSwitch('sleep')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeScreen === 'sleep'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Sleep</span>
          </button>

          <button
            type="button"
            onClick={() => handleScreenSwitch('stats')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeScreen === 'stats'
                ? 'bg-white text-black shadow-xs'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Stats</span>
          </button>
        </div>
      )}

      {/* Titanium Hardware Device Container */}
      <div className={`relative ${sizeClasses} shrink-0 max-w-full`}>
        {/* Subtle monochrome ambient shadow (no green gradients) */}
        {showGlassGlow && (
          <div className="absolute -inset-4 bg-black/5 rounded-full blur-xl -z-10 pointer-events-none" />
        )}

        {/* Hardware Volume Buttons (Left) */}
        <div className="absolute -left-[3px] top-[18%] w-[2.5px] h-[7%] bg-[#2B2F3A] rounded-l-xs z-10 border-l border-y border-white/10" />
        <div className="absolute -left-[3px] top-[26%] w-[2.5px] h-[7%] bg-[#2B2F3A] rounded-l-xs z-10 border-l border-y border-white/10" />
        {/* Hardware Power Button (Right) */}
        <div className="absolute -right-[3px] top-[22%] w-[2.5px] h-[9%] bg-[#2B2F3A] rounded-r-xs z-10 border-r border-y border-white/10" />

        {/* Outer Titanium Chassis */}
        <div className="relative w-full aspect-[720/1555] rounded-[28px] xs:rounded-[32px] sm:rounded-[38px] md:rounded-[44px] bg-[#0A0C10] p-[2.5px] sm:p-[3.5px] border-[2px] sm:border-[2.5px] border-[#2E3340] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35),0_8px_20px_-6px_rgba(0,0,0,0.15)] ring-1 ring-white/10 overflow-hidden flex flex-col justify-between">
          
          {/* Subtle Front Camera Punch Hole */}
          <div className="absolute top-1.5 sm:top-2.5 left-1/2 -translate-x-1/2 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-black z-40 border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#181D28]" />
          </div>

          {/* Clean Glass Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.04] pointer-events-none z-30 rounded-[26px] xs:rounded-[30px] sm:rounded-[36px] md:rounded-[40px]" />

          {/* Inner OLED Display Container */}
          <div className="relative w-full h-full bg-[#000000] rounded-[26px] xs:rounded-[30px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden">
            <img
              src={current.image}
              alt={altText || `Recova - ${current.title}`}
              className="w-full h-full object-cover object-top block select-none pointer-events-none"
              style={{
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
              }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Optional Caption Description */}
      {showCaption && (
        <div className="mt-3 text-center max-w-[280px]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-[11px] font-semibold border border-neutral-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
            {current.badge}
          </div>
          <p className="mt-1.5 text-xs text-neutral-500 font-normal leading-relaxed">
            {current.description}
          </p>
        </div>
      )}
    </div>
  );
}
