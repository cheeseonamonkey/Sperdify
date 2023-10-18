import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import useGetClientCredentials from '../util/hooks/api/UseGetClientCredentials';

interface SpotifySearchBarProps {
    setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SpotifySearchBar: React.FC<SpotifySearchBarProps> = ({ setResults }) => {
    const searchRef = useRef<HTMLInputElement>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [autoSearch, setAutoSearch] = useState(true);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchToken = async () => {
            const token = await useGetClientCredentials();
            setAccessToken(token);
        };

        fetchToken();
    }, []);

    const searchSpotify = async () => {
        if (!accessToken) return;

        const searchResponse = await axios(`https://api.spotify.com/v1/search?q=${searchRef.current?.value}&type=track,artist`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        setResults(searchResponse.data.tracks.items);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (autoSearch) {
            if (timer) clearTimeout(timer);
            setTimer(setTimeout(searchSpotify, 750));
        }
    };

    return (
        <div className="flex items-center justify-center mt-5">
            <div className="flex items-center">
                <div className="relative">
                    <div className="absolute top-0 right-[-0.75em] translate-y-[.5em] bg-[rgba(1,1,1,0.1)] py-1 px-0 shadow-inner rounded inline-block scale-125 opacity-50">
                        <input
                            className="z-10 bg-gray-400 scale-150"
                            type="checkbox"
                            checked={autoSearch}
                            onChange={(e) => setAutoSearch(e.target.checked)}
                        />
                        <label className="relative left-[-1.7em] top-[1em] text-xs pointer-events-none opacity-60 font-bold text-blue-900 z-0 font-roboto">auto</label>
                    </div>
                    <input
                        ref={searchRef}
                        type="text"
                        className="border-2 border-gray-300 bg-white h-11 px-3 pr-4 rounded-lg text-md font-varela-round font-bold shadow-sm focus:outline-none focus:shadow-inner"
                        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                            if (event.key === 'Enter') {
                                searchSpotify();
                            }
                        }}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={searchSpotify} className="ml-3 rounded border p-1 py-2 font-rubik shadow-md hover:shadow-inner active:shadow-inner">Search</button>
            </div>
        </div>
    );

};

export default SpotifySearchBar;
