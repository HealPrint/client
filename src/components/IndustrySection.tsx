import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, ArrowRight, CheckCircle, Star, Quote, Building2, Users, Target, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const customerNeeds = [
  {
    icon: Target,
    title: "Healthcare Providers",
    description: "Leading hospitals and clinics need intelligent automation to streamline patient care and reduce administrative burden.",
    needs: [
      "Automated patient triage",
      "Real-time symptom analysis", 
      "Seamless care coordination"
    ],
    color: "text-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50",
    gradient: "from-blue-500 to-indigo-600",
    customers: ["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins"],
    customerCount: "500+"
  },
  {
    icon: Zap,
    title: "Wellness Companies",
    description: "Modern wellness platforms need AI-powered insights to deliver personalized health recommendations at scale.",
    needs: [
      "Personalized coaching",
      "Preventative health insights",
      "Continuous monitoring"
    ],
    color: "text-green-600 bg-gradient-to-br from-green-50 to-emerald-50",
    gradient: "from-green-500 to-emerald-600",
    customers: ["Noom", "Calm", "Headspace"],
    customerCount: "300+"
  },
  {
    icon: Shield,
    title: "Health Tech Startups",
    description: "Innovative startups need reliable AI infrastructure to build next-generation health applications.",
    needs: [
      "Scalable AI infrastructure",
      "Compliance-ready solutions",
      "Rapid deployment"
    ],
    color: "text-purple-600 bg-gradient-to-br from-purple-50 to-violet-50",
    gradient: "from-purple-500 to-violet-600",
    customers: ["HealthTech Inc", "MedAI", "CareFlow"],
    customerCount: "200+"
  }
];

const CustomerSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 mb-4">
            Customer Needs
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            What our customers{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              really need
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges and requirements of healthcare organizations. 
            Here's how we're solving their most critical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {customerNeeds.map((customer, index) => {
            const Icon = customer.icon;
            return (
              <Card key={index} className="border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="pb-6 sm:pb-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${customer.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                        {customer.title}
                      </CardTitle>
                      <p className="text-sm text-slate-500 font-medium">{customer.customerCount} customers</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                    {customer.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 sm:space-y-8">
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-medium text-slate-500">Key needs:</p>
                    {customer.needs.map((need, needIndex) => (
                      <div key={needIndex} className="flex items-center gap-3 sm:gap-4 group/item">
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${customer.gradient} flex items-center justify-center group-hover/item:scale-105 transition-transform duration-300`}>
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium">{need}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm font-medium text-slate-500">Representative customers:</p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      {customer.customers.map((customerName, customerIndex) => (
                        <Badge key={customerIndex} variant="outline" className="text-xs sm:text-sm font-medium">
                          {customerName}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full cursor-pointer text-xs sm:text-sm md:text-base bg-white border border-health-primary text-slate-800 hover:bg-health-primary/10 hover:text-health-primary transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 inline" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;