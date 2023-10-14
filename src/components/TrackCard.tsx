import React from 'react';

interface Track {
    album: {
        images: Array<{ url: string }>
    },
    name: string,
    artists: Array<{ name: string }>,
    duration_ms: number,
    popularity: number,
}

interface TrackCardProps {
    track: Track,
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
    const { album, name, artists, duration_ms, popularity } = track;

    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <img className="w-12 h-12 mr-4 rounded-full" src={album.images[0].url} alt="Track cover" />
            <div>
                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {name}
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {artists.map(artist => artist.name).join(', ')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                    {new Date(duration_ms).toISOString().substr(11, 8)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                    Popularity: {popularity}
                </p>
            </div>
        </div>
    );
};

export default TrackCard;
