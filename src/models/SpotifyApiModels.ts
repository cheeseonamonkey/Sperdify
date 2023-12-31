// spotifyModels.ts

export interface SpotifySearchResponse {
    tracks: SpotifyTrackResponse;
}

export interface SpotifyTrackResponse {
    items: SpotifyTrack[];
}

export interface SpotifyPlaylistsResponse {
    items: SpotifyPlaylist[];
}

export interface SpotifyTrack {
    album: {
        images: Array<{ url: string }>;
    };
    name: string;
    artists: Array<{ name: string }>;
    duration_ms: number;
    popularity: number;
}

export interface SpotifyArtist {
    id: string;
    name: string;
}

export interface SpotifyAlbum {
    id: string;
    name: string;
    images: SpotifyImage[];
}

export interface SpotifyImage {
    url: string;
    width: number;
    height: number;
}

export interface SpotifyUser {
    display_name: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: {
        url: string;
        height: number;
        width: number;
    }[];
    type: string;
    uri: string;
    followers: {
        href: null | string;
        total: number;
    };
    country: string;
    product: string;
    explicit_content: {
        filter_enabled: boolean;
        filter_locked: boolean;
    };
    email: string;
    birthdate?: string; // Add this line if birthdate is a possible field
    playlists?: {
        items: SpotifyPlaylist[];
    };
}

export interface SpotifyPlaylist {
    id: string;
    name: string;
    images: SpotifyImage[];
    owner: SpotifyUser;
    tracks: {
        items: SpotifyTrack[];
        total: number;
    };
    // Add other playlist properties as needed
}
