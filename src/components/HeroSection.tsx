
import { Button } from "@/components/ui/button";
import { BookOpen, Play, FileText, BarChart3, Users } from "lucide-react";
import CalButton from "@/components/CalButton";

interface HeroSectionProps {
  activeFeature: string;
  setActiveFeature: (feature: string) => void;
}

const HeroSection = ({ activeFeature, setActiveFeature }: HeroSectionProps) => {

  return (
    <section className="relative pt-40 pb-0 sm:pt-48 sm:pb-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-6">
            Accounting software{" "}
            <br className="hidden sm:block" />
            for a new age.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Calceum is an AI-native accounting platform that does the heavy lifting for busy finance teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center mb-8">
            <CalButton size="lg" className="px-3 py-3 text-base font-medium group" showArrow />
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-gray-600 mt-24 mb-0">
            <button 
              onClick={() => setActiveFeature("bookkeeping")}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-gray-500" />
              Bookkeeping
            </button>
            <button 
              onClick={() => setActiveFeature("automations")}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 text-gray-500" />
              Automations
            </button>
            <button 
              onClick={() => setActiveFeature("reporting")}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-gray-500" />
              Reporting
            </button>
            <button 
              onClick={() => setActiveFeature("insights")}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-gray-500" />
              Insights
            </button>
            <button 
              onClick={() => setActiveFeature("collaboration")}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <Users className="w-4 h-4 text-gray-500" />
              Collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
