import React from 'react';
import PhoneMockup from './PhoneMockup';
import { Check, CheckCircle2 } from 'lucide-react';

export default function FeatureDeepDive() {
  const features = [
    {
      title: 'Track your nightly sleep duration',
      desc: 'Keep your phone nearby and wake up to a clear estimate of your sleep time and rest periods.',
    },
    {
      title: 'Log how your sleep felt with one tap',
      desc: 'Quick morning check-in: Good, Okay, or Poor. Simple, intuitive feedback.',
    },
    {
      title: 'Track training intensity (Hard / Moderate / Rest)',
      desc: 'Log workout load in 2 seconds so Recova factors your training effort into your recovery score.',
    },
    {
      title: 'Home screen widget',
      desc: 'Glance at your recovery score and sleep duration without opening the app.',
    },
    {
      title: 'Weekly analytics & recovery trends',
      desc: 'Spot long-term patterns, training load curves, and sleep quality distributions.',
    },
    {
      title: 'Build a daily streak with coaching messages',
      desc: 'Motivational habit tracking that evolves as your consistency grows.',
    },
    {
      title: 'Private & simple tracking',
      desc: 'No mandatory accounts, no annoying ads, and no selling your personal habits.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Adaptive dark-mode phone mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full flex flex-col items-center">
              <PhoneMockup
                initialScreen="home"
                allowSwitching={true}
                size="adaptive"
                showCaption={true}
                showGlassGlow={false}
              />
            </div>
          </div>

          {/* Right Column: Clean Feature Checklist */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold mb-4 border border-neutral-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
              <span>Everything Included For Free</span>
            </div>

            <h2
              style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight"
            >
              Designed around your morning routine.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              No complicated settings or overwhelming graphs. Recova is built to answer one simple question every morning: <span className="font-semibold text-black">"How ready is my body today?"</span>
            </p>

            <div className="mt-8 space-y-3.5">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-4 sm:p-5 flex items-start gap-4 hover:border-neutral-300 transition-colors shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-500 mt-0.5 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>



          </div>

        </div>

      </div>
    </section>
  );
}
