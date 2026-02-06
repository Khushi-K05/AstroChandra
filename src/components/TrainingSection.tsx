import { Button } from "@/components/ui/button";
import { BookOpen, Compass, Award } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Tarot Reading Course",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    description: "Master the art of tarot interpretation with hands-on practice and expert guidance.",
    features: ["78 Card Meanings", "Spread Techniques", "Client Reading Skills"],
  },
  {
    icon: Compass,
    title: "Astrology Basics Course",
    level: "Beginner",
    duration: "8 Weeks",
    description: "Learn the fundamentals of Vedic and Western astrology from scratch.",
    features: ["Birth Chart Analysis", "Planetary Aspects", "House Significations"],
  },
  {
    icon: Award,
    title: "Certification Program",
    level: "Professional",
    duration: "6 Months",
    description: "Comprehensive training to become a certified professional astrologer.",
    features: ["Advanced Techniques", "Live Consultations", "Career Support"],
  },
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Learn <span className="text-gradient">Ancient Wisdom</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your passion into expertise with our structured training programs.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border card-hover ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <course.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{course.level}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="card" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
