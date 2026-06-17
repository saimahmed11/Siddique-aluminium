import { Shield, Home, Building2, Flame, Layers, AppWindow, Sparkles } from "lucide-react";

// Real generated commercial thumbnail
const COMMERCIAL_BG_IMAGE = "/src/assets/images/commercial_glass_facade_1781699883209.jpg";

export default function ServicesGrid() {
  const handleBallparkClick = (type: string) => {
    const estimateSec = document.getElementById("estimate");
    if (estimateSec) {
      estimateSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-20 lg:py-24 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase bg-sky-50 px-3 py-1 rounded-full">
            Our Solutions Catalog
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight mt-4 mb-4">
            Custom Aluminium & Structural Glass
          </h2>
          <p className="font-sans text-zinc-600 text-sm sm:text-base">
            Engineered with certified alloys, premium European accessories, and certified tempered glass systems. Split by utility to streamline your residential or commercial workspace build in Lahore.
          </p>
        </div>

        {/* Dual Pillar Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* COLUMN A: RESIDENTIAL SOLUTIONS */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/60 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-sky-500/10 text-sky-600 rounded">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-zinc-900 leading-tight">
                    Residential Solutions
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 mt-0.5">
                    Luxury aesthetics, security, & thermal comfort for your home.
                  </p>
                </div>
              </div>

              {/* Sub-item stack */}
              <div className="space-y-6 mb-10">
                {/* Slimline Option */}
                <div className="p-4 rounded bg-white border border-zinc-200/50 hover:shadow-sm transition-shadow">
                  <span className="font-mono text-[9px] font-semibold text-sky-600 tracking-wider block mb-1">
                    01 // RECOMMENDED FOR DHA PHASES
                  </span>
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    Slimline & Thermal-break Windows
                  </h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    Super thin profile-lines mimicking sleek European architecture. Built with 2.0mm Prime/Chawla gauges and integrated vacuum air seals.
                  </p>
                  <div className="mt-2.5 flex items-center space-x-4 text-[10px] font-mono text-zinc-500">
                    <span>• Prime / Pakistan Aluminium</span>
                    <span>• Double-Glazed Ready</span>
                  </div>
                </div>

                {/* Glass Shower cabin */}
                <div className="p-4 rounded bg-white border border-zinc-200/50 hover:shadow-sm transition-shadow">
                  <span className="font-mono text-[9px] font-semibold text-sky-600 tracking-wider block mb-1">
                    02 // CUSTOM STAINLESS STEEL HARDWARE
                  </span>
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    Frameless Glass Shower Cabins
                  </h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    Made with high-impact 10mm to 12mm thick premium tempered glass. Hand-polished corner joints and premium water-resistant seals.
                  </p>
                  <div className="mt-2.5 flex items-center space-x-4 text-[10px] font-mono text-zinc-500">
                    <span>• 10mm-12mm Tempered</span>
                    <span>• Brass Hinges & Handles</span>
                  </div>
                </div>

                {/* Aluminum Safety Doors */}
                <div className="p-4 rounded bg-white border border-zinc-200/50 hover:shadow-sm transition-shadow">
                  <span className="font-mono text-[9px] font-semibold text-zinc-500 tracking-wider block mb-1">
                    03 // MAXIMUM SECURITY SPEC
                  </span>
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    Aluminium Safety Doors & Grills
                  </h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    Heavier alloys containing multi-point safety locks. Reinforced structural grid to block break-ins while keeping elegant visual alignment.
                  </p>
                </div>

                {/* Glass Staircases */}
                <div className="p-4 rounded bg-white border border-zinc-200/50 hover:shadow-sm transition-shadow">
                  <span className="font-mono text-[9px] font-semibold text-zinc-500 tracking-wider block mb-1">
                    04 // STRUCTURAL BALUSTRADES
                  </span>
                  <h4 className="font-sans font-bold text-sm text-zinc-900">
                    Tempered Glass Railings & Staircases
                  </h4>
                  <p className="font-sans text-xs text-zinc-600 mt-1">
                    Secured with heavy stainless steel base clamps or minimal structural channels. Gives balconies superb transparency and clean geometric lines.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleBallparkClick("residential")}
              id="quote-residential-catalogue-btn"
              className="w-full py-3.5 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 font-sans text-xs font-bold tracking-wider uppercase rounded transition-colors text-center cursor-pointer"
            >
              Configure Residential Estimate
            </button>
          </div>

          {/* COLUMN B: COMMERCIAL & STRUCTURAL */}
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white border border-zinc-800 shadow-xl flex flex-col justify-between text-left relative overflow-hidden">
            
            {/* Visual accent backdrop for commercial curtain wall - uses generated photo */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
              <img
                src={COMMERCIAL_BG_IMAGE}
                alt="Commercial glass curtain wall Lahores Best structural builders"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-sky-500/20 text-sky-400 rounded">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-white leading-tight">
                    Commercial & Structural
                  </h3>
                  <p className="font-sans text-xs text-sky-300 mt-0.5">
                    Structural facades & high-load partitioning layouts.
                  </p>
                </div>
              </div>

              {/* Sub-item stack */}
              <div className="space-y-6 mb-10">
                {/* Double-Glazed Curtain Wall */}
                <div className="p-4 rounded bg-white/[0.03] border border-white/10 hover:border-sky-500/30 transition-all">
                  <span className="font-mono text-[9px] font-semibold text-sky-400 tracking-wider block mb-1">
                    01 // COMMERCIAL SIGNATURE COATING
                  </span>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Double-Glazed Curtain Walls & Facades
                  </h4>
                  <p className="font-sans text-xs text-zinc-300 mt-1">
                    Engineered for high wind load coefficients near Cantonment and Bedian flatlands. Structural glass panes bonded with certified silicone adhesive for lifetime safety.
                  </p>
                  <div className="mt-2.5 flex items-center space-x-4 text-[10px] font-mono text-zinc-500">
                    <span>• Prime Heavy Gauge Profiles</span>
                    <span>• High Solar Reflection</span>
                  </div>
                </div>

                {/* Shopfronts and automatic doors */}
                <div className="p-4 rounded bg-white/[0.03] border border-white/10 hover:border-sky-500/30 transition-all">
                  <span className="font-mono text-[9px] font-semibold text-sky-400 tracking-wider block mb-1">
                    02 // AUTOMATIC GLASS RUNNERS
                  </span>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Commercial Shopfronts & Automatic Doors
                  </h4>
                  <p className="font-sans text-xs text-zinc-300 mt-1">
                    Heavy load floor springs, automatic motion sensors and high-frequency tempered safety standards. Engineered to survive millions of compression cycles.
                  </p>
                </div>

                {/* Spider Glass Systems */}
                <div className="p-4 rounded bg-white/[0.03] border border-white/10 hover:border-sky-500/30 transition-all">
                  <span className="font-mono text-[9px] font-semibold text-zinc-500 tracking-wider block mb-1">
                    03 // FRAMELESS SPIDER SYSTEM
                  </span>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Spider Glass Structural Systems
                  </h4>
                  <p className="font-sans text-xs text-zinc-300 mt-1">
                    Stainless steel Spider fitting connectors anchoring toughened safety glass to structural steel tubes or columns. Beautiful futuristic floating glass look.
                  </p>
                </div>

                {/* Office partitions */}
                <div className="p-4 rounded bg-white/[0.03] border border-white/10 hover:border-sky-500/30 transition-all">
                  <span className="font-mono text-[9px] font-semibold text-zinc-550 block mb-1">
                    04 // SOUND ISOLATION LAB
                  </span>
                  <h4 className="font-sans font-bold text-sm text-white">
                    Office Cabin Partitioning
                  </h4>
                  <p className="font-sans text-xs text-zinc-300 mt-1">
                    Minimalist black profiles featuring acoustic dampening borders. Create pristine, distraction-free meeting zones in Lahore corporate centers.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleBallparkClick("commercial")}
              id="quote-commercial-catalogue-btn"
              className="relative z-10 w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-sans text-xs font-bold tracking-wider uppercase rounded transition-transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Configure Commercial Estimate
            </button>
          </div>
        </div>

        {/* Technical standards badge panel to build immediate safety credibility */}
        <div className="mt-20 p-6 rounded-xl border border-zinc-200 bg-zinc-50 flex flex-col md:flex-row items-center justify-between text-left gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-zinc-900 text-white rounded-full shrink-0">
              <Shield className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-zinc-900 uppercase tracking-tight">
                Our Raw Material Guarantee
              </p>
              <p className="font-sans text-xs text-zinc-650 mt-0.5">
                We strictly use 1st-grade aluminium profiles conforming to local elite specifications (Chawla or Prime Standards). Absolutely no cheap unbranded material, zinc-recycled brittle alloys, or unsafe profiles.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-zinc-600 shrink-0">
            <span className="px-3 py-1.5 bg-white border border-zinc-200 rounded">
              CHAWLA STANDARDS
            </span>
            <span className="px-3 py-1.5 bg-white border border-zinc-200 rounded">
              PRIME CERTIFIED
            </span>
            <span className="px-3 py-1.5 bg-white border border-zinc-200 rounded">
              100% TEMPERED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
