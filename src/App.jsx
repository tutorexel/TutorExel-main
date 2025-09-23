// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

// Import Screen/Page Components
import HomePage from './screens/HomePage/HomePage';
import AboutUsPage from './screens/AboutUsPage/AboutUsPage';
import CareersPage from './screens/CareersPage/CareersPage';
import PricingPage from './screens/PricingPage/PricingPage';
import SubjectOverviewPage from './screens/SubjectOverviewPage/SubjectOverviewPage';
import SubjectPage from './screens/SubjectPage/SubjectPage';
import MusicPage from './screens/MusicPage/MusicalPage';
import NaplanPage from './screens/ExamPrepPage/NaplanPage';
import NaplanPrimary from './screens/ExamPrepPage/NaplanPrimary';
import NaplanSecondary from './screens/ExamPrepPage/NaplanSecondary';
import IcasPrimary from './screens/ExamPrepPage/IcasPrimary';
import IcasSecondary from './screens/ExamPrepPage/IcasSecondary';
import IcasPage from './screens/ExamPrepPage/IcasPage';
import BlogPage from './screens/BlogPage/BlogPage';
import SingleBlogPage from './screens/BlogPage/SingleBlogPage';
import StudentForm from './screens/ContactPage/StudentForm';
import TeacherForm from './screens/ContactPage/TeacherForm';
import ThankYouPage from './screens/ContactPage/ThankYouPage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/subjects/:subjectId" element={<SubjectOverviewPage />} />
        <Route path="/subjects/:yearId/:subjectId" element={<SubjectPage />} />
        <Route path="/play-music" element={<MusicPage />} />
        <Route path="/prep-zone/naplan" element={<NaplanPage />} />
        <Route path="/prep-zone/naplan/primary" element={<NaplanPrimary />} />
        <Route path="/prep-zone/naplan/secondary" element={<NaplanSecondary />} />
        <Route path="/prep-zone/icas/primary" element={<IcasPrimary />} />
        <Route path="/prep-zone/icas/secondary" element={<IcasSecondary />} />
        <Route path="/prep-zone/icas" element={<IcasPage />} />
        {/* <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} /> */}
        <Route path="/contact" element={<StudentForm />} />
        <Route path="/contact/careers" element={<TeacherForm />} />
        <Route path="/contact/thank-you" element={<ThankYouPage />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;