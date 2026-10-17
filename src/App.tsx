import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import FeatureGrid from './components/FeatureGrid';
import FeatureDeepDive from './components/FeatureDeepDive';
import DarkModeShowcase from './components/DarkModeShowcase';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import FinalCtaBanner from './components/FinalCtaBanner';
import Footer from './components/Footer';
import LegalModals, { ModalType } from './components/LegalModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-neutral-200 selection:text-black overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section (Cal AI 2-Column Responsive Layout) */}
        <HeroSection />

        {/* Pain Points Section ("Sound Familiar?") */}
        <PainPointsSection />

        {/* Why Choose Recova? (3-Column Cal AI Grid) */}
        <FeatureGrid />

        {/* Feature Deep Dive (Split Layout with interactive screens) */}
        <FeatureDeepDive />

        {/* Dark Mode Showcase ("DESIGNED FOR NIGHT") */}
        <DarkModeShowcase />

        {/* How It Works (3 Steps) */}
        <HowItWorks />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Banner */}
        <FinalCtaBanner />
      </main>

      {/* Footer */}
      <Footer onOpenModal={(type) => setActiveModal(type)} />

      {/* Legal & Contact Modals */}
      <LegalModals type={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
