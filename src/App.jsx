import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import AvailableClasses from "./pages/student/AvailableClasses";

function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/available-classes" element={<AvailableClasses />} />

        {/* Dynamic Route Navigation based on User Role */}
        {user?.role === "admin" && <Route path="/admin" element={<AdminDashboard />} />}
        {user?.role === "student" && <Route path="/student" element={<StudentDashboard />} />}
        {user?.role === "instructor" && <Route path="/instructor" element={<InstructorDashboard />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
