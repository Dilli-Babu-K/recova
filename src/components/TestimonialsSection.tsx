import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'I always forgot to wear my watch to bed. Having my phone automatically detect my sleep and give me my morning recovery score without wearing anything is a game changer.',
      author: 'Jijin Dhas',
    },
    {
      quote:
        'Cleanest sleep tracker I\'ve used. No ads, no wearable needed, and completely free.',
      author: 'Ben',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FBFBFB] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-wider text-neutral-400 uppercase">
            User Feedback
          </span>
          <h2
            style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight"
          >
            Loved By Sleepers & Athletes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Real feedback from people who switched from bulky wearables to Recova.
          </p>
        </div>

        {/* 2 Big Testimonial Cards (Cal AI Style, large quotes, no photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="cal-card cal-card-hover p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-400 mb-6">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                <p className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold text-[#111111]">
                    {item.author}
                  </span>
                </div>
                <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Android User
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
