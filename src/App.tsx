import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemConnection from "./components/ProblemConnection";
import ProductShowcase from "./components/ProductShowcase";
import HowItHelps from "./components/HowItHelps";
import InteractiveCustomizer from "./components/InteractiveCustomizer";
import LeadMagnet from "./components/LeadMagnet";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900 scroll-smooth flex flex-col antialiased">
      {/* Top Banner Message */}
      <a 
        href="https://www.teacherspayteachers.com/store/eunoia-learning" 
        target="_blank" 
        rel="noopener noreferrer"
        className="py-2.5 px-4 bg-teal-600 hover:bg-teal-500 text-white font-sans text-[11px] sm:text-xs font-bold text-center tracking-wide leading-none select-none border-b border-teal-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <span>🌟 SPECIAL OFFER: Grab our full 30-Page Social Story Pack today for just $5.99 (Save 50% Off Regular Price).</span>
        <span className="underline font-black">Shop on TPT →</span>
      </a>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Core View Area */}
      <main className="flex-1">
        {/* SECTION 1 - HERO */}
        <Hero />

        {/* SECTION 2 - PROBLEM & EMOTIONAL CONNECTION */}
        <ProblemConnection />

        {/* SECTION 3 - PRODUCT SHOWCASE & DIGITAL INTERACTIVE PREVIEWS */}
        <ProductShowcase />

        {/* SECTION 4 - TRANSLATE FEATURES INTO REAL OUTCOMES */}
        <HowItHelps />

        {/* WORKSHOP - INTERACTIVE CALM DOWN DESIGN TOOL */}
        <InteractiveCustomizer />

        {/* SECTION 5 - PRE-COMMITTED LEAD MAGNET SYSTEM & FREE KIT DOWNLOADS */}
        <LeadMagnet />

        {/* SECTION 6 - TRUST & SOCIAL PROOF CARDS */}
        <SocialProof />

        {/* SECTION 8 - ASTUTE ACCORDION FAQS */}
        <FAQ />

        {/* SECTION 9 - FINAL CALM CONVERSION CHECKOUT CTA */}
        <CTASection />
      </main>

      {/* FOOTER & SEARCH RELEVANCY */}
      <Footer />
    </div>
  );
}
