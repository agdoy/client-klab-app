import axios from "axios";

class UserServiceProfile {

    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/user`
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            config.headers = { ...(storedToken && { Authorization: `Bearer ${storedToken}` }) };
            return config;
        });
    }

    getUserProfile() {
        return this.api.get('/getUserProfile');
    }

}

const pUserService = new UserServiceProfile();

export default pUserService;