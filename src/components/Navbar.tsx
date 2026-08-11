"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CABS", href: "#" },
    { name: "ABOUT US", href: "/about" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm py-4 px-6 md:px-12 flex items-center justify-between top-0 left-0 z-50">
        <Link href="/" className="flex items-center">
          <img src="https://trustmetravels.in/logo2.png" alt="Trust Me Travels Logo" className="h-12 md:h-14 w-auto object-contain" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`transition-colors relative hover:text-blue-700 ${isActive ? 'text-blue-700 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-700' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <button className="px-6 py-2.5 rounded-full border-2 border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
            Log In/Sign Up
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-white flex flex-col items-start justify-center px-8 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button 
          className="absolute top-6 right-6 text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        <nav className={`flex flex-col items-start gap-8 text-2xl font-bold text-slate-900 transition-all duration-500 delay-100 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`hover:text-blue-700 transition-colors ${pathname === link.href ? 'text-blue-700' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className={`mt-12 px-8 py-3.5 rounded-full bg-slate-900 text-white text-lg font-bold hover:bg-blue-700 transition-all duration-500 delay-200 shadow-lg ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          Log In/Sign Up
        </button>
      </div>
    </>
  );
}
