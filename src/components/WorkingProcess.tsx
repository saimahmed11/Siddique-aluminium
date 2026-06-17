import { useState, ComponentType } from "react";
import { Check, ClipboardList, Scissors, Truck, Sparkles, ShieldAlert } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  localAspect: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Accurate Laser Measurement",
    subtitle: "Precision Consultation",
    description: "Our master estimator visits your site in DHA, Cantt, or Bedian Road with commercial laser distance meters. We measure your rough frame openings to the exact millimeter to ensure perfectly aligned airtight frames.",
    icon: ClipboardList,
    localAspect: "Free site visits near the Lahore Bedian Road corridor."
  },
  {
    number: "02",
    title: "Pre-Assembly & Fabrication",
    subtitle: "100% Off-Site Precision",
    description: "We execute raw profile cutting, milling, seal insertion, and automatic locking assembly entirely inside our local workshop. This prevents noisy, messy aluminium metal filings from turning up on your beautiful marble floors.",
    icon: Scissors,
    localAspect: "Fabricated using Chawla & Prime certified machines."
  },
  {
    number: "03",
    title: "Slight-Wrapped Shock Transport",
    subtitle: "Protected Transit Protocols",
    description: "We wrap every glass panel and frame in high-impact protective foam. Framed components are loaded into custom upright wooden-rubber A-frame racks to prevent standard micro-cracks from travel over Lahore's speed bumps.",
    icon: Truck,
    localAspect: "Custom vehicles configured for fragile structural glass."
  },
  {
    number: "04",
    title: "Protected Clean Installation",
    subtitle: "Mess-Free Delivery",
    description: "Our skilled installers cover your rooms with clean drop sheets. Frames are anchored with heavy-duty structural steel bolts, sealed with high-elasticity waterproof silicone, checked with visual level meters, and clean-vacuumed.",
    icon: Sparkles,
    localAspect: "All installers are local, verified experts who respect your home."
  }
];

export default function WorkingProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full">
            Our Care-First Framework
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-905 tracking-tight mt-4 mb-4">
            How We Demystify Installation
          </h2>
          <p className="font-sans text-zinc-650 text-sm sm:text-base">
            No messy cutting inside your house, no scratching of expensive tiles, and no missed deadlines. Here is our 100% transparent structured process.
          </p>
        </div>

        {/* Modular Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: ACTIVE STEP DETAIL PANEL */}
          <div className="lg:col-span-5 bg-white border border-zinc-200 shadow-lg rounded-xl p-6 sm:p-8 flex flex-col justify-between text-left transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-5xl font-extrabold text-sky-500/20 leading-none">
                  {STEPS[activeStep].number}
                </span>
                <span className="bg-sky-50 text-sky-700 text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-1 rounded border border-sky-100">
                  Step {activeStep + 1} of 4
                </span>
              </div>

              <h3 className="font-sans font-bold text-xl text-zinc-900 mb-1">
                {STEPS[activeStep].title}
              </h3>
              <p className="font-mono text-xs text-sky-600 font-semibold uppercase tracking-wider mb-4">
                {STEPS[activeStep].subtitle}
              </p>

              <p className="font-sans text-sm text-zinc-650 leading-relaxed mb-6">
                {STEPS[activeStep].description}
              </p>
            </div>

            {/* Local custom safeguard notice */}
            <div className="p-4 bg-sky-50/50 rounded border border-sky-100 flex items-start space-x-3 text-xs text-zinc-700">
              <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block font-sans">Siddique Local Safeguard:</span>
                <p className="mt-0.5 text-zinc-600 font-sans">{STEPS[activeStep].localAspect}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STEP INTERACTIVE ACCORDION / GRID CARD */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {STEPS.map((step, idx) => {
              const IconComponent = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-lg border text-left cursor-pointer transition-all ${
                    isActive
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-md"
                      : "bg-white text-zinc-900 border-zinc-200/80 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex sm:items-center space-x-4">
                    {/* Circle Indicator */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        isActive ? "bg-sky-500 text-white" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className={`font-sans font-bold text-sm tracking-tight ${isActive ? "text-white" : "text-zinc-900"}`}>
                          {step.title}
                        </h4>
                        <span className={`font-mono text-[9px] uppercase tracking-wider mt-0.5 sm:mt-0 font-medium ${isActive ? "text-sky-300" : "text-zinc-500"}`}>
                          {step.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick trust reassurance footer */}
            <div className="p-4 bg-amber-500/5 rounded border border-amber-550/15 flex items-start space-x-3 text-xs text-amber-800 text-left">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
              <p className="font-sans font-medium text-amber-900/90 leading-normal">
                <strong>Delayed Timelines Penalty Clause:</strong> If your customized installation gets delayed beyond the signed work agreement date, we refund <span className="font-bold underline text-rose-700">Rs. 2,000 for every single day</span> of progress lag. We value your schedule!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
