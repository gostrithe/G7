import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: 'http://localhost:7777',
    timeout: 3000
});

apiInstance.interceptors.request.use(
    (config) => { 
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiInstance.interceptors.response.use(
    (response) => { 
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance;