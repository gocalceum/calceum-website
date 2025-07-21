import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-16 pt-24 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for small businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-semibold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Up to 100 transactions/month</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Basic reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Email support</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-sm p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-semibold">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Unlimited transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Advanced reporting & analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">API access</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-semibold">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Everything in Professional</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">SLA & compliance</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;