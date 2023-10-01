import { useEffect, useState } from "react";

const useSessionStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const savedValue = sessionStorage.getItem(key);
        if (savedValue !== null) {
            switch (typeof initialValue) {
                case 'number':
                    return parseFloat(savedValue) as unknown as T;
                case 'boolean':
                    return (savedValue === 'true') as unknown as T;
                default:
                    return savedValue as unknown as T;
            }
        }
        return initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, String(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
};

export const useCount = () => useSessionStorage<number>('count', 0);
export const useAuthCode = () => useSessionStorage<string>('authCode', '');
export const useSomeBoolean = () => useSessionStorage<boolean>('someBoolean', false);

export const useIsLoggedIn = () => {
    const [authCode] = useAuthCode();
    if (authCode.length > 4)
        return true;
    else
        return false;
};
