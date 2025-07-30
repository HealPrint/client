import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-800/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-health-primary via-blue-600 to-health-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-heading group-hover:text-health-primary transition-colors">
                HealPrint AI
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Transforming health through AI-powered holistic diagnostics. 
              Empowering African communities with accessible, natural healthcare solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-slate-400 hover:text-health-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-health-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-health-primary transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-slate-800">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 text-white">Product</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="/features" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Features
              </a></li>
              <li><a href="/solutions" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Solutions
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                API
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Pricing
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Beta Program
              </a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 text-white">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="/about" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                About Us
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Careers
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Partners
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Press
              </a></li>
              <li><a href="#" className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center group">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Blog
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 sm:mb-6 text-white">Contact</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center gap-2 sm:gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-health-primary" />
                <span className="text-sm sm:text-base lg:text-lg">hello@healprint.ai</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-health-secondary" />
                <span className="text-sm sm:text-base lg:text-lg">+234 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-health-primary" />
                <span className="text-sm sm:text-base lg:text-lg">Lagos, Nigeria</span>
              </li>
            </ul>
            <Button variant="health" className="w-full group text-sm sm:text-base">
              Get in Touch
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm lg:text-base text-slate-400">
              © 2024 HealPrint AI. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm lg:text-base">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;