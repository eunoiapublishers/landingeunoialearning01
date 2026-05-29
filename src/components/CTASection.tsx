import React, { useState } from "react";
import { CreditCard, Heart, Printer, Sparkles, Star, ShieldCheck, CheckCircle } from "lucide-react";

export default function CTASection() {
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFakePurchase = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      window.open("https://www.teacherspayteachers.com/store/eunoia-learning", "_blank");
    }, 800);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/70 relative" id="purchase">
      {/* Decorative calm blobs */}
      <div className="absolute top-1/3 left-1/12 w-60 h-60 bg-emerald-100/30 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-10 right-1/10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Core checkout box card */}
        <div className="bg-white border-3 border-orange-200 p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Top subtle ribbon */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300 via-amber-300 to-teal-400" />
          
          {/* Header content */}
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 rounded-full text-[10px] font-bold text-amber-900 border border-amber-200 uppercase tracking-widest font-sans">
              ★ Limited-Time Offer ★
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 leading-tight max-w-xl mx-auto">
              Help Children Build Confidence Through Gentle Emotional Learning
            </h2>
            <p className="font-sans text-slate-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Equip your classroom calm corner or home routine with premium, structured social stories and visual coping tools built with emotional care and neurodivergent-friendly pacing.
            </p>
          </div>

          {/* Pricing tier layout */}
          <div className="p-6 bg-amber-50/45 rounded-3xl border border-orange-100/60 max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider font-sans block">
                Total Printable Bundle
              </span>
              <p className="font-display text-sm font-extrabold text-slate-800 line-through leading-none opacity-60">
                Was $12.00
              </p>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-black text-slate-950">$5.99</span>
                <span className="text-xs font-bold text-slate-500">one-time payment</span>
              </div>
            </div>

            <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-orange-200/50 pt-3 sm:pt-0 sm:pl-4">
              <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-wider block font-sans">
                What you receive:
              </span>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-sans">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>30+ high-res pages</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-sans">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Interactive checklists</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 font-sans">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Lifetime fresh reprints</span>
                </div>
              </div>
            </div>
          </div>

          {/* Massive Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <button
              onClick={handleFakePurchase}
              disabled={isCheckingOut}
              className="group flex-1 py-4.5 px-6 bg-gradient-to-r from-teal-600 hover:from-teal-500 to-emerald-600 hover:to-emerald-500 text-white font-display text-base font-extrabold rounded-2xl shadow-xl shadow-emerald-600/20 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2"
              id="final-cta-purchase-btn"
            >
              {isCheckingOut ? (
                <>
                  <div className="w-5.5 h-5.5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Loading Secure Checkout...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5 text-white/90 group-hover:scale-105 transition-transform" />
                  <span>Get Gentle Toolkit Now ($5.99)</span>
                </>
              )}
            </button>
            
            <button
              onClick={() => scrollToSection("lead-magnet")}
              className="flex-1 py-4.5 px-6 bg-slate-50 hover:bg-slate-100 text-slate-700 font-sans text-xs font-bold rounded-2xl border border-slate-200 cursor-pointer active:scale-98 transition-all flex items-center justify-center"
              id="final-cta-free-btn"
            >
              <span>Download Free Starter Pack</span>
            </button>
          </div>

          {/* Core Trust checklist labels */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold font-sans">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30-Day Happiness Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold font-sans">
              <Printer className="w-4 h-4 text-orange-600" />
              <span>Ready-to-Print layouts (A4 & US Letter)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
