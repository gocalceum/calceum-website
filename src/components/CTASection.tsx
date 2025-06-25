
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Set up in under 5 minutes",
    "No credit card required",
    "Cancel anytime",
    "24/7 customer support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to supercharge your sales?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Attio to build stronger customer relationships and drive revenue growth.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-medium group"
              >
                Start for free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 text-base font-medium"
              >
                Schedule a demo
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Free forever for up to 10 users. No hidden fees.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
