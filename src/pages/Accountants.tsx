import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Accountants = () => {
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
            For Accountants
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Empower your practice with tools designed by accountants, for accountants.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Client Management
            </h2>
            <p className="text-gray-600 mb-6">
              Manage multiple clients efficiently with our centralized dashboard and automated workflows.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Collaboration Tools
            </h2>
            <p className="text-gray-600 mb-6">
              Work seamlessly with clients and team members with real-time collaboration features.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Professional Features
            </h2>
            <p className="text-gray-600 mb-6">
              Access advanced reporting, audit trails, and compliance tools designed for professional accountants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountants;