import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, ArrowRight } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Women's Health",
    description: "AI-powered solutions for hormonal health, reproductive wellness, and comprehensive care for women across Africa.",
    features: [
      "Hormonal balance analysis",
      "PCOS & fertility insights", 
      "Menstrual health tracking"
    ],
    color: "text-pink-600 bg-pink-50"
  },
  {
    icon: Leaf,
    title: "Natural Wellness",
    description: "Holistic approaches combining traditional African remedies with modern AI diagnostics for sustainable health.",
    features: [
      "Natural remedy recommendations",
      "Nutrition & lifestyle guidance",
      "Preventative health strategies"
    ],
    color: "text-green-600 bg-green-50"
  }
];

const IndustrySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Empowering health across{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              African communities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored AI solutions addressing the unique health challenges and opportunities 
            across diverse African markets and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${industry.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {industry.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-health-primary"></div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="health-outline" className="w-full group">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;