import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Calceum different from traditional accounting software?",
      answer: "Calceum is AI-native, meaning it's built from the ground up with artificial intelligence at its core. This allows for automated bookkeeping, intelligent insights, and predictive analytics that traditional software can't match. We reduce manual work by up to 80% while increasing accuracy."
    },
    {
      question: "How quickly can I get started with Calceum?",
      answer: "You can be up and running in under 5 minutes. Our AI-powered setup wizard automatically imports your existing data, configures your chart of accounts, and learns your business patterns. No lengthy implementation or training required."
    },
    {
      question: "Is my financial data secure with Calceum?",
      answer: "Absolutely. We use bank-level encryption, SOC 2 Type II compliance, and advanced security protocols to protect your data. All data is encrypted both in transit and at rest, and we never share your information with third parties."
    },
    {
      question: "Can Calceum integrate with my existing tools?",
      answer: "Yes! Calceum seamlessly integrates with over 100+ popular business tools including payment processors, banks, CRMs, and ERPs. Our API also allows for custom integrations to fit your specific workflow."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through chat, email, and phone. Every customer also gets a dedicated success manager for onboarding and ongoing optimization. Our AI assistant is always available for instant help with common questions."
    },
    {
      question: "How does pricing work?",
      answer: "We offer transparent, scalable pricing based on your business size and needs. You can start with our free tier for small teams, and upgrade as you grow. No hidden fees, no surprise charges - just simple, predictable pricing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - FAQs title */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900">FAQs</h2>
          </div>

          {/* Right side - Questions and answers */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none bg-gray-50 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;