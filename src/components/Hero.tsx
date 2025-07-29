import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-health-accent via-white to-slate-50 pt-8">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2 bg-health-primary/10 text-health-primary border-health-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Professional Health Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground leading-tight tracking-tight">
                The smartest{" "}
                <span className="bg-gradient-to-r from-health-primary via-blue-600 to-health-secondary bg-clip-text text-transparent">
                  holistic health
                </span>{" "}
                platform ever built
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Transforming skin, hair & internal health through advanced diagnostics, 
                personalized natural solutions, and preventative care for African communities worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="health" size="lg" className="text-lg px-8 py-4 font-semibold shadow-xl">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Free Assessment
              </Button>
              <Button variant="health-outline" size="lg" className="text-lg px-8 py-4 font-semibold">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-health-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-health-secondary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-health-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-health-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Expert Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="absolute -inset-8 bg-gradient-to-r from-health-primary/20 via-blue-500/20 to-health-secondary/20 rounded-3xl blur-3xl opacity-60"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-slate-200">
              <img
                src={heroImage}
                alt="Professional Health Diagnostics Platform"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-scale-in">
              <div className="text-2xl font-bold text-health-primary">87%</div>
              <div className="text-sm text-muted-foreground">Diagnostic Accuracy</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200 animate-scale-in">
              <div className="text-2xl font-bold text-health-secondary">5min</div>
              <div className="text-sm text-muted-foreground">Average Assessment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
