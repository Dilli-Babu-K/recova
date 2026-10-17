import React from 'react';
import { Smartphone, Sun, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Keep Phone Next to You',
      tag: 'Zero Friction',
      desc: 'Place your phone on your nightstand or next to you while you sleep. That\'s it.',
      icon: Smartphone,
      detail: 'Sensors passively measure wakefulness and quiet rest periods through the night without needing any charging cables or wearables.',
    },
    {
      step: '02',
      title: 'Wake Up & Check',
      tag: 'Instant Score',
      desc: 'Open Recova. See your recovery score, how long you slept, and whether your body is ready to train.',
      icon: Sun,
      detail: 'Get a single actionable 0–100% number with clear guidance: high readiness to train or time to recharge.',
    },
    {
      step: '03',
      title: 'Log & Improve',
      tag: 'Smarter Baselines',
      desc: 'Tap how you slept and how hard you trained. Over time, Recova learns your patterns and shows your trends.',
      icon: TrendingUp,
      detail: 'A quick 1-tap check-in feeds into your long-term athletic and recovery trends without any friction.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            Simplicity In 3 Steps
          </span>
          <h2
            style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-[-0.035em]"
          >
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            No devices to strap on, no manuals to read, and nothing to sync.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neutral-300 tracking-tighter">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <div className="inline-block text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-3">
                    {item.tag}
                  </div>

                  <h3
                    style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-400 leading-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
