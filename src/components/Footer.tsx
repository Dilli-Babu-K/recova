import React from 'react';
import RecovaLogo from './RecovaLogo';

interface FooterProps {
  onOpenModal?: (type: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps = {}) {
  return (
    <footer className="py-14 bg-[#FBFBFB] border-t border-[#EAEAEA] text-neutral-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo with official meditation icon */}
          <div className="flex items-center gap-3">
            <RecovaLogo size="sm" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-neutral-600">
            <a
              href="https://recova-privacypolicy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href="https://termsandcondition-azure.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href="mailto:recova.app0@gmail.com"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-400 text-center md:text-right">
            © 2026 Recova. All rights reserved.
          </div>
        </div>

        {/* Small attribution text */}
        <div className="mt-8 pt-6 border-t border-neutral-200/50 text-center text-xs text-neutral-500">
          Recova: Recovery &amp; Sleep is developed by <span className="font-semibold text-neutral-800">Dilli Babu K.</span> Live on Google Play Store for Android.
        </div>

      </div>
    </footer>
  );
}
