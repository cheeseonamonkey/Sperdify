// spotifyModels.ts

export interface SpotifySearchResponse {
    tracks: SpotifyTrackResponse;
}

export interface SpotifyTrackResponse {
    items: SpotifyTrack[];
}

export interface SpotifyTrack {
    id: string;
    name: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
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
