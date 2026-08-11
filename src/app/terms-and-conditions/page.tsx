"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-[72px]">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white p-8 md:p-16 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-slate-500 mb-10 pb-6 border-b border-slate-100">Last updated: August 11, 2026</p>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-base md:text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Trust Me Travels ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, mobile website or application related, linked, or otherwise connected thereto.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. User Representations</h2>
              <p className="mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All registration and booking information you submit will be true, accurate, current, and complete.</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Booking and Payments</h2>
              <p>
                All bookings made through our platform are subject to availability and acceptance by us. The total price of your booking, including any applicable taxes and fees, will be clearly displayed before you confirm your payment. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available, inaccuracies, or errors in product or pricing information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modifications to Terms</h2>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.
              </p>
            </section>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
