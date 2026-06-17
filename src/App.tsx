import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import MaterialSelector from "./components/MaterialSelector";
import WorkingProcess from "./components/WorkingProcess";
import EstimateWidget from "./components/EstimateWidget";
import Footer from "./components/Footer";
import { MessageCircle, PhoneCall, HelpCircle, CheckCircle } from "lucide-react";

export default function App() {
  const [selectedFinishId, setSelectedFinishId] = useState<string>("black");
  const [selectedGlassId, setSelectedGlassId] = useState<string>("clear");

  const handleSelectCombination = (finishId: string, glassId: string) => {
    setSelectedFinishId(finishId);
    setSelectedGlassId(glassId);
  };

  const handleFloatWidgetClick = () => {
    const estimateSec = document.getElementById("estimate");
    if (estimateSec) {
      estimateSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="website-root-wrapper" className="min-h-screen bg-zinc-950 font-sans tracking-normal overflow-x-hidden selection:bg-sky-500 selection:text-white antialiased">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Presentation */}
      <Hero />

      {/* 3. Products Grid split dual pillar */}
      <ServicesGrid />

      {/* 4. Interactive Material Customizer */}
      <MaterialSelector onSelectCombination={handleSelectCombination} />

      {/* 5. Reassurance & Work Process */}
      <WorkingProcess />

      {/* 6. Calibration Tool / Estimate Form */}
      <EstimateWidget syncedFinishId={selectedFinishId} syncedGlassId={selectedGlassId} />

      {/* 7. Footer & Physical Location Google Map */}
      <Footer />

      {/* 8. Conversion Booster: Floating Pulsating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 pointer-events-none">
        
        {/* Pulsating badge tooltip */}
        <div className="bg-zinc-900/90 text-white border border-zinc-800 backdrop-blur-md rounded px-3 py-1.5 shadow-xl text-[10px] font-mono uppercase tracking-wider font-semibold pointer-events-auto flex items-center space-x-1.5 animate-[bounce_3s_infinite_alternate] select-none">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
          <span>WhatsApp Quick Rate!</span>
        </div>

        {/* The Action Button */}
        <button
          onClick={handleFloatWidgetClick}
          id="floating-whatsapp-widget"
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 pointer-events-auto select-none border-2 border-white/25 animate-[pulse_2.5s_infinite]"
          title="Direct WhatsApp Estimate with Siddique"
        >
          <MessageCircle className="w-7 h-7 fill-white text-emerald-600 shrink-0" />
        </button>
      </div>
    </div>
  );
}
