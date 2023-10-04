import React from 'react';
import AppRouter from './pages/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="m-0 p-0 flex flex-col h-screen">
      <AppRouter />
    </div>
  );
}
