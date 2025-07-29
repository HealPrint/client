import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Award, Target, Lightbulb } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every solution we build puts the patient's holistic wellbeing at the center of our approach."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're committed to serving underserved African communities with accessible, culturally-sensitive healthcare."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Starting in Africa, scaling globally to democratize access to intelligent healthcare insights."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in diagnostic accuracy, data security, and user experience."
    }
  ];

  const team = [
    {
      name: "Dr. Amara Okafor",
      role: "Chief Medical Officer",
      description: "15+ years in dermatology and women's health across Nigeria and Ghana.",
    },
    {
      name: "Kwame Asante",
      role: "Chief Technology Officer", 
      description: "Former Google researcher, expert in medical ML and diagnostic systems.",
    },
    {
      name: "Fatima Al-Rashid",
      role: "Head of Product",
      description: "Healthcare UX specialist with deep understanding of African market needs.",
    },
    {
      name: "Dr. Sarah Mbeki",
      role: "Head of Research",
      description: "PhD in Nutritional Health, specializing in holistic wellness approaches.",
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
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Transforming{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  healthcare
                </span>{" "}
                through innovation
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                HealPrint was born from a simple observation: traditional healthcare often treats symptoms 
                in isolation, missing the interconnected nature of human health. We're building the future 
                of holistic, advanced diagnostics to bridge this gap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="health" size="lg" className="font-semibold">
                  Join Our Mission
                </Button>
                <Button variant="health-outline" size="lg" className="font-semibold">
                  Our Research
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/20 to-health-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src={aboutHero}
                alt="Healthcare Innovation"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded by Sheane Cosmetics, HealPrint emerged from years of witnessing the gap between 
              surface-level beauty treatments and underlying health issues. Our customers consistently 
              faced recurring skin and hair problems that no single product could solve.
            </p>
            <p>
              We realized that true healing requires understanding the whole person—their hormones, 
              nutrition, stress levels, and lifestyle. Traditional healthcare systems often lack the 
              time and tools to make these connections, especially in underserved communities.
            </p>
            <p>
              That's why we're building HealPrint: to democratize access to holistic health insights, 
              combining the wisdom of natural remedies with the power of advanced technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-health-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-heading">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of healthcare professionals, researchers, and product experts 
              united by our mission to transform healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-health-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12">
            <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Ready to join our mission?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you're a healthcare professional, researcher, or someone passionate about 
              improving global health outcomes, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-semibold">
                Join Our Team
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-health-primary font-semibold">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;