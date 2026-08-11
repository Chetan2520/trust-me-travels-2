"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Menu, X } from "lucide-react";


function PageHeader() {
  return (
    <div className="pt-[104px] pb-8 px-2 md:px-4 w-full">
      <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
          alt="Gallery Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400">Gallery</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Take a glimpse into the beautiful destinations we cover and the premium fleet of vehicles we offer for your travels.
          </p>
        </div>
      </div>
    </div>
  );
}

function GalleryGrid() {
  const images = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506461883276-594c8cb25bc3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-blue-700 font-semibold mb-2 uppercase tracking-wide text-sm">Discover Our World</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Glimpse Into Our Journeys</h2>
          <p className="text-slate-600">
            Explore the beautiful destinations, our premium fleet, and the memorable experiences we've crafted for our travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-[4/3] w-full rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-slate-100">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <PageHeader />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
