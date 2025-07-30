import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users, Shield, Award, Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-health-primary/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-health-secondary/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-semibold px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Health Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-slate-900 leading-tight tracking-tight">
                Your health,{" "}
                <span className="bg-gradient-to-r from-health-primary via-blue-600 to-health-secondary bg-clip-text text-transparent">
                  reimagined
                </span>{" "}
                with intelligence
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                Transform your health with smart diagnostics and personalized solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="health" size="lg" className="text-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <MessageSquare className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="health-outline" size="lg" className="text-lg px-8 py-4 font-semibold hover:bg-slate-50 transition-all duration-300 group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-health-primary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">10K+</div>
                  <div className="text-sm text-slate-600">Users</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-health-secondary/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-health-secondary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">95%</div>
                  <div className="text-sm text-slate-600">Accuracy</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-health-primary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="absolute -inset-8 bg-gradient-to-r from-health-primary/20 via-blue-500/20 to-health-secondary/20 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-slate-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <img
                src="/hero-chat.svg"
                alt="Health Chat Interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-slate-200/50 animate-scale-in hover:scale-110 transition-all duration-300">
              <div className="text-2xl font-bold text-health-primary">87%</div>
              <div className="text-sm text-slate-600">Accuracy</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-slate-200/50 animate-scale-in hover:scale-110 transition-all duration-300">
              <div className="text-2xl font-bold text-health-secondary">5min</div>
              <div className="text-sm text-slate-600">Assessment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
