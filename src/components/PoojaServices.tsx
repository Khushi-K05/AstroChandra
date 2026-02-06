import { Button } from "@/components/ui/button";
import { Flame, Sun, Moon } from "lucide-react";

const poojaServices = [
  {
    icon: Flame,
    name: "Satyanarayan Pooja",
    description: "Traditional blessing ceremony for prosperity, success, and family harmony.",
    price: "₹2,999",
  },
  {
    icon: Sun,
    name: "Graha Shanti Pooja",
    description: "Planetary remedy ritual to balance celestial influences in your horoscope.",
    price: "₹4,999",
  },
  {
    icon: Moon,
    name: "Navgraha Pooja",
    description: "Nine planet worship for removing obstacles and attracting positive energy.",
    price: "₹5,999",
  },
];

const PoojaServices = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Sacred <span className="text-gradient">Pooja Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book authentic pooja ceremonies performed by experienced pandits from the comfort of your home.
          </p>
        </div>

        {/* Pooja Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {poojaServices.map((service) => (
            <div
              key={service.name}
              className="group p-8 rounded-2xl bg-card border border-border card-hover text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors animate-pulse-glow">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-border">
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button variant="card" className="w-full">
                  Book Pooja
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoojaServices;
