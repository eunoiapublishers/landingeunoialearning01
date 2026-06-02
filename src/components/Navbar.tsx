import React from "react";
import { Smile, Heart, Download, Mail } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-45 bg-amber-50/90 backdrop-blur-md border-b-2 border-orange-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo Brand */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="flex items-center gap-3.5 cursor-pointer group"
          id="nav-logo"
        >
          {/* Custom SVG logo based exactly on Eunoia Learning brand assets */}
          <svg viewBox="0 0 100 100" className="w-11 h-11 shrink-0 select-none group-hover:scale-105 transition-transform duration-300">
            {/* Sun rays above */}
            <path d="M 50 15 L 50 10" stroke="#ebd2c0" strokeWidth="3" strokeLinecap="round" className="opacity-80" />
            <path d="M 38 18 L 34 14" stroke="#e8cb90" strokeWidth="3" strokeLinecap="round" />
            <path d="M 62 18 L 66 14" stroke="#ebd2c0" strokeWidth="3" strokeLinecap="round" />
            
            {/* Left cloud lobe (Teal-green/Sage) */}
            <path d="M 46 45 C 30 45, 27 30, 42 26 C 42 21, 50 18, 55 25" fill="#8ea89b" />
            {/* Right cloud lobe (Soft peach/pink) */}
            <path d="M 54 25 C 58 18, 72 20, 72 32 C 81 33, 80 45, 64 45" fill="#e4beb5" />
            {/* Yellow-amber accent center lobe */}
            <path d="M 44 33 C 48 24, 62 24, 65 33 Z" fill="#e8cb90" />
            
            {/* Central white heart */}
            <path d="M 50 37 C 50 37, 46 33, 42 37 C 39 40, 50 48, 50 48 C 50 48, 61 40, 58 37 C 55 33, 50 37, 50 37" fill="#ffffff" />
            
            {/* Sleeping child's face sketch */}
            <path d="M 38 46 C 36 50, 34 52, 37 55 C 39 57, 42 57, 44 56 C 45 59, 48 61, 52 61 C 58 61, 61 55, 61 48" fill="none" stroke="#2a4e45" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sleeping eye */}
            <path d="M 52 49 C 54 52, 58 52, 60 49" fill="none" stroke="#2a4e45" strokeWidth="1.8" strokeLinecap="round" />
            {/* Sleeping happy mouth */}
            <path d="M 50 56 C 52 58, 55 58, 57 56" fill="none" stroke="#2a4e45" strokeWidth="1.8" strokeLinecap="round" />
            
            {/* Cute rosy cheeks dots */}
            <circle cx="42" cy="51" r="1.5" fill="#2a4e45" opacity="0.4" />
            <circle cx="44.5" cy="53" r="1.5" fill="#2a4e45" opacity="0.4" />
          </svg>
          <div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 bg-clip-text text-transparent block tracking-tight leading-none">
              Eunoia
            </span>
            <span className="text-[10px] font-bold text-teal-700/80 tracking-widest uppercase font-sans mt-0.5 block">
              LEARNING
            </span>
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-teal-800">
          <button 
            onClick={() => scrollToSection("problem")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-emerald-50/50"
            id="nav-btn-problem"
          >
            How It Feels
          </button>
          <button 
            onClick={() => scrollToSection("products")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-emerald-50/50"
            id="nav-btn-products"
          >
            What's Included
          </button>
          <button 
            onClick={() => scrollToSection("benefits")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-emerald-50/50"
            id="nav-btn-benefits"
          >
            How it Helps
          </button>
          <button 
            onClick={() => scrollToSection("customizer")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-1 bg-amber-100/60 text-amber-900 border border-amber-200/70 py-1.5 px-3 rounded-xl hover:bg-amber-100 transition-all font-display text-xs"
            id="nav-btn-customizer"
          >
            ✨ Try Interactive Customizer
          </button>
          <button 
            onClick={() => scrollToSection("lead-magnet")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-emerald-50/50"
            id="nav-btn-toolkit"
          >
            Newsletter
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="hover:text-emerald-600 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-emerald-50/50"
            id="nav-btn-faq"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("lead-magnet")}
            className="hidden sm:flex items-center gap-1.5 py-2 px-4 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-2xl border-2 border-emerald-200 hover:bg-emerald-100/50 active:scale-98 transition-all cursor-pointer shadow-sm"
            id="nav-cta-free"
          >
            <Mail className="w-3.5 h-3.5" />
            Newsletter
          </button>
          <button
            onClick={() => window.open("https://www.teacherspayteachers.com/store/eunoia-learning", "_blank")}
            className="py-2 px-4.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-semibold text-sm rounded-2xl shadow-md shadow-emerald-600/10 active:scale-98 transition-all cursor-pointer font-display"
            id="nav-cta-purchase"
          >
            Shop on TPT
          </button>
        </div>
      </div>
    </header>
  );
}
