import React from "react";
import { SpotifyUser } from "../models/SpotifyApiModels";

interface ProfileCardProps {
    user: SpotifyUser | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    if (!user) {
        return null;
    }

    const {
        display_name,
        email,
        images,
        country,
        product,
        followers,
        id,
        birthdate,
        external_urls,
        uri,
        explicit_content,
        playlists,
        href: userHref,
    } = user;

    const profileImage = images[0]?.url;

    return (
        <div className="font-smallcaps w-[300px] mx-auto bg-white p-4 black rounded-xl shadow-xl font-bold text-sm border border-[#33333333]">
            <div className="flex flex-col items-center mb-4">
                {profileImage && (
                    <img
                        src={profileImage ?? "#"}
                        className="w-32 h-32 rounded-full mb-2"
                    />
                )}
                <h2 className="font-bold text-justify text-gray-800">{display_name}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <p className="font-semibold text-gray-500">Country:</p>
                    <p className="text-gray-800">{country}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-500">Subscription:</p>
                    <p className="text-gray-800">{product}</p>
                </div>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-gray-500">
                    Followers: {followers.total}
                </p>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-gray-500">ID: {id}</p>
                {birthdate && (
                    <p className="font-semibold text-gray-500">Birthdate: {birthdate}</p>
                )}
            </div>

            <div className="mt-2 text-center">
                <p className="font-semibold text-gray-500">Spotify URL:</p>
                <a
                    href={external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    {external_urls.spotify}
                </a>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-gray-500">URI: {uri}</p>
                <p className="font-semibold text-gray-500">User Href: {userHref}</p>
            </div>

            <div className="mt-2">
                <p className="font-semibold text-gray-500">Explicit Content:</p>
                <p className="text-gray-800">
                    {explicit_content.filter_enabled ? "Yes" : "No"}
                </p>
            </div>

            {playlists && (
                <div className="mt-2">
                    <p className="font-semibold text-gray-500">Playlists:</p>
                    <ul>
                        {playlists.items.map((playlist) => (
                            <li key={playlist.id} className="text-gray-800">
                                {playlist.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
