import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'academics',
      label: 'Academics',
      submenu: [
        { id: 'elementary', label: 'Elementary School' },
        { id: 'middle', label: 'Middle School' },
        { id: 'high', label: 'High School' },
      ],
    },
    { id: 'about', label: 'About Us' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'news', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const newsItems = [
    '🎓 School summer caoching begins August 4, 2025',
    '📝 Admissions now open for 2025 session',
    '🏆 Inter-House Sports: October 10th',
    '📱 Follow us @extensiveacademy on facebook and youtube',
  ];

  return (
    <>
      {/* Fixed wrapper for ticker and header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* News Ticker */}
        <div className="bg-white text-black text-sm overflow-hidden py-2">
          <div className="whitespace-nowrap animate-marquee px-4">
            {newsItems.map((news, index) => (
              <span key={index} className="inline-block mr-12">
                {news}
              </span>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => onNavigate('home')}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mr-3 flex-shrink-0">
                  <img
                    src="/lovable-uploads/97f18681-df52-4541-94d7-c7f23019c06d.png"
                    alt="Extensive Academy Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Extensive Academy</h1>
                  <p className="text-xs sm:text-sm text-gray-600">Aspiring for Excellence</p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                {menuItems.map((item) => {
                  const isActive =
                    currentPage === item.id ||
                    (item.submenu && item.submenu.some((sub) => sub.id === currentPage));

                  if (item.submenu) {
                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setIsAcademicsOpen(true)}
                        onMouseLeave={() => setIsAcademicsOpen(false)}
                      >
                        <button
                          className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                            isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>

                        {isAcademicsOpen && (
                          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                            {item.submenu.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  onNavigate(subItem.id);
                                  setIsAcademicsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                                  currentPage === subItem.id
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                                }`}
                              >
                                {subItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.id}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                          >
                            {item.label}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isAcademicsOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isAcademicsOpen && (
                            <div className="pl-4">
                              {item.submenu.map((subItem) => (
                                <button
                                  key={subItem.id}
                                  onClick={() => {
                                    onNavigate(subItem.id);
                                    setIsMenuOpen(false);
                                    setIsAcademicsOpen(false);
                                  }}
                                  className={`block w-full text-left px-3 py-2 text-sm ${
                                    currentPage === subItem.id
                                      ? 'text-green-600 bg-green-50'
                                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                                  }`}
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            onNavigate(item.id);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-base font-medium ${
                            currentPage === item.id
                              ? 'text-green-600 bg-green-50'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Offset content below header */}
      <div className="h-[112px]" />
    </>
  );
};

export default Header;
