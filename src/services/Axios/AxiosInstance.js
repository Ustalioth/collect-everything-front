import axios from "axios";
import storage from 'redux-persist/lib/storage';

const instance = axios.create({
    baseURL : process.env.REACT_APP_API_ADDRESS,
    timeout: 5000,
});

instance.interceptors.request.use(
    (config) => {
        let token = JSON.parse(window.localStorage.getItem('persist:root')).token.replace(/(^"|"$)/g, '') || "";
        if ((token !== 'null') && (token !== "")) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
  
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;