import { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldCheck, Ruler, Landmark } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm py-3"
          : "bg-transparent border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 border-2 border-sky-500 rounded bg-gradient-to-br from-white/20 to-sky-500/10 backdrop-blur-sm">
              <span className="font-mono text-lg font-bold text-sky-600">S</span>
              <div className="absolute inset-0.5 border border-dashed border-sky-450/40 rounded-sm"></div>
            </div>
            <div>
              <span
                className={`block font-sans font-bold tracking-tight text-lg leading-none ${
                  scrolled ? "text-zinc-900" : "text-white"
                }`}
              >
                SIDDIQUE
              </span>
              <span className="block font-mono text-[9px] tracking-widest uppercase text-sky-600 font-semibold">
                Aluminium & Glass
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className={`font-sans text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer ${
                scrolled ? "text-zinc-600" : "text-zinc-200"
              }`}
            >
              Services & Products
            </button>
            <button
              onClick={() => scrollToSection("selector")}
              className={`font-sans text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer ${
                scrolled ? "text-zinc-600" : "text-zinc-200"
              }`}
            >
              Material Tool
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className={`font-sans text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer ${
                scrolled ? "text-zinc-600" : "text-zinc-200"
              }`}
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("map-section")}
              className={`font-sans text-sm font-medium transition-colors hover:text-sky-500 cursor-pointer ${
                scrolled ? "text-zinc-600" : "text-zinc-200"
              }`}
            >
              Workshop Map
            </button>
          </nav>

          {/* Call / Action Desk */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+923214567891"
              id="header-phone-desktop"
              className={`flex items-center space-x-2 px-3 py-1.5 border rounded-full text-xs font-mono font-medium transition-colors ${
                scrolled
                  ? "border-zinc-200 text-zinc-700 bg-zinc-50 hover:bg-zinc-100"
                  : "border-white/20 text-white bg-white/5 hover:bg-white/10"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
              <span>+92 321 4567891</span>
            </a>

            <button
              onClick={() => scrollToSection("estimate")}
              id="header-cta-desktop"
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-sans text-xs font-semibold rounded shadow-sm hover:shadow-md transition-all uppercase tracking-wider"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="tel:+923214567891"
              className={`p-2 rounded-full border ${
                scrolled ? "border-zinc-200 text-zinc-700" : "border-white/10 text-white"
              }`}
              title="Call Workshop"
            >
              <Phone className="w-4 h-4 text-sky-500" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded border cursor-pointer ${
                scrolled ? "border-zinc-200 text-zinc-800" : "border-white/10 text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl py-4 px-4 space-y-3 z-40 transition-all">
          <div className="grid grid-cols-1 gap-2 text-left">
            <button
              onClick={() => scrollToSection("products")}
              className="py-2.5 px-3 text-left font-sans text-sm font-medium text-zinc-800 hover:bg-zinc-50 rounded"
            >
              Services & Products
            </button>
            <button
              onClick={() => scrollToSection("selector")}
              className="py-2.5 px-3 text-left font-sans text-sm font-medium text-zinc-800 hover:bg-zinc-50 rounded"
            >
              Interactive Selector
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="py-2.5 px-3 text-left font-sans text-sm font-medium text-zinc-800 hover:bg-zinc-50 rounded"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection("map-section")}
              className="py-2.5 px-3 text-left font-sans text-sm font-medium text-zinc-800 hover:bg-zinc-50 rounded"
            >
              Workshop Location & Map
            </button>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex flex-col space-y-2">
            <a
              href="tel:+923214567891"
              className="flex items-center justify-center space-x-2 py-2.5 border border-zinc-200 rounded text-sm font-mono font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100"
            >
              <Phone className="w-4 h-4 text-sky-500" />
              <span>Call +92 321 4567891</span>
            </a>
            <button
              onClick={() => scrollToSection("estimate")}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-center font-sans text-xs font-semibold rounded uppercase tracking-wider"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
