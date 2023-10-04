import React, { useEffect, useState } from 'react';
import AuthButton from '../components/AuthButton';
import { useAuthCode, useIsLoggedIn } from '../util/GlobalStates';

export default function AuthPage() {
    const [authCode, setAuthCode] = useAuthCode();
    const isLoggedIn = useIsLoggedIn();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [country, setCountry] = useState('');
    const [product, setProduct] = useState('');
    const [followers, setFollowers] = useState(0);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.substr(1));
        const token = urlParams.get('access_token');

        if (token) {
            setAuthCode(token);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${authCode}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setDisplayName(data.display_name);
                    setEmail(data.email);
                    setProfileImage(data.images[0]?.url);
                    setCountry(data.country);
                    setProduct(data.product);
                    setFollowers(data.followers.total);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [isLoggedIn, authCode]);

    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {authCode ? (
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Profile
                        </h2>
                        <div>
                            <p>Display Name: {displayName}</p>
                            <p>Email: {email}</p>
                            <p>Country: {country}</p>
                            <p>Product: {product}</p>
                            <p>Followers: {followers}</p>
                            {profileImage && (
                                <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mx-auto mt-4" />
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Authorize your Spotify account:
                        </h2>
                        <AuthButton isLoggedIn={false} />
                    </div>
                )}
            </div>
        </div>
    );
}
