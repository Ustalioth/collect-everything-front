import instance from "services/Axios/AxiosInstance";
import { API_BASE_URI } from "./config";

const serviceApi = {
    getStoreByName: (name) => instance.get(`${API_BASE_URI}/store/name/${encodeURIComponent(name)}`),
    getStoreCategories: (storeId) => instance.get(`${API_BASE_URI}/product/categories/${storeId}`),
    getStoreProducts: (storeId) => instance.get(`${API_BASE_URI}/product/product/all/${storeId}`),
    getStoreCustomizations: (storeId) => instance.get(`${API_BASE_URI}/customisation/all/${storeId}`),

    registerCustomer: (customer) => instance.put(`${API_BASE_URI}/authentication/save`, customer),
    updateCustomer: (customer) => instance.post(`${API_BASE_URI}/authentication/save`, customer),
    loginUser: (email, password) => instance.post(`${API_BASE_URI}/authentication/login`, {email, password}),
    getUserByEmail: (email) => instance.get(`${API_BASE_URI}/customer/email/${email}`),
}

export default serviceApi;