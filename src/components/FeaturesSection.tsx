
import { Card, CardContent } from "@/components/ui/card";
import { Database, Zap, BarChart3, Users, Target, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Unified Data Platform",
      description: "Connect all your customer data sources into one powerful, AI-native platform that scales with your business.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Smart Automations",
      description: "Automate repetitive tasks with intelligent workflows that adapt and learn from your team's behavior.",
      color: "text-yellow-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with real-time reporting and predictive analytics powered by machine learning.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across sales, marketing, and customer success teams.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Pipeline Management",
      description: "Track opportunities through your sales process with customizable pipelines and forecasting.",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR compliance, and advanced encryption.",
      color: "text-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help growing teams build stronger customer relationships and drive revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
