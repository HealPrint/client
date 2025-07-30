import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-health-primary via-blue-600 to-health-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-heading text-foreground group-hover:text-health-primary transition-colors">
              HealPrint
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="/about" className="text-slate-600 hover:text-foreground transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/solutions" className="text-slate-600 hover:text-foreground transition-colors font-medium relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/features" className="text-slate-600 hover:text-foreground transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-slate-600 hover:text-foreground transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-health-primary to-health-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex font-medium hover:bg-slate-100 transition-colors">
              Sign In
            </Button>
            <Button variant="health" className="hidden sm:inline-flex font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
            <nav className="py-6 space-y-2">
              <a href="/about" className="block px-4 py-3 text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                About
              </a>
              <a href="/solutions" className="block px-4 py-3 text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Solutions
              </a>
              <a href="/features" className="block px-4 py-3 text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Features
              </a>
              <a href="/contact" className="block px-4 py-3 text-slate-600 hover:text-foreground hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium">
                Contact
              </a>
              <div className="px-4 pt-6 border-t border-slate-200 space-y-3">
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Sign In
                </Button>
                <Button variant="health" className="w-full shadow-lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
