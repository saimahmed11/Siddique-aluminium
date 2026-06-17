import { useState } from "react";
import { AluminiumFinish, GlassType } from "../types";
import { Hammer, Info, Check, CornerRightDown } from "lucide-react";

const FINISHES: AluminiumFinish[] = [
  {
    id: "black",
    name: "Ano-Charcoal Black",
    hex: "#121214",
    description: "Ultra-matte powder coat, deep heavy metal aesthetic. Extremely popular for modern DHA residences.",
    gaugeOptions: ["1.6mm (Light-DHA spec)", "2.0mm (Chawla Premium)", "3.0mm ( Pakistan Aluminium Heavy Facade)"]
  },
  {
    id: "bronze",
    name: "Architectural Bronze",
    hex: "#3f3024",
    description: "Deep rustic metallic bronze. Combines brilliantly with off-white marble or concrete walls.",
    gaugeOptions: ["1.6mm (Standard)", "2.0mm (Prime Premium)"]
  },
  {
    id: "silver",
    name: "Satin Silver Chrome",
    hex: "#8e9196",
    description: "Industrial anodized raw silver. Excellent corrosion resistance and timeless sleek feel.",
    gaugeOptions: ["1.2mm (Economy)", "1.6mm (Standard)", "2.0mm (Chawla Heavy)"]
  },
  {
    id: "champagne",
    name: "Premium Champagne",
    hex: "#a3907a",
    description: "Luxury champagne gold metallic. Sophisticated colorway that creates elite curb-appeal.",
    gaugeOptions: ["2.0mm (Chawla Luxury Custom)", "2.2mm (Prime Special Edition)"]
  }
];

const GLASS_TYPES: GlassType[] = [
  {
    id: "clear",
    name: "Tempered Clear Glass",
    className: "bg-sky-100/20 backdrop-blur-[1px]",
    bgColor: "rgba(186, 230, 253, 0.2)",
    opacity: 0.2,
    description: "Maximum transparency, 100% heat-strengthened. Best for living rooms looking into garden patios.",
    thicknessOptions: ["5mm Single", "8mm Heavy Duty", "12mm Structural Glass", "24mm Double-Glazed Vacuum"]
  },
  {
    id: "frosted",
    name: "Sandblasted Frosted",
    className: "bg-white/45 backdrop-blur-lg border border-white/60",
    bgColor: "rgba(255, 255, 255, 0.5)",
    opacity: 0.6,
    description: "Complete visual privacy with diffuse soft light transmission. Perfect for frameless shower cabins and office partitions.",
    thicknessOptions: ["8mm Tempered", "10mm Heavy Duty", "12mm Toughened Frameless"]
  },
  {
    id: "tinted",
    name: "Classic Bronze Solar Tint",
    className: "bg-amber-950/40 backdrop-blur-[2px]",
    bgColor: "rgba(69, 26, 3, 0.45)",
    opacity: 0.45,
    description: "Blocks 78% solar heat glare, drastically reducing Lahore air-conditioning load. Cozy elegant luxury.",
    thicknessOptions: ["6mm Air-conditioned Grade", "24mm Double-Glazed Insulation Panel"]
  },
  {
    id: "reflective",
    name: "Reflective Blue Mirror Glass",
    className: "bg-blue-900/50 backdrop-blur-[1px] brightness-125 saturate-150 shadow-inner",
    bgColor: "rgba(30, 58, 138, 0.55)",
    opacity: 0.55,
    description: "One-way mirror visibility during daytime. Protects privacy from streets while rejecting high Pakistani summer radiation.",
    thicknessOptions: ["6mm High-solar-reflective", "12mm Heavy Curtain Wall Panel"]
  }
];

interface MaterialSelectorProps {
  onSelectCombination: (finishId: string, glassId: string) => void;
}

export default function MaterialSelector({ onSelectCombination }: MaterialSelectorProps) {
  const [selectedFinish, setSelectedFinish] = useState<AluminiumFinish>(FINISHES[0]);
  const [selectedGlass, setSelectedGlass] = useState<GlassType>(GLASS_TYPES[0]);
  const [activeGauge, setActiveGauge] = useState<string>(FINISHES[0].gaugeOptions[1] || FINISHES[0].gaugeOptions[0]);
  const [activeThickness, setActiveThickness] = useState<string>(GLASS_TYPES[0].thicknessOptions[1] || GLASS_TYPES[0].thicknessOptions[0]);

  const handleFinishChange = (finish: AluminiumFinish) => {
    setSelectedFinish(finish);
    setActiveGauge(finish.gaugeOptions[1] || finish.gaugeOptions[0]);
  };

  const handleGlassChange = (glass: GlassType) => {
    setSelectedGlass(glass);
    setActiveThickness(glass.thicknessOptions[1] || glass.thicknessOptions[0]);
  };

  const handleApplyCombo = () => {
    onSelectCombination(selectedFinish.id, selectedGlass.id);
    const estimateSec = document.getElementById("estimate");
    if (estimateSec) {
      estimateSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="selector" className="py-20 lg:py-24 bg-zinc-900 border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase bg-sky-400/10 px-3 py-1 rounded-full">
            Drafting & Configuration Tool
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-4">
            Interactive Material Selector
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Select aluminium frames and premium glass specifications used by Siddique. Visualize your customized residential window in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Interactive Live Preview Box */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-xl border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[450px]">
            {/* Corner Drafting Marks */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-700/60 font-mono text-[8px] text-zinc-600 p-1">0,0</div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-700/60 font-mono text-[8px] text-zinc-600 p-1 text-right">W_MAX</div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-700/60 font-mono text-[8px] text-zinc-600 p-1 flex items-end">0,H</div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-700/60 font-mono text-[8px] text-zinc-600 p-1 flex items-end justify-end">W,H</div>

            {/* Simulated Window Frame */}
            <div className="flex-1 flex items-center justify-center py-6">
              <div
                className="w-56 h-72 border-[12px] rounded shadow-2xl relative transition-all duration-500 bg-zinc-800 flex flex-col overflow-hidden"
                style={{ borderColor: selectedFinish.hex }}
              >
                {/* Horizontal dividing aluminium mullion representing structural safety standards */}
                <div
                  className="w-full h-2 shadow-sm relative z-20"
                  style={{ backgroundColor: selectedFinish.hex }}
                ></div>

                {/* Upper window pane */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                  {/* Dynamic Glass rendering */}
                  <div className={`absolute inset-0 transition-all duration-500 z-10 ${selectedGlass.className}`}></div>

                  {/* Simulated glare shine effect */}
                  <div className="absolute -inset-10 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent rotate-45 pointer-events-none z-15 transform translate-x-2 translate-y-2"></div>

                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest z-20 select-none text-center px-2">
                    {selectedGlass.name.split(" ")[0]} 
                  </span>
                </div>

                {/* Lower window pane */}
                <div className="flex-1 relative overflow-hidden border-t border-zinc-800/20 flex items-center justify-center">
                  <div className={`absolute inset-0 transition-all duration-500 z-10 ${selectedGlass.className}`}></div>
                  <div className="absolute -inset-10 bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent rotate-45 pointer-events-none z-15 transform -translate-x-3 -translate-y-3"></div>
                  <span className="font-mono text-[9px] text-sky-400 font-semibold uppercase tracking-widest z-20 select-none">
                    TEMPERED
                  </span>
                </div>
              </div>
            </div>

            {/* Readout parameters block */}
            <div className="border-t border-zinc-800 pt-4 mt-4 text-left">
              <span className="font-mono text-[10px] text-sky-400 font-semibold uppercase tracking-widest block mb-2">
                Draft Specification Readout
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <p className="text-zinc-400 font-sans">
                  Frame: <span className="text-white font-medium">{selectedFinish.name}</span>
                </p>
                <p className="text-zinc-400 font-sans">
                  Guaranteed Gauge: <span className="text-white font-mono font-medium">{activeGauge.split(" ")[0]}</span>
                </p>
                <p className="text-zinc-400 font-sans">
                  Glass: <span className="text-white font-medium">{selectedGlass.name}</span>
                </p>
                <p className="text-zinc-400 font-sans">
                  Thickness/Spec: <span className="text-white font-mono font-medium">{activeThickness}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Selector Interface */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* FINISHES SELECTION RANGE */}
              <div className="mb-8">
                <h3 className="font-sans font-semibold text-lg text-white mb-1 flex items-center space-x-2">
                  <span>1. Choose Anodized Aluminium Profile</span>
                </h3>
                <p className="text-zinc-400 text-xs mb-4">
                  All alloys processed down to Pakistani standards (Chawla or Prime).
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FINISHES.map((finish) => {
                    const isSelected = selectedFinish.id === finish.id;
                    return (
                      <button
                        key={finish.id}
                        onClick={() => handleFinishChange(finish)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          isSelected
                            ? "bg-zinc-800/80 border-sky-500 shadow-lg"
                            : "bg-zinc-950/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 mb-2">
                          <span
                            className="w-5 h-5 rounded-md border border-zinc-650 inline-block shadow-inner"
                            style={{ backgroundColor: finish.hex }}
                          ></span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 ml-auto" />}
                        </div>
                        <span className="block text-xs font-semibold text-white tracking-wide leading-none truncate">
                          {finish.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 p-3 bg-zinc-950 rounded border border-zinc-850 flex items-start space-x-3 text-xs">
                  <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium leading-normal">{selectedFinish.description}</p>
                    {/* Gauge selections */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-zinc-500 font-mono text-[9px] uppercase font-semibold">GAUGE GURANTEE:</span>
                      {selectedFinish.gaugeOptions.map((gSpec) => (
                        <button
                          key={gSpec}
                          onClick={() => setActiveGauge(gSpec)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            activeGauge === gSpec
                              ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                          }`}
                        >
                          {gSpec}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* GLASS TYPES SELECTION RANGE */}
              <div className="mb-8">
                <h3 className="font-sans font-semibold text-lg text-white mb-1">
                  2. Choose Glass Engineering Type
                </h3>
                <p className="text-zinc-400 text-xs mb-4">
                  Tempering parameters and thickness designed for wind load, security, and heat reduction in Lahore.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {GLASS_TYPES.map((glass) => {
                    const isSelected = selectedGlass.id === glass.id;
                    return (
                      <button
                        key={glass.id}
                        onClick={() => handleGlassChange(glass)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          isSelected
                            ? "bg-zinc-800/80 border-sky-500 shadow-lg"
                            : "bg-zinc-950/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 mb-2">
                          <span
                            className={`w-6 h-4 rounded border border-zinc-600 block shadow ${glass.className}`}
                            style={{ backgroundColor: glass.bgColor }}
                          ></span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 ml-auto" />}
                        </div>
                        <span className="block text-xs font-semibold text-white tracking-wide leading-none truncate">
                          {glass.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 p-3 bg-zinc-950 rounded border border-zinc-850 flex items-start space-x-3 text-xs">
                  <Hammer className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-zinc-300 font-medium leading-normal">{selectedGlass.description}</p>
                    {/* Glass thickness selections */}
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-zinc-500 font-mono text-[9px] uppercase font-semibold">THICKNESS OPTION:</span>
                      {selectedGlass.thicknessOptions.map((tSpec) => (
                        <button
                          key={tSpec}
                          onClick={() => setActiveThickness(tSpec)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                            activeThickness === tSpec
                              ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                              : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                          }`}
                        >
                          {tSpec}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Apply combo Button */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-zinc-400 text-xs text-center sm:text-left">
                <p>Selected combination guarantees <span className="text-white font-medium">Chawla or Prime profiles</span>.</p>
                <p>Estimated in local workshop with zero intermediate dealer commission fees.</p>
              </div>

              <button
                onClick={handleApplyCombo}
                id="apply-configured-materials-btn"
                className="w-full sm:w-auto px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-sans text-xs font-bold tracking-wider uppercase rounded shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Draft Quote For This Build</span>
                <CornerRightDown className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
