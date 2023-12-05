import { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from 'react-router-dom'


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })

    }
    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/')) // *cambia redirect
            .catch(err => console.log(err))
    }
    return (
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-1" controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastName" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>

        </Form>
    )

}
export default SignupForm