import React, { useEffect, useRef, ReactNode } from 'react';
import { SpotifyPlaylist, SpotifyTrack } from '../models/SpotifyApiModels';

interface CardListProps {
    items: SpotifyTrack[] | SpotifyPlaylist[] | null;
    renderCard: (item: SpotifyTrack | SpotifyPlaylist | null, index: number) => ReactNode;
}

const CardList: React.FC<CardListProps> = ({ items, renderCard }) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [items]);

    return (
        <ul ref={listRef} className="divide-y divide-gray-200 overflow-y-auto">
            {items &&
                items.map((item, index) => (
                    <li key={index} className="py-1 pt-3 px-3">
                        {renderCard(item, index)}
                    </li>
                ))}
        </ul>
    );
};

export default CardList;


// todo: generic type parameter