// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Screen/Page Components
import HomePage from './screens/HomePage/HomePage';
import AboutUsPage from './screens/AboutUsPage/AboutUsPage';
import CareersPage from './screens/CareersPage/CareersPage';
import PricingPage from './screens/PricingPage/PricingPage';
import SubjectOverviewPage from './screens/SubjectOverviewPage/SubjectOverviewPage';
import SubjectPage from './screens/SubjectPage/SubjectPage';
import StudentForm from './screens/ContactPage/StudentForm';
import TeacherForm from './screens/ContactPage/TeacherForm';
import ThankYouPage from './screens/ContactPage/ThankYouPage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/subjects/:subjectId" element={<SubjectOverviewPage />} />
        <Route path="/subjects/:yearId/:subjectId" element={<SubjectPage />} />
        <Route path="/contact" element={<StudentForm />} />
        <Route path="/contact/careers" element={<TeacherForm />} />
        <Route path="/contact/thank-you" element={<ThankYouPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;