import React, { useEffect, useRef } from 'react';

interface SearchResultsListProps {
    results: any[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [results]);

    return (
        <ul ref={listRef} className="divide-y divide-gray-200">
            {results.map((result, index) => (
                <li key={index} className="py-4 px-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src={result.album.images[0].url} alt="" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-900">{result.name}</div>
                            <div className="text-sm text-gray-500">{result.artists[0].name}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SearchResultsList;
