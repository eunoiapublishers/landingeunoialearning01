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
  const [downloading, setDownloading] = useState<boolean>(false);

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

  const handleDownloadPDF = async () => {
    try {
      setDownloading(true);
      setIsDemoPrinted(true);

      // Create high-resolution canvas matching standard A4/Letter aspect ratio
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 1680;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setDownloading(false);
        return;
      }

      // Configure high-quality rendering
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // 1. Fill solid background
      ctx.fillStyle = "#fffdf9"; // Soft cream
      ctx.fillRect(0, 0, 1200, 1680);

      // Helper for rounded corners
      const drawRoundedRect = (
        x: number,
        y: number,
        w: number,
        h: number,
        r: number,
        fill: boolean,
        stroke: boolean
      ) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
        if (fill) ctx.fill();
        if (stroke) ctx.stroke();
      };

      // 2. Draw outer thick orange alert margin
      ctx.strokeStyle = "#fed7aa"; // Orange 200
      ctx.lineWidth = 14;
      drawRoundedRect(30, 30, 1140, 1620, 48, false, true);

      // 3. Draw inner dashed orange border
      ctx.strokeStyle = "#ea580c"; // Orange 600
      ctx.lineWidth = 4;
      ctx.setLineDash([16, 12]);
      drawRoundedRect(48, 48, 1104, 1584, 34, false, true);
      ctx.setLineDash([]); // clear dash

      // 4. Draw Header Pill Badge
      ctx.fillStyle = "#f0fdf4"; // Teal 50
      ctx.strokeStyle = "#ccfbf1"; // Teal 100
      ctx.lineWidth = 3;
      drawRoundedRect(350, 100, 500, 54, 20, true, true);

      ctx.fillStyle = "#0f766e"; // Teal 700
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("✨ MY HOME & SCHOOL COPING GUIDE ✨", 600, 133);

      // 5. Hero Title
      ctx.fillStyle = "#0f172a"; // Slate 900
      ctx.font = "bold 44px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${childName}'s Calm Choices!`, 600, 222);

      // 6. Subtitle line
      ctx.fillStyle = "#475569"; // Slate 600
      ctx.font = "normal 21px sans-serif";
      
      const part1 = `When I feel `;
      ctx.textAlign = "right";
      ctx.fillText(part1, 450, 282);

      // Emotion badge
      const emotionText = triggerEmotion.toUpperCase();
      ctx.font = "bold 21px sans-serif";
      const emotionW = ctx.measureText(emotionText).width;

      ctx.fillStyle = "#fce7f3"; // Pink 100
      drawRoundedRect(464, 252, emotionW + 28, 40, 12, true, false);

      ctx.fillStyle = "#9d174d"; // Pink 800
      ctx.textAlign = "center";
      ctx.fillText(emotionText, 464 + (emotionW + 28) / 2, 280);

      ctx.fillStyle = "#475569"; // Slate 600
      ctx.font = "normal 21px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(", I can choose these visual steps:", 464 + emotionW + 38, 282);

      // Multi-line helper
      const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
        const words = text.split(" ");
        let line = "";
        let currentY = y;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + " ";
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, x, currentY);
            line = words[n] + " ";
            currentY += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, currentY);
      };

      // 7. Draw 2x2 Grid Layout for Strategies
      const xCoords = [105, 595];
      const yCoords = [340, 910];
      const boxW = 500;
      const boxH = 510;

      for (let i = 0; i < 4; i++) {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const bx = xCoords[col];
        const by = yCoords[row];

        const strategy = activeStrategies[i];

        if (strategy) {
          // Inner card background
          ctx.beginPath();
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "#fed7aa"; // Orange 200
          ctx.lineWidth = 4;
          drawRoundedRect(bx, by, boxW, boxH, 28, true, true);

          // Card header strip background
          ctx.fillStyle = "#fffbeb"; // Amber 50
          drawRoundedRect(bx + 4, by + 4, boxW - 8, 48, 24, true, false);
          ctx.fillRect(bx + 4, by + 28, boxW - 8, 24); // fill bottom rounding

          // Round circular number badge
          ctx.beginPath();
          ctx.fillStyle = "#0d9488"; // Teal 600
          ctx.arc(bx + 45, by + 28, 18, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 16px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`${i + 1}`, bx + 45, by + 34);

          // Strip Strategy Label Text
          ctx.fillStyle = "#0f172a"; // Slate 900
          ctx.font = "bold 18px sans-serif";
          ctx.textAlign = "left";
          const shortTitle = strategy.label.split(" ").slice(0, -1).join(" ");
          ctx.fillText(shortTitle, bx + 78, by + 34);

          // Giant Emoji visual
          ctx.font = "105px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(strategy.iconName, bx + 250, by + 195);

          // Subtitle Label Body
          ctx.fillStyle = "#1e293b"; // Slate 800
          ctx.font = "bold 23px sans-serif";
          ctx.textAlign = "center";
          wrapText(strategy.label, bx + 250, by + 270, boxW - 55, 30);

          // Footer Action Cue box
          ctx.fillStyle = "#fff7ed"; // Orange 50
          ctx.strokeStyle = "#ffedd5"; // Orange 100
          ctx.lineWidth = 1.5;
          drawRoundedRect(bx + 35, by + 380, boxW - 70, 95, 14, true, true);

          // Draw "ACTION STEP" stamp
          ctx.fillStyle = "#ea580c"; // Orange 600
          ctx.font = "bold 14px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("ACTION STEP", bx + boxW / 2, by + 408);

          ctx.fillStyle = "#475569"; // Slate 600
          ctx.font = "italic 16px sans-serif";
          ctx.fillText(`"${strategy.instruction}"`, bx + boxW / 2, by + 444);

        } else {
          // Empty state placeholder card
          ctx.beginPath();
          ctx.fillStyle = "#f8fafc";
          ctx.strokeStyle = "#cbd5e1";
          ctx.lineWidth = 3;
          ctx.setLineDash([8, 8]);
          drawRoundedRect(bx, by, boxW, boxH, 28, true, true);
          ctx.setLineDash([]);

          ctx.fillStyle = "#94a3b8";
          ctx.font = "bold 20px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("Empty Choice Slot", bx + 250, by + 255);
        }
      }

      // 8. Footer banner info stamp
      ctx.strokeStyle = "#fed7aa"; // Orange 200
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(105, 1515);
      ctx.lineTo(1095, 1515);
      ctx.stroke();

      ctx.fillStyle = "#64748b"; // Slate 500
      ctx.font = "bold 15px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("🌱 I am learning to take control of my feelings!", 105, 1555);

      ctx.fillStyle = "#0d9488"; // Teal 600
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("PROVIDED BY EUNOIA LEARNING", 1095, 1555);

      // Import jsPDF dynamically
      const { jsPDF } = await import("jspdf");

      // Generate PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [1200, 1680]
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, 1200, 1680, undefined, "FAST");
      pdf.save(`${childName.toLowerCase().replace(/\s+/g, "_")}_calm_choices.pdf`);

      setDownloading(false);
    } catch (err) {
      console.error("PDF generation failed: ", err);
      setDownloading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/20 via-orange-50/15 to-white border-y-2 border-orange-100/30" id="customizer">
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
                onClick={handleDownloadPDF}
                disabled={downloading}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 ${
                  downloading ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-400 cursor-pointer active:scale-98"
                } text-white font-display text-sm font-bold rounded-2xl shadow-md transition-all`}
                id="customizer-print-btn"
              >
                <Printer className={`w-4 h-4 ${downloading ? "animate-spin" : ""}`} />
                <span>{downloading ? "Generating High-Res PDF..." : "Download Printable Card (PDF)"}</span>
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
