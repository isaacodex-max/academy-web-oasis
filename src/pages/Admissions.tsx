import React from 'react';
import { Calendar, FileText, Users, DollarSign, CheckCircle, Clock, Download, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom"; // Make sure this import is at the top

interface AdmissionsProps {
  onNavigate: (page: string) => void;
}

const Admissions: React.FC<AdmissionsProps> = ({ onNavigate }) => {
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
                    <p className="text-gray-600">Transcripts from previous schools (last 2 years)</p>
                  </div>
                </div>
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teacher Recommendations</h4>
                    <p className="text-gray-600">Two letters from current or recent teachers</p>
                  </div>
                </div>
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Student Essay</h4>
                    <p className="text-gray-600">Personal statement about interests and goals</p>
                  </div>
                </div>
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
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-900">Application Form</h4>
                    <p className="text-sm text-gray-600">Complete admission application (PDF)</p>
                  </div>
                  <Download className="h-5 w-5 text-blue-600" />
                </div>
              
             
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

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key deadlines for the upcoming academic year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Fall 2024</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Dec 1, 2023:</strong> Applications open</li>
                <li><strong>Feb 1, 2024:</strong> Application deadline</li>
                <li><strong>Mar 15, 2024:</strong> Decisions mailed</li>
                <li><strong>Apr 15, 2024:</strong> Enrollment deadline</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Spring 2025</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Sep 1, 2024:</strong> Applications open</li>
                <li><strong>Nov 1, 2024:</strong> Application deadline</li>
                <li><strong>Dec 15, 2024:</strong> Decisions mailed</li>
                <li><strong>Jan 15, 2025:</strong> Enrollment deadline</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Campus Visits</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Monthly:</strong> Open house events</li>
                <li><strong>Weekly:</strong> Individual tours</li>
                <li><strong>Daily:</strong> By appointment</li>
                <li><strong>Virtual:</strong> Available anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tuition & Financial Aid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that an excellent education should be accessible to deserving students regardless of financial circumstances.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">2024-2025 Tuition</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Elementary (K-5)</span>
                  <span className="text-gray-900">$18,500</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">Middle School (6-8)</span>
                  <span className="text-gray-900">21,000 Naiara</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-semibold">High School (9-12)</span>
                  <span className="text-gray-900">24,500 airaN</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                * Tuition includes books, technology, and most extracurricular activities
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Financial Aid</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Need-Based Aid</h4>
                    <p className="text-gray-600 text-sm">Up to 75% tuition assistance available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Merit Scholarships</h4>
                    <p className="text-gray-600 text-sm">Academic and leadership awards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Plans</h4>
                    <p className="text-gray-600 text-sm">Flexible monthly payment options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sibling Discount</h4>
                    <p className="text-gray-600 text-sm">10% discount for additional children</p>
                  </div>
                </div>
              </div>
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
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              Start Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
