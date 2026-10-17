import React from 'react';
import GooglePlayBadge from './GooglePlayBadge';
import PhoneMockup from './PhoneMockup';
import { CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-20 bg-[#FFFFFF] border-b border-[#F0F0F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Bold Headline */}
            <h1
              style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-extrabold text-[#111111] tracking-[-0.035em] leading-[1.1]"
            >
              Meet Recova
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-[44px] font-extrabold text-neutral-800 leading-[1.12]">
                Track your sleep & recovery without paying anything.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl">
              Recova automatically tracks your sleep duration, notices when you were restless, and gives you a daily recovery score — all from having your phone next to you. No smartwatch needed. No subscription. Completely free.
            </p>

            {/* Official Google Play Store Badge */}
            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <GooglePlayBadge size="large" />
            </div>

            {/* Clean benefits row */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-neutral-700">
              <div className="flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>No Wearables Needed</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>100% Free to Use</span>
              </div>
            </div>

          </div>

          {/* Right Column: Adaptable Dual-Phone Showcase */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center pt-6 lg:pt-0">
            
            {/* Centered Pair Container with responsive scaling */}
            <div className="relative w-full max-w-full flex items-center justify-center overflow-visible py-2">
              
              {/* Phone 1: Sleep Duration (Subtle tilt left, resting slightly back) */}
              <div
                className="relative z-10 flex flex-col items-center transition-all duration-300 ease-out hover:z-30 hover:scale-[1.03] hover:rotate-0 group cursor-pointer"
                style={{
                  transform: 'rotate(-4deg) translateY(8px)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Clean monochrome top badge */}
                <div className="mb-2 px-2.5 py-0.5 rounded-full bg-neutral-900 text-neutral-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-neutral-800 shadow-xs">
                  Sleep Duration
                </div>

                <div className="relative max-w-full">
                  <PhoneMockup
                    initialScreen="sleep"
                    size="adaptive"
                    showGlassGlow={false}
                  />
                </div>
              </div>

              {/* Phone 2: Daily Recovery Score (Subtle tilt right, overlapping cleanly) */}
              <div
                className="relative z-20 -ml-8 sm:-ml-12 md:-ml-14 lg:-ml-16 flex flex-col items-center transition-all duration-300 ease-out hover:z-30 hover:scale-[1.03] hover:rotate-0 group cursor-pointer"
                style={{
                  transform: 'rotate(3deg) translateY(-8px)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Clean monochrome top badge */}
                <div className="mb-2 px-2.5 py-0.5 rounded-full bg-neutral-900 text-neutral-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-neutral-800 shadow-xs">
                  Daily Recovery
                </div>

                <div className="relative max-w-full">
                  <PhoneMockup
                    initialScreen="home"
                    size="adaptive"
                    showGlassGlow={false}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
