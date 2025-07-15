import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-3">
                <img
                  src="/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png"
                  alt="Extensive Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Extensive Academy</h3>
                <p className="text-gray-400 text-sm">Aspiring for Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing quality education from elementary through high school, preparing students for success in college and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('academics')} className="text-gray-300 hover:text-white transition-colors">Academics</button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="text-gray-300 hover:text-white transition-colors">Admissions</button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="text-gray-300 hover:text-white transition-colors">News & Events</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Plot 15, Jesus Avenue, Ologbun, Simawa-Likosi Road,</p>
                  <p className="text-gray-300 text-sm">Shagamu, Ogun State</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+2348058594710</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">extensiveacademy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Extensive Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
