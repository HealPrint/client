import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-health-primary via-blue-600 to-health-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-health-primary/20 to-blue-500/20 rounded-full blur-2xl"></div>
          <CardContent className="p-12 lg:p-16 text-center relative">
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Badge variant="secondary" className="text-sm font-semibold px-4 py-2 bg-white/20 text-white border-white/30">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Join the Revolution
                  </Badge>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900">
                  Ready to transform your{" "}
                  <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                    health journey?
                  </span>
                </h2>
                
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Join thousands of users discovering the root causes of their health concerns 
                  and finding effective solutions through our platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="health" size="lg" className="text-lg px-10 py-6 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <MessageSquare className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Start Free Assessment
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all duration-300 group">
                  Join Beta Program
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-slate-500">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-health-primary" />
                  <span className="font-medium">10K+ active users</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-health-secondary" />
                  <span className="font-medium">Available worldwide</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <MessageSquare className="w-5 h-5 text-health-primary" />
                  <span className="font-medium">Free consultation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;