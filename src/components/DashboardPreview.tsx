
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Settings, Download, Plus, Search } from "lucide-react";

const DashboardPreview = () => {
  const companies = [
    {
      name: "Vercel",
      domain: "vercel.com",
      status: "Excellent",
      statusColor: "bg-green-100 text-green-800",
      arr: "$100M-$250M",
      strength: "Very strong",
      strengthColor: "text-green-600"
    },
    {
      name: "DigitalOcean",
      domain: "digitalocean.com",
      status: "Medium",
      statusColor: "bg-yellow-100 text-yellow-800",
      arr: "$500M-$1B",
      strength: "Strong",
      strengthColor: "text-blue-600"
    },
    {
      name: "GitHub",
      domain: "github.com",
      status: "Good",
      statusColor: "bg-green-100 text-green-800",
      arr: "$1B-$10B",
      strength: "Very strong",
      strengthColor: "text-green-600"
    },
    {
      name: "Stripe",
      domain: "stripe.com",
      status: "Good",
      statusColor: "bg-green-100 text-green-800",
      arr: "$1B-$10B",
      strength: "Very strong",
      strengthColor: "text-green-600"
    },
    {
      name: "Figma",
      domain: "figma.com",
      status: "Good",
      statusColor: "bg-green-100 text-green-800",
      arr: "$500M-$1B",
      strength: "Very strong",
      strengthColor: "text-green-600"
    },
    {
      name: "Intercom",
      domain: "intercom.com",
      status: "Medium",
      statusColor: "bg-yellow-100 text-yellow-800",
      arr: "$250M-$500M",
      strength: "Very strong",
      strengthColor: "text-green-600"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
          {/* Dashboard Header */}
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="font-medium text-gray-900">Basepoint</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">Companies</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    +1
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-600 bg-blue-50">
                  Top companies
                </Button>
                <div className="flex items-center text-sm text-gray-600">
                  <Search className="w-4 h-4 mr-1" />
                  <span>Sorted by Last email interaction</span>
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Advanced filter 3
                </Badge>
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  View settings
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-1" />
                  Import / Export
                </Button>
              </div>
            </div>
          </div>

          {/* Table Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
            <div className="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-3">Company</div>
              <div className="col-span-2">Domains</div>
              <div className="col-span-2">Associated deals</div>
              <div className="col-span-2">ICP Fit</div>
              <div className="col-span-2">Estimated ARR</div>
              <div className="col-span-1">Connection strength</div>
            </div>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-gray-200">
            {companies.map((company, index) => (
              <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">{company.name}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      {company.domain}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{company.name}</span>
                      {company.name === "Vercel" && (
                        <span className="text-gray-400 text-sm">- Expansion</span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge className={company.statusColor}>
                      {company.status}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-900 font-medium">{company.arr}</span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className={`text-sm font-medium ${company.strengthColor}`}>
                        {company.strength}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;
