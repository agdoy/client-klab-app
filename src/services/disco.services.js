import axios from "axios"

class DiscoService {

    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/disco`
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