import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WhyCalceum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-16 pt-24 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-semibold text-gray-900 mb-6">
            Why Calceum?
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Discover why thousands of businesses trust Calceum for their accounting needs.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              AI-Powered Efficiency
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI-native platform automates repetitive tasks, allowing your team to focus on strategic financial decisions.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Real-Time Insights
            </h2>
            <p className="text-gray-600 mb-6">
              Get instant access to your financial data with powerful reporting and analytics tools.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Seamless Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Connect with your existing tools and workflows for a smooth transition.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyCalceum;