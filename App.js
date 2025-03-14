import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Only this import line
import HomePage from './components/HomePage';  // default import
import CustomerLoginPage from './components/CustomerLoginPage';
import CustomerSignupPage from './components/CustomerSignupPage';
import AdminLoginPage from './components/AdminLoginPage';
import AdminDashboardPage from './components/AdminDashboardPage';
import DriverLoginPage from './components/DriverLoginPage';
import DriverSignupPage from './components/DriverSignupPage';
import BookingPage from './components/BookingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer-login" element={<CustomerLoginPage />} />
        <Route path="/customer/signup" element={<CustomerSignupPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/driver/login" element={<DriverLoginPage />} />
        <Route path="/driver/signup" element={<DriverSignupPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
