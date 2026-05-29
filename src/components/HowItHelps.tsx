import React from "react";
import { Heart, Activity, Compass, Flame, CheckCircle, Smile, BookOpen, UserCheck } from "lucide-react";

interface BenefitCard {
  title: string;
  description: string;
  illustration: string;
  bgClass: string;
  borderClass: string;
  iconBg: string;
  iconColor: string;
  outcomeText: string;
}

const BENEFIT_ITEMS: BenefitCard[] = [
  {
    title: "Emotional Regulation",
    description: "Helps children recognize internal warming signals (fists, fast heartbeat) and practice structured calm-down sequences independently.",
    illustration: "🌬️",
    bgClass: "bg-teal-50/25 hover:bg-teal-50/60",
    borderClass: "border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    outcomeText: "Supports clear thinking during challenging situations"
  },
  {
    title: "Encouraging Independence",
    description: "Equips the child with non-verbal card cues and scripts so they can request simple breaks or helper support without verbal overwhelm.",
    illustration: "✋",
    bgClass: "bg-indigo-50/25 hover:bg-indigo-50/60",
    borderClass: "border-indigo-150",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    outcomeText: "Builds absolute confidence to communicate needs effectively"
  },
  {
    title: "Developing a Positive Mindset",
    description: "Normalizes writing slips and mistakes through storytelling. Re-contextualizes accidents as normal brain-growing milestones.",
    illustration: "🌱",
    bgClass: "bg-amber-50/30 hover:bg-amber-50/60",
    borderClass: "border-amber-100",
    iconBg: "bg-amber-150",
    iconColor: "text-amber-800",
    outcomeText: "Promotes learning resilience instead of paper tearing"
  },
  {
    title: "Supportive Co-Regulation",
    description: "Provides pre-made talking guides and emotional scripts for educators and caretakers to assist kids without triggering shame.",
    illustration: "🤝",
    bgClass: "bg-emerald-50/25 hover:bg-emerald-50/60",
    borderClass: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    outcomeText: "Creates uniform support structures between home & school"
  }
];

export default function HowItHelps() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50/10 via-white to-amber-50/15" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold font-sans">
            <UserCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Value Outcomes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
            Translating Visual Features Into Real-Life Outcomes
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            These worksheets do not just keep children busy—they act as structural bridges that guide them from emotional overwhelm to calm, intentional behavior.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFIT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[2rem] border-2 bg-white transition-all duration-300 md:hover:-translate-y-1 ${item.bgClass} ${item.borderClass} flex flex-col justify-between text-left`}
              id={`benefit-card-${idx}`}
            >
              <div className="space-y-5">
                {/* Icon Circle */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center text-2xl shadow-sm text-center font-display font-black`}>
                    {item.illustration}
                  </div>
                  <span className="text-[10px] font-sans text-slate-400 font-extrabold tracking-widest uppercase">
                    Milestone {idx + 1}
                  </span>
                </div>

                {/* Text specs */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Reassurance Outcome bullet */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[9px] text-emerald-600">✓</span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-teal-900 leading-snug">
                  {item.outcomeText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-quote statement box */}
        <div className="mt-16 bg-white border border-orange-100/70 p-6 md:p-8 rounded-[2rem] max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 shadow-sm shadow-orange-50 text-left">
          <div className="w-14 h-14 bg-gradient-to-tr from-orange-200 to-amber-300 rounded-2xl flex items-center justify-center shrink-0 text-3xl font-bold shadow-md shadow-orange-200/50">
            ☀️
          </div>
          <div>
            <blockquote className="font-sans text-slate-700 text-sm md:text-base italic leading-relaxed font-medium">
              "We noticed a huge shift within just three days. Instead of ripping her spelling worksheet when she misspells, our daughter now points to her 'Take a Breath' card, blow-out three times, and says 'Can I erase this?' with total composure."
            </blockquote>
            <cite className="font-sans text-xs font-bold block text-teal-800 mt-2 not-italic">
              — Sarah T., Elementary Special Needs Caregiver & Parent of a 7-year-old
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}
