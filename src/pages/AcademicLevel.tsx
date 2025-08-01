import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import TypewriterWord from '../components/TypewriterWord'; // adjust path if needed
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loader from '@/components/Loader';

interface AcademicLevelProps {
  level: 'elementary' | 'middle' | 'high' | 'programs';
  onNavigate: (page: string) => void;
}

const AcademicLevel: React.FC<AcademicLevelProps> = ({ level, onNavigate }) => {
  const elementaryBackgrounds = React.useMemo(() => [
    "/lovable-uploads/3.jpg",
    "/lovable-uploads/12.jpg",
     "/lovable-uploads/22.jpg",
    "/lovable-uploads/33.jpg",
    "/lovable-uploads/45.jpg",
    "/lovable-uploads/67.jpg",
    "/lovable-uploads/111.jpg",
    "/lovable-uploads/333.jpg",
  ], []);
  
const middleBackgrounds = React.useMemo(() => [
  "/lovable-uploads/Middle.jpg",
  "/lovable-uploads/Facility11.jpg",
  "/lovable-uploads/Middle2.jpg",
  "/lovable-uploads/Middle3.jpg",
  "/lovable-uploads/Middle4.jpg",
  "/lovable-uploads/Middle5.jpg",
  "/lovable-uploads/Middle6.jpg",
  "/lovable-uploads/Middle7.jpg",
  "/lovable-uploads/Middle8.jpg",
  "/lovable-uploads/Middle9.jpg",

], []);

const getBackgrounds = () => {
  if (level === 'elementary') return elementaryBackgrounds;
  if (level === 'middle') return middleBackgrounds;
  return [];
};

  const getLevelData = () => {
    switch (level) {
      case 'elementary':
        return {
          title: 'Elementary School',
          subtitle: 'Kindergarten - Primary 6',
          description: 'Building strong foundations in reading, writing, mathematics, and critical thinking through engaging, hands-on learning experiences.',
          grades: 'K-6',
          students: '200+',
          ratio: '12:1',
          features: [
            'Integrated curriculum approach',
            'Hands-on STEM activities',
            'Daily arts integration',
            'Character development program',
            'Reading specialists',
            'Technology integration'
          ],
          curriculum: [
            { subject: 'English Language',  },
            { subject: 'Mathematics', },
            { subject: 'Basic Science and Technology', },
            { subject: 'Prevocational Studies',  },
            { subject: 'National values Education',  },
            { subject: 'Cultural and Creative art',  },
            { subject: 'Christian religious Studies',  },
             { subject: 'Computer Studies',  },
              { subject: 'Music',  },
             { subject: 'History', },
             { subject: 'Yoruba language studies',  },
            { subject: 'French',  }
          ]
        };
      case 'middle':
        return {
          title: 'Middle School',
          subtitle: 'JSS 1-3',
          description: 'Preparing students for high school with advanced coursework, leadership opportunities, and character development programs.',
          grades: '6-8',
          students: '50+',
          ratio: '13:1',
          features: [
            'Advanced academic curriculum',
            'Leadership development',
            'Extracurricular activities',
            'Peer mentoring program',
            'College preparation',
            'Advisory program'
          ],
            curriculum: [
            { subject: 'English Language',  },
            { subject: 'Mathematics', },
            { subject: 'Basic Science and Technology', },
            { subject: 'Prevocational Studies',  },
            { subject: 'National values Education',  },
            { subject: 'Cultural and Creative art',  },
            { subject: 'Christian religious Studies',  },
             { subject: 'Computer Studies',  },
              { subject: 'Music',  },
             { subject: 'History', },
              { subject: 'Lit-in-English', }, 
              { subject: 'Business Studies', },
             { subject: 'Yoruba language studies',  }
          ]
        };
      case 'high':
        return {
          title: 'High School',
          subtitle: 'SSS 1-3',
          description: 'College-preparatory curriculum with AP courses, dual enrollment options, and comprehensive college counseling support.',
          grades: '1-3',
          students: 'In Progress',
          ratio: '18:1',
          features: [
            '25+ AP courses offered',
            'Dual enrollment opportunities',
            'College counseling program',
            'Internship opportunities',
            'Honor societies',
            'Leadership academies'
          ],
           curriculum: [
            { subject: 'English Language',  },
            { subject: 'Mathematics', },
            { subject: 'IN PROGRESS', },
            { subject: 'IN PROGRESS', },
            { subject: 'IN PROGRESS', },
            { subject: 'IN PROGRESS', },
            { subject: 'IN PROGRESS', },
            { subject: 'IN PROGRESS', },
          ]
        };
      default:
        return {
          title: 'Special Programs',
          subtitle: 'Enrichment & Support',
          description: 'Specialized programs designed to meet diverse learning needs and interests of all students.',
          grades: 'K-high School',
          students: '500+',
          ratio: 'Varies',
          features: [
            'Gifted and talented program',
            'Learning support services',
            'English language learners',
            'STEM academy',
            'Arts conservatory',
            'Athletic programs'
          ],
          curriculum: [
            { subject: 'STEM Academy', description: 'Advanced science, technology, engineering, and math' },
            { subject: 'Arts Conservatory', description: 'Intensive visual and performing arts training' },
            { subject: 'Learning Support', description: 'Individualized academic support and accommodations' },
            { subject: 'Gifted Program', description: 'Accelerated and enriched learning opportunities' },
            { subject: 'ELL Program', description: 'English language development and cultural support' },
            { subject: 'Athletics', description: 'Competitive sports and physical fitness programs' }
          ]
        };
    }
  };

  const data = getLevelData();

  // Only use slider for elementary
  const [bgIdx, setBgIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState(Date.now());

// Rotate background every 4 seconds for elementary or middle
useEffect(() => {
  if (!['elementary', 'middle'].includes(level)) return;

  const images = getBackgrounds();
  if (images.length === 0) return;

  const interval = setInterval(() => {
    setBgIdx(prev => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [level]);

// Preload images on mount or when level changes
useEffect(() => {
  const images = getBackgrounds();
  let loadedCount = 0;

  const handleImageLoad = () => {
    loadedCount++;
    if (loadedCount === images.length) {
      const elapsed = Date.now() - startTime;
      const minimumDuration = 1500; // 1.5 seconds
      const remainingTime = Math.max(minimumDuration - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    }
  };

  if (images.length === 0) {
    setLoading(false);
    return;
  }

  images.forEach(src => {
    const img = new Image();
    img.src = src;
    img.onload = handleImageLoad;
    img.onerror = handleImageLoad;
  });
}, [level, startTime]);

if (loading) return <Loader />;


  return (
    <div className="relative z-30 w-full px-0">
      <HelmetProvider>
      <Helmet>
        <title>{`${data.title} | Extensive Academy`}</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={`${data.title} | Extensive Academy`} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.extensiveacademy.org/academics/${level}`} />
        <meta property="og:image" content="https://www.extensiveacademy.org/lovable-uploads/3.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      </HelmetProvider>

      {/* Hero Section */}
     <section
  className={`relative ${
    ['elementary', 'middle'].includes(level)
      ? 'text-white overflow-hidden'
      : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
  }`}
  style={{ minHeight: '120vh' }}
>
  {['elementary', 'middle'].includes(level) && (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
      {getBackgrounds().map((src, index) => (
        <img
          key={index}
          src={src}
          loading="eager"
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === bgIdx
              ? 'opacity-100 translate-x-0 z-10'
              : 'opacity-0 -translate-x-full z-0'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
      ))}
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-20" />
    </div>
  )}

  <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 pt-48 pb-24 text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-tight animate-fade-in">
      {data.title}
    </h1>
    <p className="text-2xl md:text-3xl mb-6 opacity-95 font-semibold drop-shadow-md animate-fade-in">
      {data.subtitle}
    </p>
    <p className="text-xl max-w-3xl mx-auto opacity-95 font-medium drop-shadow animate-fade-in">
      {data.description}
    </p>
  </div>
</section>


      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center"data-aos="fade-up">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{data.grades}</div>
              <div className="text-gray-600">Grade Levels</div>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{data.students}</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div data-aos="fade-up" className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{data.ratio}</div>
              <div className="text-gray-600">Student-Teacher Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational approach designed to nurture every aspect of student development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="relative py-16 bg-white overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/lovable-uploads/basic44.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-green-500 bg-opacity-30 z-10"></div>
  {/* Section Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div data-aos="fade-up" className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curriculum Overview</h2>
      <p className="text-x2 text-black max-w-3xl mx-auto">
        Rigorous academic program that challenges students while providing the support they need to succeed.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.curriculum.map((subject, index) => (
        <div
          key={index}
          className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/40"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">{subject.subject}</h3>
          <p className="text-gray-600">{subject.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Daily Schedule Sample */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sample Daily Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning environment that balances academics with enrichment activities.
            </p>
          </div>
          <div
            className="bg-green-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">7:30 - 8:30 AM</span>
                </div>
                <span className="text-gray-600">Morning Assembly & Advisory</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">8:30Am - 8:40 AM</span>
                </div>
                <span className="text-gray-600">Morning Drills</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">8:40Am - 9:20 AM</span>
                </div>
                <span className="text-gray-600">Period 1</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">9:20Am- 10:00 AM</span>
                </div>
                <span className="text-gray-600">Period 2</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">10:00Am - 10:10 AM</span>
                </div>
                <span className="text-gray-600">Short-Break</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">10:10 AM - 10:50 AM</span>
                </div>
                <span className="text-gray-600">Period 3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">10:50Am - 11:30 AM</span>
                </div>
                <span className="text-gray-600">Period 4</span>
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">11:30 Am- 12:00 PM</span>
                </div>
                <span className="text-gray-600">Long Break</span>
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">12:00pm - 12:40PM</span>
                </div>
                <span className="text-gray-600">Period 5</span>
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">12:40pm - 1:20 PM</span>
                </div>
                <span className="text-gray-600">Period 6</span>
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">1:20pm - 2:00 PM</span>
                </div>
                <span className="text-gray-600">Period 7</span>
              </div>
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">2:00pm - 2:40pmPM</span>
                </div>
                <span className="text-gray-600">Period 8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover how our {data.title.toLowerCase()} program can help your child reach their full potential.
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
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicLevel;
