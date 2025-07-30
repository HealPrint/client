import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Sparkles, Users, Shield, Award, Play, ArrowRight, Send, User, Bot, Settings, Plus, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 pt-8">
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
      
      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-primary/5 via-transparent to-health-secondary/5 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent -z-10"></div>
      
      {/* Enhanced Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-health-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-health-secondary/20 to-purple-500/20 rounded-full blur-3xl animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Medium Floating Elements */}
        <div className="absolute top-20 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500/15 to-health-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/15 to-health-secondary/15 rounded-full blur-2xl animate-bounce" style={{animationDelay: '3s'}}></div>
        
        {/* Small Animated Particles */}
        <div className="absolute top-32 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-health-primary/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-48 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-health-secondary/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-24 right-1/4 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-blue-500/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-64 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500/25 rounded-full animate-bounce" style={{animationDelay: '3.5s'}}></div>
        
        {/* Subtle Wave Effects */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-health-primary/3 to-transparent animate-pulse"></div>
        <div className="absolute top-20 left-0 w-full h-32 bg-gradient-to-b from-transparent via-health-secondary/3 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-0 w-full h-24 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Mobile-Specific Elements */}
        <div className="absolute bottom-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-health-primary/10 to-blue-500/10 rounded-full blur-xl animate-pulse sm:hidden"></div>
        <div className="absolute bottom-32 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-health-secondary/10 to-purple-500/10 rounded-full blur-xl animate-bounce sm:hidden" style={{animationDelay: '1.5s'}}></div>
      </div>
      
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contact">
              <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-white border border-health-primary text-slate-800 hover:bg-health-primary/10 hover:text-health-primary transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md group">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-pulse inline" />
                Start Free Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </a>
            <a href="/contact">
                  <button className="w-full sm:w-auto cursor-pointer text-xs sm:text-sm md:text-base bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-200 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-2xl sm:rounded-3xl font-semibold shadow-sm hover:shadow-md group">
                    Join Beta Program
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                  </button>
                </a>
          </div>
        </div>

        {/*  Dashboard */}
        <div className="flex justify-center">
          <div className="relative max-w-5xl w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden">
              {/* Sidebar */}
              <div className="flex flex-col lg:flex-row">
                <div className="hidden lg:block w-full lg:w-56 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-health-primary to-health-secondary rounded-lg flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-slate-900">HealPrint</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                      <Plus className="w-4 h-4" />
                      New Chat
                    </button>
                  </div>
                  
                  <div className="space-y-1 mb-6 lg:mb-0">
                    <div className="text-xs font-medium text-slate-500 mb-2">Recent Conversations</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span className="truncate">Heart health analysis</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span className="truncate">Sleep optimization</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span className="truncate">Nutrition advice</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block absolute bottom-4 left-4 right-4">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                  </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col h-[400px] sm:h-[500px] lg:h-[600px]">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-500">Online</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {/* AI Message */}
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <p className="text-slate-700 text-sm leading-relaxed">
                          Hello! I'm your AI health assistant. I can help you understand your symptoms, 
                          provide personalized health insights, and recommend natural solutions. 
                          What would you like to know about your health today?
                        </p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 max-w-[85%] sm:max-w-[80%]">
                        <p className="text-slate-700 text-sm leading-relaxed bg-slate-100 rounded-lg p-3">
                          I've been experiencing fatigue and skin issues lately. Can you help me understand what might be causing this?
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3">
                      <div className="flex-1">
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
                      <div className="flex-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 sm:p-4 border-t border-slate-200">
                    <div className="flex gap-3">
                      <div className="flex-1 bg-slate-50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-3">
                        <input 
                          type="text" 
                          placeholder="Message HealPrint..." 
                          className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-500 outline-none"
                        />
                        <button className="w-8 h-8 bg-gradient-to-r from-health-primary to-health-secondary rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                          <Send className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 lg:gap-12 xl:gap-16 mt-12 sm:mt-16 max-w-4xl">
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
      </div>
    </section>
  );
};

export default Hero;

