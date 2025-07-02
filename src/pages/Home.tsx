import React from 'react';
import { ArrowRight, Users, Award, BookOpen, Calendar, Star, Play } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block text-yellow-300">Extensive Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Empowering minds, inspiring futures. Join our community of learners and discover your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('admissions')}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="150">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">School Acceptance</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Subjects</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="450">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/lovable-uploads/WhatsApp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        {/* Section Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive education from kindergarten onward, designed to nurture every student's full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg p-8 card-hover"
              data-aos="fade-right"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Elementary School</h3>
              <p className="text-gray-900 mb-6">
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
            <div
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg p-8 card-hover"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Middle School</h3>
              <p className="text-gray-900 mb-6">
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
            <div
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg p-8 card-hover"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High School</h3>
              <p className="text-gray-900 mb-6">
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

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings at Extensive Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
              <img
                src="lovable-uploads/Cultural11.jpg"
                alt="Cultural Festival"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  March 28, 2025
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Festival</h3>
                <p className="text-gray-600 mb-4">
                  Cultural festivals are vibrant celebrations that showcase the unique traditions, music, dance, and attire of a people. They provide an opportunity...
                </p>
                <button 
                  onClick={() => onNavigate('news')}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
              <img
                  src="lovable-uploads/ab.jpg"
                  alt="Admission"
                  className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                session 2025/2026
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Admission</h3>
                <p className="text-gray-600 mb-4">
                  Admission is the process of enrolling into a school or institution. We're excited to announce At our school, admission is open from Crèche to JSS3
                </p>
                <button 
                  onClick={() => onNavigate('news')}
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
            <img
              src="lovable-uploads/Facility3.jpg"
              alt="Facilities"
              className="h-48 w-full object-cover"
            />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  July, 2024
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Facilities at Extensive Academy</h3>
                <p className="text-gray-600 mb-4">
                 Our school is well-equipped with modern and essential facilities to ensure a safe and supportive learning environment.
                </p>
                <button 
                  onClick={() => onNavigate('news')}
                  className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;
