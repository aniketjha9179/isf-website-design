import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-700 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Top gradient line */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-8">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center shadow-lg mr-3">
                <img
                  src="https://iserviceforce.com/assets/images/iserviceforces.png"
                  alt="Infotech Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Infotech</h3>
                <p className="text-blue-400 text-xs font-medium">Field Service Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading provider of comprehensive field service management solutions since 2020.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">contact@infotech.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">+91 12345 67890</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Indore, Madhya Pradesh</span>
              </div>
            </div>

            {/* App Downloads */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Download App</h5>
              <div className="flex gap-2">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-all duration-300">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              Company
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              {[
                'About Us', 'Careers', 'Job Openings', 
                'News & Press', 'Partner Program',
                'Privacy Policy', 'Terms of Service'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              Our Solutions
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </h4>
            <ul className="space-y-2">
              {[
                'Field Service Management', 'Mobile Workforce App', 'Customer Portal', 
                'Smart Dispatching', 'Inventory Management', 'Invoice Automation',
                'Real-time Tracking', 'Analytics Dashboard'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white relative">
              Support & Updates
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </h4>
            
            {/* Support Links */}
            <ul className="space-y-2 mb-6">
              {[
                'Help Center', 'Documentation', 'API Reference', 
                'Community Forum', 'System Status'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © 2025 <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-semibold">Infotech Pvt Ltd.</span> All rights reserved.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm mr-2">Follow us:</span>
              {[
                { icon: Facebook, color: 'from-blue-600 to-blue-700' },
                { icon: Twitter, color: 'from-sky-500 to-blue-600' },
                { icon: Linkedin, color: 'from-blue-700 to-indigo-700' },
                { icon: Instagram, color: 'from-pink-600 to-purple-700' }
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-8 h-8 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;