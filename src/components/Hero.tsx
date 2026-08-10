"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRightLeft, Calendar, Search, MapPin, Clock } from "lucide-react";
import Link from "next/link";

function CustomDropdown({ 
  label, 
  options, 
  defaultValue, 
  containerClassName = "", 
  hasSwapButton = false,
  icon: Icon
}: { 
  label: string, 
  options: string[], 
  defaultValue: string, 
  containerClassName?: string, 
  hasSwapButton?: boolean,
  icon?: any
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative flex-1 ${containerClassName} ${isOpen ? 'z-50' : 'z-10'}`}>
      <div 
        className="bg-[#f4f7f9] hover:bg-[#eef2f6] transition-colors rounded-full px-6 py-3 flex items-center w-full min-w-[200px] cursor-pointer h-full gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon className="w-5 h-5 text-[#64748b] shrink-0 stroke-[1.5]" />}
        <div className="flex flex-col justify-center flex-1 w-full overflow-hidden">
          <span className="text-[10px] font-semibold text-[#64748b] tracking-wide uppercase mb-0.5">{label}</span>
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-medium text-[#0f172a] truncate pr-2">{selected}</span>
            <svg className={`w-4 h-4 text-[#64748b] transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      {hasSwapButton && (
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm z-10 hover:bg-slate-50 transition-colors text-blue-600">
          <ArrowRightLeft className="w-3.5 h-3.5 stroke-[2]" />
        </button>
      )}

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 overflow-hidden max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div 
              key={option}
              className="px-6 py-2.5 hover:bg-slate-50 cursor-pointer text-[14px] font-medium text-[#0f172a] transition-colors"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState("One Way");

  // Common styling for input containers
  const selectContainerClass = "flex bg-[#f4f7f9] hover:bg-[#eef2f6] transition-colors rounded-full px-6 py-3 items-center gap-4 w-full xl:w-auto cursor-pointer";
  const labelClass = "text-[10px] font-semibold text-[#64748b] tracking-wide uppercase mb-0.5";
  const valueClass = "text-[15px] font-medium text-[#0f172a] outline-none bg-transparent w-full";
  const iconClass = "w-5 h-5 text-[#64748b] shrink-0 stroke-[1.5]";

  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"];
  const airports = ["Indira Gandhi Intl (DEL)", "Chhatrapati Shivaji (BOM)", "Kempegowda Intl (BLR)", "Rajiv Gandhi Intl (HYD)"];

  return (
    <div className="w-full px-2 md:px-4 pt-4 pb-4">
      {/* Hero Container with Rounded Corners */}
      <div className="relative w-full rounded-3xl min-h-[700px] flex flex-col">
        
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>

        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col flex-1 h-full">
          
          {/* Top Gradient Overlay for Navbar Visibility */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none rounded-t-3xl"></div>

          {/* Navbar (Inside the Video Container) */}
          <header className="relative w-full py-6 px-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 22l10-5 10 5L12 2z" />
              </svg>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6 text-sm font-medium text-white/90">
                <Link href="#" className="hover:text-white transition-colors">HOME</Link>
                <Link href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white">CABS</Link>
                <Link href="#" className="hover:text-white transition-colors">FLIGHTS</Link>
                <Link href="#" className="hover:text-white transition-colors">HOTELS</Link>
                <Link href="#" className="hover:text-white transition-colors">OFFERS</Link>
                <Link href="#" className="hover:text-white transition-colors">CONTACT US</Link>
              </nav>
              
              <button className="px-6 py-2 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white hover:text-black transition-all">
                Log In/Sign Up
              </button>
            </div>
          </header>

          {/* Hero Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 mt-8 pb-16">
            <div className="text-center mb-10">
              <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4 drop-shadow-lg">
                Your journey, <br /> Just a Tap Away
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
                Book Cabs, Flights and Hotels at the best prices with Trust Me Travels.
              </p>
            </div>
            
            {/* Search Box Component */}
            <div className="flex flex-col items-center w-full max-w-[1200px]">
              
              {/* Trip Type Tabs */}
              <div className="flex items-center gap-2 bg-white p-2 rounded-full mb-6 shadow-md border border-slate-100 flex-wrap justify-center">
                {["One Way", "Round Trip", "Local", "Airport Trip"].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      activeTab === tab 
                        ? "bg-black text-white shadow-md shadow-black/20" 
                        : "text-[#64748b] hover:bg-[#f4f7f9]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Main Search Container */}
              <div className="w-full bg-white rounded-full shadow-2xl p-2.5 flex flex-col xl:flex-row items-center gap-2">
                
                {/* 1. ONE WAY */}
                {activeTab === "One Way" && (
                  <>
                    <CustomDropdown label="From" options={cities} defaultValue="Select Pickup" />
                    <CustomDropdown label="To" options={cities} defaultValue="Select Drop" />

                    <div className={selectContainerClass}>
                      <Calendar className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Date</span>
                        <span className={valueClass}>11-08-2026</span>
                      </div>
                    </div>

                    <div className={selectContainerClass}>
                      <Clock className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Time</span>
                        <span className={valueClass}>7:00 AM</span>
                      </div>
                    </div>
                  </>
                )}

                {/* 2. ROUND TRIP */}
                {activeTab === "Round Trip" && (
                  <>
                    <CustomDropdown label="From" options={cities} defaultValue="Select Pickup" hasSwapButton={true} />
                    <CustomDropdown label="To" options={cities} defaultValue="Select Drop" containerClassName="xl:pl-6" />

                    <div className={selectContainerClass}>
                      <Calendar className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Date</span>
                        <span className={valueClass}>11-08-2026</span>
                      </div>
                      <div className="w-[1px] h-8 bg-slate-300 mx-1"></div>
                      <div className="flex flex-col">
                        <span className={labelClass}>Return Date</span>
                        <span className={valueClass}>11-08-2026</span>
                      </div>
                    </div>

                    <div className={selectContainerClass}>
                      <Clock className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Time</span>
                        <span className={valueClass}>7:00 AM</span>
                      </div>
                    </div>
                  </>
                )}

                {/* 3. LOCAL */}
                {activeTab === "Local" && (
                  <>
                    <CustomDropdown label="City" options={cities} defaultValue="Select City" icon={MapPin} />

                    <div className={`${selectContainerClass} xl:w-[250px]`}>
                      <Calendar className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Date</span>
                        <span className={valueClass}>11-08-2026</span>
                      </div>
                    </div>

                    <div className={`${selectContainerClass} xl:w-[250px]`}>
                      <Clock className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Time</span>
                        <span className={valueClass}>7:00 AM</span>
                      </div>
                    </div>
                  </>
                )}

                {/* 4. AIRPORT TRIP */}
                {activeTab === "Airport Trip" && (
                  <>
                    <div className="flex bg-[#f4f7f9] hover:bg-[#eef2f6] transition-colors rounded-full px-5 py-3 items-center gap-2 cursor-pointer shrink-0">
                      <span className="text-[14px] font-semibold text-[#0f172a] whitespace-nowrap">Drop to Airport</span>
                      <ArrowRightLeft className="w-4 h-4 text-[#64748b] stroke-[2]" />
                    </div>

                    <CustomDropdown label="Pickup Address" options={cities} defaultValue="Select Pickup Location" />
                    <CustomDropdown label="Drop Airport" options={airports} defaultValue="Select Airport" />

                    <div className={selectContainerClass}>
                      <Calendar className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Date</span>
                        <span className={valueClass}>10-08-2026</span>
                      </div>
                    </div>

                    <div className={selectContainerClass}>
                      <Clock className={iconClass} />
                      <div className="flex flex-col">
                        <span className={labelClass}>Pick Up Time</span>
                        <span className={valueClass}>8:45 PM</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Common Search Button */}
                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full px-10 h-14 flex items-center justify-center shrink-0 transition-colors font-bold text-[15px] xl:w-auto w-full ml-1">
                  Explore
                </button>
                  
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
