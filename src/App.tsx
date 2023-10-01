import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

import Header from './shared/Header';
import Footer from './shared/Footer';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
