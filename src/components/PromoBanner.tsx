import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="w-full px-4 md:px-8 mb-24 cursor-pointer">
      <div className="relative w-full h-[150px] md:h-[250px] xl:h-[450px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <Image 
          src="/banner.png"
          alt="Vande Bharat Promo Banner"
          fill
          sizes="100vw"
          className="object-cover "
        />
      </div>
    </section>
  );
}
