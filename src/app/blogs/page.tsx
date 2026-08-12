"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Menu, X, ArrowRight } from "lucide-react";


function PageHeader() {
  return (
    <div className="pt-[104px] pb-8 px-2 md:px-4 w-full">
      <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
          alt="Blogs Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400">Blogs</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Travel Blog</h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Read our latest articles, travel tips, and destination guides curated by experts to help you plan your next adventure perfectly.
          </p>
        </div>
      </div>
    </div>
  );
}

import { blogsData } from "@/data/blogs";

function BlogsGrid() {
  const blogs = blogsData;

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col h-full group">
              <Link href={`/blogs/${blog.slug}`} className="relative h-60 w-full overflow-hidden block">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded">
                  {blog.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-slate-500 mb-2">{blog.date}</p>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-medium py-3 px-8 rounded transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <PageHeader />
      <BlogsGrid />
      <Footer />
    </main>
  );
}
