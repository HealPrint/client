import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-health-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Health Diagnostics
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The smartest{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  holistic health
                </span>{" "}
                diagnostic platform
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Transforming skin, hair & internal health insights through AI-powered 
                diagnostics and personalized natural solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="health" size="lg" className="text-lg px-8 py-4">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Assessment
              </Button>
              <Button variant="health-outline" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-health-primary" />
                <span className="text-sm text-muted-foreground">
                  Trusted by 10,000+ users
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                🌍 Africa-first, globally accessible
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/20 to-health-secondary/20 rounded-3xl blur-2xl"></div>
            <img
              src={heroImage}
              alt="AI Health Diagnostics Illustration"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;