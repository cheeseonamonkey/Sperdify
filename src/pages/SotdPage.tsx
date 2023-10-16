import React, { useState } from 'react';
import AuthButton from '../components/AuthButton';
import { useIsLoggedIn } from '../util/GlobalStates';
import SpotifySearchBar from '../components/SpotifySearchBar';
import SearchResultsList from '../components/SearchResultsList';



export default function SongOfTheDayPage() {



    const [results, setResults] = useState<any[]>([]);


    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
                    Song of the Day                </h2>

                <div className='w-[90%]'>
                    <SpotifySearchBar setResults={setResults} />
                    <SearchResultsList results={results} />
                </div>
            </div>
        </div>
    );
}
