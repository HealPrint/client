import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Leaf, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const logos = [
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903564/logo-echo_esh6hy.png", 
    alt: "Sodicam", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-acme_lwmqin.png", 
    alt: "Diagnostics", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-pulse_feixsm.png", 
    alt: "ITV", 
    width: 144, 
    height: 80 
  },
  { 
    src: "https://res.cloudinary.com/ecosheane/image/upload/v1744903562/logo-apex_qyehhm.png", 
    alt: "FIBA", 
    width: 144, 
    height: 80 
  },
];

const StatsSection = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = 1; // Pixels per frame
  
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    
    const animate = (currentTime: number) => {
      if (lastTime === 0) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;
      
      setPosition(prev => {
        const newPosition = prev - speed * (deltaTime / 16);
        // Reset when first set is completely out of view
        if (Math.abs(newPosition) >= logos.length * 200) {
          return 0;
        }
        return newPosition;
      });
      
      lastTime = currentTime;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 font-medium">TRUSTED BY LEADING HEALTHCARE PROVIDERS</p>
          <div className="relative overflow-hidden" ref={containerRef}>
            <div 
              className="flex items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 opacity-70"
              style={{
                transform: `translateX(${position}px)`,
                width: 'max-content'
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-w-full max-h-full object-contain"
                        style={{
                          filter: "brightness(0) saturate(100%)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-w-full max-h-full object-contain"
                        style={{
                          filter: "brightness(0) saturate(100%)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {logos.map((logo, index) => (
                <div key={`third-${index}`} className="hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <div className="w-36 h-20 flex items-center justify-center bg-transparent border border-gray-500 rounded-full p-4 flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="max-w-full max-h-full object-contain"
                        style={{
                          filter: "brightness(0) saturate(100%)"
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;