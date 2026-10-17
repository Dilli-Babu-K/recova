import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GooglePlayBadge from './GooglePlayBadge';
import RecovaLogo from './RecovaLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBFB]/90 backdrop-blur-md border-b border-neutral-200/70 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with official meditation icon */}
          <a href="#" className="flex items-center group" aria-label="Recova Home">
            <RecovaLogo size="md" />
          </a>

          {/* Desktop Navigation Links (Cal AI style center navigation) */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-semibold text-neutral-600 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Official Google Play Badge */}
          <div className="hidden sm:flex items-center">
            <GooglePlayBadge size="compact" />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <GooglePlayBadge size="compact" className="scale-90" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-black focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-neutral-200/60 bg-[#FBFBFB] rounded-2xl p-4 shadow-lg space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-neutral-800 hover:text-black py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <GooglePlayBadge size="normal" className="w-full justify-center" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
