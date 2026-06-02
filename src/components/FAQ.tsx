import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, AlertCircle } from "lucide-react";
import { FAQItem } from "../types";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this appropriate for autistic or neurodivergent children?",
    answer: "Absolutely. In fact, these tools were designed specifically with autism, ADHD, sensory processing differences, and communication support in mind. The language is extremely literal and direct, avoiding double meanings or subtext. The visual layout uses soft, calming pastel colors (and high-contrast options) that are less likely to trigger sensory fatigue or overstimulation compared to very bright or noisy cartoon layouts."
  },
  {
    id: "faq-2",
    question: "Can these materials be used inside classroom settings?",
    answer: "Yes, they are 100% prepared for classroom use, early childhood centers, speech therapy sessions, occupational therapy rooms, and home schooling. Your purchase includes a single-classroom print license. You are welcome to print and laminate clean copies for every student in your active, individual class registry, or display them in your classroom Quiet Corner on desks and clipboards."
  },
  {
    id: "faq-3",
    question: "What age range is this product designed for?",
    answer: "The primary design targets children aged 3 to 9 years old (Preschool, Kindergarten, and 1st through 3rd grade). The simple, repetitive sentence structures, large picture guides, and non-verbal choice pathways make it highly accessible for early readers, non-readers, and older children with emerging communication skills."
  },
  {
    id: "faq-4",
    question: "Is this a physical product that will be shipped to me?",
    answer: "No, this is a 100% digital download. Immediately after purchase, you will find a secure download link containing the full suite of printable PDF files. You can print them on your classroom or home computer instantly, saving you shipping wait times and allows you to replace worn-out sheets anytime."
  },
  {
    id: "faq-5",
    question: "How do I receive the visual materials?",
    answer: "Upon completing checkout, you will see a secure on-screen download button and you will immediately receive an automated premium receipt email with a direct access link inside. If you lose your files, simply sign in or contact helper support to retrieve them."
  },
  {
    id: "faq-6",
    question: "Can I print these sheets multiple times?",
    answer: "Yes! As a parent or single-classroom educator, you have full lifetime printing rights. If a worksheet gets torn, scribbled on, or crumpled during a difficult moment, you can simply open your computer and print a fresh copy instantly. Many users choose to laminate the feelings cards and choice boards to make them exceptionally durable!"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-teal-50/15 border-t border-orange-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-xs font-bold font-sans">
            <HelpCircle className="w-3.5 h-3.5 text-teal-750" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Everything you need to know about setting up and printing these social stories and visual calm corner supports.
          </p>
        </div>

        {/* FAQs list list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-display text-sm md:text-base font-bold text-slate-900 leading-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-505 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1.5 border-t border-slate-50 text-left transition-all">
                    <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 bg-orange-50/50 p-4.5 rounded-[1.5rem] border border-orange-100/60 flex items-center gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
          <p className="font-sans text-xs text-slate-600 leading-normal">
            Need a custom licensing option for a multi-classroom school district or health clinic? Contact our gentle support at{" "}
            <a href="mailto:info@eunoiapublishers.com" className="text-teal-700 font-bold underline">
              info@eunoiapublishers.com
            </a>{" "}
            for bulk invoice orders and custom packets.
          </p>
        </div>

      </div>
    </section>
  );
}
