import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import authService from "../../services/auth.services";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        authService
            .signup(signupData)
            .then(() => navigate('/'))
            .catch((err) => console.log(err));
    };

    const formStyle = {
        width: '50%', // Ajusta el ancho del formulario según tus necesidades
        margin: '0 auto', // Centra el formulario horizontalmente
    };

    const inputStyle = {
        width: '100%', // Ajusta el ancho de los campos de entrada al 100%
    };

    return (
        <Form onSubmit={handleFormSubmit} style={formStyle}>
            <Form.Group controlId="firstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={signupData.firstName} onChange={handleInputChange} name="firstName" style={inputStyle} />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" value={signupData.lastName} onChange={handleInputChange} name="lastName" style={inputStyle} />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={signupData.email} onChange={handleInputChange} name="email" style={inputStyle} />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" style={inputStyle} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Registrarme</Button>
            </div>
        </Form>
    );
};

export default SignupForm;
