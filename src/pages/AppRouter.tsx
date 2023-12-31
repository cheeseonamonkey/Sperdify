import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import SongsPage from './SongsPage';
import { PlaylistsPage } from './PlaylistsPage';


export default function AppRouter() {
    return (
        <Router>
            <div className="flex flex-col">
                <Header />
                <div className="flex-grow max-h-[100vh] max-w-[100vw]">
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/auth' element={<AuthPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/songs' element={<SongsPage />} />
                        <Route path='/playlists' element={<PlaylistsPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
