import axios from "axios"

class DiscoService {

    constructor() {
        this.api = axios.create({
            baseURL: `https://klab.fly.dev/api/disco`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllDisco() {
        return this.api.get('/getAllDisco')
    }

    getDiscoDetails(disco_id) {
        return this.api.get(`/getOneDisco/${disco_id}`)
    }

    saveNewDisco(discoData) {
        return this.api.post(`/saveDisco`, discoData)
    }

    searchByName(nameString) {
        return this.api.get(`/search/${nameString}`);
    }


}

const discoServiceInstance = new DiscoService()

export default discoServiceInstance;