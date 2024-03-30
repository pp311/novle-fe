import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
        });
    }

    public async axiosCall<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            console.log('axiosCall', config);
            const data = await this.axiosInstance.request<T>(config);
            return data.data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new ApiService();
