import React, { useState } from 'react';
import {Car} from 'lucide-react'


const Partner = () => {
  const [activeTab, setActiveTab] = useState('standard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                i Smart Parking
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">About Us</a>
            </nav>

            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request Demo
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-600/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Smart <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Parking</span>
                <br />Solutions for Modern Cities
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the completely online, web and mobile based application for Smart Parking Solutions with key benefits of Contactless Operations, Automated Revenue Collections & Navigations in both Web and Mobile Applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Get Started Free!
                </button>
                <button className="bg-white border-2 border-emerald-200 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <Car className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
                    <p className="text-sm text-gray-600">Monitor parking spots in real-time</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                    <p className="text-sm text-gray-600">Easy-to-use mobile application</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                    <p className="text-sm text-gray-600">Safe and secure transactions</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Analytics</h3>
                    <p className="text-sm text-gray-600">Advanced reporting features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">We provides range of industry specific features to manage your field service operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Dashboards</h3>
              <p className="text-gray-600">Application is completely online which enable the admin to see real time updates.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-location Smart Dashboard</h3>
              <p className="text-gray-600">Manage all your locations in single Dashboard and manage all your plans.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete online Software</h3>
              <p className="text-gray-600">Completely cloud based software for real time dashboard and online solutions.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customizable Rate Setting</h3>
              <p className="text-gray-600">Customizable rate and rate settings as per work location.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pass Management System</h3>
              <p className="text-gray-600">Monthly / Weekly pass management and grace pass management.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ANPR on Web and Mobile Applications</h3>
              <p className="text-gray-600">Automatic Number Plate Recognition for faster entry and exit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              "Every Type Of <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Parking Management System</span> Available here!"
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Street Parking</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Railway Parking</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Society Parking</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hospital Parking</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-xl text-gray-600">Affordable Pricing Plans To Manage Your Total Operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">STANDARD</h3>
                <div className="text-5xl font-bold text-emerald-600 mb-2">₹10000</div>
                <p className="text-gray-600">Per Location / Per Year</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Mobile Application</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Web Application</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Unlimited Locations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Unlimited Vehicles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-700">Pass Management</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                GET STARTED
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MULTI LOCATIONS</h3>
                <div className="text-5xl font-bold text-green-600 mb-2">₹15000</div>
                <p className="text-gray-600">Per Location / Per Year</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Everything in Standard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Multi-location Dashboard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Priority Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Custom Integrations</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                GET STARTED
              </button>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            Please note that the amounts are exclusive of taxes. Taxes will be added as applicable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-green-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-emerald-100">Cities</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-emerald-100">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-emerald-100">Locations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-emerald-100">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-green-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Parking Mobile Application</h2>
              <p className="text-xl text-emerald-100 mb-8">
                UI / UX
                <br />
                By Design
                <br />
                UI / UX Design by Online Support
              </p>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download from Play Store</span>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl flex items-center justify-center">
                  <Smartphone className="w-32 h-32 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Watch How <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">i Smart Parking</span> Works
          </h2>
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8">
            <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hardware (Optional)</h2>
            <p className="text-xl text-gray-600">We provides range of industry specific hardware to manage your field service operations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">ANPR Camera</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">All in One PCs</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Scan className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Scanner</h3>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Display className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Display Board</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <div className="text-emerald-100 space-y-2">
                <p>123, Technology Street</p>
                <p>Indore, MP 452001</p>
                <p>India</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="text-emerald-100 space-y-2">
                <p>info@smartparking.com</p>
                <p>support@smartparking.com</p>
                <p>+91 12345 67890</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-400 mt-12 pt-8 text-center text-emerald-100">
            <p>Copyright © 2024 i Smart Parking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partner;