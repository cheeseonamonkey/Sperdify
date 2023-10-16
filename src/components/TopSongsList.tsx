import React, { useEffect, useState } from 'react';
import { useAuthCode } from '../util/GlobalStates';

interface Song {
    id: string;
    name: string;
    artist: string;
    image: string;
}

export default function TopSongsList() {
    const [authCode] = useAuthCode();
    const [topSongs, setTopSongs] = useState<Song[]>([]);

    useEffect(() => {
        fetch('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: `Bearer ${authCode}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const songs = data.items.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    artist: item.artists[0].name,
                    image: item.album.images[0]?.url,
                }));
                setTopSongs(songs);
            })
            .catch((error) => {
                console.error('Error fetching top songs:', error);
            });
    }, [authCode]);

    return (
        <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
                    Top Songs
                </h2>
                <div className="overflow-y-auto max-h-96">
                    {topSongs.map((song) => (
                        <div key={song.id} className="flex items-center space-x-4 p-4">
                            {song.image && (
                                <img
                                    src={song.image}
                                    alt="Song"
                                    className="w-16 h-16 rounded-full"
                                />
                            )}
                            <div className='max-w-md w-full space-y-4'>
                                <p className="text-lg font-medium">{song.name}</p>
                                <p className="text-gray-500">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
