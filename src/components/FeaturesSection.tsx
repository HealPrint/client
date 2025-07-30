import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, ArrowRight } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Smart Health Assessment",
    description: "Get instant health insights with our advanced diagnostics and personalized recommendations.",
    color: "text-health-primary bg-gradient-to-br from-health-primary/10 to-blue-500/10",
    gradient: "from-health-primary to-blue-600"
  },
  {
    icon: Brain,
    title: "Personalized Solutions",
    description: "Receive tailored health solutions based on your unique symptoms and lifestyle.",
    color: "text-health-secondary bg-gradient-to-br from-health-secondary/10 to-purple-500/10",
    gradient: "from-health-secondary to-purple-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Unleashing the power of{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              intelligent health diagnostics
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our platform bridges the gap between symptoms and solutions, 
            empowering you with effective health insights.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Mobile Phone Mockup with Content Inside */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-2 border border-slate-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 max-w-sm lg:max-w-md">
              {/* Phone Screen Content */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 min-h-[600px] sm:min-h-[700px]">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-health-primary to-health-secondary rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">HealPrint</span>
                  </div>
                  <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                </div>

                {/* App Content */}
                <div className="space-y-4">
                  {/* Welcome Message */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-health-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">Health Assistant</div>
                        <div className="text-xs text-slate-500">Online now</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hi! I'm here to help you understand your health better. What symptoms are you experiencing today?
                    </p>
                  </div>

                  {/* Feature Cards Inside Phone */}
                  <div className="space-y-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-6 h-6 rounded-lg ${feature.color} flex items-center justify-center`}>
                              <Icon className="w-3 h-3" />
                            </div>
                            <div className="font-semibold text-slate-900 text-xs">
                              {feature.title}
                            </div>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                          <div className="flex justify-end mt-2">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                              <ArrowRight className="w-2 h-2 text-white" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-xl p-3">
                    <div className="text-xs font-semibold text-slate-900 mb-2">Quick Actions</div>
                    <div className="flex gap-2">
                      <button className="bg-health-primary text-white text-xs px-3 py-1 rounded-lg font-medium">
                        Start Assessment
                      </button>
                      <button className="bg-white text-slate-700 text-xs px-3 py-1 rounded-lg font-medium border border-slate-200">
                        View History
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-slate-200/50 animate-scale-in">
              <div className="text-xs font-bold text-health-primary">87%</div>
              <div className="text-xs text-slate-600">Accuracy</div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-2 border border-slate-200/50 animate-scale-in">
              <div className="text-xs font-bold text-health-secondary">5min</div>
              <div className="text-xs text-slate-600">Assessment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;