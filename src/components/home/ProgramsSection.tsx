import React from 'react';
import { Users, Award, BookOpen, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onNavigate: (page: string) => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education from kindergarten through grade 12, designed to nurture every student's potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Elementary */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Elementary School</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5">
              Building strong foundations in reading, writing, mathematics, and critical thinking through engaging, hands-on learning experiences.
            </p>
            <button
              onClick={() => onNavigate('elementary')}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center text-sm sm:text-base"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Middle */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Middle School</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5">
              Preparing students for high school with advanced coursework, leadership opportunities, and character development programs.
            </p>
            <button
              onClick={() => onNavigate('middle')}
              className="text-green-600 font-semibold hover:text-green-800 transition-colors flex items-center text-sm sm:text-base"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* High */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">High School</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5">
              College-preparatory curriculum with AP courses, dual enrollment options, and comprehensive college counseling support.
            </p>
            <button
              onClick={() => onNavigate('high')}
              className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center text-sm sm:text-base"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
