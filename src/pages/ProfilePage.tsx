import React, { useEffect, useState } from 'react';
import { useAuthCode, useIsLoggedIn } from '../util/GlobalStates';
import AuthButton from '../components/AuthButton';

export default function ProfilePage() {
    const [authCode] = useAuthCode();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [country, setCountry] = useState('');
    const [product, setProduct] = useState('');
    const [followers, setFollowers] = useState(0);
    const isLoggedIn = useIsLoggedIn();


    useEffect(() => {
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
    }, [authCode]);

    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-3 text-center text-3xl font-extrabold ">
                    Profile
                </h2>
                <AuthButton isLoggedIn={isLoggedIn} />
                <div>
                    <p>Display Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <p>Country: {country}</p>
                    <p>Product: {product}</p>
                    <p>Followers: {followers}</p>
                    {profileImage && (
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto mt-4"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
