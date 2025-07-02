
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Admissions from './Admissions';
import News from './News';
import AcademicLevel from './AcademicLevel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Index() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'admissions':
        return <Admissions onNavigate={handleNavigate} />;
      case 'news':
        return <News />;
      case 'elementary':
        return <AcademicLevel level="elementary" onNavigate={handleNavigate} />;
      case 'middle':
        return <AcademicLevel level="middle" onNavigate={handleNavigate} />;
      case 'high':
        return <AcademicLevel level="high" onNavigate={handleNavigate} />;
      case 'programs':
        return <AcademicLevel level="programs" onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default Index;
