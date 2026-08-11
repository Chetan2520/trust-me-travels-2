"use client";

import { useState, use } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Clock, Star, CheckCircle2, Navigation } from "lucide-react";

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
    <main className="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 pt-[72px]">
      <Navbar />
      
      {/* Box-Type Hero Section */}
      <section className="w-full px-4 md:px-8 pt-8 pb-12">
        <div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px] flex items-end md:items-center">
          <Image 
            src={pkgInfo.image} 
            fill 
            sizes="100vw"
            className="object-cover" 
            alt={pkgInfo.title}
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          
          <div className="relative z-10 px-6 md:px-16 w-full max-w-4xl pb-10 md:pb-0">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white w-fit text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{pkgInfo.rating} Rating</span>
              <span className="mx-1">•</span>
              <span>{pkgInfo.reviews} Reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              {pkgInfo.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-400" /> {pkgInfo.location}</div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-blue-400" /> {pkgInfo.duration}</div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Package Details */}
          <div className="flex-1">
            <div className="prose prose-lg max-w-none text-slate-600">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">The Experience</h2>
              <p className="leading-relaxed mb-10 text-lg">{pkgInfo.description}</p>
              
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {pkgInfo.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium text-slate-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Itinerary Overview</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#2563EB] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                      {day}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-slate-900 text-lg mb-2 text-[#2563EB]">Day {day}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">Arrival and local sightseeing. Experience the local culture and premium dining.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Premium Booking Card */}
          <div className="w-full lg:w-[420px]">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl sticky top-28">
              <div className="flex flex-col mb-8 pb-8 border-b border-slate-100">
                <span className="text-slate-500 font-bold tracking-wider uppercase text-xs mb-2">Price Estimate</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-slate-900 tracking-tight">₹{pkgInfo.price}</span>
                  <span className="text-slate-500 font-medium">/ person</span>
                </div>
              </div>
              
              {!isBooked ? (
                <form onSubmit={handleBook} className="flex flex-col gap-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Reserve Your Journey</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <input 
                        type="text" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                        placeholder="Primary Guest Name"
                        value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="tel" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                        placeholder="Contact Number"
                        value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="date" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 font-medium text-sm"
                        value={bookingForm.date} onChange={e => setBookingForm({...bookingForm, date: e.target.value})}
                      />
                      <select 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 font-medium appearance-none text-sm"
                        value={bookingForm.guests} onChange={e => setBookingForm({...bookingForm, guests: e.target.value})}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-4 text-base flex items-center justify-center gap-2">
                    Request Reservation <Navigation className="w-4 h-4 rotate-45" />
                  </button>
                  <p className="text-center text-xs font-medium text-slate-400 mt-2">No payment required at this step.</p>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Reservation Received</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                    Thank you, <span className="font-bold text-slate-900">{bookingForm.name}</span>. Our luxury concierge will contact you at <span className="font-bold text-slate-900">{bookingForm.phone}</span> to finalize your itinerary.
                  </p>
                  <button onClick={() => setIsBooked(false)} className="text-[#2563EB] font-bold hover:underline">
                    Make another reservation
                  </button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
