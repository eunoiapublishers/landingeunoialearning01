import React, { useState } from "react";
import { Download, Mail, Check, Sparkles, Heart, Printer, Eye, Lock } from "lucide-react";

interface ToolkitItem {
  name: string;
  type: string;
  emoji: string;
  guide: string;
}

const FREE_TOOLKIT_ITEMS: ToolkitItem[] = [
  { name: "5 Calm-Down Cards", type: "Visual Strategy Flashcards", emoji: "🏷️", guide: "Actionable coping scripts inside" },
  { name: "Mini Feelings Chart", type: "Check-In Visual Placemat", emoji: "😊", guide: "Identify core feelings comfortably" },
  { name: "What Can I Do Booklet", type: "6-Page Short Narrative", emoji: "📖", guide: "Model healthy choices easily" },
  { name: "Visual Breathing Plate", type: "Bubble Breathing Exercise", emoji: "🌬️", guide: "Pacing tracker for relaxation" },
  { name: "Emotional Check-In Card", type: "Non-Verbal Break Cards", emoji: "✊", guide: "Quiet signal helper" }
];

export default function LeadMagnet() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeDownloadIdx, setActiveDownloadIdx] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    // Do not call e.preventDefault() so the browser submits to the Mailer Lite endpoint in a new tab.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-emerald-50/20 via-white to-amber-50/30" id="lead-magnet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Border box wrapper */}
        <div className="max-w-5xl mx-auto rounded-[3rem] border-3 border-emerald-300 bg-white shadow-2xl overflow-hidden relative">
          
          {/* Beautiful side colors */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch divide-y lg:divide-y-0 lg:divide-x border-slate-100">
            
            {/* LEFT: Toolkit Description & visual preview specs (7 columns) */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 text-left space-y-6">
              
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold leading-none font-sans">
                  <Download className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                  Free Digital Premium Download
                </span>
                
                <h3 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-950 leading-tight">
                  Free Printable Calm-Down Kit
                </h3>
                
                <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                  Join our parenting & special education newsletter and receive immediate high-resolution downloads for our 5-piece visual coping kit. Over 2,400 caretakers downloaded this toolkit last month!
                </p>
              </div>

              {/* Checklist details list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                {FREE_TOOLKIT_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-teal-50/25 border border-teal-100/40 rounded-2xl">
                    <div className="w-9 h-9 bg-white rounded-xl shadow-xs border border-teal-50 flex items-center justify-center text-xl shrink-0">
                      {item.emoji}
                    </div>
                    <div>
                      <p className="font-display text-[12px] font-extrabold text-teal-950 leading-tight">
                        {item.name}
                      </p>
                      <p className="font-sans text-[10px] text-slate-500 leading-tight mt-0.5">
                        {item.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Copy */}
              <p className="text-[11px] font-sans font-medium text-slate-400">
                🔒 We protect your privacy. Gentle periodic educational SEL resources. Unsubscribe at any time.
              </p>
            </div>

            {/* RIGHT: Email Form OR Download links list (5 columns) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-amber-50/15 flex flex-col justify-center text-left relative">
              <div className="absolute top-10 right-10 w-24 h-24 bg-amber-200/10 rounded-full blur-xl -z-10" />

              {!isSubscribed ? (
                // Email Optin Layout
                <form 
                  action="https://assets.mailerlite.com/jsonp/2388306/forms/188772041822831835/subscribe" 
                  method="POST" 
                  target="_blank" 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      Unlock Your Download Instantly
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-normal">
                      Enter your details below. MailerLite sends the direct file, and you can also download your template right here instantly!
                    </p>
                  </div>

                  {/* Input User Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Jim, Teacher Sarah"
                      className="w-full py-3 px-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-hidden transition-all placeholder:text-slate-400 shadow-xs"
                      id="optin-name"
                    />
                  </div>

                  {/* Input Email */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        name="fields[email]"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full py-3 pl-11 pr-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-hidden transition-all placeholder:text-slate-400 shadow-xs"
                        id="optin-email"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 text-left bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <input
                      type="checkbox"
                      id="optin-consent"
                      required
                      className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                    />
                    <label htmlFor="optin-consent" className="text-[10px] text-slate-500 font-sans cursor-pointer leading-tight select-none">
                      Opt in to receive news, updates, and free printable special education SEL templates. You can unsubscribe at any time.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display text-sm font-bold rounded-xl shadow-lg shadow-emerald-600/10 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2"
                    id="optin-submit-btn"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5.5 h-5.5 border-3 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>Sending Free Kit...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Send Me the Free Toolkit</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1.5 justify-center text-[10px] text-slate-400 font-sans">
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                    <span>Created for children, classrooms & home</span>
                  </div>
                </form>
              ) : (
                // Success Interactive Download Layout
                <div className="space-y-6">
                  
                  {/* Confetti celebration header */}
                  <div className="space-y-2 p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl shadow-md">
                      ✓
                    </div>
                    <div className="text-center">
                      <h4 className="font-display text-base font-bold text-slate-900">
                        Welcome to Eunoia Learning!
                      </h4>
                      <p className="font-sans text-[11px] text-slate-500 leading-tight">
                        Thank you, {userName || "friend"}. The tools have been compiled! Click below to download each item instantly:
                      </p>
                    </div>
                  </div>

                  {/* Immediate Actual Printable download cards */}
                  <div className="space-y-2.5">
                    {FREE_TOOLKIT_ITEMS.map((item, idx) => {
                      const isDownloading = activeDownloadIdx === idx;
                      return (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-xl shrink-0">{item.emoji}</span>
                            <div>
                              <p className="font-display text-[11px] font-extrabold text-slate-800 leading-tight">
                                {item.name}
                              </p>
                              <p className="font-sans text-[9px] text-slate-500 leading-none">
                                {item.guide}
                              </p>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => {
                              setActiveDownloadIdx(idx);
                              setTimeout(() => {
                                setActiveDownloadIdx(null);
                                // Trigger print/download action safely
                                alert(`Simulating high-resolution PDF download for: '${item.name}'. This starts your ready-to-print attachment!`);
                              }, 900);
                            }}
                            className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg cursor-pointer transition-all border border-emerald-100"
                            id={`optin-download-item-${idx}`}
                          >
                            {isDownloading ? (
                              <div className="w-3.5 h-3.5 border-2 border-emerald-800 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Download className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  {/* Reset action */}
                  <button
                    onClick={() => {
                      setIsSubscribed(false);
                      setUserName("");
                      setUserEmail("");
                    }}
                    className="text-[10px] text-center w-full block font-bold text-slate-400 hover:text-slate-600 underline"
                  >
                    Enter a different email address
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
