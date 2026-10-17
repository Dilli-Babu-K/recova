import React from 'react';
import { Quote, Star } from 'lucide-react';
import avatarJijin from '../assets/images/avatars/avatar-jijin.png';
import avatarBen from '../assets/images/avatars/avatar-ben.png';

export default function PainPointsSection() {
  const painPoints = [
    {
      quote: "Spent $300 on an Oura Ring, then found out I still have to pay $6 a month just to see my own sleep data. Never again.",
      category: "Paywall Fatigue",
    },
    {
      quote: "I wore my Apple Watch to bed for months trying to get recovery scores. The charging was a nightmare — it was always dead by 3pm the next day.",
      category: "Dead Battery Blues",
    },
    {
      quote: "Cancelled my Whoop after the first year. $360 for data I could've gotten for free? Come on.",
      category: "$360/Year Drain",
    },
    {
      quote: "Every sleep app I download hits me with a paywall after 3 days. I just want to know how long I slept. Why is that a premium feature?",
      category: "Trial Traps",
    },
    {
      quote: "My watch irritated my wrist so badly I got a rash. I stopped wearing it to bed and lost all my sleep data overnight.",
      category: "Skin Discomfort",
    },
  ];

  const userReviews = [
    {
      quote: "I always felt uncomfortable wearing my watch to bed to track sleep, but having my phone automatically detect my sleep and give me my morning recovery score without wearing anything is a game changer.",
      author: "Jijin Dhas",
      avatar: avatarJijin,
      rating: 5,
    },
    {
      quote: "The app feels very polished and modern. I like the concept of perceived recovery and readiness instead of relying only on wearables. Great UI and smooth experience overall.",
      author: "Ben",
      avatar: avatarBen,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
            The Problem With Wearables
          </span>
          <h2
            style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight"
          >
            Sound Familiar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Why tracking your health became an expensive, uncomfortable chore.
          </p>
        </div>

        {/* 5 Large Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-neutral-200/80 p-7 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors ${
                index === 3 ? 'md:col-span-1 lg:col-span-1' : ''
              } ${index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-base sm:text-lg font-medium text-neutral-800 leading-snug">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span className="text-xs font-medium text-neutral-500">Common frustration with wearables &amp; paywalls</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recova Philosophy (Sleek Apple dark card — no headline) */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-[#000000] text-white p-8 sm:p-12 text-center shadow-xl border border-neutral-800">
          <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed tracking-tight">
            "We built Recova because tracking your sleep and recovery shouldn't cost you $360 a year — or require hardware strapped to your body. It's 100% free. No wearable. No catch."
          </p>
        </div>

        {/* Real User Reviews */}
        <div id="testimonials" className="mt-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Real User Reviews
            </span>
            <h3
              style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
              className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight"
            >
              Loved by Everyday Athletes
            </h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 font-normal">
              Verified feedback from sleepers and athletes who switched to Recova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {userReviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:border-neutral-300 transition-colors"
              >
                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg font-medium text-neutral-800 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center gap-3.5">
                  {/* Avatar: High-res & perfectly framed */}
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover shrink-0 border border-neutral-200/80 shadow-xs"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-base font-bold text-neutral-900 leading-tight">
                      {item.author}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium mt-1 leading-none">
                      Recova User
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
