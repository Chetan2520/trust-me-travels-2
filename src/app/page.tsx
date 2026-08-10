import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import PromoBanner from "@/components/PromoBanner";
import OurServices from "@/components/OurServices";
import OurPackages from "@/components/OurPackages";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PopularDestinations />
      <OurPackages />
      <OurServices />
      <PromoBanner />
      <FAQ />
      <Footer />
    </main>
  );
}
