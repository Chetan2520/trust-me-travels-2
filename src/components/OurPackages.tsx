import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Kedarnath Yatra",
    location: "Rudraprayag, Uttarakhand, India",
    rating: 9.8,
    reviews: "4.5k",
    price: "12,500",
    image: "/kedarnath.jpg"
  },
  {
    id: 2,
    title: "Kashi Vishwanath Darshan",
    location: "Varanasi, Uttar Pradesh, India",
    rating: 9.6,
    reviews: "8.2k",
    price: "8,200",
    image: "https://images.unsplash.com/photo-1646288744226-a2e3a06bfb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FzaGl8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Tirupati Balaji Darshan",
    location: "Tirumala, Andhra Pradesh, India",
    rating: 9.9,
    reviews: "12k",
    price: "5,500",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Vaishno Devi Yatra",
    location: "Katra, Jammu & Kashmir, India",
    rating: 9.7,
    reviews: "15k",
    price: "6,800",
    image: "https://images.unsplash.com/photo-1717502713522-543a97e13dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFpc2hubyUyMGRldml8ZW58MHx8MHx8fDA%3D"
  } 
];

export default function OurPackages() {
  return (
    <section className="w-full px-4 md:px-8 mb-24">
      {/* Header Area */}
      <div className="mb-8">
        <p className="text-[#64748b] text-sm mb-1 tracking-wide uppercase font-semibold">Curated Deals</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">Our Packages</h2>
      </div>
      
      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <Link 
            href={`/packages/${pkg.id}`}
            key={pkg.id} 
            className="bg-white rounded-[2rem] p-3 flex flex-col group cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-slate-100"
          >
            {/* Image (Nested inside card with padding) */}
            <div className="relative w-full aspect-[5/3] rounded-xl md:rounded-[1.2rem] overflow-hidden mb-4">
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Content (No extra padding needed here since card has p-3) */}
            <div className="px-1 flex flex-col flex-1 pb-1">
              
              {/* Title & Stars */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-[15px] font-semibold text-[#1e293b] leading-tight truncate">{pkg.title}</h3>
                <div className="flex items-center gap-[2px] shrink-0 pt-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
              
              {/* Location */}
              <p className="text-[#94a3b8] text-[11px] font-medium mb-5 truncate">
                {pkg.location}
              </p>
              
              {/* Bottom Row: Rating & Price */}
              <div className="mt-auto flex items-center justify-between">
                
                {/* Rating Info */}
                <div className="flex items-center">
                  <div className="bg-[#0f172a] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {pkg.rating}
                  </div>
                  <span className="text-[#94a3b8] text-[11px] font-medium ml-2">
                    Excellent <span className="mx-1">•</span> {pkg.reviews} Users
                  </span>
                </div>
                
                {/* Price */}
                <div className="text-[15px] font-semibold text-[#0f172a]">
                  ₹{pkg.price}
                </div>
                
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </section>
  );
}
