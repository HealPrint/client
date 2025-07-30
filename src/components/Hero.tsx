import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-professional.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-400/20 via-sky-300/20 to-blue-500/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-medium px-6 py-3 bg-blue-50 text-blue-700 border-blue-200 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Health Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
                The smartest{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                  holistic health
                </span>{" "}
                platform ever built
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light">
                Transforming skin, hair & internal health through advanced AI diagnostics, 
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
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-600/10 rounded-3xl blur-3xl opacity-60"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-3 border border-slate-200/50 backdrop-blur-sm">
              <img
                src={heroImage}
                alt="Professional Health Diagnostics Platform"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200/50 animate-scale-in">
              <div className="text-3xl font-bold text-blue-600">87%</div>
              <div className="text-sm text-slate-600 font-medium">Diagnostic Accuracy</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200/50 animate-scale-in">
              <div className="text-3xl font-bold text-sky-600">5min</div>
              <div className="text-sm text-slate-600 font-medium">Average Assessment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
