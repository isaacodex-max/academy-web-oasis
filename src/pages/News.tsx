
import React from 'react';
import { Calendar, User, ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Science Fair 2024 Winners Announced",
      excerpt: "Congratulations to all participants in this year's science fair. Outstanding projects showcased innovation and creativity across all grade levels.",
      date: "March 15, 2024",
      author: "Dr. Emily Carter",
      category: "Academics",
      icon: BookOpen,
      image: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Spring Musical Performance: Into the Woods",
      excerpt: "Our drama club presents 'Into the Woods' - a spectacular performance showcasing student talent and creativity in music and theater.",
      date: "March 10, 2024",
      author: "Michael Rodriguez",
      category: "Arts",
      icon: Users,
      image: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "New Merit-Based Scholarship Program Launched",
      excerpt: "We're excited to announce our new scholarship program for incoming students. Applications are now open through April 30th.",
      date: "March 5, 2024",
      author: "Sarah Johnson",
      category: "Admissions",
      icon: Award,
      image: "from-yellow-500 to-red-600"
    },
    {
      id: 4,
      title: "Math Olympiad Team Takes Regional Championship",
      excerpt: "Our math team brought home the gold at the regional Math Olympiad competition, advancing to state championships.",
      date: "February 28, 2024",
      author: "Dr. James Liu",
      category: "Academics",
      icon: Award,
      image: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "New STEM Lab Facility Opens",
      excerpt: "State-of-the-art STEM laboratory featuring advanced equipment for physics, chemistry, biology, and engineering projects.",
      date: "February 20, 2024",
      author: "Lisa Chen",
      category: "Facilities",
      icon: BookOpen,
      image: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "Student Council Food Drive Exceeds Goal",
      excerpt: "Thanks to our amazing community, the annual food drive collected over 2,000 items for local families in need.",
      date: "February 15, 2024",
      author: "Student Council",
      category: "Community",
      icon: Users,
      image: "from-green-500 to-teal-600"
    }
  ];

  const upcomingEvents = [
    {
      date: "Mar 25",
      title: "Open House for Prospective Families",
      time: "10:00 AM - 2:00 PM"
    },
    {
      date: "Apr 2",
      title: "Spring Art Exhibition Opening",
      time: "6:00 PM - 8:00 PM"
    },
    {
      date: "Apr 8",
      title: "Parent-Teacher Conferences",
      time: "3:00 PM - 7:00 PM"
    },
    {
      date: "Apr 15",
      title: "Earth Day Sustainability Fair",
      time: "9:00 AM - 3:00 PM"
    },
    {
      date: "Apr 22",
      title: "Spring Sports Banquet",
      time: "6:00 PM - 9:00 PM"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Stay up to date with the latest news, achievements, and upcoming events at Extensive Academy.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-8">
              {newsItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="flex">
                      <div className={`w-48 bg-gradient-to-br ${item.image} flex-shrink-0 hidden md:flex items-center justify-center`}>
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      <div className="p-6 flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-3">
                            {item.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {item.author}
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center transition-colors">
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-4 text-center min-w-[60px]">
                      <div className="text-xs font-semibold">{event.date.split(' ')[0]}</div>
                      <div className="text-lg font-bold">{event.date.split(' ')[1]}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Events
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-700 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter for the latest updates and announcements.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Athletics Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Employment
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
