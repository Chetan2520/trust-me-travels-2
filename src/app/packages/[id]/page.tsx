"use client";

import { useState, use } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Clock, Star, CheckCircle2, Navigation, ChevronRight, ChevronDown } from "lucide-react";

export default function PackagePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // In a real app, we would fetch based on ID. We mock it here.
  const pkgInfo = {
    id: resolvedParams.id,
    title: resolvedParams.id === "1" ? "Kedarnath Yatra" : "Premium Holiday Experience",
    location: resolvedParams.id === "1" ? "Rudraprayag, Uttarakhand, India" : "Goa, India",
    rating: 9.8,
    reviews: "4.5k",
    price: "12,500",
    image: resolvedParams.id === "1" ? "https://images.unsplash.com/photo-1626292211516-e5c9472e34fa?w=1600&auto=format&fit=crop" : "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&auto=format&fit=crop",
    duration: "4 Days / 3 Nights",
    description: "Experience a soulful journey with our carefully curated package. Enjoy comfortable travel, premium accommodation, and guided tours to make your trip memorable and hassle-free. We take care of every minute detail so you can focus on making memories.",
    highlights: ["Premium Private Transfer", "Luxury Accommodation", "Curated Dining Experience", "Expert Local Guide", "24/7 Concierge Support"]
  };

  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", date: "", guests: "2" });
  const [isBooked, setIsBooked] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if(bookingForm.name && bookingForm.phone && bookingForm.date) {
      setIsBooked(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-[72px]">
      <Navbar />
      
      {/* Thin Hero Banner (Box Type) */}
      <div className="w-full px-4 md:px-8 mt-8 pt-6 pb-2">
        <div className="max-w-[1200px] mx-auto h-24 md:h-32 bg-slate-900 relative rounded-xl overflow-hidden flex items-center shadow-sm">
          <Image 
            src="/banner-2.png" 
            alt="Banner" 
            fill 
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
          <div className="w-full relative z-10 px-6 md:px-8">
             <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">Complete Your Booking</h1>
             <p className="text-slate-200 text-xs md:text-sm mt-1 font-medium">Review details and make payment</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-[11px] text-slate-500 mb-6 flex items-center gap-1.5 font-medium uppercase tracking-wider">
          <span className="hover:text-slate-900 cursor-pointer">Home</span> 
          <ChevronRight className="w-3 h-3" /> 
          <span className="hover:text-slate-900 cursor-pointer">Select Car</span>
          <ChevronRight className="w-3 h-3" /> 
          <span className="text-slate-900 font-semibold">Booking</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Review Your Booking */}
            <div className="bg-white border border-slate-200/80 rounded-lg overflow-hidden">
              <div className="bg-slate-50/50 border-b border-slate-200/80 p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1.5">Review Your Booking</h2>
                  <div className="flex items-center gap-2 text-base font-medium text-slate-700">
                    New Delhi <Navigation className="w-3.5 h-3.5 text-slate-400 rotate-90" /> Mathura 
                    <span className="text-[10px] font-semibold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-sm ml-2 uppercase tracking-wide">Oneway</span>
                  </div>
                </div>
                <div className="flex items-center bg-slate-100 text-slate-700 px-3 py-1.5 rounded text-xs font-semibold border border-slate-200/60">
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500 mr-1.5" /> 4.8 / 5 Top Rated
                </div>
              </div>
              
              <div className="p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mb-1.5">Car Type</div>
                  <div className="font-medium text-slate-800 text-[15px]">Wagon R or Equivalent</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mb-1.5">Pickup Date</div>
                  <div className="font-medium text-slate-800 text-[15px]">12th August 2026, 7:00 AM</div>
                </div>
                <div className="sm:col-span-2 pt-5 border-t border-slate-100">
                  <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> Kms included: 166 kms</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> AC</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> 1 Bag</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact & Pickup Details */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-5 md:p-6">
              <h2 className="text-[15px] font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-slate-900 text-white w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold">1</span> 
                Contact & Pickup Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Full Name</label>
                  <input type="text" className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium placeholder:font-normal placeholder:text-slate-400" placeholder="Enter full name" />
                </div>
                <div className="flex gap-3">
                  <div className="w-[80px] shrink-0">
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Code</label>
                    <select className="w-full bg-white border border-slate-300 rounded px-2 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium text-center">
                      <option>+91</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Mobile No.</label>
                    <input type="tel" className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium placeholder:font-normal placeholder:text-slate-400" placeholder="Mobile number" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Email ID</label>
                  <input type="email" className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium placeholder:font-normal placeholder:text-slate-400" placeholder="Email address" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-6 text-xs font-semibold text-slate-600">
                <button className="flex items-center gap-1 hover:text-slate-900 transition-colors"><span className="text-base leading-none font-normal">+</span> Alternate email</button>
                <button className="flex items-center gap-1 hover:text-slate-900 transition-colors"><span className="text-base leading-none font-normal">+</span> Add GST</button>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                    <input type="text" className="w-full bg-slate-50/50 border border-slate-300 rounded pl-9 pr-4 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium placeholder:font-normal placeholder:text-slate-400" placeholder="Search and select pickup location" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-500 mb-1.5 block uppercase tracking-wide">Drop Location</label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                    <input type="text" className="w-full bg-slate-50/50 border border-slate-300 rounded pl-9 pr-4 py-2.5 focus:outline-none focus:border-slate-900 transition-colors text-sm font-medium placeholder:font-normal placeholder:text-slate-400" placeholder="Search and select drop location" />
                  </div>
                </div>
              </div>
            </div>

            {/* Personalize Your Journey */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-5 md:p-6">
              <h2 className="text-[15px] font-semibold text-slate-900 mb-1 flex items-center gap-2">
                Personalize Your Journey
              </h2>
              <p className="text-[13px] text-slate-500 mb-5">Enhance your travel experience with our premium add-ons</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "New Delhi - Mathura Expressway", price: "₹35", tag: "Most Popular" },
                  { name: "Cab with Luggage Carrier", price: "₹149" },
                  { name: "New Car Promise - 2023 or newer", price: "₹249" },
                  { name: "Chauffeurs who know your language", price: "₹199" },
                ].map((addon, i) => (
                  <label key={i} className="flex items-start gap-3 p-3 border border-slate-200 rounded cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition-all group">
                    <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-slate-900 rounded-sm border-slate-300 focus:ring-slate-900 cursor-pointer" />
                    <div className="flex-1">
                      <div className="font-medium text-[13px] text-slate-800 leading-tight mb-1 group-hover:text-slate-900 transition-colors">{addon.name}</div>
                      {addon.tag && <div className="text-[9px] uppercase font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-sm w-fit mb-1">{addon.tag}</div>}
                      <div className="font-semibold text-slate-900 text-sm">{addon.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="bg-white border border-slate-200/80 rounded-lg p-5 md:p-6">
              <h2 className="text-[15px] font-semibold text-slate-900 mb-5">Inclusions/Exclusions</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-3 text-xs uppercase tracking-wide"><CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Inclusions</h3>
                  <ul className="space-y-2.5 text-[13px] text-slate-600">
                    <li>Base Fare and Fuel Charges</li>
                    <li>Driver Allowance</li>
                    <li>GST (5%)</li>
                    <li>State Tax & Toll</li>
                    <li>1 bags</li>
                    <li>AC</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-3 text-xs uppercase tracking-wide">
                    <span className="flex items-center justify-center w-3.5 h-3.5 rounded bg-red-100 text-red-600 text-[10px] leading-none font-bold">✕</span> Exclusions
                  </h3>
                  <ul className="space-y-2.5 text-[13px] text-slate-600">
                    <li>Beyond package km charged at ₹18/km after 166 km</li>
                    <li>Multiple pickups/drops</li>
                    <li>Airport Entry/Parking</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-5 border-t border-slate-100">
                <button className="text-slate-600 font-medium text-xs flex items-center gap-1 hover:text-slate-900 transition-colors">
                  Read Terms and Conditions <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-[360px] shrink-0">
            <div className="sticky top-24 flex flex-col gap-4">
              
              {/* Banner */}
              <div className="bg-slate-900 rounded-lg p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-slate-300" />
                </div>
                <div className="text-xs font-medium text-slate-300 leading-snug">
                  Free cancellation till <span className="text-white font-semibold">1 hr</span> of departure
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white border border-slate-200/80 rounded-lg overflow-hidden">
                <div className="p-4 bg-slate-50/50 border-b border-slate-200/80">
                  <h2 className="font-semibold text-slate-900 text-[13px] uppercase tracking-wide">Payment Options</h2>
                </div>
                
                <div className="flex flex-col">
                  {/* Option 1 */}
                  <label className="flex items-start gap-3 p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="radio" name="payment" className="mt-1 w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900 cursor-pointer" defaultChecked />
                    <div className="flex-1 flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-slate-900 text-[14px] mb-0.5">Book at zero</div>
                        <div className="text-[11px] text-slate-500 font-medium">Pay ₹1930 Later</div>
                      </div>
                      <div className="font-semibold text-slate-900 text-[15px]">₹0</div>
                    </div>
                  </label>
                  
                  {/* Option 2 */}
                  <label className="flex items-start gap-3 p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="radio" name="payment" className="mt-1 w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900 cursor-pointer" />
                    <div className="flex-1 flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-slate-900 text-[14px] mb-0.5">Part Pay</div>
                        <div className="text-[11px] text-slate-500 font-medium">Pay 25% now and rest to the driver</div>
                      </div>
                      <div className="font-semibold text-slate-900 text-[15px]">₹483</div>
                    </div>
                  </label>
                  
                  {/* Option 3 */}
                  <label className="flex items-start gap-3 p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                    <input type="radio" name="payment" className="mt-1 w-4 h-4 text-slate-900 border-slate-300 focus:ring-slate-900 cursor-pointer" />
                    <div className="flex-1 flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-slate-900 text-[14px] mb-0.5">Full Pay</div>
                        <div className="text-[11px] text-slate-500 font-medium">Full amount</div>
                      </div>
                      <div className="font-semibold text-slate-900 text-[15px]">₹1930</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Coupon */}
              <div className="bg-white border border-slate-200/80 rounded-lg p-4">
                <h2 className="font-semibold text-slate-900 mb-3 text-[11px] uppercase tracking-wide">Coupon & Offers</h2>
                <div className="flex gap-2">
                  <input type="text" placeholder="ENTER COUPON" className="flex-1 bg-white border border-slate-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-slate-900 uppercase font-medium text-slate-700 placeholder:text-slate-400" />
                  <button className="bg-slate-900 hover:bg-black text-white font-semibold px-4 py-2 rounded text-xs transition-colors">APPLY</button>
                </div>
              </div>

              <button className="w-full bg-[#20a8d9] hover:bg-blue-700 text-white font-semibold py-3.5 rounded text-[15px] transition-colors mt-2">
                PROCEED TO PAY
              </button>
              
              <button className="w-full text-slate-600 font-medium text-xs hover:text-slate-900 py-2 transition-colors">
                View Fare Break up
              </button>

            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
