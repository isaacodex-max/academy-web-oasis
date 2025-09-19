import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import { useNavigate } from 'react-router-dom';

import { ArrowRight, ArrowLeft, Users, Award, BookOpen, Calendar, Star, Play } from 'lucide-react';

const heroImages = [
  "/lovable-uploads/ab.jpg",
  "/lovable-uploads/abc.jpg",
  "/lovable-uploads/123.jpg",
  "/lovable-uploads/Facility4.jpg",
  "/lovable-uploads/Facility.jpg",
  "/lovable-uploads/Facility13.jpg",
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 7000); // 7 seconds
    return () => clearInterval(slider);
  }, []);

  const goToSlide = (idx: number) => setCurrentHero(idx);
  const prevSlide = () => setCurrentHero((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  const nextSlide = () => setCurrentHero((prev) => (prev + 1) % heroImages.length);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HelmetProvider>
      <Helmet>
        <title>Welcome to Extensive Academy | Empowering Learners</title>
        <meta name="description" content="Extensive Academy: Empowering students from Crèche to High School with world-class education and facilities." />
        <meta property="og:title" content="Welcome to Extensive Academy" />
        <meta property="og:description" content="Empowering students with top-tier education, state-of-the-art facilities, and inspiring programs." />
        <meta property="og:image" content="https://www.extensiveacademy.org/lovable-uploads/ab.jpg" />
        <meta property="og:url" content="https://www.extensiveacademy.org/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet> 
      </HelmetProvider>

      {/* Hero Section with Swiper */}
      <section
        className="hero-gradient text-white pt-[180px] sm:pt-[140px] md:pt-[120px] pb-20 lg:pt-[120px] lg:pb-32 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentHero]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Swiper Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
          aria-label="Next Slide"
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full ${currentHero === idx ? 'bg-yellow-400' : 'bg-white bg-opacity-50'} border-2 border-white`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Welcome to
              <span className="block text-yellow-300" data-aos="fade-up" data-aos-delay="600">
                Extensive Academy
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Empowering minds, inspiring futures. Join our community of learners and discover your potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="800">
              <button 
                onClick={() => navigate('/admissions')}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => navigate('/about')}
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
                onClick={() => navigate('/elementary')}
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
                onClick={() => navigate('/middle')}
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
                onClick={() => navigate('/high')}
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
                src="/lovable-uploads/Cultural11.jpg"
                  width="380"
                  height="285"
                alt="Cultural Festival"
                className="h-48 w-full object-cover"
                loading="lazy"
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
                  onClick={() => navigate('/news')}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
              <img
                  src="/lovable-uploads/ab.jpg"
                  alt="Admission"
                  className="h-48 w-full object-cover"
                  loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Session 2025/2026</span>

                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Admission</h3>
                <p className="text-gray-600 mb-4">
                  Admission is the process of enrolling into a school or institution. We're excited to announce At our school, admission is open from Crèche to JSS3
                </p>
                <button 
                  onClick={() => navigate('/news')}
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
            <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover">
            <img
              src="/lovable-uploads/Facility3.jpg"
              alt="Facilities"
              className="h-48 w-full object-cover"
              loading="lazy"
            />

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  July, 2025
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Standard Facilities at Extensive Academy</h3>
                <p className="text-gray-600 mb-4">
                 Our school is well-equipped with modern and essential facilities to ensure a safe and supportive learning environment.
                </p>
                <button 
                  onClick={() => navigate('/news')}
                  className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors"
                >
                  Read More
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Watch Our YouTube Videos
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow and subscribe to our YouTube channel for school highlights, events, and educational content.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Correct YouTube Embed */}
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/aPdJU94TH9I"
              title="Extensive Academy YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            {/* Subscribe Button */}
            <a
              href="https://www.youtube.com/@EXTENSIVEACADEMY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 mt-6 md:mt-0"
            >
              Subscribe on YouTube
            </a>
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
              onClick={() => navigate('/contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Visit
            </button>
            <button 
              onClick={() => navigate('/admissions')}
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
