import React, { useState } from "react";
import { Check, Sparkles, Download, Heart, Users, ShieldCheck, Printer } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-amber-50/50 to-white pt-10 pb-16 md:py-24" id="hero">
      {/* Decorative calm background elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-emerald-100/35 rounded-full blur-3xl -z-10 animate-pulse duration-[6s]" />
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-[8s]" />
      <div className="absolute -bottom-10 left-1/3 w-60 h-60 bg-teal-100/30 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            
            {/* Value Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-s from-emerald-100 to-amber-100 text-teal-900 px-4 py-2 rounded-2xl border border-emerald-200/50 shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin duration-[4s]" />
              <span className="font-sans text-xs md:text-sm font-bold tracking-tight">
                Instantly Downloadable • Easy PDF Print Layout
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
              Printable{" "}
              <span className="text-teal-700 bg-gradient-to-r from-teal-700 via-emerald-800 to-teal-850 bg-clip-text">
                Social Stories
              </span>{" "}
              and SEL Tools Designed for Gentle Learning
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              A calm, supportive printable resource that helps children understand mistakes, manage big feelings, and practice daily emotional confidence. Highly visual, non-judgmental, and simple to use today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <button
                onClick={() => scrollToSection("purchase")}
                className="group flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-teal-600 hover:from-teal-500 to-emerald-600 hover:to-emerald-500 text-white font-display text-base font-bold rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-98 transition-all cursor-pointer"
                id="hero-cta-main"
              >
                <span>Get the Resource Pack</span>
                <Heart className="w-5 h-5 group-hover:scale-110 group-hover:fill-white/10 transition-transform text-white/90" />
              </button>
              <button
                onClick={() => scrollToSection("lead-magnet")}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-white hover:bg-orange-50/50 text-emerald-800 font-sans text-sm font-bold rounded-2xl border-2 border-emerald-200 shadow-sm active:scale-98 transition-all cursor-pointer"
                id="hero-cta-free"
              >
                <Download className="w-4 h-4" />
                <span>Get Free Calm Toolkit</span>
              </button>
            </div>

            {/* Trust and Feature Points */}
            <div className="border-t border-orange-100/80 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-100">
                    <Users className="w-4 h-4 text-teal-700" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-tight leading-snug">
                    Created for Educators & Caregivers
                  </span>
                </div>
                
                <div className="flex items-center gap-2 w-full">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100">
                    <Printer className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-tight leading-snug">
                    Ready-to-Print HQ PDFs
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-tight leading-snug">
                    Neurodivergent-Friendly Layouts
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 tracking-tight leading-snug">
                    Perfect for Home or Calm Corners
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Image Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-xl bg-gradient-to-tr from-amber-100/40 to-teal-100/20 p-4 rounded-[2.5rem] border-2 border-orange-100/60 shadow-inner">
              
              {/* Main Rounded Mockup Picture / Hybrid CSS Cover Fallback */}
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl transition-transform hover:scale-[1.01] duration-500 bg-white">
                
                {!imageError ? (
                  <img
                    src="/src/assets/images/jim_cover_1780027497032.png"
                    alt="Jim Learns and Grows Social Story Ebook Cover"
                    className="w-full h-auto object-cover object-center aspect-[4/5]"
                    id="hero-mockup-image"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // HIGH FIDELITY SPIRAL BOOK COVER RENDERER
                  <div className="w-full aspect-[4/5] bg-[#FAF8F5] relative p-6 flex flex-col justify-between border-l-[18px] border-slate-800/90 select-none overflow-hidden">
                    {/* Spiral rings effect on the left margin */}
                    <div className="absolute left-0 top-0 bottom-0 w-[18px] flex flex-col justify-around py-4 z-40 bg-gradient-to-r from-neutral-800 to-zinc-950">
                      {Array.from({ length: 18 }).map((_, r) => (
                        <div key={r} className="w-6 h-1.5 bg-gradient-to-t from-gray-400 to-gray-200 rounded-full -ml-3 border border-slate-700 shadow-sm" />
                      ))}
                    </div>
                    
                    {/* Background floating decor stars and hearts */}
                    <div className="absolute top-12 left-10 text-emerald-400 font-sans text-xl opacity-60">★</div>
                    <div className="absolute top-48 right-12 text-teal-400 font-sans text-xs opacity-60">★</div>
                    <div className="absolute top-10 right-16 text-rose-300 font-sans text-lg opacity-70">♥</div>

                    {/* Badge top */}
                    <div className="self-center">
                      <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-sans text-[11px] font-bold tracking-wider rounded-full uppercase border border-emerald-500">
                        A Social Story
                      </span>
                    </div>

                    {/* Book title and summary */}
                    <div className="text-center space-y-2 mt-4">
                      <h2 className="font-display text-4xl font-extrabold text-[#112d45] tracking-tight leading-none">
                        Jim Learns
                      </h2>
                      <h2 className="font-display text-4xl font-extrabold text-[#528d4d] tracking-tight leading-none">
                        and Grows
                      </h2>
                      <div className="w-14 h-0.5 bg-teal-500 mx-auto my-3 rounded-full opacity-60" />
                      <p className="font-sans text-[11px] font-bold text-slate-500 leading-tight max-w-xs mx-auto">
                        A story about mistakes, staying calm, and asking for help.
                      </p>
                    </div>

                    {/* Cute Illustration of Jim writing */}
                    <div className="flex-1 flex items-center justify-center my-4 relative">
                      <div className="w-32 h-32 bg-sky-50 rounded-full border border-sky-100 flex items-center justify-center relative shadow-inner">
                        <span className="text-6xl animate-pulse duration-[3s]">👦</span>
                        {/* Little pencil floating */}
                        <div className="absolute -right-2 top-8 text-2xl transform rotate-12 bg-white p-1 rounded-lg shadow-sm border border-slate-100">
                          ✏️
                        </div>
                      </div>
                    </div>

                    {/* Inside box tagline */}
                    <div className="bg-sky-50/70 py-3.5 px-4 rounded-2xl border border-sky-100 text-center space-y-1">
                      <p className="font-sans text-[11px] font-extrabold text-teal-950 flex items-center justify-center gap-1">
                        <span className="text-teal-600 text-xs">♥</span> It's okay to be a learner.
                      </p>
                      <p className="font-sans text-[9px] font-bold text-slate-500 leading-none">
                        I can stay calm and keep trying!
                      </p>
                    </div>

                  </div>
                )}
                
                {/* Visual Label overlay */}
                <div className="absolute right-4 bottom-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-bold text-amber-100 flex items-center gap-1.5 shadow-md z-45">
                  <Printer className="w-3 h-3 text-emerald-400" />
                  Printable & Interactive Previews Below
                </div>
              </div>

              {/* Floating Element 1 - Strategy Pill */}
              <div className="absolute -top-3 -right-3 md:-right-6 bg-white hover:bg-orange-50 border-2 border-orange-100 p-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl hover:-translate-y-0.5 transition-all text-left">
                <div className="w-7.5 h-7.5 rounded-lg bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm font-display">
                  1
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-slate-800 leading-tight">Take a Breath</div>
                  <div className="text-[9px] font-sans font-medium text-slate-500 leading-none">Coping Support</div>
                </div>
              </div>

              {/* Floating Element 2 - Feelings Badge */}
              <div className="absolute -bottom-4 -left-3 bg-white border-2 border-teal-100 px-3 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all">
                <div className="w-5 h-5 bg-gradient-to-tr from-orange-300 to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">😊</span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-extrabold text-slate-800 leading-none">Self-Regulation</p>
                  <p className="text-[8px] font-bold text-emerald-700 leading-none mt-0.5">Highly Effective</p>
                </div>
              </div>

              {/* Floating Element 3 - Free Download tag */}
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-gradient-to-br from-amber-400 to-orange-500 text-white font-display text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-amber-300 transform -rotate-12 hidden sm:block">
                ★ Best Seller on TPT
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
