
import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/auth`
        })
    }

    signup(userData) {
        return this.api.post('/signup', userData)
    }

    login(userData) {
        console.log("esto-service------>>>>>>", { userData })
        return this.api.post('/login', userData)

    }

    verify(authToken) {
        console.log("este es el malditotoken desde el servicio de VERIFY", authToken)
        return this.api.get('/verify',
            { headers: { Authorization: `Bearer ${authToken}` } }
        )
    }

}

const authService = new AuthService()

export default authService