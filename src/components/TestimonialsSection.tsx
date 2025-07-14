
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Attio has completely transformed how we manage our customer relationships. The AI-powered insights have helped us close 40% more deals.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechCorp",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "The unified data platform is a game-changer. We finally have all our customer data in one place with incredible automation capabilities.",
      author: "Marcus Johnson",
      role: "Director of Operations", 
      company: "GrowthLabs",
      avatar: "MJ",
      rating: 5
    },
    {
      quote: "Best CRM we've ever used. The team collaboration features and real-time analytics have improved our sales process dramatically.",
      author: "Emily Rodriguez",
      role: "Sales Manager",
      company: "InnovateCo",
      avatar: "ER",
      rating: 5
    }
  ];

  const logos = [
    "Stripe", "GitHub", "Figma", "Vercel", "Notion", "Linear"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how companies are using Attio to build stronger customer relationships and drive growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
