
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState("bookkeeping");
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      <DashboardPreview activeFeature={activeFeature} />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
