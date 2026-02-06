import { Button } from "@/components/ui/button";
import { Star, Clock, Award } from "lucide-react";
import astrologerImage from "@/assets/astrologer-1.jpg";

const AstrologerCard = () => {
  return (
    <section id="astrologers" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Astrologers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with verified professionals who bring years of wisdom and authentic guidance.
          </p>
        </div>

        {/* Featured Astrologer Card */}
        <div className="max-w-md mx-auto">
          <div className="group rounded-3xl bg-card border border-border overflow-hidden card-hover">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={astrologerImage}
                alt="Dr. Priya Sharma"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                <Award className="w-4 h-4" />
                Top Rated
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold">Dr. Priya Sharma</h3>
                  <p className="text-muted-foreground text-sm">Vedic Astrology & Numerology</p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>15+ Years Exp</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>2,500+ Consultations</span>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-2xl font-bold text-primary">₹999</span>
                  <span className="text-muted-foreground text-sm"> /session</span>
                </div>
                <Button variant="card">
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologerCard;
