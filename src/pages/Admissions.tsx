import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import { Calendar, FileText, Users, DollarSign, CheckCircle, Clock, Download, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom"; // Make sure this import is at the top

interface AdmissionsProps {
  onNavigate: (page: string) => void;
}
  const Admissions: React.FC<AdmissionsProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (1 second)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Join our community of learners and discover your potential at Extensive Academy. We welcome students who are ready to thrive in our challenging and supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our admissions process is designed to get to know each student and family personally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Submit Application</h3>
              <p className="text-gray-600">
                Complete our online application form with required documents and personal statements.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="150">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Schedule Visit</h3>
              <p className="text-gray-600">
                Tour our campus and meet with admissions counselors to learn more about our programs.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Interview</h3>
              <p className="text-gray-600">
                Participate in a student interview and family meeting with our admissions team.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="450">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Decision</h3>
              <p className="text-gray-600">
                Receive admissions decision and enrollment information within two weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Requirements</h2>
              <div className="space-y-6">
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="0">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Completed Application Form</h4>
                    <p className="text-gray-600">Online application with student and family information</p>
                  </div>
                </div>
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Academic Records</h4>
                    <p className="text-gray-600">Student's Report card  from previous school </p>
                  </div>
                </div>
                {/*
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2"></h4>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">y</h4>
                    <p className="text-gray-600"></p>
                  </div>
                </div>*/}
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Application Fee</h4>
                    <p className="text-gray-600">5000naira non-refundable application fee</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Download Form</h3>
              <div className="space-y-4">
                <a
                  href="/ApplicationForm.pdf"
                  download="ExtensiveAcademy_ApplicationForm.pdf"
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  data-aos="fade-up" data-aos-delay="0">
                  <div>
                    <h4 className="font-semibold text-gray-900">Application Form</h4>
                    <p className="text-sm text-gray-600">Complete admission application (PDF)</p>
                  </div>
                  <Download className="h-5 w-5 text-blue-600" />
                </a>

              
             
              </div>
              <Link to="/apply">
                <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Apply Online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>


  
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Take the first step towards joining our community. Schedule a visit or start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Visit
            </button>
           {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
