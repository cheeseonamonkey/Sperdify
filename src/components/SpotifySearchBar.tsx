import React, { useRef } from 'react';
import axios from 'axios';

interface SpotifySearchBarProps {
    setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SpotifySearchBar: React.FC<SpotifySearchBarProps> = ({ setResults }) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const searchSpotify = async () => {
        const clientId = '8e2f230cbe524ed78ca17438a8cb11e8';
        const clientSecret = 'c2997612b6174e41bfecd4585d9f5e18';
        const token = btoa(`${clientId}:${clientSecret}`);

        const response = await axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${token}`
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        });

        const searchResponse = await axios(`https://api.spotify.com/v1/search?q=${searchRef.current?.value}&type=track,artist`, {
            headers: {
                'Authorization': `Bearer ${response.data.access_token}`
            }
        });

        setResults(searchResponse.data.tracks.items);
    };

    return (
        <div className="flex items-center justify-center mt-5">
            <div>
                <input ref={searchRef} type="text" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
                <button onClick={searchSpotify} className="rounded border p-1 py-2 font-rubik shadow-md hover:shadow-inner active:shadow-inner">Search</button>
            </div>
        </div>
    );
};

export default SpotifySearchBar;
