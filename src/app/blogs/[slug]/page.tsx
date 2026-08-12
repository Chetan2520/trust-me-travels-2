import { blogsData } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      return (
        <p key={idx} className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line text-lg">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <article className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all blogs
        </Link>
        
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded">
              {blog.category}
            </span>
            <span className="text-sm text-slate-500">{blog.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          {renderContent(blog.content)}
        </div>
      </article>

      <Footer />
    </main>
  );
}
