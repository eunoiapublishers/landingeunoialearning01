import React, { useState } from "react";
import { Mail, Sparkles, Heart, ExternalLink } from "lucide-react";

export default function LeadMagnet() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [subscriberType, setSubscriberType] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1050);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-emerald-50/20 via-white to-amber-50/30" id="lead-magnet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Beautiful card container */}
        <div className="max-w-2xl mx-auto rounded-[3rem] border-3 border-emerald-300 bg-white shadow-2xl overflow-hidden relative p-8 sm:p-12 text-center">
          
          {/* Beautiful top color strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400" />
          
          <div className="absolute top-10 right-10 w-24 h-24 bg-amber-200/10 rounded-full blur-xl -z-10" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-emerald-200/10 rounded-full blur-xl -z-10" />

          {!isSubscribed ? (
            // Email Optin Layout
            <form 
              action="https://assets.mailerlite.com/jsonp/2388306/forms/188951930328843672/subscribe" 
              method="POST" 
              target="_blank" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />

              {/* Header */}
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full text-[10px] font-bold text-amber-900 border border-amber-200 uppercase tracking-widest font-sans mx-auto">
                  ★ Eunoia Learning Newsletter ★
                </span>
                <h3 className="font-display text-2.5xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Stay in the Loop
                </h3>
                <p className="font-sans text-slate-650 text-sm max-w-md mx-auto leading-relaxed">
                  Join our parenting & special education newsletter today. Get gentle socio-emotional learning ideas, updates on new social stories, and special offers on classroom resources.
                </p>
              </div>

              {/* Form Fields Grid */}
              <div className="space-y-4 max-w-md mx-auto text-left">
                {/* Input User Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="fields[name]"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Jim, Teacher Sarah"
                    className="w-full py-3 px-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-teal-400 focus:outline-hidden transition-all placeholder:text-slate-400 shadow-xs"
                    id="optin-name"
                  />
                </div>

                {/* Input Email */}
                <div className="space-y-1">
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
                      className="w-full py-3 pl-11 pr-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-teal-400 focus:outline-hidden transition-all placeholder:text-slate-400 shadow-xs"
                      id="optin-email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Subscriber Type Selection (Required) */}
                <div className="space-y-1">
                  <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                    I am a...
                  </label>
                  <select
                    required
                    name="fields[suscriber_type]"
                    value={subscriberType}
                    onChange={(e) => setSubscriberType(e.target.value)}
                    className="w-full py-3 px-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-teal-400 focus:outline-hidden transition-all shadow-xs cursor-pointer"
                    id="optin-subscriber-type"
                  >
                    <option value="">Select your role</option>
                    <option value="Parent">Parent</option>
                    <option value="Teacher">Teacher/Educator</option>
                    <option value="Therapist">Therapist/Counselor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <input
                    type="checkbox"
                    id="optin-consent"
                    required
                    className="mt-1 w-4 h-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                  />
                  <label htmlFor="optin-consent" className="text-[10px] text-slate-500 font-sans cursor-pointer leading-tight select-none">
                    Opt in to receive news, updates, and classroom special education SEL resources. You can unsubscribe at any time.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="max-w-md mx-auto">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-teal-600 via-teal-600 to-emerald-600 hover:from-teal-500 hover:via-teal-500 hover:to-emerald-500 text-white font-display text-sm font-bold rounded-xl shadow-lg shadow-teal-600/10 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2"
                  id="optin-submit-btn"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5.5 h-5.5 border-3 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Join Our Newsletter</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-1.5 justify-center text-[10px] text-slate-400 font-sans pt-1">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>Created for children, classrooms & home</span>
              </div>
            </form>
          ) : (
            // Success State (Newsletter Confirmation only)
            <div className="space-y-6 max-w-md mx-auto py-4">
              
              {/* Celebration info box */}
              <div className="space-y-3 p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl shadow-md">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-base font-extrabold text-slate-900">
                    You're on the list!
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    Thank you for subscribing! Your email has been successfully registered. We will send you periodicals gentle socio-emotional learning guides, new social stories, and special coupon codes directly to your inbox.
                  </p>
                </div>
              </div>

              {/* Clean External TPT catalog CTA button */}
              <a
                href="https://www.teacherspayteachers.com/store/eunoia-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-display text-sm font-extrabold rounded-xl shadow-lg shadow-teal-600/15 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2 text-center"
                id="optin-tpt-download-btn"
              >
                <span>Browse our TPT Store Catalog</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

              {/* Clear email restarter link */}
              <button
                onClick={() => {
                  setIsSubscribed(false);
                  setUserName("");
                  setUserEmail("");
                  setSubscriberType("");
                }}
                className="text-[10px] text-center w-full block font-bold text-slate-400 hover:text-slate-600 underline cursor-pointer"
              >
                Enter a different email address
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
