import { Shield, Calendar, Lock, Sparkles, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Astrologers",
    description: "Every astrologer on our platform is thoroughly verified for authenticity and expertise.",
  },
  {
    icon: Calendar,
    title: "Easy Slot Booking",
    description: "Book consultations instantly with real-time availability and seamless scheduling.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Your transactions are protected with bank-grade encryption and fraud prevention.",
  },
  {
    icon: Sparkles,
    title: "Pooja Booking",
    description: "Schedule traditional pooja services performed by experienced pandits.",
  },
  {
    icon: GraduationCap,
    title: "Astrology & Tarot Training",
    description: "Learn from master practitioners with structured courses and certifications.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Your{" "}
            <span className="text-gradient">Spiritual Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete platform designed to connect you with authentic spiritual guidance and services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-card border border-border card-hover ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
