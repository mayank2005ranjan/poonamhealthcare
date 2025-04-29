import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import RefundPolicy from './pages/RefundPolicy';
import PatientRights from './pages/PatientRights';
import TeamPage from './pages/TeamPage';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/patient-rights" element={<PatientRights />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster position="top-right" />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
