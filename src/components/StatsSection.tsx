import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Leaf } from "lucide-react";

const stats = [
  {
    number: "78%",
    label: "Faster diagnosis",
    sublabel: "with smart insights",
    color: "text-health-primary",
    icon: Heart,
    bgColor: "bg-gradient-to-br from-health-primary/10 to-blue-500/10",
    company: "HealthTech",
    companyIcon: "🏥"
  },
  {
    number: "84%",
    label: "Better accuracy",
    sublabel: "intelligent analysis",
    color: "text-health-secondary",
    icon: Brain,
    bgColor: "bg-gradient-to-br from-health-secondary/10 to-purple-500/10",
    company: "Wellness",
    companyIcon: "🌿"
  },
  {
    number: "87%",
    label: "Automated care",
    sublabel: "end-to-end solutions",
    color: "text-health-primary",
    icon: Leaf,
    bgColor: "bg-gradient-to-br from-health-primary/10 to-blue-500/10",
    company: "CareAI",
    companyIcon: "💊"
  }
];

const companies = [
  { name: "HealthTech", logo: "🏥" },
  { name: "Wellness", logo: "🌿" },
  { name: "CareAI", logo: "💊" },
  { name: "MedPlus", logo: "⚕️" },
  { name: "NaturalCare", logo: "🌱" },
  { name: "HealthSol", logo: "🏥" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trusted by leading{" "}
            <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
              health companies
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how healthcare providers are transforming patient care with our platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="text-2xl">{stat.companyIcon}</div>
                  </div>
                  <div className={`text-4xl lg:text-5xl font-bold mb-3 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600 mb-4">
                    {stat.sublabel}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {stat.company}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-8 font-medium">TRUSTED BY LEADING HEALTHCARE PROVIDERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-sm">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;