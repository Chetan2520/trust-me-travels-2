"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Menu, X, Check, Shield, Clock, Map, Award, Users, ThumbsUp } from "lucide-react";


function PageHeader() {
  return (
    <div className="pt-[104px] pb-8 px-2 md:px-4 w-full">
      <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/about-us.png"
          alt="About Us Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400">About Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Discover our journey, our mission, and the dedicated team that makes your travel experiences safe, comfortable, and unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="w-full md:w-1/2">
          <h4 className="text-blue-700 font-semibold mb-2 uppercase tracking-wide text-sm">Welcome to Trust Me Travels</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Your Trusted Partner For <br /> Seamless Travel Experiences
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed test-sm md:text-lg">
            Established in 2018, Trust Me Travels has grown to become a leading travel service provider. We specialize in offering premium cab services, flight bookings, and comprehensive travel packages designed to cater to all your travel needs.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed test-sm md:text-lg">
            Our commitment is simple: providing safe, comfortable, and reliable travel solutions. We take pride in our well-maintained fleet and our team of professional chauffeurs who prioritize your safety and comfort above all else.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-slate-800 font-medium">Premium Fleet Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-slate-800 font-medium">Professional Drivers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-slate-800 font-medium">24/7 Customer Support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-blue-700" />
              </div>
              <span className="text-slate-800 font-medium">Affordable Pricing</span>
            </div>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg shadow-blue-700/30">
            Discover More
          </button>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[400px] md:h-[450px] w-full rounded-3xl overflow-hidden  ">
            <Image
              src="/about-2.png"
              alt="Corporate Travel"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-blue-700 text-white p-6 md:p-8 rounded-3xl shadow-xl hidden md:block border-4 border-white">
            <div className="text-4xl font-extrabold mb-1">10+</div>
            <div className="text-blue-100 font-medium">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl shadow-sm">
              <Map className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            To provide our clients with the highest quality of travel services, ensuring safety, comfort, and reliability in every journey. We strive to create lasting relationships with our customers by exceeding their expectations and delivering exceptional value consistently.
          </p>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl shadow-sm">
              <Award className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            To be recognized as the leading travel management company in the region, known for our innovative solutions, customer-centric approach, and commitment to excellence. We aim to set the industry standard for professional travel services.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-blue-700" />,
      title: "Safe & Secure",
      desc: "Your safety is our top priority. We employ verified drivers and maintain our vehicles to the highest standards."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-700" />,
      title: "On-Time Service",
      desc: "We value your time. Our punctual service ensures you reach your destination exactly when you need to."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-blue-700" />,
      title: "Best Quality",
      desc: "From our fleet to our customer service, we never compromise on the quality of your experience."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-700" />,
      title: "Expert Team",
      desc: "Our team of travel experts and professional chauffeurs are dedicated to making your journey flawless."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-blue-700 font-semibold mb-2 uppercase tracking-wide text-sm">Why Choose Us</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">What Makes Us Different</h2>
          <p className="text-slate-600 text-lg">
            We stand out in the travel industry through our unwavering commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-10 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-xl hover:bg-white transition-all duration-300 text-center flex flex-col items-center group">
              <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { num: "2500+", label: "Happy Customers" },
    { num: "50+", label: "Luxury Vehicles" },
    { num: "120+", label: "Professional Drivers" },
    { num: "15+", label: "Awards Won" }
  ];

  return (
    <section className="py-10 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto bg-blue-800 rounded-3xl shadow-2xl p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4"></div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 divide-y md:divide-y-0 md:divide-x divide-blue-700/50 text-white">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center pt-8 md:pt-0 first:pt-0">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.num}</div>
              <div className="text-blue-200 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white pb-24">
      <div className="max-w-5xl mx-auto text-center bg-slate-50 p-12 md:p-20 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready To Book Your Next Ride?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
            Experience the best in class travel services with Trust Me Travels. Contact our team today to get a quote or book your journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-10 rounded-full transition-colors shadow-lg shadow-blue-700/30 w-full sm:w-auto text-lg">
              Book a Cab
            </button>
            <button className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-medium py-4 px-10 rounded-full transition-colors w-full sm:w-auto text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <PageHeader />
      <Introduction />
      <MissionVision />
      <WhyChooseUs />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

