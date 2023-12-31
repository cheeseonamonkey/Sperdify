import React, { useEffect, useState } from 'react';
import { useAuthCode, useIsLoggedIn } from '../util/GlobalStates';
import AuthButton from '../components/AuthButton';
import { SpotifyUser } from '../models/SpotifyApiModels';
import { ProfileCard } from './ProfileCard';

export default function ProfilePage() {
    const [authCode] = useAuthCode();
    const [user, setUser] = useState<SpotifyUser | null>(null);
    const isLoggedIn = useIsLoggedIn();

    useEffect(() => {
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${authCode}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [authCode]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-top bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            <AuthButton isLoggedIn={isLoggedIn} />

            <ProfileCard user={user} />
            {/* Other important content on the page */}
        </div>
    );
}
