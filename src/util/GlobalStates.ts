import { useSessionStorage } from "./useSessionStorage";

export const useAuthCode = () => useSessionStorage<string>('authCode', '');

export const useIsLoggedIn = () => {
    const [authCode] = useAuthCode();
    if (authCode.length > 4)
        return true;
    else
        return false;
};



export const useCount = () => useSessionStorage('count', 0)

export const useSomeBoolean = () => useSessionStorage('someBoolean', false)

