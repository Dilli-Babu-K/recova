import React from 'react';
import { Moon, Activity, ShieldCheck } from 'lucide-react';

export default function FeatureGrid() {
  const cards = [
    {
      icon: Moon,
      title: 'Automatic Sleep Tracking',
      tag: 'Passive & Effortless',
      description:
        'Just place your phone on your nightstand or next to you while you sleep. Recova figures out when you fell asleep and when you woke up — automatically.',
      details: 'No buttons to press before falling asleep. No remembering to start a timer.',
    },
    {
      icon: Activity,
      title: 'Daily Recovery Score',
      tag: '0–100% Readiness',
      description:
        "Wake up to a simple 0–100% score. Understand when your body is primed to train hard and when it needs restorative recovery.",
      details: 'Clear actionable guidance so you know when to push and when to protect your body.',
    },
    {
      icon: ShieldCheck,
      title: 'Completely Free',
      tag: 'Zero Catch',
      description:
        'No subscription. No premium tier. No 7-day trial trap. Every single feature is free, right now, forever.',
      details: 'Full access to all analytics, trends, suggestions, and widgets from day one.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            Built For Real Life
          </span>
          <h2
            style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-[-0.035em]"
          >
            Why choose Recova?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Everything essential for tracking your physical recovery. Zero fluff, zero complexity.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-neutral-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <p className="text-neutral-600 text-base leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 text-xs font-medium text-neutral-500">
                  {card.details}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
