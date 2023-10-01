import React, { useEffect } from 'react';
import AuthButton from '../shared/AuthButton';
import { useAuthCode } from '../util/GlobalStates';

export default function AuthPage() {
    const [authCode, setAuthCode] = useAuthCode();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.substr(1));
        const token = urlParams.get('access_token');

        if (token) {
            // Access token found in URL
            setAuthCode(token);

            // Remove the access token from the URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Authorize your Spotify account:
                    </h2>
                    <AuthButton isLoggedIn={false} />
                </div>
            </div>
        </div>
    );
}
