import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge'

import {
  Home,
  Users,
  Settings,
  Building2,
  DollarSign,
  Menu,
  X,
  ChevronDown,
  User,
  Mail,
  HelpCircle,
  BookOpen,
  LogIn,
  Phone
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
    const navigate = useNavigate();


  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const NavItem = ({ href, children, icon: Icon, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
    >
      {Icon && <Icon size={18} />}
      {children}
    </a>
  );

  const DropdownItem = ({ href, children, icon: Icon }) => (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );

  return (
    <nav className=" bg-transparent backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-md ">
      <div className='bg-transparent'>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl flex items-center justify-center">
                  <img src="https://iserviceforce.com/assets/images/iserviceforces.png" alt="" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  <img src='' />
                </span>
              </div>
            </div>

            {/* Desktop Navigation & CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Items */}
              <div className="flex items-center space-x-6">
                <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm ">
                  Home
                </a>

                {/* Industry Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('industry')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm">
                    Industry
                    <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'industry' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === 'industry' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 text-sm">
                      <DropdownItem href="/features" icon={Settings}>Features</DropdownItem>
                      <DropdownItem href="/partner" icon={User}>Partner</DropdownItem>
                      <DropdownItem href="/contact" icon={Phone}>Contact Us</DropdownItem>
                      <DropdownItem href="/blog" icon={BookOpen}>Blog</DropdownItem>
                      <DropdownItem href="/faq" icon={HelpCircle}>FAQ</DropdownItem>
                      <DropdownItem href="/support" icon={Mail}>Support</DropdownItem>
                    </div>
                  )}
                </div>

                <a href="/pricing" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm">
                  Pricing
                </a>

              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <button 
                onClick={()=>navigate('/login')}
                className="px-2 py-1 border-white rounded-xl  hover:border hover:border-blue-600 hover:rounded-xl text-gray-700 hover:text-blue-600 text-sm transition-colors duration-200 flex items-center gap-2">
                  <LogIn size={18} />
                  Login
                </button>
                <button className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue600 hover:to-blue-700 transition-all duration-200 text-sm shadow-md hover:shadow-lg">
                  Request Demo
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavItem href="/" icon={Home} onClick={() => setIsOpen(false)}>Home</NavItem>
                <NavItem href="/features" icon={Settings} onClick={() => setIsOpen(false)}>Features</NavItem>
                <NavItem href="/industries" icon={Building2} onClick={() => setIsOpen(false)}>Industries</NavItem>
                <NavItem href="/pricing" icon={DollarSign} onClick={() => setIsOpen(false)}>Pricing</NavItem>

                {/* Mobile Company Section */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</div>
                  <NavItem href="/partner" icon={User} onClick={() => setIsOpen(false)}>Partner</NavItem>
                  <NavItem href="/contact" icon={Phone} onClick={() => setIsOpen(false)}>Contact Us</NavItem>
                  <NavItem href="/blog" icon={BookOpen} onClick={() => setIsOpen(false)}>Blog</NavItem>
                </div>

                {/* Mobile Resources Section */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Resources</div>
                  <NavItem href="/faq" icon={HelpCircle} onClick={() => setIsOpen(false)}>FAQ</NavItem>
                  <NavItem href="/support" icon={Mail} onClick={() => setIsOpen(false)}>Support</NavItem>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                  <Link
                 onClick={() => navigate('/login')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50">
                    <LogIn size={18} />
                    Login
                  </Link>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-md hover:from-blue-400 hover:to-blue-600 transition-all duration-200 font-medium shadow-md">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;