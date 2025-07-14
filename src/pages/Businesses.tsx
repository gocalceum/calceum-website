import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Businesses = () => {
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
            For Businesses
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Calceum is designed to meet the unique accounting needs of modern businesses.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Small & Medium Enterprises
            </h2>
            <p className="text-gray-600 mb-6">
              Streamline your financial operations with our intuitive platform designed for growing businesses.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Startups
            </h2>
            <p className="text-gray-600 mb-6">
              Get enterprise-level accounting capabilities without the complexity or cost.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Scale your accounting operations with advanced features and dedicated support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businesses;