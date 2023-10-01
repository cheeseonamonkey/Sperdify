import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiResponse<T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
};

const useApi = <T>(config: AxiosRequestConfig): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await axios(config);
                setData(response.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [config]);

    return { data, error, loading };
};

export default useApi;
