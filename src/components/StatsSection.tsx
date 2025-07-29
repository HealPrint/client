import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "80%",
    label: "of women experience hair loss",
    sublabel: "linked to internal health",
    color: "text-health-primary"
  },
  {
    number: "72%",
    label: "of recurring acne cases",
    sublabel: "have gut/hormonal causes",
    color: "text-health-secondary"
  },
  {
    number: "$48B",
    label: "natural beauty market by 2027",
    sublabel: "driven by wellness-conscious consumers",
    color: "text-health-primary"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;