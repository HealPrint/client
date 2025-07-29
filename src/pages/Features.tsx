import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Brain, Package, TrendingUp, Smartphone, Cloud, Shield, Zap, Users, Globe, ArrowRight, CheckCircle } from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "Intelligent Symptom Assessment",
      description: "Advanced conversational interface that naturally guides users through comprehensive health assessments.",
      details: [
        "Natural language processing for symptom description",
        "Multi-domain health questioning (skin, hair, hormonal, digestive)",
        "Cultural and linguistic adaptation for African markets",
        "Smart follow-up questions based on initial responses"
      ],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Brain,
      title: "Advanced Pattern Recognition",
      description: "Sophisticated algorithms that identify connections between symptoms across different body systems.",
      details: [
        "Cross-system health correlation analysis", 
        "Machine learning-based pattern detection",
        "Integration of traditional and modern medical knowledge",
        "Continuous learning from user outcomes"
      ],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Package,
      title: "Personalized Recommendations",
      description: "Tailored treatment plans combining natural products, lifestyle changes, and medical guidance.",
      details: [
        "Evidence-based natural remedy suggestions",
        "Personalized nutrition and lifestyle advice",
        "Integration with Sheane Cosmetics product catalog",
        "Medical test and specialist referral recommendations"
      ],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Progress Monitoring",
      description: "Comprehensive tracking and analytics to monitor health improvements over time.",
      details: [
        "Symptom progression tracking with visual analytics",
        "Treatment effectiveness measurement",
        "Predictive health modeling",
        "Outcome correlation analysis"
      ],
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const technicalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for smartphones with offline capabilities for low-connectivity areas."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud platform ensuring fast global access and data protection."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "End-to-end encryption and GDPR compliance ensuring complete data privacy."
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant analysis and recommendations within seconds of completing assessment."
    },
    {
      icon: Users,
      title: "Multi-user Support",
      description: "Family accounts and healthcare provider dashboards for comprehensive care."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in English, Swahili, Hausa, French, and Arabic with cultural adaptation."
    }
  ];

  const benefits = [
    {
      title: "For Individuals",
      points: [
        "Early detection of health imbalances",
        "Reduced healthcare costs",
        "Personalized natural treatment plans",
        "Better understanding of body connections",
        "Convenient 24/7 health guidance"
      ]
    },
    {
      title: "For Healthcare Providers",
      points: [
        "Enhanced diagnostic capabilities",
        "Improved patient preparation",
        "Better treatment outcomes",
        "Reduced consultation time",
        "Evidence-based decision support"
      ]
    },
    {
      title: "For Communities",
      points: [
        "Democratized health knowledge",
        "Preventive care at scale",
        "Reduced health disparities",
        "Cultural health preservation",
        "Economic health benefits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-health-accent via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-health-primary/10 text-health-primary border-health-primary/20 mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
            Advanced{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              health features
            </span>{" "}
            for holistic health
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the cutting-edge technology and intelligent features that make HealPrint 
            the most comprehensive holistic health platform available today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="health" size="lg" className="font-semibold">
              Try Features Now
            </Button>
            <Button variant="health-outline" size="lg" className="font-semibold">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Core Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four powerful advanced modules working together to provide comprehensive 
              health insights and personalized recommendations.
            </p>
          </div>
          
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-bold font-heading text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-health-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="health-outline" className="group">
                      Learn more about this feature
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-50 to-white">
                      <CardContent className="p-8">
                        <div className="aspect-video bg-gradient-to-br from-health-primary/10 to-health-secondary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-24 h-24 text-health-primary opacity-60" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Technical Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure reliability, security, 
              and accessibility across all African markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-health-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-heading">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              HealPrint creates value for individuals, healthcare providers, 
              and entire communities across Africa and beyond.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-heading text-center">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-health-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Why Choose HealPrint?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our comprehensive approach compares to traditional healthcare solutions.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-health-primary text-white">
                    <tr>
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold">Traditional Healthcare</th>
                      <th className="text-center p-6 font-semibold">HealPrint</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-6 font-medium">Holistic Assessment</td>
                      <td className="p-6 text-center text-muted-foreground">Limited</td>
                      <td className="p-6 text-center text-health-primary font-semibold">Comprehensive</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-6 font-medium">Accessibility</td>
                      <td className="p-6 text-center text-muted-foreground">Barriers exist</td>
                      <td className="p-6 text-center text-health-primary font-semibold">24/7 Available</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Cost</td>
                      <td className="p-6 text-center text-muted-foreground">High</td>
                      <td className="p-6 text-center text-health-primary font-semibold">Affordable</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-6 font-medium">Cultural Sensitivity</td>
                      <td className="p-6 text-center text-muted-foreground">Variable</td>
                      <td className="p-6 text-center text-health-primary font-semibold">Built-in</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Natural Solutions</td>
                      <td className="p-6 text-center text-muted-foreground">Limited</td>
                      <td className="p-6 text-center text-health-primary font-semibold">Extensive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Experience the future of healthcare
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands already using HealPrint to take control of their health 
              with intelligent, personalized, and culturally-sensitive care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-semibold">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-health-primary font-semibold">
                Explore All Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;