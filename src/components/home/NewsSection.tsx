import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsSectionProps {
  onNavigate: (page: string) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at Extensive Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Article 1 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-blue-500 to-purple-600" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                March 15, 2024
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Science Fair 2024 Winners Announced
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Congratulations to all participants in this year's science fair. Outstanding projects showcased innovation and creativity.
              </p>
              <button
                onClick={() => onNavigate('news')}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm sm:text-base"
              >
                Read More
              </button>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-green-500 to-blue-600" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                March 10, 2024
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Spring Musical Performance
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                Our drama club presents "Into the Woods" - a spectacular performance showcasing student talent and creativity.
              </p>
              <button
                onClick={() => onNavigate('news')}
                className="text-green-600 font-semibold hover:text-green-800 transition-colors text-sm sm:text-base"
              >
                Read More
              </button>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="h-40 sm:h-48 md:h-52 bg-gradient-to-br from-yellow-500 to-red-600" />
            <div className="p-5 sm:p-6">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                March 5, 2024
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Scholarship Program Launched
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                New merit-based scholarship program now available for incoming students. Applications open through April.
              </p>
              <button
                onClick={() => onNavigate('news')}
                className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors text-sm sm:text-base"
              >
                Read More
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
