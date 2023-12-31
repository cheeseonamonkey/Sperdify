// playlistsPage.tsx

import React, { useEffect, useState } from 'react';
import { SpotifyPlaylist, SpotifyPlaylistsResponse } from '../models/SpotifyApiModels';
import CardList from '../components/CardList';
import { useAuthCode, useIsLoggedIn } from '../util/GlobalStates';

interface PlaylistsPageProps {
    playlists: SpotifyPlaylist[];
}

export const PlaylistsPage: React.FC<PlaylistsPageProps> = () => {

    const [authCode] = useAuthCode();
    const [playlists, setPlaylists] = useState<SpotifyPlaylist[] | null>(null);
    const isLoggedIn = useIsLoggedIn();
    const limit = 50; // Number of playlists to fetch in each request

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                let offset = 0;
                let allPlaylists: SpotifyPlaylist[] = [];

                while (true) {
                    const response = await fetch(`https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`, {
                        headers: {
                            Authorization: `Bearer ${authCode}`,
                        },
                    });

                    const data = await response.json();

                    if (data.items && data.items.length > 0) {
                        allPlaylists = [...allPlaylists, ...data.items];
                        setPlaylists(allPlaylists); // Update state with each batch of playlists
                        offset += limit;
                    } else {
                        break; // No more playlists to fetch
                    }
                }
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        if (authCode) {
            fetchPlaylists();
        }

    }, [authCode]);

    return <CardList items={playlists} renderCard={(playlist, index) => {
        playlist = playlist as SpotifyPlaylist;
        return (
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-8 w-8" src={playlist.images[0].url} alt="" />
                </div>
                <div>
                    <div className="text-sm font-medium text-gray-900">{playlist.name}</div>
                    <div className="text-sm text-gray-500">{playlist.owner.display_name}</div>
                    <div className="text-sm text-gray-500">{`${playlist.tracks.total} tracks`}</div>
                </div>
            </div>
        )
    }
    }
    />
}




