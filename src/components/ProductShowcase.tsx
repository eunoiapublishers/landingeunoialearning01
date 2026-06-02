import React, { useState } from "react";
import { BookOpen, Smile, Sparkles, CheckSquare, Layers, HelpCircle, ArrowLeft, ArrowRight, Printer, Star } from "lucide-react";
// @ts-ignore
import frustratedBoardImg from "../assets/images/frustrated_board_1780027516039.png";

interface Materials {
  id: string;
  name: string;
  pages: string;
  category: string;
  highlight: string;
  description: string;
  detailsList: string[];
}

const PRODUCTS_LIST: Materials[] = [
  {
    id: "story",
    name: "Master Social Story: 'Jim Learns and Grows'",
    pages: "16 Pages (Full Cover)",
    category: "Step-by-Step Guidance",
    highlight: "Model healthy frustration responses",
    description: "A beautifully written, first-person visual story showing Jim facing challenges, realizing body tension, taking a slow breath, and asking gently for help.",
    detailsList: [
      "Sincere, calming first-person story matching actual pages",
      "Features watercolor-style emotive illustrations children love",
      "Instantly printable workbook with lamination guides included",
      "Includes supportive caregiver talking prompts at the footer"
    ]
  },
  {
    id: "cards",
    name: "Printable Feelings Check-In Cards",
    pages: "16 Pocket Cards",
    category: "Daily Self-Awareness",
    highlight: "Express feelings without verbal pressure",
    description: "Portable visual emotion flashcards. Ideal for lanyard wear, desktop placemats, or classroom calm corners. Features high-contrast expressions with matching colors.",
    detailsList: [
      "Includes 8 complex and simple emotions",
      "Features actionable coping strategies on the reverse side",
      "Includes non-verbal 'I need a break' custom cards",
      "Color-coded for prompt visual identification"
    ]
  },
  {
    id: "choice-board",
    name: "Calm-Down Visual Choice Boards",
    pages: "4 Unique Boards",
    category: "Self-Regulation Hub",
    highlight: "Autonomous strategy selection",
    description: "Empowers the child by offering a direct visual choice of 6 healthy, easy calm-down tactics. Allows them to stay in control and retain cognitive agency.",
    detailsList: [
      "Interactive 'First, Then' structure templates included",
      "Over 12 moveable strategy icons to cut out and laminate",
      "Great for non-writers and neurodivergent children",
      "Blends perfectly into classroom Calm Corners"
    ]
  }
];

// Story content data for live simulator with exact "Jim Learns and Grows" copy from screenshots
const STORY_PAGES = [
  {
    page: 1,
    title: "It's Okay to Try",
    text: "It is okay to try. Trying is how my brain gets ready to learn and grow.",
    illustration: "✏️",
    bg: "bg-teal-50",
    guide: "Ask: What is something you tried to do recently?"
  },
  {
    page: 2,
    title: "My Name is Jim",
    text: "My name is Jim. I like to learn new things. Sometimes learning is easy, and sometimes it takes a few tries.",
    illustration: "👦",
    bg: "bg-cyan-50/55",
    guide: "Ask: What new things do you like to learn?"
  },
  {
    page: 3,
    title: "Today, My Teacher Gives Me Something New",
    text: "Today, my teacher gives me something new to work on. It looks a little different.",
    illustration: "🏫",
    bg: "bg-orange-50/45",
    guide: "Ask: How does your body feel when you see a new, unfamiliar activity?"
  },
  {
    page: 4,
    title: "I Look at My Paper",
    text: "I look at my paper. I don't know what to do yet. I sit and think about where to start.",
    illustration: "🤔",
    bg: "bg-amber-50/40",
    guide: "Observe: Remind your child, 'Yet' is a powerful word. We don't know it YET, but we can learn!"
  },
  {
    page: "🔒",
    isLocked: true,
    title: "Unlock Pages 5-16 in the Premium Pack!",
    text: "The full resource pack contains all 16 beautifully illustrated pages of Jim's coping journey, showing how children learn to self-regulate body tension, follow breathing visual steps, resolve hand-drawn slips comfortably, and gain emotional resilience.",
    illustration: "🔒",
    bg: "bg-gradient-to-br from-teal-50/30 to-orange-50/30 border-2 border-dashed border-orange-355",
    guide: "Action: Purchase the full pack on TPT today to access the complete ready-to-print booklet!"
  }
];

// Interactive feelings database
const FEELINGS_PREVIEW = [
  { emotion: "Frustrated", face: "😤", bodySec: "Fast heart beat, tight hands", strategy: "Take 3 deep bubble breaths, ask for fresh paper" },
  { emotion: "Overwhelmed", face: "🤯", bodySec: "Head feels warm, loud sounds feel uncomfortable", strategy: "Point to the 'Quiet Corner' card, get water" },
  { emotion: "Sad", face: "😢", bodySec: "Heavy eyes, low energy", strategy: "Ask for a comforting hug, write/draw on a soft pad" },
  { emotion: "Anxious", face: "🥺", bodySec: "Butterflies in stomach, shaky toes", strategy: "Squeeze a soft stress tool and count back from 5" }
];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<string>("story");
  
  // Interactive Story controls
  const [storyPage, setStoryPage] = useState<number>(0);
  
  // Interactive feelings selector
  const [selectedFeeling, setSelectedFeeling] = useState<number>(0);

  const activeProduct = PRODUCTS_LIST.find(p => p.id === activeTab) || PRODUCTS_LIST[0];

  return (
    <section className="py-16 md:py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-xs font-bold font-sans">
            <Layers className="w-3.5 h-3.5 text-teal-700" />
            <span>Product Showcase & Real Previews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
            What's Included in Your Printable Resource Pack
          </h2>
          <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Get instant access to a beautifully coordinated suite of SEL materials. Download, print, and begin supporting children immediately in classrooms or homes.
          </p>
        </div>

        {/* Dynamic Tab Selector for Products */}
        <div className="grid grid-cols-3 max-w-2xl mx-auto mb-12 bg-orange-50/45 p-2 rounded-[1.5rem] border border-orange-100">
          {PRODUCTS_LIST.map((prod) => {
            const isSelected = prod.id === activeTab;
            return (
              <button
                key={prod.id}
                onClick={() => {
                  setActiveTab(prod.id);
                  if (prod.id === "story") setStoryPage(0);
                }}
                className={`text-center py-3.5 px-3.5 rounded-xl font-display text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-teal-600 text-white shadow-md shadow-teal-700/10"
                    : "text-slate-600 hover:text-teal-900 hover:bg-white/65"
                }`}
                id={`product-showcase-tab-${prod.id}`}
              >
                {prod.id === "story" && "📖 Social Story"}
                {prod.id === "cards" && "🏷️ Feelings Cards"}
                {prod.id === "choice-board" && "📋 Choice Boards"}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* LEFT: Product Description Card (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-[2rem] bg-gradient-to-tr from-teal-50/40 via-emerald-50/10 to-transparent border-2 border-teal-100/40 shadow-xs text-left">
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold text-teal-700 tracking-wider uppercase font-sans">
                  {activeProduct.category}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {activeProduct.name}
                </h3>
              </div>

              {/* PDF specifications badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 text-teal-800 rounded-xl text-xs font-bold leading-none border border-teal-100">
                  <Printer className="w-3.5 h-3.5 text-teal-600" />
                  {activeProduct.pages}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 text-teal-800 rounded-xl text-xs font-bold leading-none border border-teal-100">
                  ★ Instant Digital Download
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-800 rounded-xl text-xs font-bold leading-none border border-amber-150">
                  Classroom & Home
                </span>
              </div>

              <p className="font-sans text-slate-600 text-sm leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Value list items */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">
                  Key Design Features
                </span>
                {activeProduct.detailsList.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                    <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Micro Rating */}
            <div className="mt-8 pt-6 border-t border-teal-100/50 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1.5 rounded-xl border border-amber-100">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-amber-500 fill-amber-500" />
                ))}
                <span className="text-[10px] font-bold text-amber-900 ml-1">5.0 Star Rated</span>
              </div>
              <span className="text-[11px] font-extrabold text-teal-800/80 font-display">
                🎨 Perfect for Early Childhood & ASD/ADHD
              </span>
            </div>
          </div>

          {/* RIGHT: Interactive Simulator Area (7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-amber-50/45 border-2 border-orange-100/60 p-4 rounded-[2rem] flex flex-col justify-center min-h-[400px]">
              
              {/* ----------------- DYNAMIC CASE 1: STORY PREVIEWER ----------------- */}
              {activeTab === "story" && (
                <div className="bg-white border-2 border-slate-100 px-4 py-8 md:p-8 rounded-[1.5rem] shadow-xl flex flex-col justify-between h-full space-y-8 select-none">
                  {/* Simulator Header */}
                  <div className="flex items-center justify-between border-b border-dashed border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 font-sans">
                      📖 INTERACTIVE PREVIEW : SOCIAL STORY BOOKLET
                    </span>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-xl">
                      Page {STORY_PAGES[storyPage].page} of {STORY_PAGES.length}
                    </span>
                  </div>

                  {/* Story Slide Page */}
                  {STORY_PAGES[storyPage].isLocked ? (
                    <div className="flex-1 p-6 rounded-2xl bg-gradient-to-tr from-amber-50 to-orange-50 border-2 border-dashed border-orange-200 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 min-h-[180px]">
                      <div className="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl shadow-md border-4 border-white shrink-0 animate-bounce">
                        🔒
                      </div>
                      <div className="space-y-1 max-w-sm">
                        <h4 className="font-display text-base font-bold text-slate-900 leading-tight">
                          {STORY_PAGES[storyPage].title}
                        </h4>
                        <p className="font-sans text-xs text-slate-600 leading-relaxed p-1">
                          {STORY_PAGES[storyPage].text}
                        </p>
                        <button
                          onClick={() => {
                            window.open("https://www.teacherspayteachers.com/store/eunoia-learning", "_blank");
                          }}
                          className="mt-3.5 inline-flex items-center gap-1.5 py-2 px-4.5 bg-gradient-to-s from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-display text-xs font-bold rounded-xl shadow-md active:scale-95 transition-all cursor-pointer"
                        >
                          <span>Get Full 16-Page Book Kit</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex-1 p-6 rounded-2xl ${STORY_PAGES[storyPage].bg} border border-slate-100 flex flex-col md:flex-row items-center gap-6 text-left transition-all duration-300`}>
                      <div className="w-20 h-20 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-white filter drop-shadow-md shrink-0">
                        {STORY_PAGES[storyPage].illustration}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display text-lg font-bold text-slate-900">
                          {STORY_PAGES[storyPage].title}
                        </h4>
                        <p className="font-sans text-sm text-slate-600 leading-relaxed">
                          {STORY_PAGES[storyPage].text}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Talking prompt advice for educator */}
                  <div className="bg-amber-50/50 p-3 rounded-xl border border-dashed border-amber-200/55 text-left text-[11px] text-slate-500 font-sans">
                    <span className="font-extrabold text-orange-700 mr-1 block sm:inline">💡 Caregiver Talking Prompt:</span>
                    {STORY_PAGES[storyPage].guide}
                  </div>

                  {/* Flip Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <button
                      disabled={storyPage === 0}
                      onClick={() => setStoryPage(p => Math.max(0, p - 1))}
                      className="flex items-center gap-1 py-2 px-3.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-xl text-xs font-bold text-slate-600 active:scale-95 transition-all cursor-pointer disabled:cursor-not-allowed"
                      id="story-prev-btn"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Prev Page
                    </button>

                    <div className="flex gap-1.5">
                      {STORY_PAGES.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${idx === storyPage ? "w-4 bg-teal-600" : "bg-slate-200"}`}
                        />
                      ))}
                    </div>

                    <button
                      disabled={storyPage === STORY_PAGES.length - 1}
                      onClick={() => setStoryPage(p => Math.min(STORY_PAGES.length - 1, p + 1))}
                      className="flex items-center gap-1 py-2 px-4 bg-teal-600 hover:bg-teal-500 text-white disabled:opacity-40 rounded-xl text-xs font-bold active:scale-95 transition-all cursor-pointer disabled:cursor-not-allowed"
                      id="story-next-btn"
                    >
                      Next Page
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ----------------- DYNAMIC CASE 2: FEELINGS INTERACTIVE CARDS ----------------- */}
              {activeTab === "cards" && (
                <div className="bg-white border-2 border-slate-100 p-6 md:p-8 rounded-[1.5rem] shadow-xl flex flex-col justify-between h-full text-left space-y-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 font-sans block mb-4">
                      🏷️ INTERACTIVE PREVIEW : FEELINGS EMOTIONAL TILES
                    </span>
                    <p className="font-sans text-xs text-slate-500 mb-4 leading-normal">
                      Click an emotion tile below to see how our printable cards present daily feelings and instantly teach children constructive, visual coping secrets:
                    </p>
                  </div>

                  {/* Selected feelings result card */}
                  <div className="p-5 bg-gradient-to-tr from-amber-50 to-orange-50/30 border border-orange-150 rounded-2xl flex items-start gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm shrink-0 border border-orange-100">
                      {FEELINGS_PREVIEW[selectedFeeling].face}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-base font-bold text-orange-950">
                        When I feel {FEELINGS_PREVIEW[selectedFeeling].emotion}
                      </h4>
                      <p className="font-sans text-xs text-slate-500">
                        <strong className="text-slate-700">How my body feels:</strong> {FEELINGS_PREVIEW[selectedFeeling].bodySec}
                      </p>
                      <p className="font-sans text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-1 rounded-lg mt-1 inline-block border border-emerald-100">
                        💡 Coping Tactic: {FEELINGS_PREVIEW[selectedFeeling].strategy}
                      </p>
                    </div>
                  </div>

                  {/* Feeling Grid Clickables */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {FEELINGS_PREVIEW.map((item, idx) => {
                      const isActive = selectedFeeling === idx;
                      return (
                        <button
                          key={item.emotion}
                          onClick={() => setSelectedFeeling(idx)}
                          className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center justify-center text-center gap-1 ${
                            isActive
                              ? "bg-orange-50/80 border-orange-400 shadow-sm"
                              : "bg-white hover:bg-slate-50 border-slate-100"
                          }`}
                          id={`feelings-tile-${idx}`}
                        >
                          <span className="text-2xl">{item.face}</span>
                          <span className="font-display text-xs font-bold text-slate-800">{item.emotion}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ----------------- DYNAMIC CASE 3: VISUAL CHOICE BOARD ----------------- */}
              {activeTab === "choice-board" && (
                <div className="bg-white border-2 border-slate-100 p-6 md:p-8 rounded-[1.5rem] shadow-xl flex flex-col justify-between h-full text-left space-y-5">
                  <div>
                    <span className="text-xs font-bold text-slate-400 font-sans block mb-1">
                      📋 PRINTABLE PREVIEW : CALM DOWN CHOICE BOARD
                    </span>
                    <p className="font-sans text-xs text-slate-500 leading-normal">
                      Coping choice boards empower kids to choose safe strategies. Below is a photograph-style mockup of our laminated printable board and interchangeable Velcro strategy cards:
                    </p>
                  </div>

                  {/* Laminated mockup image render */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img
                      src={frustratedBoardImg}
                      alt="Laminated When I feel frustrated visual coping strategy choice board"
                      className="w-full h-auto object-cover aspect-[4/3] rounded-xl hover:scale-[1.01] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <p className="text-[11px] font-sans text-slate-400 italic">
                    * Your printable resource pack contains 4 color-coded templates and over 12 movable icon cards to laminate and velcro onto the physical board.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
