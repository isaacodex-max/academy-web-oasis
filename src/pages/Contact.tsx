import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

 const Contact: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

if (loading) return <Loader />;
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message, phone } = formData;

    // Validate required fields
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill all required fields before sending.');
      
      return;
    }
    

    const whatsappNumber = '2348054710'; // Use your full international number (without leading zero, no plus sign)
    const whatsappFullNumber = '2348058594710'; // Your full WhatsApp number (corrected from your input)

    const text = `
*New Message from Website*

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject}
Message: ${message}
    `;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappFullNumber}?text=${encodedText}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappURL, '_blank');

    // Reset form after opening WhatsApp
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };


  return (
    <div className="min-h-screen pt-20">
      <HelmetProvider>
      <Helmet>
        <title>Contact Us | Extensive Academy</title>
        <meta name="description" content="Get in touch with Extensive Academy for inquiries about admissions, programs, or scheduling a visit to our campus." />
        <meta name="keywords" content="Extensive Academy, contact, admissions, Nigeria, school phone number" />
        <meta property="og:title" content="Contact Us | Extensive Academy" />
        <meta property="og:description" content="Reach out to Extensive Academy via phone, email, or WhatsApp. We’re happy to assist with any inquiries or support you need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.extensiveacademy.org/contact" />
        <meta property="og:image" content="https://www.extensiveacademy.org/lovable-uploads/ab.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Extensive Academy" />
        <meta name="twitter:description" content="Reach out to Extensive Academy via phone, email, or WhatsApp." />
        <meta name="twitter:image" content="https://www.extensiveacademy.org/lovable-uploads/ab.jpg" />
      </Helmet>
      </HelmetProvider>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We'd love to hear from you. Get in touch with us for admissions, questions, or to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section
        className="relative py-16 bg-white overflow-hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/ab.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Section Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up" data-aos-delay="50">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="200">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div data-aos="fade-up" data-aos-delay="50">
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(+234) 09065065515"
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="100">
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="general">General Information</option>
                      <option value="academics">Academic Programs</option>
                      <option value="visit">Schedule a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="50">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please share your message or questions..."
                  ></textarea>
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-delay="50"
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div data-aos="fade-up" data-aos-delay="0">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Visit Our Campus</h3>
                    <p className="text-white">
                      PLOT 15, JESUS AVENUE,<br />
                      OLOGBUN, SIMAWA-LIKOSI ROAD,<br />
                      OGUN STATE.
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                    <p className="text-white">
                      Main Office: +2348058594710<br />
                      Admissions: +2347039404364
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <p className="text-white">
                      General: extensiveacademy2019@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-white">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '256px' }}>
                  <iframe
                    title="Extensive Academy Location"
                    src="https://www.google.com/maps?q=PLOT+15,+JESUS+AVENUE,OLOGBUN,SIMAWA-LIKOSI+ROAD,+SHAGAMU,OGUN+STATE&output=embed"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
