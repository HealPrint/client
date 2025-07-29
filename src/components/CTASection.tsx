import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Globe } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-health-primary to-health-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Ready to transform your{" "}
                <span className="bg-gradient-to-r from-health-primary to-health-secondary bg-clip-text text-transparent">
                  health journey?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of users already discovering the root causes of their health concerns 
                and finding natural, effective solutions through our AI-powered platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="health" size="lg" className="text-lg px-8 py-4">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Start Your Free Assessment
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2">
                  Join Beta Program
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-health-primary" />
                  <span>10,000+ active users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-health-secondary" />
                  <span>Available across Africa</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-health-primary" />
                  <span>Free initial consultation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;