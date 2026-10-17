import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: 'Is Recova actually free?',
      answer:
        "Yes — completely. Every feature is free. No subscriptions, no premium tier, no trials. We don't charge anything.",
    },
    {
      question: 'How does it track sleep without a watch?',
      answer:
        "Your phone has built-in motion sensors. Recova uses those to passively detect when you're asleep and when you're awake — all running quietly in the background.",
    },
    {
      question: 'Will it drain my battery?',
      answer:
        'No. The sleep tracking runs in an ultra-efficient background mode engineered to preserve your battery throughout the night.',
    },
    {
      question: 'Is my data private?',
      answer:
        'Yes. Recova is built for personal tracking with no mandatory accounts, no ads, and no selling of your metrics to data brokers.',
    },
    {
      question: 'Is it on iPhone?',
      answer: 'Not yet. Recova is Android-only for now.',
    },
    {
      question: 'How is the recovery score calculated?',
      answer:
        'It uses sports-science principles to compare your recent training load and sleep patterns against your long-term baseline. The more consistently you log, the smarter it gets.',
    },
    {
      question: 'Do I need to press a button before bed?',
      answer: 'No. Just keep your phone on your nightstand or beside you. Recova handles everything automatically.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBFBFB] border-t border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-wider text-neutral-400 uppercase">
            Got Questions?
          </span>
          <h2
            style={{ fontFamily: "'Google Sans Flex', -apple-system, BlinkMacSystemFont, sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal">
            Everything you need to know about Recova and how it measures recovery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="cal-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-neutral-900 text-white' : 'text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed border-t border-neutral-100/80"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
