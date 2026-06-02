import React from "react";
import { Star, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    author: "Evelyn",
    role: "ABA therapy",
    rating: 5,
    comment: "Perfect visual support! The layout and colors are soft and muted, which is crucial for neurodivergent kiddos who experience sensory overload. It is rare to find printables crafted with this level of emotional care.",
    source: "Verified SLP & Behavior Practice Review",
    avatarInitials: "EV"
  },
  {
    id: "review-2",
    author: "Lisa",
    role: "mother",
    rating: 5,
    comment: "My daughter struggled with writing mistakes and would rip his papers up. Reading this story changed everything. It gave her the exact sentence to handle the mistake. Pure magic.",
    source: "Parent Home Growth Review",
    avatarInitials: "LI"
  },
  {
    id: "review-3",
    author: "Anna",
    role: "teacher",
    rating: 5,
    comment: "This has been an absolute lifesaver in my autism support classroom. The stories are written so beautifully without any judgmental language. The choice boards are simple enough that my non-readers can indicate their choices without a meltdown. Highly, highly recommend!",
    source: "Verified Classroom Buyer",
    avatarInitials: "AN"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold font-sans">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600/10" />
            <span>Loving Praise on Teachers Pay Teachers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
            Trusted by Educators & Caregivers
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            See how these visual printables are transforming homes and calm corners with affectionate, child-focused results.
          </p>

          {/* Aggregate star rating badge */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-1 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/50">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
              <span className="text-xs font-extrabold text-amber-950 ml-1.5 font-sans">
                4.9 / 5.0 Star Rating
              </span>
            </div>
            <span className="text-xs font-medium text-slate-400">
              Based on 145+ verified educator purchases
            </span>
          </div>
        </div>

        {/* Testimonials Masonry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/40 hover:bg-white border-2 border-slate-100 hover:border-emerald-100 p-6 rounded-[2.2rem] shadow-xs hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
              id={review.id}
            >
              <div className="space-y-4">
                {/* Visual Header Initials and Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 font-display font-extrabold text-xs flex items-center justify-center">
                      {review.avatarInitials}
                    </div>
                    <div>
                      <p className="font-display text-xs font-bold text-slate-950">{review.author}</p>
                      <p className="font-sans text-[10px] text-slate-405 font-semibold text-slate-500 leading-none">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stars Indicator */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Testimonial body comment */}
                <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Verified Source stamp */}
              <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center gap-1 px-1 text-[10px] font-bold text-emerald-800 uppercase tracking-tight font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mini classroom badges banner */}
        <div className="mt-14 pt-8 border-t border-dashed border-orange-100 flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Preschool & Kindergarten Approved</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
            <Sparkles className="w-4 h-4 text-teal-500" />
            <span>SLP & Occupational Therapist Pick</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Special Ed (ASD, ADHD, SPD) Tuned</span>
          </div>
        </div>

      </div>
    </section>
  );
}
