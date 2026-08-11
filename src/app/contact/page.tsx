"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Menu, X, MapPin, Phone, Mail, Clock } from "lucide-react";


function PageHeader() {
  return (
    <div className="pt-[104px] pb-8 px-2 md:px-4 w-full">
      <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/contact.png"
          alt="Contact Us Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400">Contact Us</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Have a question or need assistance? Reach out to our 24/7 support team and we'll ensure your travel plans are completely hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <h4 className="text-blue-700 font-semibold mb-2 uppercase tracking-wide text-sm">Get in Touch</h4>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">We are here to help you</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                <MapPin className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  123 Business Avenue, Block A,<br />
                  New Delhi, 110001, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                <p className="text-slate-600 text-sm">+91 98765 43210</p>
                <p className="text-slate-600 text-sm">+91 11 2345 6789</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                <Mail className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                <p className="text-slate-600 text-sm">info@trustmetravels.com</p>
                <p className="text-slate-600 text-sm">support@trustmetravels.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                <Clock className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-600 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                id="subject"
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all"
                placeholder="How can we help you?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                rows={5}
                className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-lg w-full md:w-auto transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="w-full h-[400px] bg-slate-200 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754720782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709210214343!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <PageHeader />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
