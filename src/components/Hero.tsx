import { MapPin, ShieldCheck, Star } from "lucide-react";

// Using the exact generated asset path
const HERO_BG_IMAGE = "/src/assets/images/lahore_modern_villa_glass_1781699859414.jpg";

export default function Hero() {
  const handleCtaClick = () => {
    const estimateSec = document.getElementById("estimate");
    if (estimateSec) {
      estimateSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-zinc-950">
      {/* Background Image with Dark Vignette/Overlay for High Contrast & Readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Premium Aluminium Windows design Lahore"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 scale-105 motion-safe:animate-[pulse_12s_infinite_alternate]"
        />
        {/* Layered overlays to guarantee AA contrast for white text */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
        {/* Abstract blueprint grid overlay to emphasize alignment and geometry */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-between h-full">
        <div className="max-w-3xl text-left">
          {/* Trust Badge / Local Signal */}
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 rounded-full text-sky-400 font-mono text-xs uppercase tracking-wider mb-8">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Serving DHA, Cantonment & Bedian Road for over 18 years</span>
          </div>

          {/* Majestic Hero Copy */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Premium Aluminium & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-200">
              Glass Fabrications
            </span> <br />
            in Lahore
          </h1>

          <p className="font-sans text-zinc-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            From luxury residential slimline windows to high-tech double-glazed structural curtain walls. Built to Pakistan's highest architectural standards and installed with localized, mess-free precision.
          </p>

          {/* Elegant geometric CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-14">
            <button
              onClick={handleCtaClick}
              id="hero-primary-cta"
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-sans text-sm font-bold tracking-wider uppercase rounded shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Get Free Measurement & Quote
            </button>
            <a
              href="#selector"
              id="hero-secondary-cta"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-bold tracking-wider uppercase rounded border border-white/15 transition-colors text-center cursor-pointer"
            >
              Configure Window Finish
            </a>
          </div>
        </div>

        {/* Live Metrics Panel - Minimal, high-concept, local Workshop */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-sky-400 mb-4 font-semibold">
            SECURE YOUR TRUST · PROFESSIONAL RATINGS & METRICS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-left">
            <div className="p-4 rounded bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <span className="block font-mono text-3xl font-extrabold text-white leading-none">
                500+
              </span>
              <span className="block font-sans text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                Lahore Projects Completed
              </span>
            </div>
            <div className="p-4 rounded bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <span className="block font-mono text-3xl font-extrabold text-sky-400 leading-none flex items-center">
                100%
              </span>
              <span className="block font-sans text-xs text-zinc-400 mt-1 uppercase tracking-wider">
                Tempered Glass Standards
              </span>
            </div>
            <div className="p-4 rounded bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="block font-sans text-xs text-zinc-400 uppercase tracking-wider">
                DHA & Bedian Road Local Workshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
