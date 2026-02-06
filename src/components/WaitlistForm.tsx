import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Sparkles, Check } from "lucide-react";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative" id="waitlist">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          {/* Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-primary/30 glow-sm">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Limited Early Access</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Join the <span className="text-gradient">Waitlist</span>
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Be the first to experience our platform when we launch.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="h-12 rounded-xl bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="h-12 rounded-xl bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Select required>
                      <SelectTrigger className="h-12 rounded-xl bg-secondary border-border">
                        <SelectValue placeholder="I am a..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User - Looking for guidance</SelectItem>
                        <SelectItem value="astrologer">Astrologer - Want to offer services</SelectItem>
                        <SelectItem value="learner">Learner - Want to learn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" variant="hero" className="w-full mt-6">
                    Join Waitlist
                  </Button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-6">
                  By joining, you agree to receive updates about our launch.
                </p>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">You're on the list!</h3>
                <p className="text-muted-foreground">
                  We'll notify you as soon as we launch. Stay tuned!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
