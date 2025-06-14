import React from 'react';
import { Users, Award, BookOpen, Heart, Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Extensive Academy</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Dedicated to nurturing young minds and building tomorrow's leaders through excellence in education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a comprehensive, challenging, and supportive educational environment that empowers students to achieve academic excellence, develop critical thinking skills, and become responsible global citizens.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower learners to aspire and acquire academic excellence, develop critical thinking skills, and become responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Extensive Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in all aspects of education and personal development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We create a caring and supportive environment where every student feels valued and respected.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies to enhance the learning experience for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 29th June,2019. Extensive Academy began as a small private school with a vision to provide exceptional education in a nurturing environment. Over the past four decades, we have grown from a single building serving 50 students to a comprehensive K-12 institution educating over 1,200 students.
                </p>
                <p>
                  Our commitment to academic excellence and character development has remained constant throughout our growth. We've continuously evolved our programs to meet the changing needs of our students and society, incorporating cutting-edge technology and innovative teaching methods.
                </p>
                <p>
                  Today, Extensive Academy is proud to be recognized as one of the leading educational institutions in the region, with graduates attending top universities worldwide and making significant contributions to their communities.
                </p>
              </div>
            </div>
            <div
              className="h-[500px] w-full rounded-xl flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: "url('/lovable-uploads/abc.jpg')" }}
            >
              <div className="bg-green-800/30 w-full h-full rounded-xl flex items-center justify-center">
                {/* Place any content here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Principal */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white bg-gray-200 flex items-center justify-center">
                <img
                  src="/lovable-uploads/Principal.png"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs. Ibukun Agbi</h3>
              <p className="text-gray-600 mb-4">Principal</p>
              <p className="text-gray-700">
                "At Extensive Academy, we believe every child has the potential to achieve greatness. Our mission is to nurture, inspire, and empower our students to become confident, compassionate, and innovative leaders of tomorrow."
              </p>
            </div>
            {/* Director */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white bg-gray-200 flex items-center justify-center">
                <img
                  src="/lovable-uploads/Director.png" // replace with your actual image path
                  alt="Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Engr. John Agbi</h3>
              <p className="text-gray-600 mb-4">Director</p>
              <p className="text-gray-700">
                "Our commitment to excellence is unwavering. We strive to provide a safe, inclusive, and dynamic environment where students can discover their passions and reach their full potential."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
