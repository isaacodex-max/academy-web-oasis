
import React from 'react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Discover what makes Extensive Academy special. Schedule a visit or start your application today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Visit
          </button>
          <button 
            onClick={() => onNavigate('admissions')}
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            Apply Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;