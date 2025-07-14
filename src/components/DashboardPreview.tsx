import { Card } from "@/components/ui/card";

interface DashboardPreviewProps {
  activeFeature: string;
}

const DashboardPreview = ({ activeFeature }: DashboardPreviewProps) => {
  // Render different content based on the active feature
  const renderFeatureContent = () => {
    switch (activeFeature) {
      case "bookkeeping":
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Bookkeeping Interface</h3>
            <p className="text-gray-600 mb-8">Automated bookkeeping that saves you hours every week</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Bookkeeping dashboard preview will be displayed here]
            </div>
          </div>
        );
      case "automations":
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Automations Workflow</h3>
            <p className="text-gray-600 mb-8">Set up powerful workflows to streamline your accounting</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Automation builder interface will be displayed here]
            </div>
          </div>
        );
      case "reporting":
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Reporting Dashboard</h3>
            <p className="text-gray-600 mb-8">Real-time financial reports at your fingertips</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Financial reports dashboard will be displayed here]
            </div>
          </div>
        );
      case "insights":
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="text-gray-600 mb-8">Make better decisions with intelligent analytics</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Insights analytics dashboard will be displayed here]
            </div>
          </div>
        );
      case "collaboration":
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Team Collaboration</h3>
            <p className="text-gray-600 mb-8">Work seamlessly with your team and clients</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Collaboration workspace will be displayed here]
            </div>
          </div>
        );
      default:
        return (
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Bookkeeping Interface</h3>
            <p className="text-gray-600 mb-8">Automated bookkeeping that saves you hours every week</p>
            <div className="bg-gray-100 rounded-lg p-8 text-gray-500 min-h-[500px] flex items-center justify-center">
              [Bookkeeping dashboard preview will be displayed here]
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
          {renderFeatureContent()}
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;