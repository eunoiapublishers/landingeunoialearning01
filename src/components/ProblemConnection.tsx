import React, { useState } from "react";
import { Heart, Activity, CheckCircle, HelpCircle, Sparkles, Smile } from "lucide-react";

interface Scenario {
  id: string;
  situation: string;
  trigger: string;
  underlyingFeeling: string;
  whatTheyNeed: string;
  howStoryHelps: string;
  colorClass: {
    bg: string;
    border: string;
    text: string;
    pill: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "mistake",
    situation: "Frustration after making a small mistake",
    trigger: "Writing a wrong letter or drawing outside the line during worksheet exercises.",
    underlyingFeeling: "'I have to be perfect. If I make a mistake, it means I am failing or broken. I feel completely overwhelmed and my body wants to scream or rip the paper.'",
    whatTheyNeed: "Validation that mistakes are regular learning steps, a cue to take slow cooling breaths, and permission to try again comfortably.",
    howStoryHelps: "Our social story gently models a character writing, making a misstep, taking a deep breath, and using an eraser or letting it go. It removes the stress by normalizing mistake loops.",
    colorClass: {
      bg: "bg-rose-50/50",
      border: "border-rose-100",
      text: "text-rose-900",
      pill: "bg-rose-100 text-rose-800",
    }
  },
  {
    id: "meltdown",
    situation: "Meltdown or feeling blocked when tasks get difficult",
    trigger: "A puzzle or reading sentence becomes harder and feels impossible to complete.",
    underlyingFeeling: "'This is too hard. My head matches a fire. I can't think of how to solve this and I want to push it away or cry because the feeling is too heavy.'",
    whatTheyNeed: "A structured pause button, simple visual calm-down options, and immediate gentle reassurance that the difficulty is only temporary.",
    howStoryHelps: "Provide visual 'Calm Down Choice Boards' that prompt them to do a 3-second balloon breath or have a sip of cold water. Instead of crashing, the child gains a safe, visual route to reset.",
    colorClass: {
      bg: "bg-amber-50/50",
      border: "border-amber-100/70",
      text: "text-amber-900",
      pill: "bg-amber-100 text-amber-800",
    }
  },
  {
    id: "shutdown",
    situation: "Refusing to speak or emotional shutdowns",
    trigger: "Social pressure, sudden change in schedules, or direct questions about what is wrong.",
    underlyingFeeling: "'My voice is completely locked. I am experiencing massive sensory overload. Talking takes too much energy right now. Please let me hide.'",
    whatTheyNeed: "A quiet space without words, pressure-free visual communication options, and a simple way to express core needs without speaking.",
    howStoryHelps: "Our printable feelings cards and non-verbal handbooks allow children to simply point to an emotional card ('Quiet Time Needed') to request a safe break, avoiding verbal pressure entirely.",
    colorClass: {
      bg: "bg-teal-50/40",
      border: "border-teal-100",
      text: "text-teal-900",
      pill: "bg-teal-100/80 text-teal-800",
    }
  },
  {
    id: "help",
    situation: "Difficulty asking for assistance",
    trigger: "Struggling with a task but choosing to stay silent, becoming angry, or discarding the item.",
    underlyingFeeling: "'I feel like I am being bad by not knowing how to do this. I don't know the exact words to say to get help, so I feel completely stuck.'",
    whatTheyNeed: "Simple, highly scriptable scripts and social stories highlighting exactly how and when to hold up a clean helper hand.",
    howStoryHelps: "Provides explicit social scripts ('I can tap my helper hand and say \"help please\" when it feels tricky') so children don't have to scramble for words in anxiety-filled states.",
    colorClass: {
      bg: "bg-indigo-50/40",
      border: "border-indigo-100",
      text: "text-indigo-900",
      pill: "bg-indigo-100 text-indigo-800",
    }
  }
];

export default function ProblemConnection() {
  const [activeId, setActiveId] = useState<string>("mistake");
  const activeScenario = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <section className="py-16 md:py-24 bg-teal-50/20 border-y-2 border-orange-100/40 relative" id="problem">
      <div className="absolute top-10 right-10 w-24 h-24 bg-amber-200/20 rounded-full blur-xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-xs font-bold font-sans">
            <Heart className="w-3.5 h-3.5 fill-teal-600/10 text-teal-700" />
            <span>Empathetic Connection</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
            For Children, Big Feelings Can Feel Completely Overwhelming
          </h2>
          <p className="font-sans text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            When frustration sets in or things get complicated, children aren't deliberately acting out. They are experiencing a profound sensory response. Let's look at what is happening under the surface.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Situation Selector Buttons (Left 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 self-center">
            {SCENARIOS.map((scenario) => {
              const isActive = scenario.id === activeId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveId(scenario.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-white border-teal-400 shadow-md shadow-teal-500/5 translate-x-1.5"
                      : "bg-white/80 hover:bg-white border-slate-100 hover:border-teal-200/60 shadow-xs"
                  }`}
                  id={`scenario-tab-${scenario.id}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors font-display text-base font-bold ${
                    isActive ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  }`}>
                    {scenario.id === "mistake" && "🎨"}
                    {scenario.id === "meltdown" && "⚡"}
                    {scenario.id === "shutdown" && "🤫"}
                    {scenario.id === "help" && "✋"}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-display text-xs md:text-sm font-semibold tracking-tight transition-colors ${
                      isActive ? "text-teal-900" : "text-slate-700"
                    }`}>
                      {scenario.situation}
                    </p>
                    <p className="text-[11px] font-sans text-slate-400 mt-0.5 leading-snug">
                      Hover & click to view gentle supports
                    </p>
                  </div>
                  
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-teal-500 rounded-r-2xl" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Reassurance Display (Right 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className={`flex-1 p-6 md:p-8 rounded-[2rem] border-2 bg-white transition-all duration-500 flex flex-col justify-between shadow-xl ${activeScenario.colorClass.border}`}>
              
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-sans ${activeScenario.colorClass.pill}`}>
                    {activeScenario.situation}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-400">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Scenario Trigger */}
                <div className="space-y-2 text-left">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest block font-sans">
                    The Trigger Moment
                  </span>
                  <p className="font-sans text-sm text-slate-700">
                    {activeScenario.trigger}
                  </p>
                </div>

                {/* Child Underlying Feelings */}
                <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100/50 space-y-2 text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-orange-700 tracking-wider uppercase font-sans">
                    <Activity className="w-3.5 h-3.5" />
                    <span>The Underlying Feeling (What they can't express)</span>
                  </div>
                  <p className="font-sans text-sm md:text-base italic font-medium text-slate-800 leading-relaxed">
                    {activeScenario.underlyingFeeling}
                  </p>
                </div>

                {/* What they need */}
                <div className="space-y-2 text-left">
                  <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-widest block font-sans">
                    What They Actually Need
                  </span>
                  <p className="font-sans text-sm text-slate-600">
                    {activeScenario.whatTheyNeed}
                  </p>
                </div>
              </div>

              {/* Bottom Outcome Reassurance */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5 fill-emerald-600/10 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-extrabold text-slate-900">
                    How This Social Story Resource Helps:
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-slate-700 leading-relaxed mt-1">
                    {activeScenario.howStoryHelps}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
