import axios from "axios";

class PackService {
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5005/api/packs",
        });


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    saveNewPack(packData) {
        return this.api.post("/savePacks", packData)
    }

    updatePack(packId, packData) {

        return this.api.put(`/editPack/${packId}`, packData)
    }

    deletePack(packId,) {
        console.log('..............--------------------------delete', packId)
        return this.api.delete(`/delete/${packId}`)
    }
}

const packServiceInstance = new PackService()

export default packServiceInstance;