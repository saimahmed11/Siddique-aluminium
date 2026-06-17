import React, { useState, useRef, useEffect } from "react";
import { Phone, ArrowRight, Calculator, Upload, Check, Landmark, MessageSquare, Trash2, ShieldCheck } from "lucide-react";
import { EstimateFormData } from "../types";

const SERVICE_RATES: { [key: string]: { name: string; base: number } } = {
  "slimline-window": { name: "Slimline Aluminium Window", base: 850 },
  "shower-cabin": { name: "Frameless Glass Shower Cabin", base: 1400 },
  "safety-door": { name: "Aluminium Safety Door", base: 1050 },
  "glass-railing": { name: "Tempered Glass Railing", base: 1200 },
  "curtain-wall": { name: "Double-Glazed Curtain Wall", base: 1800 },
  "shopfront-door": { name: "Commercial Glass Shopfront", base: 1300 },
  "office-partition": { name: "Acoustic Office Cabinet", base: 950 }
};

const FINISH_PREFS: { [key: string]: { name: string; cost: number } } = {
  "black": { name: "Ano-Charcoal Black", cost: 150 },
  "bronze": { name: "Architectural Bronze", cost: 120 },
  "silver": { name: "Satin Silver Chrome", cost: 0 },
  "champagne": { name: "Premium Champagne", cost: 180 }
};

const GLASS_PREFS: { [key: string]: { name: string; cost: number } } = {
  "clear": { name: "Tempered Clear Glass", cost: 150 },
  "frosted": { name: "Sandblasted Frosted Glass", cost: 220 },
  "tinted": { name: "Classic Bronze Solar Tint", cost: 260 },
  "reflective": { name: "Reflective Blue Mirror Glass", cost: 350 }
};

const COMMUNITIES = [
  "DHA Phase 1 - 5",
  "DHA Phase 6 - 8",
  "DHA Phase 9 - 11 (Prism)",
  "Cantonment (Cantt) Area",
  "Bedian Road Communities",
  "Gulberg / Askari Colony",
  "Model Town / Johar Town"
];

interface EstimateWidgetProps {
  syncedFinishId?: string;
  syncedGlassId?: string;
}

export default function EstimateWidget({ syncedFinishId, syncedGlassId }: EstimateWidgetProps) {
  // Form States
  const [formData, setFormData] = useState<EstimateFormData>({
    serviceType: "slimline-window",
    finishId: "black",
    glassId: "clear",
    widthFt: 5,
    heightFt: 4,
    gaugePreference: "2.0mm (Chawla Standard)",
    glassThickness: "12mm Toughened",
    additionalNotes: "",
    community: "DHA Phase 6 - 8"
  });

  // Photo Uploader States (Drag & Drop + File Select)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync from the Selector when parent state changes
  useEffect(() => {
    if (syncedFinishId) {
      setFormData((prev) => ({ ...prev, finishId: syncedFinishId }));
    }
  }, [syncedFinishId]);

  useEffect(() => {
    if (syncedGlassId) {
      setFormData((prev) => ({ ...prev, glassId: syncedGlassId }));
    }
  }, [syncedGlassId]);

  // Handle number/text inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Math Ballpark Calculation
  const widthVal = Number(formData.widthFt) || 4;
  const heightVal = Number(formData.heightFt) || 4;
  const areaSqFt = widthVal * heightVal;

  const activeService = SERVICE_RATES[formData.serviceType] || SERVICE_RATES["slimline-window"];
  const activeFinish = FINISH_PREFS[formData.finishId] || FINISH_PREFS["black"];
  const activeGlass = GLASS_PREFS[formData.glassId] || GLASS_PREFS["clear"];

  const costPerSqFt = activeService.base + activeFinish.cost + activeGlass.cost;
  const rawTotal = areaSqFt * costPerSqFt;
  // Apply a small premium multiplier for double-glazing if curtain wall
  const estimateTotalRs = formData.serviceType === "curtain-wall" ? rawTotal * 1.05 : rawTotal;

  // File Upload Handlers (Drag & Drop / Trigger)
  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file representing your window design frame.");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // WhatsApp Drafting Logic
  const handleInitiateWhatsApp = () => {
    const formattedTotal = Math.round(estimateTotalRs).toLocaleString("ur-PK");
    
    let text = `Salam, *Siddique Aluminium & Glass*. I am interested in getting a premium quote and scheduling a site measurement. Here are my rough details configured on the Estimator Tool:

• *Solution needed*: ${activeService.name}
• *Finishing Finish*: ${activeFinish.name}
• *Glass Choice*: ${activeGlass.name}
• *Rough Sizes*: ${formData.widthFt} ft (Width) x ${formData.heightFt} ft (Height)
• *Calculated SqFt area*: ${areaSqFt} SqFt
• *Target Community*: ${formData.community}
• *Alloy Gauge Preferred*: ${formData.gaugePreference}
• *Glass Thickness*: ${formData.glassThickness}
• *My Ballpark Inst-Estimate*: Rs. ${formattedTotal} PK-Rupees.`;

    if (formData.additionalNotes) {
      text += `\n• *Additional Details*: ${formData.notes || formData.additionalNotes}`;
    }

    if (selectedFile) {
      text += `\n\n📌 *Design Attachment*: I have uploaded a blueprint/sketch! I will upload and attach this file directly inside our WhatsApp dialogue.`;
    }

    text += `\n\n_Please confirm if you can schedule an accurate laser measurement and check my site._`;

    // WhatsApp Direct Link
    const waNumber = "923214567891"; // Official placeholder number representing Siddique Aluminium & Glass
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section id="estimate" className="py-20 lg:py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Visual background architectural styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none opacity-90 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase bg-sky-450/10 px-3 py-1 rounded-full">
            Price Estimator & Quote Engine
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-4">
            Instant Estimate & WhatsApp Lock-In
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            No endless wait cycles. Calculate ballparks instantly based on verified Lahore raw material rates, customize specs, and text directly to our Bedian Road workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT PANEL: CONFIGURATION FORM INTERFACE */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-xl backdrop-blur-md">
            
            <div className="space-y-6">
              {/* Service selection dropdown */}
              <div>
                <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                  What item do you need calibrated?
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none p-3.5 transition-colors"
                >
                  <option value="slimline-window">Slimline Window Systems (Chawla spec)</option>
                  <option value="shower-cabin">Frameless Glass Shower Cabin (10-12mm Tempered)</option>
                  <option value="safety-door">Reinforced Aluminium Safety Door</option>
                  <option value="glass-railing">Tempered Glass Railing / Staircase</option>
                  <option value="curtain-wall">Structural Double-Glazed Curtain Wall Facade</option>
                  <option value="shopfront-door">Commercial Automatic Doors & Shopfront</option>
                  <option value="office-partition">Sound Iso Cabinet Partitioning</option>
                </select>
              </div>

              {/* Form elements row A: Materials (Anodization Frame & Glass spec) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Anodized Finish Preference
                  </label>
                  <select
                    name="finishId"
                    value={formData.finishId}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-sm focus:border-sky-500 outline-none p-3.5 transition-colors"
                  >
                    <option value="black">Ano-Charcoal Black (Modern Accent)</option>
                    <option value="bronze">Architectural Bronze</option>
                    <option value="silver">Satin Silver Chrome (Economy)</option>
                    <option value="champagne">Premium Champagne Gold</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Glass Engineering Specification
                  </label>
                  <select
                    name="glassId"
                    value={formData.glassId}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-sm focus:border-sky-500 outline-none p-3.5 transition-colors"
                  >
                    <option value="clear">Clear Tempered Safety Glass</option>
                    <option value="frosted">Sandblasted Frosted (Shower/Partition Privacy)</option>
                    <option value="tinted">Classic Bronze Solar Tint (Cool Heat-Rejection)</option>
                    <option value="reflective">Reflective Blue Mirror Coating</option>
                  </select>
                </div>
              </div>

              {/* Form elements row B: Precision Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Rough Width (In Feet)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="widthFt"
                      min="1.5"
                      max="40"
                      step="0.5"
                      value={formData.widthFt}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-mono text-sm focus:border-sky-500 outline-none p-3.5 pr-10 transition-colors"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 font-mono text-xs">FT</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[9px] mt-1 block">Step 0.5ft. Standard target: 3-8ft.</span>
                </div>

                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Rough Height (In Feet)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="heightFt"
                      min="1.5"
                      max="40"
                      step="0.5"
                      value={formData.heightFt}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-mono text-sm focus:border-sky-500 outline-none p-3.5 pr-10 transition-colors"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 font-mono text-xs">FT</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-[9px] mt-1 block">Step 0.5ft. Standard target: 4-6.5ft.</span>
                </div>
              </div>

              {/* Form elements row C: Gauge standards & Community coverage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Guaranteed Profile Gauge (Alum)
                  </label>
                  <select
                    name="gaugePreference"
                    value={formData.gaugePreference}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-sm focus:border-sky-500 outline-none p-3.5 transition-colors"
                  >
                    <option value="1.6mm (Certified Prime)">1.6mm (Certified Prime specs)</option>
                    <option value="2.0mm (Chawla Heavy-Patio)">2.0mm (Chawla Heavy-Patio specs)</option>
                    <option value="2.2mm (Prime Special Series)">2.2mm (Prime Special heavy-duty)</option>
                    <option value="1.2mm (Standard Economy)">1.2mm (Standard Economy specs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    Your Lahore Community Area
                  </label>
                  <select
                    name="community"
                    value={formData.community}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-sm focus:border-sky-500 outline-none p-3.5 transition-colors"
                  >
                    {COMMUNITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Drag and drop uploader to satisfy Pattern # Usability Upload */}
              <div>
                <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                  Attach Rough Sketch or Window Opening Photo (Optional)
                </label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-sky-500 bg-sky-500/5"
                      : "border-zinc-800 hover:border-zinc-700 bg-zinc-950/40"
                  }`}
                  onClick={triggerFileSelect}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelectChange}
                    accept="image/*"
                    className="hidden"
                  />

                  {filePreviewUrl ? (
                    <div className="flex items-center space-x-4 w-full text-left" onClick={(e) => e.stopPropagation()}>
                      <img
                        src={filePreviewUrl}
                        alt="Uploaded client blueprint"
                        className="w-14 h-14 object-cover rounded border border-zinc-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white truncate">
                          {selectedFile?.name || "Uploaded sketch attachment"}
                        </p>
                        <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                          {((selectedFile?.size || 0) / 1024).toFixed(1)} KB · Ready to push
                        </p>
                      </div>
                      <button
                        onClick={handleRemoveFile}
                        className="p-1.5 hover:bg-zinc-800 rounded text-rose-400 hover:text-rose-300 transition-colors"
                        title="Remove design graphic"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-zinc-500 mb-2" />
                      <p className="text-xs text-zinc-300 font-medium">
                        <span className="text-sky-400 underline font-semibold">Click to select files</span> or drag and drop here
                      </p>
                      <p className="text-[10px] text-zinc-500 font-mono mt-1">
                        Formats: JPG, PNG, WEBP. Maximum file size: 10 MB.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Text Area notes */}
              <div>
                <label className="block text-zinc-400 font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Need lock keys, dual rollers, insect netting, specific brand profiles or Chawla specs, and specific site details..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-white font-sans text-xs focus:border-sky-500 outline-none p-3.5 transition-colors resize-none"
                ></textarea>
              </div>

            </div>

          </div>

          {/* RIGHT PANEL: PRICE BREAKDOWN & ESTIMATE OUTPUT DISPLAY */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 to-sky-300"></div>

            <div>
              <div className="flex items-center space-x-2 text-sky-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-6">
                <Calculator className="w-4 h-4 text-sky-400" />
                <span>Real-Time Estimation Readout</span>
              </div>

              {/* Primary Price Area */}
              <div className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-800/80 mb-6">
                <span className="font-sans text-xs text-zinc-400 uppercase tracking-wider block leading-none mb-1">
                  Estimated Ballpark Contract Rate
                </span>
                <p className="font-mono text-3xl sm:text-4xl font-extrabold text-white leading-none">
                  Rs. {Math.round(estimateTotalRs).toLocaleString("ur-PK")}
                </p>
                <div className="mt-3 flex items-center space-x-1.5 text-[10px] font-sans text-zinc-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-[pulse_1.5s_infinite]"></span>
                  <span>Workshop Rate (Direct - No intermediate dealer margins)</span>
                </div>
              </div>

              {/* Material Detail breakout table */}
              <div className="space-y-4 mb-8">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block font-bold border-b border-zinc-800/60 pb-1.5">
                  Specification Parameters
                </span>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded">
                    <span className="text-zinc-400 font-sans">Formula Factor:</span>
                    <span className="text-zinc-300 font-mono font-medium">
                      {widthVal} ft × {heightVal} ft = <span className="text-white font-bold">{areaSqFt} SqFt</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded">
                    <span className="text-zinc-400 font-sans">Aluminium Base rate:</span>
                    <span className="text-white font-mono font-semibold">
                      Rs. {activeService.base} /SqFt
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded">
                    <span className="text-zinc-400 font-sans">Finish Surcharge ({selectedFile ? "with sketch" : "anodized"}):</span>
                    <span className="text-white font-mono font-semibold">
                      + Rs. {activeFinish.cost} /SqFt
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded">
                    <span className="text-zinc-400 font-sans">Glass Specification:</span>
                    <span className="text-white font-mono font-semibold">
                      + Rs. {activeGlass.cost} /SqFt
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-zinc-900/50 p-2 rounded">
                    <span className="text-zinc-400 font-sans">Estimated Sub-total per SqFt:</span>
                    <span className="text-sky-400 font-mono font-bold">
                      Rs. {costPerSqFt} /SqFt
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="p-4 rounded-lg bg-sky-500/5 border border-sky-400/10 flex items-start space-x-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300">
                  <span className="font-semibold text-white block">Siddique Workshop Certifications:</span>
                  <p className="mt-0.5 leading-relaxed text-zinc-400">
                    Calculated output conforms strictly with first-grade <strong>Pakistan Aluminium standards</strong>. Actual quote is finalized on-site using electronic meters.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Send button block */}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={handleInitiateWhatsApp}
                id="whatsapp-direct-estimate-submit-btn"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold tracking-wider uppercase rounded shadow-lg flex items-center justify-center space-x-2.5 transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white fill-white shrink-0" />
                </div>
                <span>Connect via WhatsApp / Book Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="block text-zinc-500 font-mono text-[9px] text-center mt-3 tracking-wide">
                LOCK-IN AT WORKSHOP PRICE · SERVING DHA & BEDIAN ROAD CORRIDOR
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
