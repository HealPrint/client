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
    <section className="py-24 bg-gradient-to-br from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Unleashing the power of{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              intelligent health diagnostics
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our platform bridges the gap between symptoms and solutions, 
            empowering you with effective health insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Smartphone Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl p-2 border border-slate-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <img
                src="/smartphone-mockup.svg"
                alt="HealPrint Mobile App"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </CardTitle>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-end">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;