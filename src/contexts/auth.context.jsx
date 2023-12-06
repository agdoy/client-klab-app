import { createContext, useEffect, useState } from "react";
import authService from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()


function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsloding] = useState(true)
    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')
        console.log("ESTE ES EL MALDITO TOKEN", token)
        authService
            .verify(token)
            .then(({ data }) => {
                setLoggedUser(data.loggedUser)
                setIsloding(false)
            })
            .catch(err => console.log(err))
    }

    const logout = () => {

        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsloding(false)

    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, setIsloding }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }