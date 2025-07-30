import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users, Shield, Award, Play, ArrowRight, Send, User } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-health-primary/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-health-secondary/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 bg-gradient-to-r from-health-primary/10 to-blue-500/10 text-health-primary border-health-primary/20 hover:scale-105 transition-transform duration-300 mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Health Platform
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-slate-900 leading-tight tracking-tight mb-6">
            Your health,{" "}
            <span className="bg-gradient-to-r from-health-primary via-blue-600 to-health-secondary bg-clip-text text-transparent">
              reimagined
            </span>{" "}
            with intelligence
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your health with smart diagnostics and personalized solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12">
            <a href="/contact">
              <Button variant="health" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse" />
                Start Free Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="health-outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-slate-50 transition-all duration-300 group">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Central Chat Interface Mockup */}
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Main Chat Container */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-health-primary to-health-secondary p-4 sm:p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">HealPrint AI Assistant</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-white/90 text-xs sm:text-sm">Online • Ready to help</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-slate-50 to-white">
                {/* AI Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-health-primary to-health-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-slate-100 max-w-[80%]">
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Hi! I'm your AI health assistant. I can help you understand your symptoms, 
                      provide personalized health insights, and recommend natural solutions. 
                      What would you like to know about your health today?
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-gradient-to-r from-health-primary to-health-secondary rounded-2xl rounded-tr-md p-4 shadow-sm max-w-[80%]">
                    <p className="text-white text-sm leading-relaxed">
                      I've been experiencing fatigue and skin issues lately. Can you help me understand what might be causing this?
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-600" />
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-health-primary to-health-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-slate-100 max-w-[80%]">
                    <p className="text-slate-700 text-sm leading-relaxed mb-3">
                      I can help you analyze those symptoms! Fatigue and skin issues often indicate underlying health patterns. Let me ask a few questions to better understand your situation.
                    </p>
                    <div className="space-y-2">
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <p className="text-xs font-medium text-slate-600">Quick Assessment</p>
                        <p className="text-xs text-slate-500">Get personalized insights in 5 minutes</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <p className="text-xs font-medium text-slate-600">Natural Solutions</p>
                        <p className="text-xs text-slate-500">Discover holistic treatment options</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-health-primary to-health-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-slate-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <div className="flex gap-3">
                  <div className="flex-1 bg-slate-50 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <input 
                      type="text" 
                      placeholder="Type your health concerns..." 
                      className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-500 outline-none"
                    />
                    <button className="w-8 h-8 bg-gradient-to-r from-health-primary to-health-secondary rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-health-primary" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base sm:text-lg">10K+</div>
              <div className="text-xs sm:text-sm text-slate-600">Users</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-health-secondary/10 to-purple-500/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-health-secondary" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base sm:text-lg">95%</div>
              <div className="text-xs sm:text-sm text-slate-600">Accuracy</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-health-primary" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-base sm:text-lg">24/7</div>
              <div className="text-xs sm:text-sm text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
