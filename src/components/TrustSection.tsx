import { ShieldCheck, Eye, CreditCard } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified Astrologers",
    description: "Every astrologer undergoes a rigorous verification process including background checks, credential verification, and expertise assessment.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. What you see is what you pay. All pricing is clearly displayed upfront.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your financial data is protected with 256-bit SSL encryption and we never store your complete card details.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Built on <span className="text-gradient">Trust & Security</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your safety and satisfaction are our top priorities.
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
