import React, { useState } from "react";
import { Check, Star, ChevronDown, ChevronUp } from "lucide-react";

const PricingComponent = () => {
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeatures = (planIndex) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [planIndex]: !prev[planIndex],
    }));
  };

  const plans = [
    {
      name: "Business Starter",
      price: "₹499",
      period: "per month",
      description: "Perfect for small businesses",
      popular: true,
      keyFeatures: [
        "Facial Attendance",
        "Geo Fencing & Geotagging",
        "Payroll Management",
        "Biometric Integration",
        "Automatic payroll calculation",
        "Multilingual English and Hindi",
      ],
      allFeatures: [
        "Facial Attendance",
        "Geo Fencing & Geotagging",
        "Payroll Management",
        "Biometric Integration with real time update",
        "Shift Management",
        "Automatic payroll calculation",
        "Automatic payslip generation",
        "Pre-defined salary components",
        "Reimbursement proof approval",
        "Loans / Advances",
        "Custom salary components - Earnings, Deductions",
        "Pre-defined user Roles and Permissions",
        "Auto Salary Sheet Generation",
        "Auto Bank Payment Sheet Generation",
        "Ticketing - Today, Pending, Open, Closed, All",
        "Multilingual English and Hindi",
        "Direct Calling to Customer and Worker",
        "Voice to test support English and Hindi",
        "RMA",
        "Document Upload",
        "Image Upload",
        "On Mobiles Signature Support",
        "Customer Profiles",
        "Worker Profiles",
        "Live Notification Updates",
        "Multiple Payment Modes",
        "Live Tracking",
        "Own Company Logo",
        "Inventory Management",
        "Item Issue Register",
        "Stock Register",
        "Item serial number management",
        "SWP = Sale Without Purchase",
      ],
    },
    {
      name: "Business Grow",
      price: "₹1,249",
      period: "per month",
      description: "Scale your business operations",
      popular: false,
      keyFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Starter features",
        "Advanced reporting and analytics",
        "Multi-location support",
      ],
      allFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Starter features",
        "Advanced reporting and analytics",
        "Multi-location support",
        "Custom integrations",
        "Priority customer support",
        "Advanced payroll features",
        "Compliance management",
        "Performance tracking",
        "Custom workflows",
        "API access",
        "Advanced security features",
      ],
    },
    {
      name: "Business Plus",
      price: "₹2,149",
      period: "per month",
      description: "Complete business solution",
      popular: false,
      keyFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Grow features",
        "Advanced AI insights",
        "Custom reporting dashboards",
      ],
      allFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Grow features",
        "Advanced AI insights",
        "Custom reporting dashboards",
        "API access",
        "White-label solutions",
        "24/7 premium support",
        "Custom integrations",
        "Advanced security features",
        "Dedicated account manager",
        "Custom development support",
        "Advanced analytics and insights",
      ],
    },
    {
      name: "Enterprise",
      price: "₹5,999",
      period: "per month",
      description: "Enterprise-grade solution",
      popular: false,
      keyFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Plus features",
        "Custom development",
        "On-premise deployment",
      ],
      allFeatures: [
        "Unlimited Unit / Users / Branches",
        "Employees and Customers",
        "Client mobile App and Web",
        "All Business Plus features",
        "Custom development",
        "On-premise deployment",
        "Advanced security & compliance",
        "Custom SLA agreements",
        "Training and onboarding",
        "Migration assistance",
        "Custom integrations",
        "Enterprise support",
        "Dedicated infrastructure",
        "24/7 enterprise support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable Pricing Plans to Manage Your Field Operations
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {(expandedFeatures[index]
                    ? plan.allFeatures
                    : plan.keyFeatures
                  ).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {plan.allFeatures.length > plan.keyFeatures.length && (
                    <div className="text-center pt-4">
                      <button
                        onClick={() => toggleFeatures(index)}
                        className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-1 mx-auto"
                      >
                        {expandedFeatures[index] ? (
                          <>
                            Show Less Features
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            +{plan.allFeatures.length - plan.keyFeatures.length}{" "}
                            More Features
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Software Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
                Looking for customized{" "}     <span className=" bg-transparent text-blue-500">software </span>
            
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get FTech Optimised Software to meet your Business Requirements
                and Digital Transformation Goals.
              </p>
              <button className="bg-gradient-to-r from-blue-400 to-indigo-500 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300  shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl">
                Get In Touch
              </button>
            </div>

            {/* Right Graphic Section */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Main Card */}
                <img
                  className=" rounded-lg hover:scale-105 transition-all duration-700"
                  src="https://imgs.search.brave.com/f5w-_7SuUWrSTEqcxOcDJhce0KfaUZ7o9sqJH1D00x0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MjE2NjI1Mi9waG90/by9hLXNvZnR3YXJl/LWRldmVsb3Blci1p/cy10aGlua2luZy1v/bi1pbXByb3Zpbmct/dGhlLWVmZmljaWVu/Y3ktb2YtdGhlLWFp/LXN5c3RlbS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WHl5/OXFnNEVsekY5eFI5/Z0FrTnQ1UE5UMUVo/ZVJiMnpTOWV6ZzQ1/Z1NiND0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
