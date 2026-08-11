import { Compass, Navigation, Building2, Luggage } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Roundtrip Cabs",
    description: "Enjoy a comfortable drive from your doorstep and back with our expert chauffeurs. Safety certified for your peace of mind.",
    icon: Compass,
  },
  {
    id: 2,
    title: "Oneway Drops",
    description: "Travel anywhere with our extensive network. Pay only for one side at all-inclusive, rock-bottom rates.",
    icon: Navigation,
  },
  {
    id: 3,
    title: "Local Rentals",
    description: "Flexible hourly rental packages for business meetings or shopping. Keep the cab at your disposal with multiple stops.",
    icon: Building2,
  },
  {
    id: 4,
    title: "Airport Transfers",
    description: "Reliable pickups and drops across airports. Book in advance and rest easy with our courteous chauffeurs.",
    icon: Luggage,
  }
];

export default function OurServices() {
  return (
    <section className="w-full px-4 md:px-8 mb-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[#64748b] text-sm mb-2 tracking-[0.15em] uppercase font-bold">What We Offer</p>
        <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">Our Services</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div 
              key={service.id} 
              className="bg-[#f8fafc] p-6 rounded-[1.5rem]   transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                <Icon className="w-8 h-8 text-[#20a8d9]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-[14px] leading-relaxed flex-1 font-medium">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
