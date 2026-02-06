import { Button } from "@/components/ui/button";
import { Star, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-primary fill-primary" />
            <span className="font-display text-xl font-bold">AstroGuide</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Astrologers
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pooja Services
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Training
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button size="sm">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Astrologers
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pooja Services
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Training
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <Button size="sm" className="w-full mt-2">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
