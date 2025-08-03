import {
  MapPin,
  Users,
  Calendar,
  Settings,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Clock,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  ClipboardList,
  
} from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import Testimonials from '../components/Testimonials'

const Home = () => {
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
      const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-up-delay-1, .fade-up-delay-2, .fade-up-delay-3, .slide-in-left, .slide-in-right, .scale-in');
      
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

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images - replace with your actual images
  const images = [
    "https://imgs.search.brave.com/Wi7q_GErvKbvt8puBt6HCUILmGXvwqPXZF4ItDEmTbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NTAxZmY5OTI1ZmU2/ZmE0NGI2N2ZjNmEv/NjdkNDM4ZDc1Zjk1/MGMwZDFkM2RjZTQ2/X1phbGV0eS0xLndl/YnA",
    "https://iserviceforce.com/img/home-bg.png",
    "https://imgs.search.brave.com/BlVbTAulATDZmhacG4XCaY-bnx7_0KPs9JdQFDDJUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGVtYW5hZ2luZ3Bl/b3BsZS5jb20vd3At/Y29udGVudC9jYWNo/ZS9wZW9wbGVtYW5h/Z2luZ3Blb3BsZS5j/b20vc3RhdGljL3N0/YXRpYy5jcm96ZGVz/ay5jb20vd2ViLWFw/cC1saWJyYXJ5LWNh/dGVnb3JpZXMtcHJv/dmlkZXJzLXNjcmVl/bnNob3RzLTAwMC0w/NjgtMjIzLXB1Yi1j/b25uZWN0ZWFtLXNj/cmVlbnNob3QtMTcw/NTQ0MTA1NC5wbmc",
    "https://imgs.search.brave.com/pS-fS8MQ6ERSTTi8p1UOn7ST9lYJoDz5kSGyG3TFMhs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29mcnVnYWwuY29t/L3NpdGVzL2Jsb2cv/ZmlsZXMvZ29mcnVn/YWwvYmVuZWZpdHNf/b2ZfcHVyY2hhc2Vf/bWFuYWdlbWVudC5q/cGc",
    "https://imgs.search.brave.com/7viuL2ABwyDnwMmESHt_6bTqY6djSG4SKODZ1nFI1aA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bm90dGEuYWkvcGlj/dHVyZXMvY29udmVy/dC1hdWRpby10by10/ZXh0LWFuZC1jcmVh/dGUtZ2xvYmFsbHkt/YWNjZXNzaWJsZS1j/b250ZW50LnBuZw"
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-400 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Next-Gen Field Service Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Field Service{" "}
              </span>
              Operations
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              ISF is a comprehensive web and mobile application designed to
              enhance field operations from customer complaints and technician
              dispatching to resource management and swift invoicing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-5 py-1 sm:py-1 rounded-xl font-sm text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Smartphone className="w-4 h-4" />
                Get Started Free
              </button>
              <button className="text-gray-700 rounded-xl text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-5 sm:h-9"
                />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Free 30-day trial
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Image Slider Section */}
          <div className="relative px-4 sm:px-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Slider Container with fade edges */}
              <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
                {/* Fade overlay on left */}
                <div className="absolute left-0 top-0 w-16 h-full  z-10 pointer-events-none"></div>
                
                {/* Fade overlay on right */}
                <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none"></div>
                
                {/* Fade overlay on top */}
                <div className="absolute top-0 left-0 w-full h-16  z-10 pointer-events-none"></div>
                
                {/* Fade overlay on bottom */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-50 via-white/50 to-transparent z-10 pointer-events-none"></div>

                {/* Main 400px display area */}
                <div className="absolute inset-4 w-[550px] h-[450px] mx-auto">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                          index === currentSlide 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-105'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Image overlay for better text visibility if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

             

              {/* Optional: Auto-slide progress bar */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
      <section id="features"  className="py-20 relative overflow-hidden">
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
      </section>
    );
  };

  const CTASection = () => {
    useScrollAnimation();

    const features = [
      {
        title: "Live Tracking",
        desc: "Monitor field agents in real-time with GPS accuracy.",
        icon: <MapPin className="w-8 h-8 text-blue-400 " />,
      },
      {
        title: "Task Management",
        desc: "Assign and monitor tasks efficiently from a centralized panel.",
        icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
      },
      {
        title: "Analytics Dashboard",
        desc: "Get deep insights and reports with actionable analytics.",
        icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      },
    ];

    return (
      <section className="py-20  relative overflow-hidden">
        <div className="absolute inset-0  bg-gradient-to-bl from-blue-50 via-blue-100 to-green-200 rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Your Field Service?
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">
              Join thousands of businesses who trust ISF to streamline their
              operations and boost productivity
            </p>
          </div>

          {/* Feature Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((item, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-tr from-blue-50 via-transparent to-blue-300 text-gray-800 border border-gray-300 p-6 rounded-2xl shadow-xl hover:scale-105 hover:bg-gray-50 transition-all duration-500 overflow-hidden animate-on-scroll opacity-0 translate-y-8`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex mb-4 justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="relative z-10 flex text-xl font-bold mb-2 justify-center items-center">
                  {item.title}
                </h3>
                <p className="relative z-10 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Product Screenshot */}
          <div className="flex justify-center mb-12 animate-on-scroll opacity-0 scale-95">
            <img
              src="https://iserviceforce.com/img/product-screen.png"
              alt="ISF Product Screenshot"
              width={1000}
              height={600}
              className="rounded-xl "
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-on-scroll opacity-0 translate-y-4">
            <div className="flex justify-center items-center mt-5">
              <button className="bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 border border-gray-300 px-5 py-2 rounded-full text-white transition-all duration-300 ease-in-out hover:scale-105">
                Start Free Trial
              </button>
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="bg-gradient-to-br from-blue-300 to-blue-700 hover:from-blue-400 hover:to-blue-800 border border-gray-300 px-5 py-2 rounded-full text-white transition-all duration-300 ease-in-out hover:scale-105">
                Schedule Your Demo
              </button>
            </div>
          </div>

          {/* Google Play Button */}
          <div className="flex justify-center animate-on-scroll opacity-0 translate-y-4">
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-500 to-blue-400  border px-4 py-2 rounded-lg flex items-center gap-3 shadow hover:scale-105 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Playstore"
                width={120}
                height={24}
              />
              <span className="text-sm text-white">Get it on Google Play</span>
            </a>
          </div>

          {/* Industry Boxes Section */}
          <div className="mt-16  bg-transparent py-12 rounded-xl p-10 shadow-inner animate-on-scroll opacity-0 translate-y-8">
            <h2 className="text-center text-3xl font-bold text-blue-800 mb-4 p-20">
              Suitable Industries
            </h2>
            <p className="text-center max-w-xl mx-auto text-gray-700 mb-10 px-4">
              Build by Service Companies For Service Companies
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 sm:px-10">
              {[
                { icon: "💻", label: "IT & Computer Repair" },
                { icon: "🔧", label: "Appliance Repair" },
                { icon: "🔔", label: "Alarm and Security" },
                { icon: "🔥", label: "Fire Protection" },
                { icon: "🐜", label: "Pest Control" },
                { icon: "🏢", label: "Elevator" },
                { icon: "🧹", label: "Cleaning Services" },
                { icon: "💧", label: "Water Purifier" },
                { icon: "🛠️", label: "Equipment Maintenance" },
                { icon: "⚡", label: "Electrical" },
                { icon: "🚿", label: "Plumbing" },
                { icon: "🏗️", label: "Construction" },
                { icon: "🏢", label: "Facilities Maintenance" },
                { icon: "☀️", label: "Solar" },
                { icon: "♻️", label: "Waste Management" },
                { icon: "🔧", label: "General Maintenance" },
                { icon: "🐠", label: "Aquarium" },
                { icon: "🌿", label: "Lawn Care & Landscaping" },
                { icon: "🚛", label: "Logistics" },
                { icon: "👨‍🔧", label: "Handyman" },
                { icon: "🚚", label: "Delivery Service" },
                { icon: "🎨", label: "Painting" },
                { icon: "🪵", label: "Carpenter" },
                { icon: "📡", label: "Telecommunication" },
                { icon: "🧺", label: "Laundry" },
                { icon: "🏊", label: "Pool & Spa" },
                { icon: "🔐", label: "Locksmith" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center text-sm text-center bg-gradient-to-t from-blue-200 via-blue-50 to-white rounded-xl p-4 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer animate-on-scroll opacity-0 translate-y-4`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-3xl mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Testimonials />
      
      {/* Global CSS for animations */}
      <style jsx global>{`
        .animate-on-scroll,
        .fade-up-delay-1,
        .fade-up-delay-2,
        .fade-up-delay-3,
        .slide-in-left,
        .slide-in-right,
        .scale-in {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-up-delay-1 {
          transition-delay: 0.2s;
        }

        .fade-up-delay-2 {
          transition-delay: 0.4s;
        }

        .fade-up-delay-3 {
          transition-delay: 0.6s;
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

        /* Stagger animation delays for children */
        .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-children > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default Home;