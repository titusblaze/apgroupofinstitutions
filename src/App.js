import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsScroller from "./components/NewsScroller";
import ApplicationForm from "./components/ApplicationForm";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import FloatingIcon from "./components/FloatingIcon";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Institute from "./pages/Institute";
import Chairman from "./pages/Chairman";
import ProgramAdded from "./pages/ProgramAdded";
import ANM from "./pages/ANM";
import DMLT from "./pages/DMLT";
import GeneralDutyAssistant from "./pages/GeneralDutyAssistant";
import Catering from "./pages/Catering";
import OficeAutomation from "./pages/OficeAutomation";
import AntiRagging from "./pages/AntiRagging";
import Facility from "./pages/Facility";
import Admission from "./pages/Admission";
import Placement from "./pages/Placement";
import Image from "./pages/Image";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import StudentLeaveForm from "./pages/StudentLeaveForm";
import TeacherLeaveForm from "./pages/TeacherLeaveForm";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router basename="/apgroupofinstitutions">
      <ScrollToTop /> {/* ✅ MUST be here */}

      <Header />
      <Navbar />
      <NewsScroller />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/programadded" element={<ProgramAdded />} />
        <Route path="/anm" element={<ANM />} />
        <Route path="/dmlt" element={<DMLT />} />
        <Route path="/gda" element={<GeneralDutyAssistant />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/office-automation" element={<OficeAutomation />} />
        <Route path="/anti-ragging" element={<AntiRagging />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/image" element={<Image />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studentleave" element={<StudentLeaveForm />} />
        <Route path="/teacherleave" element={<TeacherLeaveForm />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>

      <FloatingIcon />
      <Footer />
    </Router>
  );
}