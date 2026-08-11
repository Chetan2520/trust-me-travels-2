"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-[72px]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white p-8 md:p-16 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Refund Policy</h1>
          <p className="text-slate-500 mb-10 pb-6 border-b border-slate-100">Last updated: August 11, 2026</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-base md:text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. General Policy</h2>
              <p>
                Thank you for booking with Trust Me Travels. We strive to provide the best possible service for all your travel needs. If you are not entirely satisfied with your purchase, we're here to help. This policy outlines our terms for cancellations and refunds for cab rentals, flight bookings, and holiday packages.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Cab Booking Cancellations</h2>
              <p className="mb-4">
                Cancellations for cab bookings are subject to the following rules:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>24 Hours Before:</strong> 100% refund if cancelled at least 24 hours prior to the scheduled pickup time.</li>
                <li><strong>12-24 Hours Before:</strong> 50% refund for cancellations made between 12 to 24 hours before the pickup time.</li>
                <li><strong>Less than 12 Hours:</strong> No refund for cancellations made less than 12 hours before the scheduled pickup time.</li>
                <li><strong>No Show:</strong> If the passenger does not show up at the pickup location, the booking will be considered cancelled without any refund.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Flight and Hotel Bookings</h2>
              <p>
                Refunds for flight tickets and hotel accommodations are strictly governed by the cancellation policies of the respective airlines and hotels. Trust Me Travels acts only as a booking agent. Any applicable service fees charged by us are non-refundable. We will process your refund from the provider as soon as we receive it.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Process</h2>
              <p>
                Once we receive your cancellation request, we will inspect it and notify you of the status of your refund. If your refund is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies, typically 5-7 business days.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contacting Us for Refunds</h2>
              <p>
                To request a refund or cancel a booking, please email our support team at <strong>refunds@trustmetravels.com</strong> with your booking reference number or call us immediately at +91 98765 43210.
              </p>
            </section>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
