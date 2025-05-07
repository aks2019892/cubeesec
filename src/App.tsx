import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import AboutUs from './pages/AboutUs';
import { OurApproach } from './pages/OurApproach';
import Workshops from './pages/Workshops';
import Services from './pages/Services';
import BlogDisplay from './pages/BlogDisplay';
import AdminPage from './pages/AdminPage';
import CTASection from './components/CTASection';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './ScrollToTop';
import Webinars from './pages/Webinars';
import { Whatwedo } from './pages/WhatWeDo';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate/about-us" element={<AboutUs />} />
          <Route path="/corporate/our-approach" element={<OurApproach />} />
          <Route path="/training/workshops" element={<Workshops />} />
          <Route path="/corporate/blogs" element={<BlogDisplay />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/training/webinars" element={<Webinars />} />
          <Route path="/corporate/what-we-do" element={<Whatwedo />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      {location.pathname !== '/contact-us' && <CTASection />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;