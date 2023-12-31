import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsLoggedIn } from '../util/GlobalStates';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState('');

    const isLoggedIn = useIsLoggedIn();

    const handleNavLinkClick = (link: string) => {
        setIsOpen(false);
        setIsActive(link);
    };

    return (
        <header className="bg-cyan-900 text-white">
            <nav className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-5" style={{ textShadow: '1px 1px 2px #498' }}>
                    <Link to="/">
                        <span className="font-bold font-arvo mr-2 p-2 my-1 text-3xl hover:bg-slate-700 transition duration-100 rounded-md tracking-tight">My App</span>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-5 w-5" viewBox="1 1 18 18" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <div className="text-md lg:flex-grow" style={{ textShadow: '.5px .5px 1.5px #498' }}>
                        <Link
                            to="/songs"
                            className={`font-poppins ${isActive === 'songs' ? 'border-b-2 border-white' : ''}  font-semibold block mx-2 p-2 sm:py-3 rounded-md shadow-md lg:inline-block lg:my-0 lg:px-4 lg:py-2 transition duration-100 transform hover:scale-105 hover:bg-slate-700 hover:shadow-inner hover:mt-0 text-white hover:bg-slate-700 active:bg-slate-900 active:shadow-inner active:mt-0`}
                            onClick={() => handleNavLinkClick('songs')}
                        >
                            Songs
                        </Link>
                        <Link
                            to="/playlists"
                            className={`font-poppins ${isActive === 'playlists' ? 'border-b-2 border-white' : ''}  font-semibold block mx-2 p-2 sm:py-3 rounded-md shadow-md lg:inline-block lg:my-0 lg:px-4 lg:py-2 transition duration-100 transform hover:scale-105 hover:bg-slate-700 hover:shadow-inner hover:mt-0 text-white hover:bg-slate-700 active:bg-slate-900 active:shadow-inner active:mt-0`}
                            onClick={() => handleNavLinkClick('playlists')}
                        >
                            Playlists
                        </Link>

                        <Link
                            style={{ textShadow: '.7px .7px 1.4px #050' }}
                            to="/auth"
                            className={`font-poppins font-bold block mx-2 p-2 sm:py-3 rounded-md shadow-md lg:inline-block lg:my-0 lg:px-4 lg:py-2 transition duration-100 transform 
        ${isActive === 'auth' ? 'border-b-2 border-white' : ''} 
        ${isLoggedIn
                                    ? 'text-white hover:bg-slate-700 hover:shadow-inner hover:mt-0 active:bg-slate-900 active:shadow-inner active:mt-0'
                                    : 'text-black text-[1.1em] bg-green-600 scale-105 hover:bg-green-600  hover:shadow-inner lg:right-0 absolute right-0'
                                }`}
                            onClick={() => handleNavLinkClick('auth')}
                        >
                            {isLoggedIn ? 'Profile' : 'Login'}
                        </Link>



                        <Link
                            to="/about"
                            className={`font-poppins ${isActive === 'about' ? 'border-b-2 border-white' : ''}  font-semibold block mx-2 p-2 sm:py-3 rounded-md shadow-md lg:inline-block lg:my-0 lg:px-4 lg:py-2 transition duration-100 transform hover:scale-105 hover:bg-slate-700 hover:shadow-inner hover:mt-0 text-white hover:bg-slate-700 active:bg-slate-900 active:shadow-inner active:mt-0`}
                            onClick={() => handleNavLinkClick('about')}
                        >
                            About
                        </Link>




                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
