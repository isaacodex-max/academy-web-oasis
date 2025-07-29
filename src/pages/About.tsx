import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Users, Award, BookOpen, Heart, Target, Eye } from 'lucide-react';
import Loader from '@/components/Loader'; 
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // You can adjust the delay (ms)
  return () => clearTimeout(timer);
}, []);

if (loading) return <Loader />;

  return (
    <div className="min-h-screen pt-20">
      
      <HelmetProvider>
        <Helmet>
          <title>About Us | Extensive Academy</title>
          <meta name="description" content="Discover Extensive Academy's mission, vision, and values. Learn about our leadership, history, and dedication to excellence in education." />
          <meta name="keywords" content="Extensive Academy, About, Education, Vision, Mission, History, Nigeria" />
          <meta property="og:title" content="About Us | Extensive Academy" />
          <meta property="og:description" content="Discover Extensive Academy's mission, vision, and values. Learn about our leadership, history, and dedication to excellence in education." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.extensiveacademy.org/about" />
          <meta property="og:image" content="https://www.extensiveacademy.org/lovable-uploads/abc.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Us | Extensive Academy" />
          <meta name="twitter:description" content="Discover Extensive Academy's mission, vision, and values." />
          <meta name="twitter:image" content="https://www.extensiveacademy.org/lovable-uploads/abc.jpg" />
        </Helmet>
      </HelmetProvider>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div data-aos="zoom-in"className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div data-aos="fade-up" className="bg-green-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a comprehensive, challenging, and supportive educational environment that empowers students to achieve academic excellence, develop critical thinking skills, and become responsible global citizens.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl" data-aos="fade-up">
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
      <section data-aos="fade-up" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Extensive Academy.
            </p>
          </div>
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div data-aos="fade-up" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className='text-yellow-700'>
                  <strong className='text-blue-700'>Our History</strong><br />
                  Extensive Academy was founded with a clear vision: to provide quality education that empowers every learner. The school’s journey began with a memorable opening ceremony on June 30, 2019. Summer lessons followed in August, and by September, we had officially commenced full academic operations.
                </p>
                <p className='text-blue-700'>
                  <strong className='text-green-700'>Our Founding Team</strong><br />
                  Extensive Academy was established through the dedication and passion of its founding team, five in number. Their collective vision laid the groundwork for a thriving learning environment.
                </p>
                <p className='text-green-700'>
                  <strong className='text-yellow-700'>Pioneering Learners</strong><br />
                  The school began with just 12 pioneering learners. Since then, our student population has continued to grow steadily—a testament to the trust parents place in us and the impact of our educational approach.
                </p>
                <p className='text-yellow-700'>
                  <strong className='text-blue-700'>A Strong Foundation</strong><br />
                  Though our beginnings were modest, Extensive Academy has built a solid foundation rooted in excellence, commitment, and a passion for nurturing future leaders. We continue to grow, guided by the same values that inspired our founding.
                </p>
              </div>
            </div>

            <div data-aos="fade-up"
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
      <section  className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Principal */}
            <div data-aos="fade-up" className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white bg-gray-200 flex items-center justify-center">
                <img
                  src="/lovable-uploads/Principal.png"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mrs. Ibukun Agbi</h3>
              <p className="text-gray-600 mb-4">Proprietress</p>
              <p className="text-gray-700">
                "At Extensive Academy, we believe every child has the potential to achieve greatness. Our mission is to nurture, inspire, and empower our students to become confident, compassionate, and innovative leaders of tomorrow."
              </p>
            </div>
            {/* Director */}
            <div className="flex flex-col items-center text-center"data-aos="fade-up">
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
