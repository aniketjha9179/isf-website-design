import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase. Please ensure the product is in original condition with all original packaging and tags intact. Items must be unworn and undamaged to qualify for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days within the continental US. Express shipping (2-3 days) and overnight options are available at checkout. International orders may take 10-14 business days depending on customs processing.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide to over 200 countries and territories. International shipping rates are calculated automatically at checkout based on destination and package weight. Customs duties and taxes may apply and are the responsibility of the recipient.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order anytime by logging into your account or using our order lookup tool with your order number and email address.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secured with 256-bit SSL encryption for your safety.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely! Our customer support team is available Monday-Friday 9AM-6PM EST via live chat, email, or phone. We typically respond to emails within 24 hours and offer same-day responses during business hours.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Support Center
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight mb-6">
            Frequently Asked
            <span className="block">Questions</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Find quick answers to the most common questions about our products, 
            shipping, and services. Can't find what you're looking for?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors">
              Contact our support team
            </span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
                              <div className={`group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-slate-500/10 ${
                  activeIndex === index 
                    ? 'shadow-xl shadow-slate-500/20 border-blue-300 bg-blue-50/30' 
                    : 'shadow-md hover:bg-slate-50/50'
                }`}>
                {/* Remove gradient border effect for better visibility */}
                
                <div className="p-6 md:p-8">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-start text-left group"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}>
                        <Sparkles className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                          activeIndex === index 
                            ? 'text-slate-900' 
                            : 'text-slate-800 group-hover:text-slate-900'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-blue-600 text-white rotate-180' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index 
                      ? 'max-h-96 opacity-100 mt-6' 
                      : 'max-h-0 opacity-0 mt-0'
                  }`}>
                    <div className="pl-14 pr-12">
                      <div className="h-px bg-gradient-to-r from-slate-200 to-transparent mb-6"></div>
                      <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                        <p className="text-slate-800 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Our friendly support team is here to help you with anything else you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
                Contact Support
              </button>
              <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Browse Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;