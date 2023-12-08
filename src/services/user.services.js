import axios from "axios";

class UserServiceProfile {

    constructor() {
        this.api = axios.create({
            baseURL: `https://klab.fly.dev/api/user`
        });

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUserProfile() {
        return this.api.get('/perfil');
    }

}

const pUserService = new UserServiceProfile();

export default pUserService;