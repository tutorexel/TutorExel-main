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
import ExamPage from './screens/SubjectPage/ExamPage';
import NaplanDataPage from './screens/NaplanDataPage/NaplanDataPage';
import ExamPageNaplan from './screens/NaplanDataPage/ExamPageNaplan';
import MusicPage from './screens/MusicPage/MusicalPage';
import GuitarPage from './screens/MusicPage/GuitarPage';
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
import TermsConditionPage from './screens/ContactPage/TC';
import PolicyPage from './screens/PolicyPage/PolicyPage';
import TermPage from './screens/TermsPage/TermPage';

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
        <Route path="/subjects/:yearId/:subjectId/:termId/:topicId" element={<ExamPage />} />
        <Route path="/play-music" element={<MusicPage />} />
        <Route path="/guitar" element={<GuitarPage />} />
        <Route path="/naplan/:yearId/:subjectId" element={<NaplanDataPage />} />
        <Route path="/naplan/:yearId/:subjectId/:topicId" element={<ExamPageNaplan />} />
        {/* <Route path="/prep-zone/naplan" element={<NaplanPage />} /> */}
        {/* <Route path="/prep-zone/naplan/primary" element={<NaplanPrimary />} />
        <Route path="/prep-zone/naplan/secondary" element={<NaplanSecondary />} /> */}
        {/* <Route path="/prep-zone/icas/primary" element={<IcasPrimary />} />
        <Route path="/prep-zone/icas/secondary" element={<IcasSecondary />} /> */}
        {/* <Route path="/prep-zone/icas" element={<IcasPage />} /> */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<SingleBlogPage />} />
        <Route path="/contact" element={<StudentForm />} />
        <Route path="/contact/careers" element={<TeacherForm />} />
        <Route path="/contact/thank-you" element={<ThankYouPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/term-condition" element={<TermPage />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;