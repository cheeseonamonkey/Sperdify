import React from 'react';
import { SpotifyTrack } from '../models/SpotifyApiModels';
import CardList from './CardList';

interface SearchResultsListProps {
    results: SpotifyTrack[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
    const renderCard = (result: SpotifyTrack, index: number) => (
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-8 w-8" src={result.album.images[0].url} alt="" />
            </div>
            <div>
                <div className="text-sm font-medium text-gray-900">{result.name}</div>
                <div className="text-sm text-gray-500">{result.artists[0].name}</div>
            </div>
        </div>
    );

    return <CardList items={results} renderCard={(item, index) => {
        item = item as SpotifyTrack
        return (
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 m-0 rounded-sm" src={item.album.images[0].url} alt="" />
                </div>
                <div>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.artists[0].name}</div>
                </div>
            </div>)
    }} />
};

export default SearchResultsList;
