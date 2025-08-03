import React, { useRef, useEffect } from "react";

const Features = () => {
  // Animation hook for scroll-triggered reveals
  const useScrollAnimation = () => {
    useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe all elements with animation classes
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        animatedElements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    }, []);
  };

  const FeaturesSection = () => {
    useScrollAnimation();

    // Mock Lottie animation data
    const lottieAnimations = {
      tracking: { icon: "📅" },
      customers: { icon: "👥" },
      scheduling: { icon: "📅" },
      mobile: { icon: "📱" },
      resources: { icon: "⚙️" },
      invoicing: { icon: "✅" },
    };

    const LottieAnimation = ({ animationData, className }) => {
      const containerRef = useRef(null);

      useEffect(() => {
        if (containerRef.current) {
          containerRef.current.innerHTML = `
          <div class="w-full h-full flex items-center justify-center text-4xl animate-bounce">
            ${animationData.icon}
          </div>
        `;
        }
      }, [animationData]);

      return <div ref={containerRef} className={className}></div>;
    };

    return (
      <section id="features" className="py-20 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Modern Field Service
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your field service operations
              efficiently and effectively
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                lottieData: lottieAnimations.tracking,
                title: "Mobile Attendence",
                description: "Manage your staff attendence with selfie Timestamps & Geo Loaction",
                gradientFrom: "from-blue-500",
                gradientTo: "to-cyan-400",
              },
              {
                lottieData: lottieAnimations.customers,
                title: "Live location tracking",
                description: "Get live Location and track field staff in realtime",
                gradientFrom: "from-purple-500",
                gradientTo: "to-pink-400",
              },
              {
                lottieData: lottieAnimations.scheduling,
                title: "Route Optimization",
                description: "Get optimized route to complete multiple field tasks",
                gradientFrom: "from-emerald-500",
                gradientTo: "to-teal-400",
              },
              {
                lottieData: lottieAnimations.mobile,
                title: "Distance traveled",
                description: "Get daily total distance covered by your staffs",
                gradientFrom: "from-orange-500",
                gradientTo: "to-amber-400",
              },
              {
                lottieData: lottieAnimations.resources,
                title: "Request and Approvals",
                description: "Manage leaves and expense claims and approvals",
                gradientFrom: "from-indigo-500",
                gradientTo: "to-blue-400",
              },
              {
                lottieData: lottieAnimations.invoicing,
                title: "Staff Performance Indicator",
                description: "Get staff performance trends based on specific parameter",
                gradientFrom: "from-green-500",
                gradientTo: "to-emerald-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`relative overflow-hidden p-5 rounded-3xl border border-gray-600/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer animate-on-scroll opacity-0 translate-y-8`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.9) 100%)`,
                  maskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.8) 40%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.8) 40%, black 100%)",
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Animated background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}></div>

                {/* Floating particles effect */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Animation container */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                    <LottieAnimation
                      animationData={feature.lottieData}
                      className="w-12 h-12 text-white relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-800 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 z-30">
                    {feature.description}
                  </p>

                  <div className={`mt-4 w-0 h-0.5 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} group-hover:w-12 transition-all duration-500 ease-out`}></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center mt-5 animate-on-scroll opacity-0 translate-y-4">
            <button className="bg-gradient-to-br from-blue-300 to-blue-700 border border-gray-300 px-5 py-2 rounded-full text-white hover:scale-105 transition-transform duration-300">
              View More
            </button>
          </div>
        </div>

        {/* Global CSS for animations */}
        <style jsx global>{`
          .animate-on-scroll {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-in {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) !important;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom keyframes for enhanced animations */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }

          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}</style>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <FeaturesSection />
    </div>
  );
};

export default Features;