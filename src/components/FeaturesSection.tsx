import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Brain, Package, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assessment",
    description: "Conversational tool that collects symptoms across skin, hair, digestion, sleep, stress, and hormonal health.",
    color: "text-health-primary bg-health-primary/10"
  },
  {
    icon: Brain,
    title: "Smart Diagnostics",
    description: "Logic-based engine using medical patterns and AI recognition to identify likely internal health imbalances.",
    color: "text-health-secondary bg-health-secondary/10"
  },
  {
    icon: Package,
    title: "Personalized Solutions",
    description: "Natural product recommendations and lifestyle guidance tailored to your specific health profile and needs.",
    color: "text-health-primary bg-health-primary/10"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your healing journey with detailed progress dashboards and symptom tracking over time.",
    color: "text-health-secondary bg-health-secondary/10"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-health-accent/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Unleashing the power of{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              AI-powered holistic health
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform bridges the gap between surface symptoms and underlying health causes, 
            empowering you with natural, effective solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;