import axios from "axios";

const instance = axios.create({
    baseURL : process.env.REACT_APP_API_ADDRESS,
    headers: {
    //  Authorization: `<Your Auth Token>`,
    //     Content-Type: "application/json",
        timeout : 1000,
    },
});

export default instance;