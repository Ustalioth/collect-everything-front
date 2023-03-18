import axios from "axios";

const instance = axios.create({
    baseURL : process.env.REACT_APP_API_ADDRESS,
    timeout: 5000,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
  
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;