import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Award, Target, Lightbulb, Sparkles } from "lucide-react";
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
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-health-primary/10 text-health-primary border-health-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                Transforming{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  healthcare
                </span>{" "}
                through innovation
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                HealPrint was born from a simple observation: traditional healthcare often treats symptoms 
                in isolation, missing the interconnected nature of human health. We're building the future 
                of holistic, advanced diagnostics to bridge this gap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-white border border-health-primary text-slate-800 hover:bg-health-primary/10 hover:text-health-primary transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
                  Join Our Mission
                </button>
                <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
                  Our Research
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/10 to-health-secondary/10 rounded-3xl blur-2xl"></div>
              <img
                src={aboutHero}
                alt="Healthcare Innovation"
                className="relative rounded-2xl shadow-lg border border-slate-200/50 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed">
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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-health-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center leading-relaxed text-sm">
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A diverse group of healthcare professionals, researchers, and product experts 
              united by our mission to transform healthcare.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-health-primary to-health-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-health-primary font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 lg:p-12">
            <Lightbulb className="w-12 h-12 lg:w-16 lg:h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to join our mission?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Whether you're a healthcare professional, researcher, or someone passionate about 
              improving global health outcomes, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-white border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
                Join Our Team
              </button>
              <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;