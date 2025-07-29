import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Globe, Send } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["Lagos, Nigeria", "Nairobi, Kenya", "Accra, Ghana"],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (0) 123 456 789", "+254 (0) 123 456 789", "+233 (0) 123 456 789"],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@healprint.ai", "support@healprint.ai", "partnerships@healprint.ai"],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["Monday - Friday: 8AM - 6PM WAT", "Saturday: 10AM - 4PM WAT", "24/7 AI Chat Support"],
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description: "Questions about HealPrint AI, our mission, or how our platform works.",
      action: "Send Message"
    },
    {
      icon: Users,
      title: "Partnership Opportunities",
      description: "Healthcare providers, organizations, or businesses interested in collaboration.",
      action: "Discuss Partnership"
    },
    {
      icon: Globe,
      title: "Media & Press",
      description: "Media inquiries, press releases, and interview requests.",
      action: "Media Kit"
    }
  ];

  const officeLocations = [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "123 Victoria Island, Lagos State",
      description: "Our main development and operations hub serving West Africa."
    },
    {
      city: "Nairobi",
      country: "Kenya", 
      address: "456 Westlands, Nairobi County",
      description: "East Africa operations center and research facility."
    },
    {
      city: "Accra",
      country: "Ghana",
      address: "789 Airport City, Greater Accra",
      description: "West Africa business development and partnerships office."
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
                Let's build the{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  future of health
                </span>{" "}
                together
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're a healthcare provider, potential partner, or someone passionate about 
                improving health outcomes in Africa, we'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="health" size="lg" className="font-semibold">
                  Schedule a Call
                </Button>
                <Button variant="health-outline" size="lg" className="font-semibold">
                  Join Beta Program
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-health-primary/20 to-health-secondary/20 rounded-3xl blur-2xl"></div>
              <img
                src={contactHero}
                alt="Healthcare Team Collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach our team across our African offices and beyond.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-heading">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-center">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="border-slate-300 focus:border-health-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="border-slate-300 focus:border-health-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="border-slate-300 focus:border-health-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+234 (0) 123 456 789"
                      className="border-slate-300 focus:border-health-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization" className="font-medium">Organization (Optional)</Label>
                  <Input 
                    id="organization" 
                    placeholder="Your organization or company name"
                    className="border-slate-300 focus:border-health-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief description of your inquiry"
                    className="border-slate-300 focus:border-health-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry, project, or how we can help..."
                    rows={6}
                    className="border-slate-300 focus:border-health-primary resize-none"
                  />
                </div>
                
                <Button variant="health" size="lg" className="w-full font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Specific Inquiries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the most relevant option for your specific needs and we'll connect you 
              with the right team member.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-health-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-health-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold font-heading">
                      {option.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button variant="health-outline" className="w-full">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-health-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our offices across Africa where our teams are working to transform healthcare.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-health-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-health-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold font-heading">
                        {location.city}
                      </CardTitle>
                      <p className="text-muted-foreground">{location.country}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-foreground">
                    {location.address}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {location.description}
                  </p>
                  <Button variant="health-outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-heading text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-6 mb-12">
            <Card className="text-left border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  How quickly can we expect a response?
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, our AI chat support is available 24/7.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-left border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Do you offer on-site consultations?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide on-site consultations for healthcare organizations and 
                  enterprise clients across our coverage areas in Africa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-left border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Can we schedule a product demonstration?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We offer personalized product demos for potential partners 
                  and enterprise clients. Contact us to schedule one.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for?
          </p>
          <Button variant="health" size="lg" className="font-semibold">
            View Full FAQ
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6 font-heading">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the healthcare revolution and help us make quality health insights 
              accessible to everyone, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-semibold">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-health-primary font-semibold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;