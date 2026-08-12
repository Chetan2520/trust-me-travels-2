"use client";

import { useState, use } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Briefcase, Settings, Star, ChevronDown, ChevronRight, Calendar as CalendarIcon, Clock as ClockIcon, IndianRupee, Ban, Headset, IndianRupeeIcon } from "lucide-react";

export default function DestinationPage({ params }: { params: Promise<{ city: string }> }) {
  const resolvedParams = use(params);
  const citySlug = resolvedParams.city;
  const cityName = citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [fromLocation, setFromLocation] = useState("");
  const [date, setDate] = useState("2026-08-11");
  const [time, setTime] = useState("07:00 AM");

  const cars = [
    { id: 1, name: "Premium Sedan", model: "Toyota Camry or similar", price: "₹2,500", seats: 4, luggage: 2, ac: true, rating: 4.8 },
    { id: 2, name: "Luxury SUV", model: "Toyota Innova Crysta", price: "₹3,500", seats: 6, luggage: 3, ac: true, rating: 4.9 },
    { id: 3, name: "Executive Class", model: "Mercedes-Benz E-Class", price: "₹7,000", seats: 4, luggage: 2, ac: true, rating: 5.0 },
    { id: 4, name: "Family Minivan", model: "Kia Carnival", price: "₹5,200", seats: 7, luggage: 4, ac: true, rating: 4.9 },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 pt-[72px]">
      <Navbar />
      
      {/* Search Results Header (Exact match to image) */}
      <div className="w-full bg-[#F3FAFC] pt-6 pb-6 px-4 md:px-12 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="w-full md:w-[600px] lg:w-[700px]">
            <div className="text-[11px] text-slate-500 mb-2 flex items-center gap-1 font-medium">Home <ChevronRight className="w-3 h-3" /> Select Car</div>
            <div className="flex flex-col md:flex-row items-center gap-3 w-full">
              <div className="flex-1 flex items-center bg-white rounded-full px-5 py-3 transition-all w-full">
                <input 
                  type="text" 
                  placeholder="Enter Pickup City" 
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="bg-transparent border-none focus:outline-none placeholder:text-slate-400 text-slate-900    w-full text-sm md:text-[15px]"
                />
              </div>
              
              <div className="hidden md:flex items-center justify-center text-slate-400 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="flex-1 flex items-center bg-white rounded-full px-5 py-3 w-full">
                <span className="    text-slate-900 text-sm md:text-[15px] truncate">{cityName}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-auto mt-2 md:mt-0">
            <div className="flex items-center justify-between md:justify-start gap-8 md:gap-16">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Trip Type</span>
                <span className="font-bold text-slate-900 text-sm">One way</span>
              </div>
              <div className="flex flex-col relative group">
                <span className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Pick up</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-slate-900 text-sm">11-08-2026</span>
                  <CalendarIcon className="w-4 h-4 text-slate-700" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between md:justify-start gap-8 md:gap-16 mt-2 md:mt-0">
              <div className="flex flex-col relative group">
                <span className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Time</span>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="font-bold text-slate-900 text-sm bg-transparent border-none focus:outline-none p-0 appearance-none cursor-pointer"
                >
                  <option>07:00 AM</option>
                  <option>08:00 AM</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                </select>
              </div>
              <button className="bg-white border border-[#20a8d9] text-[#20a8d9] hover:bg-blue-50 font-semibold py-2 px-6 rounded-full transition-colors text-sm shadow-sm whitespace-nowrap">
                Modify Booking
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-4 md:px-12 pt-6 pb-20">
        {/* Blue Banner */}
        <div className="bg-[#1D79B3] rounded-xl p-6 md:p-4 flex flex-col items-center justify-center w-full mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 md:gap-24 w-fit">
            <div className="flex items-center gap-4">
               <IndianRupeeIcon className="w-10 h-10 text-white shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[15px] text-white">Book Now</span>
                <span className="text-[12px] text-white/90 font-medium">at Zero Cost</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Ban className="w-10 h-10 text-white shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[15px] text-white">Free Cancellations</span>
                <span className="text-[12px] text-white/90 font-medium">Upto 1 Hour</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Headset className="w-10 h-10 text-white shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[15px] text-white">24x7 Customer</span>
                <span className="text-[12px] text-white/90 font-medium">Support</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Car List */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl p-5 md:p-6   flex flex-col md:flex-row gap-8 items-center">
              
              <div className="w-full md:w-[260px] aspect-[16/9] md:aspect-auto md:h-[160px] bg-slate-50 rounded-2xl relative shrink-0 flex items-center justify-center overflow-hidden mix-blend-multiply">
                 {car.name.includes('SUV') ? (
                   <Image sizes="(max-width: 768px) 100vw, 300px" src="https://trustmetravels.in/bmw.png" fill className="object-cover" alt={car.name} />
                 ) : (
                   <Image sizes="(max-width: 768px) 100vw, 300px" src="https://trustmetravels.in/audi.png" fill className="object-cover" alt={car.name} />
                 )}
              </div>
              
              {/* Info */}
              <div className="flex-1 w-full flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{car.name}</h3>
                    <div className="text-xl font-bold text-slate-900">{car.price}</div>
                  </div>
                  <p className="text-slate-500 font-medium mb-4 text-sm">{car.model}</p>
                  
                  <div className="flex flex-wrap gap-5 mb-4 text-xs text-slate-700 font-medium bg-slate-50 p-2 rounded-lg w-fit">
                    <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-slate-400" /> {car.seats} Seats</div>
                    <div className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-slate-400" /> {car.luggage} Bags</div>
                    {car.ac && <div className="flex items-center gap-1.5"><Settings className="w-3.5 h-3.5 text-slate-400" /> AC</div>}
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-1">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-200">
                      <Star className="w-3 h-3 fill-current" />
                      {car.rating}
                    </div>
                    <div className="text-xs text-slate-500 font-medium hidden sm:block">
                      Top Rated
                    </div>
                  </div>
                  <button className="bg-[#20a8d9] hover:bg-blue-700 text-white font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-sm text-sm">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
