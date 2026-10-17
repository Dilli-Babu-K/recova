import React from 'react';
import PhoneMockup from './PhoneMockup';
import { Eye, Moon, Zap, Activity } from 'lucide-react';

export default function DarkModeShowcase() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            
            <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
              DESIGNED FOR NIGHT
            </div>

            <h2
              style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-[-0.035em] leading-[1.12]"
            >
              Engineered for the Night.
              <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-800">
                True OLED dark mode, always on.
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
              Check your recovery at 6 AM without blinding yourself. Every screen, chart, and metric is built with deep true blacks for high contrast and zero morning glare.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs hover:border-neutral-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900">Zero Morning Glare</h4>
                <p className="text-sm text-neutral-500 mt-1 font-normal">
                  Soft contrast curves and deep blacks mean you can safely check your score right as your alarm goes off.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs hover:border-neutral-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-3">
                  <Moon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900">Bedtime Friendly</h4>
                <p className="text-sm text-neutral-500 mt-1 font-normal">
                  No blaring white light resets your melatonin cycle if you wake up thirsty in the middle of the night.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs hover:border-neutral-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900">OLED Battery Efficiency</h4>
                <p className="text-sm text-neutral-500 mt-1 font-normal">
                  True black pixels shut off completely on OLED displays, conserving maximum battery life while sleeping.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs hover:border-neutral-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900">High Contrast Signals</h4>
                <p className="text-sm text-neutral-500 mt-1 font-normal">
                  Crisp, high-contrast rings and charts ensure readiness and training load are understood at a single glance.
                </p>
              </div>
            </div>

          </div>

          {/* Right Floating Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            <div className="relative w-full flex flex-col items-center">
              <PhoneMockup
                initialScreen="stats"
                allowSwitching={true}
                size="adaptive"
                showGlassGlow={false}
                showCaption={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
