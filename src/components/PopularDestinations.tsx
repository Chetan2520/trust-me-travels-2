import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    city: "New Delhi",
    state: "Delhi",
    trains: 656,
    image: "https://images.unsplash.com/photo-1705927122615-02dcef3b1465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    city: "Goa",
    state: "Goa",
    trains: 656,
    image: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29hfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    city: "Chennai",
    state: "Tamil Nadu",
    trains: 231,
    image: "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    city: "Agra",
    state: "Uttar Pradesh",
    trains: 231,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 5,
    city: "Kolkata",
    state: "West Bengal",
    trains: 164,
    image: "https://images.unsplash.com/photo-1682582036641-91dfe7b66ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvbGthdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    city: "Jaipur",
    state: "Rajasthan",
    trains: 104,
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFqYXN0YWhufGVufDB8fDB8fHww"
  }
];

export default function PopularDestinations() {
  return (
    <section className="w-full px-4 md:px-8 mt-16 mb-24">
      {/* Header Area */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-[#64748b] text-sm    mb-1 tracking-wide">Popular Train Routes in India</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Popular Destinations</h2>
        </div>
        <Link href="#" className="text-sm font-medium text-slate-600 hover:text-black transition-colors px-4 py-2 border border-slate-200 rounded-full hover:bg-slate-50">
          View All
        </Link>
      </div>
      
      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {destinations.map((dest) => (
          <div key={dest.id} className="flex flex-col items-center group cursor-pointer">
            {/* Image Card */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
              <Image 
                src={dest.image} 
                alt={dest.city} 
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw" 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-5 left-0 w-full text-center px-2">
                <h3 className="text-white text-[22px] font-bold tracking-wide drop-shadow-md">{dest.city}</h3>
                <p className="text-white/80 text-[10px] uppercase font-bold tracking-[0.15em] drop-shadow-sm mt-0.5">{dest.state}</p>
              </div>
            </div>
            
          
          </div>
        ))}
      </div>
    </section>
  );
}
