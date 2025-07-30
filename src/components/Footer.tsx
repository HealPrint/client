import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-health-primary to-health-secondary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-heading">HealPrint AI</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming health through AI-powered holistic diagnostics. 
              Empowering African communities with accessible, natural healthcare solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/healprintai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-health-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/healprint-ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-health-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/healprintai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-health-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="/features" className="text-slate-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="/solutions" className="text-slate-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Beta Program</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                hello@healprint.ai
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                +234 (0) 123 456 789
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="inline-flex items-center gap-2 bg-health-primary hover:bg-health-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 HealPrint AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;