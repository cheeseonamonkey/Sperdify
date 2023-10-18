import axios from 'axios';

const useGetClientCredentials = async () => {
    const clientId = '8e2f230cbe524ed78ca17438a8cb11e8';
    const clientSecret = 'c2997612b6174e41bfecd4585d9f5e18';
    const token = btoa(`${clientId}:${clientSecret}`);

    const response = await axios('https://accounts.spotify.com/api/token', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${token}`
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
    });

    return response.data.access_token;
};

export default useGetClientCredentials;
