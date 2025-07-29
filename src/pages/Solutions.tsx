import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, Stethoscope, Leaf, ChartBar, Shield, Users, ArrowRight } from "lucide-react";
import solutionsHero from "@/assets/solutions-hero.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Advanced Chat Diagnostics",
      description: "Intelligent conversational interface that understands your symptoms across skin, hair, digestive, hormonal, and mental health.",
      features: [
        "Natural language symptom assessment",
        "Multi-domain health analysis",
        "Personalized follow-up questions",
        "Cultural sensitivity and local language support"
      ],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Brain,
      title: "Holistic Health Intelligence",
      description: "Advanced pattern recognition that connects seemingly unrelated symptoms to identify root causes.",
      features: [
        "Cross-system health correlation",
        "Hormonal pattern analysis",
        "Nutritional deficiency detection",
        "Stress impact assessment"
      ],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Leaf,
      title: "Natural Treatment Recommendations",
      description: "Evidence-based natural remedies and lifestyle interventions tailored to your specific health profile.",
      features: [
        "Personalized natural product suggestions",
        "Dietary and lifestyle modifications",
        "Traditional African remedy integration",
        "Supplement recommendations"
      ],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: ChartBar,
      title: "Progress Tracking & Analytics",
      description: "Comprehensive monitoring of your health journey with actionable insights and trend analysis.",
      features: [
        "Symptom progression tracking",
        "Treatment effectiveness monitoring",
        "Health trend visualization",
        "Outcome prediction modeling"
      ],
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const industries = [
    {
      icon: Stethoscope,
      title: "Healthcare Providers",
      description: "Enhance patient consultations with advanced holistic assessments and treatment planning.",
      benefits: [
        "Reduced diagnostic time",
        "Comprehensive patient insights",
        "Evidence-based treatment plans",
        "Improved patient outcomes"
      ]
    },
    {
      icon: Users,
      title: "Community Health Programs",
      description: "Scale health education and preventive care across underserved communities.",
      benefits: [
        "Mass health screening capabilities",
        "Health literacy improvement",
        "Early intervention programs",
        "Cost-effective care delivery"
      ]
    },
    {
      icon: Shield,
      title: "Wellness Platforms",
      description: "Integrate comprehensive health diagnostics into existing wellness and beauty platforms.",
      benefits: [
        "Enhanced user engagement",
        "Personalized product recommendations", 
        "Data-driven insights",
        "Improved customer satisfaction"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-health-accent via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-health-primary/10 text-health-primary border-health-primary/20">
                <Brain className="w-4 h-4 mr-2" />
                Professional Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  health solutions
                </span>{" "}
                for every need
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                From individual health assessments to enterprise healthcare solutions, 
                our advanced platform adapts to serve communities, providers, and organizations 
                across the African continent and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="health" size="lg" className="font-semibold">
                  Explore Solutions
                </Button>
                <Button variant="health-outline" size="lg" className="font-semibold">
                  Request Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/20 to-health-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src={solutionsHero}
                alt="Healthcare Solutions Dashboard"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four powerful advanced modules that work together to provide comprehensive 
              holistic health insights and personalized treatment recommendations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl ${solution.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold font-heading">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {solution.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-health-primary"></div>
                          <span className="text-foreground">{feature}</span>
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

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored implementations for healthcare providers, community programs, 
              and wellness platforms across African markets.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-health-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold font-heading">
                      {industry.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                    <div className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-health-secondary"></div>
                          <span className="text-muted-foreground text-sm">{benefit}</span>
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

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-8">
            Easy Integration & Deployment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our solutions are designed for seamless integration with existing healthcare 
            systems, mobile apps, and web platforms.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-health-primary">API</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">RESTful APIs</h3>
              <p className="text-muted-foreground text-sm">
                Simple, well-documented APIs for easy integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-health-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-health-secondary">SDK</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Mobile SDKs</h3>
              <p className="text-muted-foreground text-sm">
                Native iOS and Android SDKs for mobile apps
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-health-primary">WEB</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Web Widgets</h3>
              <p className="text-muted-foreground text-sm">
                Embeddable widgets for websites and portals
              </p>
            </div>
          </div>
          
          <Button variant="health" size="lg" className="font-semibold">
            View Integration Docs
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Ready to transform your healthcare delivery?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join leading healthcare organizations already using HealPrint to provide 
              better, more comprehensive care to their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-semibold">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-health-primary font-semibold">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;