import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import TypewriterWord from '../components/TypewriterWord'; // adjust path if needed

interface AcademicLevelProps {
  level: 'elementary' | 'middle' | 'high' | 'programs';
  onNavigate: (page: string) => void;
}

const AcademicLevel: React.FC<AcademicLevelProps> = ({ level, onNavigate }) => {
  const elementaryBackgrounds = [
    "/lovable-uploads/12.jpg",
    "/lovable-uploads/45.jpg",
    "/lovable-uploads/67.jpg",
    "/lovable-uploads/basic1.jpg",
    "/lovable-uploads/3.jpg",
    "/lovable-uploads/basic2.jpg",
     "/lovable-uploads/45.jpg",
    "/lovable-uploads/creche.jpg",
    "/lovable-uploads/basic3.jpg",
    "/lovable-uploads/basic3.jpg"
  ];

  const getLevelData = () => {
    switch (level) {
      case 'elementary':
        return {
          title: 'Elementary School',
          subtitle: 'Kindergarten - Primary 5',
          description: 'Building strong foundations in reading, writing, mathematics, and critical thinking through engaging, hands-on learning experiences.',
          grades: 'K-5',
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
            { subject: 'Prevocasional Studies',  },
            { subject: 'National values Education',  },
            { subject: 'Cultural and Creative art',  },
            { subject: 'Christian religious Studies',  },
             { subject: 'Computer Studies',  },
              { subject: 'Music',  },
             { subject: 'History', },
             { subject: 'Yoruba language studies',  }
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
            { subject: 'English Language Arts', description: 'Advanced literature analysis and writing skills' },
            { subject: 'Mathematics', description: 'Algebra readiness and advanced problem solving' },
            { subject: 'Science', description: 'Biology, chemistry, and physics foundations' },
            { subject: 'Social Studies', description: 'World cultures, history, and civics' },
            { subject: 'World Languages', description: 'Spanish and French language programs' },
            { subject: 'Electives', description: 'Art, music, technology, and specialized courses' }
          ]
        };
      case 'high':
        return {
          title: 'High School',
          subtitle: 'Grades 9-12',
          description: 'College-preparatory curriculum with AP courses, dual enrollment options, and comprehensive college counseling support.',
          grades: '9-12',
          students: '450+',
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
            { subject: 'English', description: 'Advanced composition, literature, and communication' },
            { subject: 'Mathematics', description: 'Calculus, statistics, and advanced mathematics' },
            { subject: 'Sciences', description: 'AP Biology, Chemistry, Physics, and Environmental Science' },
            { subject: 'Social Studies', description: 'AP History, Government, Economics, and Psychology' },
            { subject: 'World Languages', description: 'Spanish, French, Mandarin, and Latin' },
            { subject: 'Electives', description: 'Fine arts, technology, business, and specialized programs' }
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

  useEffect(() => {
    if (level !== 'elementary') return;
    const interval = setInterval(() => {
      setBgIdx(idx => (idx + 1) % elementaryBackgrounds.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [level, elementaryBackgrounds.length]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className={`py-40 ${level === 'elementary' ? 'text-white relative overflow-hidden' : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'}`}
        style={
          level === 'elementary'
            ? {
                backgroundImage: `url('${elementaryBackgrounds[bgIdx]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '70vh',
                transition: 'background-image 1s ease'
              }
            : {}
        }
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" style={{ display: level === 'elementary' ? 'block' : 'none' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{data.grades}</div>
              <div className="text-gray-600">Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{data.students}</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
  <div className="absolute inset-0 bg-white bg-opacity-70 z-10"></div>
  {/* Section Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curriculum Overview</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Rigorous academic program that challenges students while providing the support they need to succeed.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.curriculum.map((subject, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6">
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
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">8:00 - 8:30 AM</span>
                </div>
                <span className="text-gray-600">Morning Assembly & Advisory</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">8:30 - 9:30 AM</span>
                </div>
                <span className="text-gray-600">Period 1: Core Subject</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">9:30 - 10:30 AM</span>
                </div>
                <span className="text-gray-600">Period 2: Core Subject</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">10:30 - 10:45 AM</span>
                </div>
                <span className="text-gray-600">Break</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">10:45 - 11:45 AM</span>
                </div>
                <span className="text-gray-600">Period 3: Specialized Subject</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">11:45 AM - 12:30 PM</span>
                </div>
                <span className="text-gray-600">Lunch & Recreation</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-semibold text-gray-900">12:30 - 3:15 PM</span>
                </div>
                <span className="text-gray-600">Afternoon Classes & Activities</span>
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
