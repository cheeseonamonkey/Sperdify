import React from 'react';
import AuthButton from '../components/AuthButton';
import { useIsLoggedIn } from '../util/GlobalStates';



export default function SongOfTheDayPage() {

    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Song of the Day                </h2>

            </div>
        </div>
    );
}
