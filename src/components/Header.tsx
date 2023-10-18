import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIsLoggedIn } from '../util/GlobalStates';



const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="bg-cyan-900 p-1 text-white">
            <nav className="container mx-auto  flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-5" style={{ textShadow: '1px 1px 2px #498' }}>
                    <Link to="/">
                        <span className="font-bold font-arvo mr-2 p-2 my-1 text-3xl hover:bg-slate-700 transition duration-200 rounded-md tracking-tight ">My App</span>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-5 w-5" viewBox="1 1 18 18" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <div className="text-md lg:flex-grow" style={{ textShadow: '.5px .5px 1.5px #498' }}>

                        <Link to="/about" className="font-poppins  font-semibold block mx-2 p-2 rounded-md shadow-xl lg:inline-block lg:my-0   hover:bg-slate-700 hover:shadow-inner   hover:mt-0 text-white hover:bg-slate-700 transition duration-300">
                            About
                        </Link>

                        <Link to="/auth" className="font-poppins font-semibold block mx-2 p-2 rounded-md  shadow-xl  lg:inline-block lg:my-0   hover:bg-slate-700 hover:shadow-inner  hover:mt-0  text-white hover:bg-slate-700 transition duration-300">
                            {isLoggedIn ? 'Profile' : 'Login'}
                        </Link>

                        <Link to="/songOfTheDay" className="font-poppins font-semibold block mx-2 p-2 rounded-md  shadow-xl  lg:inline-block lg:my-0   hover:bg-slate-700 hover:shadow-inner  hover:mt-0  text-white hover:bg-slate-700 transition duration-300">
                            SotD
                        </Link>
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Header;
