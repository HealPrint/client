import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Sparkles, 
  Brain, 
  Heart, 
  Leaf, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Target,
  TrendingUp
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms analyze symptoms and provide accurate health assessments in minutes.",
      features: ["Instant symptom analysis", "Personalized health insights", "Evidence-based recommendations"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Personalized Care Plans",
      description: "Tailored health solutions based on your unique profile, lifestyle, and health goals.",
      features: ["Custom nutrition plans", "Exercise recommendations", "Lifestyle optimization"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Leaf,
      title: "Natural Wellness Solutions",
      description: "Holistic approaches combining traditional wisdom with modern health science.",
      features: ["Herbal remedies", "Natural supplements", "Mind-body wellness"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Preventive Healthcare",
      description: "Proactive health monitoring and early detection to prevent issues before they arise.",
      features: ["Health risk assessment", "Early warning systems", "Preventive strategies"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get health insights in under 5 minutes with our advanced AI technology."
    },
    {
      icon: Target,
      title: "Highly Accurate",
      description: "95% accuracy rate backed by medical research and clinical validation."
    },
    {
      icon: Users,
      title: "Always Available",
      description: "24/7 access to health guidance whenever you need it most."
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Our AI improves with every interaction, providing better insights over time."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-health-primary/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-health-secondary/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 hover:scale-105 transition-transform duration-300 mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Our Solutions
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-tight tracking-tight mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-health-primary via-blue-600 to-health-secondary bg-clip-text text-transparent">
                Health Solutions
              </span>{" "}
              for Modern Life
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our intelligent platform transforms your health journey with personalized, evidence-based solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">
                        {solution.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                HealPrint
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our innovative platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-health-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of users who have already discovered the power of intelligent health diagnostics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button variant="health-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold bg-white text-health-primary hover:bg-slate-50 transition-all duration-300 group">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Start Free Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="health-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold border-white text-white hover:bg-white/10 transition-all duration-300">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;