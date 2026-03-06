import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Technology from './pages/Technology';
import Team from './pages/Team';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './App.css';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Page title updater
const PageTitleUpdater = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Home - Compact Pile Construction',
      '/about': 'About Us - Compact Pile Construction',
      '/services': 'Services - Compact Pile Construction',
      '/projects': 'Projects - Compact Pile Construction',
      '/technology': 'Technology - Compact Pile Construction',
      '/team': 'Our Team - Compact Pile Construction',
      '/certifications': 'Certifications - Compact Pile Construction',
      '/contact': 'Contact Us - Compact Pile Construction'
    };

    document.title = titles[pathname] || 'Compact Pile Construction - Foundation Testing Experts';
  }, [pathname]);

  return null;
};

// Lazy image loading handler
const LazyImageLoader = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);

  return null;
};

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <PageTitleUpdater />
      <LazyImageLoader />
      <Header />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/team" element={<Team />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Route */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Page Not Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <a
                  href="/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Back Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col">
          <AppContent />
          <Toaster 
            position="top-right"
            richColors
            closeButton
            theme="system"
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;