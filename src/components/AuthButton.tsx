import React from 'react';

interface AuthButtonProps {
    isLoggedIn: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ isLoggedIn }) => {
    const CLIENT_ID = '8e2f230cbe524ed78ca17438a8cb11e8';
    const REDIRECT_URI = window.location.origin + '/auth';
    const SCOPES = 'user-read-private user-read-email';

    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;

    const handleLogout = () => {
        // Perform logout logic here
    };

    return (
        <div>
            {isLoggedIn ? (
                // User is logged in
                <div>
                    {/* Render logged in content */}
                    <p>You are logged into Spotify!</p>
                    <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-900 hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            ) : (
                // User is not logged in
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <a
                            href={AUTH_URL}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in with Spotify
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthButton;
