import React, { useState } from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  Award,
  Users,
  BookOpen,
} from 'lucide-react';

const News: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const newsItems = [
    {
      id: 1,
      title: "Cultural Festival",
      excerpt:
        "Cultural festivals are vibrant celebrations that showcase the unique traditions, music, dance, and attire of a people. They provide an opportunity for individuals to connect with their roots, appreciate diversity, and promote unity among communities. These festivals preserve heritage while creating joyful memories for all who participate....",
      date: "March 28, 2025",
      author: "Corp member Isaac",
      category: "Culture",
      icon: BookOpen,
      image: "lovable-uploads/Cultural.jpg",
      gallery: [
        "lovable-uploads/Cultural.jpg",
        "lovable-uploads/Cultural8.jpg",
        "lovable-uploads/Cultural9.jpg",
        "lovable-uploads/Cultural10.jpg",
        "lovable-uploads/Cultural11.jpg",
        "lovable-uploads/Cultural1.jpg",
        "lovable-uploads/Cultural2.jpg",
        "lovable-uploads/Cultural3.jpg",
        "lovable-uploads/Cultural4.jpg",
        "lovable-uploads/Cultural5.jpg",
        "lovable-uploads/Cultural6.jpg",
        "lovable-uploads/Cultural7.jpg",
        "lovable-uploads/Cultural8.jpg",
        "lovable-uploads/Cultural9.jpg",
        "lovable-uploads/Cultural10.jpg",
        "lovable-uploads/Cultural11.jpg",
        "lovable-uploads/Cultural12.jpg",
        "lovable-uploads/Cultural13.jpg",

      ],
    },
    {
      id: 2,
      title: "Student Preparation for exams",
      excerpt:
        "Preparing for exams requires planning and focus. Students should review their notes regularly, practice past questions, and create a study schedule. Taking short breaks, staying healthy, and getting enough sleep also help improve concentration and memory. Starting early and staying consistent leads to better results.y...",
      date: "JUly 1,2025",
      author: "Mrs Alonge",
      category: "Education",
      icon: Users,
      image: "lovable-uploads/3.jpg",
    
    },
    {
      id: 3,
      title: "Admission",
      excerpt:
        "Admission is the process of enrolling into a school or institution. We're excited to announce At our school, admission is open from Crèche to JSS3, welcoming children at every stage of their early education. With qualified teachers and a supportive environment, we ensure a strong foundation for every learner’s growth and success..",
      date: "session 2025/2026",
      author: "Mrs. Ibukun Agbi",
      category: "Admissions",
      icon: Award,
      image: "lovable-uploads/123.jpg",
    },
    {
      id: 4,
      title: "Summer coaching program",
      excerpt:
        "We're excited to announce our new Summer coaching program, designed to help students improve their academic performance, skills, and confidence...Activities:Academic,Outdoor/indoor games,computer lesson, Art and Craft and Vacation,.",
      
      date: "August 4, 2025 to 29th August 2025", 
      author: "Mrs. Ibukun Agbi",
      category: "Academics",
      icon: Award,
      image: "lovable-uploads/SummerCoaching.jpg",
    },
    {
      id: 5,
      title: "Standard Facilities at Extensive Academy",
      excerpt:
        "Our school is well-equipped with modern and essential facilities to ensure a safe and supportive learning environment. These include well-furnished classrooms, a stocked library, ICT rooms, science laboratories, a technical workshop, clean toilets, borehole water supply, solar power system, fire extinguishers for safety, and a medical sickbay. Students also enjoy a spacious playground with swings and various indoor and outdoor games, promoting both learning and fun....",
      date: "July 10, 2025",
      author: "Mrs Odejimi",
      category: "Facilities",
      icon: BookOpen,
      image: "lovable-uploads/abc.jpg",
        gallery: [
        "lovable-uploads/Facility.jpg",
        "lovable-uploads/Facility1.jpg",
        "lovable-uploads/Facility2.jpg",
        "lovable-uploads/Facility3.jpg",
        "lovable-uploads/Facility4.jpg",
        "lovable-uploads/Facility5.jpg",
        "lovable-uploads/Facility6.jpg",
        "lovable-uploads/Facility7.jpg",
        "lovable-uploads/Facility8.jpg",
        "lovable-uploads/Facility9.jpg",
        "lovable-uploads/Facility10.jpg",
        "lovable-uploads/Facility11.jpg",
        "lovable-uploads/Facility12.jpg",
        "lovable-uploads/Facility13.jpg",
        "lovable-uploads/Facility14.jpg",
        "lovable-uploads/Facility15.jpg",
        "lovable-uploads/Facility16.jpg",
      ],
    },
    {
      id: 6,
      title: "Music Class",
      excerpt:
        "Our music class offers students the opportunity to explore their creativity through sound. With lessons in singing, instrument playing, and basic music theory, students develop rhythm, coordination, and self-expression. The class helps build confidence and a lifelong appreciation for music. Whether students are beginners or have some experience, our music program nurtures their passion and talent in a fun and engaging environment.",
      date: "",
      author: "Student Council",
      category: "Music",
      icon: Users,
      image: "lovable-uploads/Music1.jpg",
       gallery: [
        "lovable-uploads/Music.jpg",
        "lovable-uploads/Music1.jpg",
        "lovable-uploads/Music2.jpg",
        "lovable-uploads/Music3.jpg",
        "lovable-uploads/Music4.jpg",
        "lovable-uploads/Music5.jpg",
        "lovable-uploads/Music6.jpg",
        "lovable-uploads/Music7.jpg",
        "lovable-uploads/Music8.jpg",
        "lovable-uploads/Music9.jpg",
      
      ],
    },
    
  ];

  const upcomingEvents = [
    { date: "Aug 5 2025", title: "Summer Coaching", time: "9:00 AM - 1:00 PM" },
    
  ];

  return (
    <>
      {/* Modal Gallery */}
    {showGallery && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="bg-white/90 rounded-xl p-6 w-full max-w-7xl relative shadow-2xl">
      <button
        onClick={() => setShowGallery(false)}
        className="absolute top-4 right-4 text-gray-800 hover:text-black text-lg font-semibold z-10"
      >
        ✖ Close
      </button>

      <div className="mt-12 flex overflow-x-auto space-x-6 pb-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="w-[600px] h-[400px] flex items-center justify-center rounded-lg flex-shrink-0"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}


      {/* Main Content */}
      <div className="pt-24 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Stay up to date with the latest news, achievements, and upcoming events at Extensive Academy.
            </p>
          </div>
        </section>

        {/* News & Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-8">
              {newsItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <article
                      key={item.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                    <div className="flex flex-col md:flex-row">
                      {/* Image or Gradient Block */}
                      <div className="w-full md:w-48 h-56 md:h-auto flex-shrink-0">
                        {item.image.endsWith('.jpg') || item.image.endsWith('.png') ? (
                          <img
                            src={item.image.startsWith('/') ? item.image : `/${item.image}`}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md"
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-br ${item.image} flex items-center justify-center`}
                          >
                            <IconComponent className="h-12 w-12 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {expandedId === item.id
                            ? item.excerpt
                            : item.excerpt.slice(0, 70) + '...'}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {item.author}
                          </div>

                          {item.gallery && (
                            <button
                              onClick={() => {
                                setGalleryImages(item.gallery);
                                setShowGallery(true);
                              }}
                              className="text-sm text-blue-600 hover:underline mb-2"
                            >
                              See More Pictures
                            </button>
                          )}

                          <button
                            onClick={() =>
                              setExpandedId(expandedId === item.id ? null : item.id)
                            }
                            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                          >
                            {expandedId === item.id ? 'Read Less' : 'Read More'}
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
            {/* Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-start border-b border-gray-100 pb-4 last:border-none"
                  >
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
             {/*} <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700">
                View All Events
              </button>*/}
            </div>

            {/* Newsletter */}
           {/* <div className="bg-gradient-to-br from-purple-600 to-blue-700 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter for the latest updates and announcements.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-3"
              />
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-lg font-semibold">
                Subscribe
              </button>
            </div> */}
 
            {/* Quick Links */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  'Academic Calendar',
                  'Athletics Schedule',
                  'Parent Portal',
                  'Alumni Network',
                  'Employment',
                ].map((text, i) => (
                  <li key={i}>
                    <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>  */}
            
          
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
