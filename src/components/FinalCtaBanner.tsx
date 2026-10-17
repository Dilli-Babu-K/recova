import React from 'react';
import GooglePlayBadge from './GooglePlayBadge';
import { CheckCircle2, Check } from 'lucide-react';

export default function FinalCtaBanner() {
  return (
    <section className="py-24 sm:py-32 bg-[#000000] text-white relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 mb-8 shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
          <span>No subscription · No smart hardware · 100% Free</span>
        </div>

        {/* Headline */}
        <h2
          style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto"
        >
          Your recovery. Your data. Your phone. That's it.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-neutral-400 font-normal max-w-xl mx-auto">
          Download Recova for free on Google Play. Start tomorrow morning with a clear picture of how ready your body really is.
        </p>

        {/* Large Google Play Badge */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <GooglePlayBadge size="large" className="shadow-2xl hover:border-neutral-700" />
        </div>

        {/* Feature bullets below CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            <span>Automatic sleep sensing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            <span>Daily 0-100% recovery score</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-white" />
            <span>Android only · Works right away</span>
          </div>
        </div>

      </div>
    </section>
  );
}
