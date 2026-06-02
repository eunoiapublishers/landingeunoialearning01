import React from "react";
import { Heart, Mail, CheckCircle, Smartphone, MapPin } from "lucide-react";

export default function Footer() {
  const categories = [
    "social stories for kids",
    "emotional regulation printables",
    "calm down worksheets",
    "SEL activities for kids",
    "printable behavior supports",
    "autism social stories",
    "frustration coping worksheets",
    "classroom emotional regulation tools"
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t-4 border-teal-500 py-12 md:py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-800 pb-12">
          
          {/* Brand block (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0 select-none">
                <path d="M 50 15 L 50 10" stroke="#ebd2c0" strokeWidth="3" strokeLinecap="round" className="opacity-80" />
                <path d="M 38 18 L 34 14" stroke="#e8cb90" strokeWidth="3" strokeLinecap="round" />
                <path d="M 62 18 L 66 14" stroke="#ebd2c0" strokeWidth="3" strokeLinecap="round" />
                <path d="M 46 45 C 30 45, 27 30, 42 26 C 42 21, 50 18, 55 25" fill="#8ea89b" />
                <path d="M 54 25 C 58 18, 72 20, 72 32 C 81 33, 80 45, 64 45" fill="#e4beb5" />
                <path d="M 44 33 C 48 24, 62 24, 65 33 Z" fill="#e8cb90" />
                <path d="M 50 37 C 50 37, 46 33, 42 37 C 39 40, 50 48, 50 48 C 50 48, 61 40, 58 37 C 55 33, 50 37, 50 37" fill="#ffffff" />
                <path d="M 38 46 C 36 50, 34 52, 37 55 C 39 57, 42 57, 44 56 C 45 59, 48 61, 52 61 C 58 61, 61 55, 61 48" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 52 49 C 54 52, 58 52, 60 49" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 50 56 C 52 58, 55 58, 57 56" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="font-display font-black text-xl text-white tracking-tight leading-none">
                Eunoia <span className="text-teal-400 font-sans text-xs font-bold block mt-0.5 tracking-widest">LEARNING</span>
              </span>
            </div>
            
            <p className="text-xs md:text-sm text-slate-405 leading-relaxed text-slate-400">
              Supporting emotional growth, calm logical thinking, and positive choices with print-ready, neurodivergent-friendly visual templates. Designed for elementary educators, parents, and special education classrooms worldwide.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <Mail className="w-4 h-4 text-teal-400" />
              <span>Contact: </span>
              <a href="mailto:info@eunoiapublishers.com" className="text-white hover:text-teal-400 transition-colors font-bold">
                info@eunoiapublishers.com
              </a>
            </div>
          </div>

          {/* Quick links block (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400">
              <a href="#hero" className="hover:text-emerald-400 transition-colors font-medium">Home</a>
              <a href="#problem" className="hover:text-emerald-400 transition-colors font-medium">Underlying Feelings</a>
              <a href="#products" className="hover:text-emerald-400 transition-colors font-medium">What's Included</a>
              <a href="#customizer" className="hover:text-emerald-400 transition-colors font-medium">Interactive Workshop</a>
              <a href="#lead-magnet" className="hover:text-emerald-400 transition-colors font-medium">Free Printable Toolkit</a>
            </div>
          </div>

          {/* SEO Targeted Tags sitemap block (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white tracking-wider uppercase">
              Target SEO Classroom Resources
            </h4>
            
            <div className="flex flex-wrap gap-1.5 pt-1">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 bg-slate-800 text-[10px] uppercase font-semibold text-slate-450 text-slate-400 hover:text-white rounded-lg select-all border border-slate-750"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright declaration block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} Eunoia Learning. Created with absolute care on TPT.</p>
            <p className="opacity-60 mt-1">Special Education, Speech Therapy, and Occupational Therapy and Autism Coping Guides. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-400">Pre-compiled Secure PDF Access</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
