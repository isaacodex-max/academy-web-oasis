
import React from 'react';
import { Users, Award, BookOpen, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onNavigate: (page: string) => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive education from kindergarten through grade 12, designed to nurture every student's potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Elementary School</h3>
            <p className="text-gray-600 mb-6">
              Building strong foundations in reading, writing, mathematics, and critical thinking through engaging, hands-on learning experiences.
            </p>
            <button 
              onClick={() => onNavigate('elementary')}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Middle School</h3>
            <p className="text-gray-600 mb-6">
              Preparing students for high school with advanced coursework, leadership opportunities, and character development programs.
            </p>
            <button 
              onClick={() => onNavigate('middle')}
              className="text-green-600 font-semibold hover:text-green-800 transition-colors flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">High School</h3>
            <p className="text-gray-600 mb-6">
              College-preparatory curriculum with AP courses, dual enrollment options, and comprehensive college counseling support.
            </p>
            <button 
              onClick={() => onNavigate('high')}
              className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center"
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