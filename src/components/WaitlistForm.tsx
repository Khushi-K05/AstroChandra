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
import { Sparkles, Check, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          created_at: new Date().toISOString()
        }),
      });

      // With no-cors mode, we can't read the response, but if no error was thrown, assume success
      setSubmitted(true);
      setFormData({ name: "", email: "", role: "" });
      toast({
        title: "You're on the list!",
        description: "We'll notify you when we launch.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      disabled={isLoading}
                      className="h-12 rounded-xl bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      disabled={isLoading}
                      className="h-12 rounded-xl bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Select 
                      value={formData.role} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
                      disabled={isLoading}
                    >
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
                  <Button type="submit" variant="hero" className="w-full mt-6" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
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
