import React, { useState } from "react";
import { Download, Mail, Check, Sparkles, Heart, Printer, Eye, Lock, Copy, FileCode, ExternalLink } from "lucide-react";

const MAILERLITE_TEMPLATE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Coping Kit is Ready! - Eunoia Learning</title>
  <style>
    /* Client-specific styles */
    #outlook a { padding: 0; }
    .ReadMsgBody { width: 100%; }
    .ExternalClass { width: 100%; }
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; }

    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      height: 100% !important;
      background-color: #fcf9f5 !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    table {
      border-collapse: collapse !important;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }

    /* Responsive styles */
    @media screen and (max-width: 620px) {
      .container {
        width: 100% !important;
        max-width: 100% !important;
        padding-left: 10px !important;
        padding-right: 10px !important;
      }
      .mobile-padding {
        padding: 20px 15px !important;
      }
      .title-text {
        font-size: 26px !important;
        line-height: 32px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; width: 100% !important; background-color: #fcf9f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fcf9f5; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 40px 0 60px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" class="container" style="background-color: #ffffff; border-radius: 24px; border: 1.5px solid #ffedd5; box-shadow: 0 10px 25px -5px rgba(234, 88, 12, 0.04), 0 8px 10px -6px rgba(234, 88, 12, 0.04); overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(to right, #10b981, #14b8a6, #f59e0b); height: 8px;"></td>
          </tr>
          <tr>
            <td class="mobile-padding" style="padding: 45px 35px 35px 35px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <span style="display: inline-block; background-color: #f0fdf4; border: 1.5px solid #ccfbf1; border-radius: 50px; padding: 8px 16px; font-weight: bold; font-size: 11px; color: #0f766e; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px;">
                      🌱 Eunoia Learning
                    </span>
                  </td>
                </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 25px;">
                    <h1 class="title-text" style="margin: 0; font-family: inherit; font-size: 30px; font-weight: 800; line-height: 38px; color: #0f172a; letter-spacing: -0.5px;">
                      Your Coping Resources Are Ready! 🎉
                    </h1>
                  </td>
                </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-bottom: 30px; font-size: 15px; font-weight: 400; line-height: 25px; color: #475569;">
                    <p style="margin: 0 0 15px 0;">Hello <strong>{$name|default:'educator, parent, or counselor'}</strong>,</p>
                    <p style="margin: 0 0 15px 0;">Thank you so much for joining our community. At <strong>Eunoia Learning</strong>, we design beautiful, high-quality, professional socio-emotional visuals to make children's self-regulation gentle, warm, and structured.</p>
                    <p style="margin: 0;">You can get your ready-to-print, high-resolution coping materials directly from our official Teachers Pay Teachers store. Click the button below to discover and download the complete resource pack to start supporting emotional growth today!</p>
                  </td>
                </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 35px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" style="background: linear-gradient(to right, #059669, #0d9488); border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(13, 148, 136, 0.25);">
                          <a href="https://www.teacherspayteachers.com/store/eunoia-learning" target="_blank" style="display: inline-block; padding: 18px 36px; font-family: inherit; font-size: 16px; font-weight: bold; color: #ffffff; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px;">
                            📥 DOWNLOAD MY KIT ON TPT
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1.5px solid #f1f5f9; padding-top: 35px; padding-bottom: 10px;">
                <tr>
                  <td>
                    <h4 style="margin: 0 0 10px 0; font-size: 15px; font-weight: 800; color: #1e293b;">
                      ⭐ What's inside the Full 16-Page Premium Version?
                    </h4>
                    <p style="margin: 0; font-size: 13px; line-height: 22px; color: #64748b;">
                      The complete premium resource kit on TPT includes Jim's beautifully illustrated 16-page story about self-regulating body tension, coping with frustrated thoughts, managing pencil mistakes, and adopting dynamic breathing visual loops. It features non-verbal break cards, interactive choice boards, and structured learning tools. By purchasing it, you directly support the creation of free educational materials.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="mobile-padding" style="background-color: #fcfcfd; padding: 30px 35px; border-top: 1px solid #f1f5f9; text-align: center;">
              <p style="margin: 0 0 10.5px 0; font-size: 12px; font-weight: bold; color: #64748b; letter-spacing: 0.5px;">Eunoia Learning © 2026</p>
              <p style="margin: 0 0 20px 0; font-size: 11px; line-height: 18px; color: #94a3b8; max-width: 450px; display: inline-block;">
                You are receiving this email because you requested a free digital resource on our website. We respect your privacy and never sell your personal information.
              </p>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="font-size: 11px; font-weight: bold; color: #0d9488;">
                    <a href="{$unsubscribe}" style="color: #0d9488; text-decoration: underline; margin: 0 10px;">Unsubscribe</a>
                    <span style="color: #cbd5e1;">|</span>
                    <a href="mailto:support@eunoialearning.com" style="color: #0d9488; text-decoration: underline; margin: 0 10px;">Help & Support</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

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
  const [subscriberType, setSubscriberType] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeDownloadIdx, setActiveDownloadIdx] = useState<number | null>(null);
  const [isTemplateCopied, setIsTemplateCopied] = useState<boolean>(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [showIntegrator, setShowIntegrator] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    // Do not call e.preventDefault() so the browser submits to the Mailer Lite endpoint in a new tab.
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(MAILERLITE_TEMPLATE_HTML);
    setIsTemplateCopied(true);
    setTimeout(() => {
      setIsTemplateCopied(false);
    }, 2000);
  };

  const handleDownloadTemplate = () => {
    const blob = new Blob([MAILERLITE_TEMPLATE_HTML], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "eunoia_mailerlite_newsletter_template.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                  action="https://assets.mailerlite.com/jsonp/2388306/forms/188951930328843672/subscribe" 
                  method="POST" 
                  target="_blank" 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <input type="hidden" name="ml-submit" value="1" />
                  <input type="hidden" name="anticsrf" value="true" />

                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      Unlock Your Download Instantly
                    </h4>
                    <p className="font-sans text-xs text-slate-600 leading-normal">
                      Enter your details below to sign up for our newsletter and instantly download your ready-to-print resources.
                    </p>
                  </div>

                  {/* Input User Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="fields[name]"
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

                  {/* Subscriber Type Selection (Required) */}
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider font-sans block">
                      I am a...
                    </label>
                    <select
                      required
                      name="fields[suscriber_type]"
                      value={subscriberType}
                      onChange={(e) => setSubscriberType(e.target.value)}
                      className="w-full py-3 px-4 bg-white font-sans text-sm text-slate-800 rounded-xl border-2 border-slate-100 focus:border-emerald-400 focus:outline-hidden transition-all shadow-xs cursor-pointer"
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
                // Success Redirect Layout
                <div className="space-y-6 text-center py-4">
                  
                  {/* Celebration feedback wrapper */}
                  <div className="space-y-3 p-5 bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl shadow-md">
                      ✓
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-base font-extrabold text-slate-900">
                        Thank you for subscribing!
                      </h4>
                      <p className="font-sans text-xs text-slate-500 leading-relaxed">
                        Your subscription has been recorded. Click the button below to visit our official Teachers Pay Teachers store to download your premium coping materials instantly!
                      </p>
                    </div>
                  </div>

                  {/* Single Clean Download Button */}
                  <a
                    href="https://www.teacherspayteachers.com/store/eunoia-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-display text-sm font-extrabold rounded-xl shadow-lg shadow-emerald-600/15 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2 text-center"
                    id="optin-tpt-download-btn"
                  >
                    <Download className="w-4 h-4 text-white animate-bounce" />
                    <span>Download on Teachers Pay Teachers (TPT)</span>
                  </a>

                  {/* Reset action */}
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

        </div>

        {/* SECTION FOR MAILERLITE EMAIL CAMPAIGN INTEGRATION TOOL */}
        <div className="mt-16 pt-12 border-t border-slate-200/60 max-w-5xl mx-auto" id="mailerlite-integration">
          <div className="text-center mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[11px] font-extrabold uppercase tracking-widest font-sans leading-none">
              <Mail className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              Email Campaign Integration (MailerLite)
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Automated Welcome Email Template
            </h3>
            <p className="font-sans text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Artisan-crafted with the same warm palette, typography, and styling of Eunoia Learning. Your subscribers will receive this beautifully responsive email as soon as they sign up on your landing page.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT: Quick setup steps and download controls (5 cols) */}
            <div className="lg:col-span-5 bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-5">
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center text-xs">1</span>
                    Configuration Instructions
                  </h4>
                  <ul className="text-xs text-slate-600 font-sans space-y-2.5 list-none pl-1">
                    <li className="flex gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Create a MailerLite automation triggered when a user joins your subscription form.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Choose <strong>HTML Editor</strong> or drag in a custom HTML block to write custom code.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>Click the copy button below, then paste the code directly inside your email message.</span>
                    </li>
                  </ul>
                </div>

                {/* MailerLite Dynamic merge tags mapping note */}
                <div className="p-4 bg-orange-50/40 rounded-2xl border border-orange-100 space-y-2 text-left">
                  <h5 className="font-display text-[10px] font-extrabold text-orange-900 tracking-wider uppercase">
                    🛠️ Integrated Dynamic Variables:
                  </h5>
                  <div className="space-y-1.5 font-mono text-[10px] text-slate-600 leading-snug">
                    <p><span className="text-teal-600 font-bold">&#123;$name&#125;</span> - Subscriber's first name.</p>
                    <p><span className="text-teal-600 font-bold">&#123;$unsubscribe&#125;</span> - Legal unsubscribe link.</p>
                  </div>
                </div>
              </div>

              {/* Download / Copy action toolbar buttons */}
              <div className="space-y-3 pt-6 lg:pt-0">
                <button
                  onClick={handleCopyTemplate}
                  className={`w-full py-3.5 px-5 flex items-center justify-center gap-2 ${
                    isTemplateCopied ? "bg-emerald-600 text-white" : "bg-slate-950 hover:bg-slate-850 text-white"
                  } font-display text-xs font-extrabold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer`}
                >
                  {isTemplateCopied ? (
                    <>
                      <Check className="w-4 h-4 text-white animate-bounce" />
                      <span>HTML Code Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Email HTML Code</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={handleDownloadTemplate}
                    className="py-3 px-4 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white font-display text-xs font-bold rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-100" />
                    <span>Download .html</span>
                  </button>

                  <a
                    href="./mailerlite_template.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 flex items-center justify-center gap-1.5 bg-transparent hover:bg-slate-50 text-slate-700 border-2 border-slate-100 font-display text-xs font-extrabold rounded-xl transition-all shadow-xs active:scale-98 cursor-pointer text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    <span>View Full Preview</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Live email template sandbox render device mockups (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 rounded-[2.5rem] border border-slate-200/50 p-6 flex flex-col items-center justify-center min-h-[460px]">
              
              {/* Device switcher tabs */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200/60 shadow-xs mb-4">
                <button
                  onClick={() => setPreviewDevice("desktop")}
                  className={`py-1.5 px-3.5 font-display text-[10px] font-extrabold rounded-full transition-all cursor-pointer ${
                    previewDevice === "desktop" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  🖥️ Desktop
                </button>
                <button
                  onClick={() => setPreviewDevice("mobile")}
                  className={`py-1.5 px-3.5 font-display text-[10px] font-extrabold rounded-full transition-all cursor-pointer ${
                    previewDevice === "mobile" ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  📱 Mobile
                </button>
              </div>

              {/* Frame simulated container styled inside standard shell wrapper */}
              <div
                className={`w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-500 flex flex-col ${
                  previewDevice === "mobile" ? "max-w-[340px] h-[340px]" : "max-w-full h-[340px]"
                }`}
              >
                {/* Browser top-bar indicator */}
                <div className="bg-slate-50 border-b border-slate-100 py-2 px-4 flex items-center gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-mono text-slate-400 ml-3 truncate">
                    To: {"{"}$email{"}"} • eunoia_welcome.html
                  </span>
                </div>

                {/* Real-time HTML sandbox renderer frame */}
                <iframe
                  title="MailerLite Email Preview Frame"
                  srcDoc={MAILERLITE_TEMPLATE_HTML}
                  className="w-full flex-1 border-none bg-slate-50"
                  sandbox="allow-popups allow-popups-to-escape-sandbox"
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
