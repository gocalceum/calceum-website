
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary" 
              className="bg-white/80 text-gray-700 border border-gray-200 hover:bg-white transition-colors cursor-pointer"
            >
              Attio for desktop is here
              <ChevronRight className="ml-1 h-3 w-3" />
            </Badge>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Customer{" "}
            <br className="hidden sm:block" />
            relationship magic.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Attio is the AI-native CRM that builds, scales and grows your company to the next level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-medium"
            >
              Start for free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-base font-medium border-gray-300 hover:bg-gray-50"
            >
              Talk to sales
            </Button>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600 mb-12">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
              Data
            </div>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              Automations
            </div>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              Pipeline
            </div>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              Productivity
            </div>
            <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
              Reporting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
