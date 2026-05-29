import React, { useState } from "react";
import { Sparkles, Printer, Lock, Check, Heart, Play, RefreshCw, Star, Info } from "lucide-react";
import { CalmDownStrategy } from "../types";

const ALL_STRATEGIES: CalmDownStrategy[] = [
  {
    id: "breath",
    label: "3 Balloon Breaths 🌬️",
    description: "Inhale slowly and pretend to blow up a giant balloon, then deflate it.",
    instruction: "Blow out long and slow.",
    iconName: "🌬️"
  },
  {
    id: "water",
    label: "Sip of Cold Water 🥛",
    description: "Take a quiet trip to the water fountain or use a fresh cold cup.",
    instruction: "Cool your body down.",
    iconName: "🥛"
  },
  {
    id: "squeeze",
    label: "Squeeze a Foam Tool 🧸",
    description: "Squeeze a soft stress ball or squishy tool tightly, then relax your hand.",
    instruction: "Squeeze and count 3, 2, 1.",
    iconName: "🧸"
  },
  {
    id: "wall",
    label: "Wall Stretches 🤸",
    description: "Push hands flat on the wall for 10 seconds to activate joints and calm muscles.",
    instruction: "Push hard, feel strong.",
    iconName: "🤸"
  },
  {
    id: "help",
    label: "Tap for Support ✋",
    description: "Raise hands or tap the teacher/carer gently to ask with calm speech.",
    instruction: "Tap and say 'Help please'.",
    iconName: "✋"
  },
  {
    id: "book",
    label: "Quiet Book Time 📚",
    description: "Flip through a soft picture book in the reading corner for 2 minutes.",
    instruction: "Rest your busy eyes.",
    iconName: "📚"
  },
  {
    id: "doodle",
    label: "Draw My Scrawls 🎨",
    description: "Draw or scribble how the angry cloud looks on a scrap sketch pad.",
    instruction: "Put the big storm on paper.",
    iconName: "🎨"
  },
  {
    id: "count",
    label: "Backwards Count 🔢",
    description: "Look at your toes and count backwards from five to zero slowly.",
    instruction: "5, 4, 3, 2, 1, peace.",
    iconName: "🔢"
  }
];

export default function InteractiveCustomizer() {
  const [childName, setChildName] = useState<string>("Jim");
  const [triggerEmotion, setTriggerEmotion] = useState<string>("Frustrated");
  const [selectedIds, setSelectedIds] = useState<string[]>(["breath", "water", "squeeze", "help"]);
  const [isDemoPrinted, setIsDemoPrinted] = useState<boolean>(false);

  const handleToggleStrategy = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      } else {
        // Swap out the first item
        setSelectedIds([...selectedIds.slice(1), id]);
      }
    }
  };

  const handleReset = () => {
    setChildName("Jim");
    setTriggerEmotion("Frustrated");
    setSelectedIds(["breath", "water", "squeeze", "help"]);
    setIsDemoPrinted(false);
  };

  const activeStrategies = ALL_STRATEGIES.filter((s) => selectedIds.includes(s.id));

  const handlePrintTrigger = () => {
    setIsDemoPrinted(true);
    setTimeout(() => {
      window.print();
    }, 250);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/20 via-orange-50/15 to-white border-y-2 border-orange-100/30" id="customizer">
      {/* Print layout override styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          body * {
            visibility: hidden !important;
          }
          #customizer-live-sheet, #customizer-live-sheet * {
            visibility: visible !important;
          }
          #customizer-live-sheet {
            visibility: visible !important;
            position: absolute !important;
            left: 5% !important;
            top: 5% !important;
            width: 90% !important;
            max-width: 650px !important;
            height: auto !important;
            aspect-ratio: 1/1.414 !important;
            border: 4px solid #fed7aa !important;
            border-radius: 1.8rem !important;
            box-shadow: none !important;
            padding: 2.5rem !important;
            margin: 0 auto !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Ensure all nested strategy grids and flex layouts remain visible and aligned in print */
          #customizer-live-sheet .grid,
          #customizer-live-sheet [class*="grid-cols-"] {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }
          #customizer-live-sheet .flex {
            display: flex !important;
          }
          #customizer-live-sheet .pb-4 {
            padding-bottom: 1rem !important;
          }
          #customizer-live-sheet .border-b-2 {
            border-bottom-width: 2px !important;
          }
          #customizer-live-sheet .pt-3 {
            padding-top: 1rem !important;
          }
          #customizer-live-sheet .border-t-2 {
            border-top-width: 2px !important;
          }
          #customizer-live-sheet [class*="bg-"] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200 rounded-full text-xs font-bold font-sans">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Classroom Workshop</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
            Interactive Calm Down Card Customizer
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-xl mx-auto">
            Design a custom visual checklist tailored to your specific child's goals of regulation. Customize, view the live layout, and test immediate printing functionality.
          </p>
        </div>

        {/* Customizer workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Customizer inputs & choices list (7 columns) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-[2rem] border-2 border-slate-100 shadow-xl space-y-6 text-left">
            
            {/* Field: Name Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                  Child's Display Name
                </label>
                <input
                  type="text"
                  maxLength={15}
                  value={childName}
                  onChange={(e) => setChildName(e.target.value || "My")}
                  placeholder="e.g. Liam, Emma"
                  className="w-full py-3 px-4 bg-orange-50/30 font-display font-medium text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-teal-400 focus:outline-hidden transition-all placeholder:text-slate-400"
                  id="customizer-name-input"
                />
              </div>

              {/* Field: Emotion Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                  When They Face Big Feelings
                </label>
                <select
                  value={triggerEmotion}
                  onChange={(e) => setTriggerEmotion(e.target.value)}
                  className="w-full py-3 px-4 bg-orange-50/30 font-display font-medium text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-teal-400 focus:outline-hidden transition-all cursor-pointer"
                  id="customizer-emotion-select"
                >
                  <option value="Frustrated">Frustrated (Making Mistakes)</option>
                  <option value="Overwhelmed">Overwhelmed (Too Loud/Hard)</option>
                  <option value="Anxious">Anxious (Nervous/Butterflies)</option>
                  <option value="Angry">Angry (Fast Warm Heart)</option>
                </select>
              </div>
            </div>

            {/* Instruction Callout */}
            <div className="bg-teal-50/50 p-3.5 rounded-xl border border-teal-100/70 text-xs text-teal-900 font-sans flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-teal-600" />
              <p className="leading-relaxed">
                Choose exactly <strong>4 calm down strategies</strong>. Our engine automatically structures these as positive visual steps on the printable sheet below.
              </p>
            </div>

            {/* Strategies Grid Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                  Select Visual Calm-Down Steps ({selectedIds.length}/4 chosen)
                </span>
                <button
                  onClick={handleReset}
                  className="text-[10px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Default
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ALL_STRATEGIES.map((strategy) => {
                  const isSelected = selectedIds.includes(strategy.id);
                  return (
                    <button
                      key={strategy.id}
                      onClick={() => handleToggleStrategy(strategy.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-start gap-3.5 cursor-pointer relative group ${
                        isSelected
                          ? "bg-teal-50/45 border-teal-400 shadow-sm"
                          : "bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                      }`}
                      id={`customizer-option-${strategy.id}`}
                    >
                      <span className="text-2xl mt-0.5 shrink-0 block">{strategy.iconName}</span>
                      
                      <div className="space-y-0.5">
                        <span className="font-display text-xs font-bold text-slate-900 group-hover:text-teal-900 block tracking-tight">
                          {strategy.label}
                        </span>
                        <span className="font-sans text-[10px] text-slate-500 block leading-tight">
                          {strategy.description}
                        </span>
                      </div>

                      {isSelected && (
                        <div className="absolute right-3 top-3 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white border border-teal-100">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right panel: Live-updating print layout mockup (5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual sheet print body wrapper */}
            <div className="w-full max-w-sm bg-amber-50/45 p-3 rounded-[2.2rem] border-2 border-orange-100/60 shadow-inner">
              
              {/* Actual Worksheet layout */}
              <div 
                className="bg-white border-3 border-orange-200 px-6 py-8 rounded-[1.8rem] text-left shadow-2xl space-y-6 aspect-[1/1.4] flex flex-col justify-between print:border-none print:shadow-none"
                id="customizer-live-sheet"
              >
                
                {/* Board header bar */}
                <div className="text-center space-y-1 pb-4 border-b-2 border-dashed border-orange-100">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-[9px] font-extrabold tracking-widest uppercase font-sans border border-teal-100">
                    My Home & School Coping Guide
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {childName}'s Calm Choices!
                  </h3>
                  <p className="font-sans text-[10px] text-slate-500">
                    When I feel <span className="underline decoration-pink-400 decoration-2 font-bold text-pink-900">{triggerEmotion}</span>, I can try these visual steps:
                  </p>
                </div>

                {/* 4 Selected visual squares */}
                <div className="grid grid-cols-2 gap-3.5 my-3">
                  {activeStrategies.map((strategy, idx) => (
                    <div
                      key={strategy.id}
                      className="p-3 bg-gradient-to-br from-amber-50 to-orange-50/40 border border-orange-100 rounded-xl flex flex-col items-center justify-center text-center space-y-1.5"
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow-xs border border-orange-50 font-display">
                        {strategy.iconName}
                      </div>
                      <div>
                        <span className="font-display text-[11px] font-bold text-slate-800 leading-none block">
                          Step {idx + 1}: {strategy.label.split(" ").slice(0, -1).join(" ")}
                        </span>
                        <span className="font-sans text-[8px] text-slate-500 font-medium block mt-1 leading-tight">
                          {strategy.instruction}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty slots placeholders if they select less than 4 */}
                  {Array.from({ length: 4 - activeStrategies.length }).map((_, placeholderIdx) => (
                    <div
                      key={placeholderIdx}
                      className="p-3 bg-dashed border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-350 text-center"
                    >
                      <span className="font-sans font-bold text-[10px]">Empty Choice Slot</span>
                    </div>
                  ))}
                </div>

                {/* Sheet footer stamp */}
                <div className="pt-3 border-t-2 border-dashed border-orange-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                    <span>🌱 I am taking control</span>
                  </div>
                  <span className="text-[8px] font-extrabold text-teal-700 font-sans tracking-wide uppercase">
                    Provided by Eunoia Learning
                  </span>
                </div>

              </div>
            </div>

            {/* Live CTA for customized print */}
            <div className="mt-6 w-full max-w-sm space-y-4">
              <button
                onClick={handlePrintTrigger}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-white font-display text-sm font-bold rounded-2xl shadow-md cursor-pointer active:scale-98 transition-all"
                id="customizer-print-btn"
              >
                <Printer className="w-4 h-4" />
                <span>Print Custom Selection Card</span>
              </button>
              
              <div className="flex items-center gap-2 justify-center bg-teal-50/30 p-2 rounded-xl border border-teal-100">
                <Lock className="w-3.5 h-3.5 text-teal-700" />
                <span className="text-[10px] font-bold text-teal-900 leading-none">
                  Lamination kits & cutout cardboards included in Full Pack
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
