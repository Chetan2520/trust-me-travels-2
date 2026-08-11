"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a travel package or cab?",
    answer: "You can easily book directly through our website by clicking the 'Book Now' button on any package, or by contacting our 24/7 customer support via phone or email."
  },
  {
    question: "Are there any hidden charges in the packages?",
    answer: "No, we believe in complete transparency. All our package prices are all-inclusive as mentioned. Any optional add-ons will be clearly presented before checkout."
  },
  {
    question: "Can I customize my travel package?",
    answer: "Absolutely! Our travel experts can help you tailor any itinerary to suit your preferences, whether you want to extend your stay or add new destinations."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation policies. Most packages can be cancelled up to 48 hours before the trip for a full refund. Please check specific package terms for details."
  },
  {
    question: "Are your drivers experienced and verified?",
    answer: "Yes, safety is our top priority. All our chauffeurs are highly experienced, background-verified, and trained to ensure a safe and comfortable journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 md:px-8 mb-32 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#64748b] text-sm mb-2 tracking-[0.15em] uppercase font-bold">Got Questions?</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="group"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left transition-colors"
              >
                <span className={`text-[17px] font-semibold pr-4 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                  {faq.question}
                </span>
                <span className="shrink-0 text-slate-400 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[15px] text-slate-600 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
