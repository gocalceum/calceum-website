
import { Card, CardContent } from "@/components/ui/card";
import CalButton from "@/components/CalButton";

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
              Excited yet?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us on a journey to make accounting more accessible and efficient.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center items-center">
              <CalButton className="px-3" />
            </div>
        </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
