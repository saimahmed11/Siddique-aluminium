import { MapPin, Clock, ShieldCheck, Mail, Phone, Landmark, Compass, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="map-section" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-20 pb-8 text-left relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info + Responsive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* COLUMN A: Brand, Address & Times (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Brand Header */}
              <div className="flex items-center space-x-2.5 mb-6">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-sky-500 rounded bg-zinc-900">
                  <span className="font-mono text-lg font-bold text-sky-400">S</span>
                </div>
                <div>
                  <span className="block font-sans font-bold tracking-tight text-white text-lg leading-none">
                    SIDDIQUE ALUMINIUM
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest uppercase text-sky-400 font-semibold mt-1">
                    & Glass Fabrications
                  </span>
                </div>
              </div>

              <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-md mb-8">
                Providing premium architectural glazing support to DHA, Cantonment, Bedian Road, and larger Lahore communities. Direct-workshop procurement models delivering maximum safety without dealership surcharges.
              </p>

              {/* Physical details list */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-xs text-zinc-300">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-sans">Physical Workshop Showroom:</strong>
                    <span className="font-sans text-zinc-400">
                      Siddique Aluminium & Glass, Main Bedian Road, Opposite DHA Phase 6 Entrance Corridor, Lahore, Punjab, Pakistan.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-zinc-300">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-sans">Workshop Operating Hours:</strong>
                    <span className="font-sans text-zinc-400">
                      Monday to Saturday: 9:00 AM — 7:30 PM (Sunday Closed for Maintenance)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs text-zinc-300">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-sans">Direct Hotline Phone:</strong>
                    <span className="font-sans text-zinc-400 font-mono">
                      +92 321 4567891 / +92 342 9876543
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Trust badging */}
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center space-x-4 max-w-md">
              <ShieldCheck className="w-8 h-8 text-sky-400 shrink-0" />
              <div className="text-xs">
                <strong className="text-white block font-sans">Guaranteed Pakistan Aluminium Grade</strong>
                <p className="text-zinc-500 text-[11px] font-sans">
                  We verify each alloy extrusion using metal calibration meters. No unbranded scrap alloys allowed.
                </p>
              </div>
            </div>

          </div>

          {/* COLUMN B: MAP INTEGRATION (6 cols) */}
          <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex flex-col justify-between shadow-2xl min-h-[350px]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 mb-3">
              <span className="font-mono text-[10px] uppercase font-bold text-sky-400 tracking-wider flex items-center space-x-2">
                <Compass className="w-4 h-4 text-sky-400" />
                <span>Responsive Google Maps Sync</span>
              </span>
              <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                ● LIVE LOCATION
              </span>
            </div>

            {/* Embedded maps iframe focusing Bedian Road, Lahore */}
            <div className="flex-1 roundedoverflow-hidden border border-zinc-805/50 relative bg-zinc-950">
              <iframe
                title="Siddique Aluminium & Glass Workshop Bedian Road Lahore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.197905151253!2d74.40801053915155!3d31.44719543884814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901416e8facaf%3A0xe53be0aef95f9df6!2sBedian%20Rd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 filter invert contrast-125 saturate-50 rounded"
              ></iframe>
            </div>

            <div className="p-3 text-left">
              <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
                📍 <strong>Workshop Directions:</strong> Head straight down Bedian Road towards Phase 6 Block C. We are located right on the main commercial strip. Safe parking space available for visiting architects and designers.
              </p>
            </div>
          </div>

        </div>

        {/* ORGANIC SEO LINK DIRECTORY BLOCK FOR BEDIAN ROAD & DHA CITATIONS */}
        <div className="border-t border-zinc-900 pt-10 pb-6 mb-8 text-left">
          <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">
            Local Lahore SEO Service Directory & Verification
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] text-zinc-600 font-sans leading-relaxed">
            <div>
              <strong className="text-zinc-500 block mb-1">Local Aluminium Services:</strong>
              <p>• Best aluminum windows Bedian Road Lahore</p>
              <p>• Cheap aluminum profiles Lahore</p>
              <p>• Chawla/Prime profiles Lahore distributor</p>
            </div>
            <div>
              <strong className="text-zinc-500 block mb-1">DHA Sanitary & Fitting:</strong>
              <p>• Glass shower cabin installation DHA Lahore</p>
              <p>• Tempered glass railings Lahore Cantt</p>
              <p>• Stainless steel glass balustrades Lahore</p>
            </div>
            <div>
              <strong className="text-zinc-500 block mb-1">Commercial Contracting:</strong>
              <p>• Commercial glass front builders Lahore</p>
              <p>• Double-glazed curtain wall Cantt Lahore</p>
              <p>• Spider glass facades Bedian Road Office</p>
            </div>
            <div>
              <strong className="text-zinc-500 block mb-1">Local Communities Served:</strong>
              <p>• DHA Phase 5, Phase 6, Phase 8, Phase 9 Prism</p>
              <p>• Askari Colony 10 & 11, Cavalry Ground</p>
              <p>• Bedian Road Bypass, Paragon & Green City</p>
            </div>
          </div>
        </div>

        {/* Sub-floor: Copyright and scroll link */}
        <div className="border-t border-zinc-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-sans text-zinc-600">
            © 2026 Siddique Aluminium & Glass. All Rights Reserved. Fabrications backed by Pakistan Aluminium and certified thermal-break parameters.
          </p>

          <div className="flex items-center space-x-6 text-zinc-500 font-sans">
            <button
              onClick={handleScrollToTop}
              className="hover:text-white transition-colors cursor-pointer font-serif text-[11px] font-semibold"
            >
              Back to Drafting Desk ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
