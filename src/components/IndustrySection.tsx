import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Smart health chatbots deliver intelligent automation to streamline patient experiences.",
    features: [
      "Automated assessments",
      "Symptom analysis", 
      "Patient engagement"
    ],
    color: "text-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50",
    gradient: "from-blue-500 to-indigo-600",
    customers: ["HealthTech", "Wellness", "CareAI"],
    customerLogos: ["🏥", "🌿", "💊"]
  },
  {
    icon: Leaf,
    title: "Wellness",
    description: "Deliver tailored wellness experiences with scalable health support and natural recommendations.",
    features: [
      "Natural remedies",
      "Lifestyle guidance",
      "Preventative care"
    ],
    color: "text-green-600 bg-gradient-to-br from-green-50 to-emerald-50",
    gradient: "from-green-500 to-emerald-600",
    customers: ["NaturalCare", "MedPlus", "HealthSol"],
    customerLogos: ["🌱", "⚕️", "🏥"]
  }
];

const testimonials = [
  {
    company: "HealthTech",
    logo: "🏥",
    text: "HealPrint has transformed our patient care with seamless interaction and natural language understanding.",
    industry: "Healthcare",
    rating: 5
  },
  {
    company: "Wellness",
    logo: "🌿",
    text: "The platform has revolutionized our wellness consultations, providing accurate diagnostics and personalized recommendations.",
    industry: "Wellness",
    rating: 5
  },
  {
    company: "CareAI",
    logo: "💊",
    text: "Our healthcare delivery has been dramatically improved with HealPrint's intelligent automation.",
    industry: "Healthcare",
    rating: 5
  }
];

const IndustrySection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 mb-4">
            Industry
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Empowering industries with smarter{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              health solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions addressing unique health challenges across diverse markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="pb-6 sm:pb-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                      {industry.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-medium text-slate-500">Who using our services:</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      {industry.customers.map((customer, customerIndex) => (
                        <div key={customerIndex} className="flex items-center gap-1 sm:gap-2 text-slate-600">
                          <span className="text-base sm:text-lg">{industry.customerLogos[customerIndex]}</span>
                          <span className="text-xs sm:text-sm font-medium">{customer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="health-outline" className="w-full group/btn text-sm sm:text-base lg:text-lg py-4 sm:py-6 font-semibold">
                    Learn more
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Testimonials */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 mb-4">
            Customer
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Learn from customers using{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              HealPrint
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl">{testimonial.logo}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.company}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-4 sm:mb-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300 absolute -top-1 -left-1 sm:-top-2 sm:-left-2" />
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed pl-4 sm:pl-6">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;