import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthCode, useIsLoggedIn } from '../util/GlobalStates';

export default function AuthPage() {
    const [authCode, setAuthCode] = useAuthCode();
    const isLoggedIn = useIsLoggedIn();
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.substr(1));
        const token = urlParams.get('access_token');



        console.log("token: " + token)

        if (token) {
            (async () => {
                console.log("setting token: " + token)

                await setAuthCode(token);
                console.log("setting token: " + token)

                // window.history.replaceState({}, document.title, window.location.pathname);

                navigate('/profile')

            })()
        } else {

            if (isLoggedIn) {
                navigate('/profile');
            } else {
                navigate('/login');
            }
        }
    }, []);

    return null;
}
