import React from 'react';
import { Container, Col } from 'react-bootstrap';
import SignupForm from '../../components/SignupForm/SignupForm.jsx';
import backgroundImage from '../../assets/profile-register-background.webp';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    marginTop: '-80px',
    zIndex: '0',
};

const containerStyle = {
    paddingTop: '12rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const SignupPage = () => {
    return (
        <div style={backgroundStyle}>
            <Container style={containerStyle}>
                <h1 className="mb-5">Registro</h1> {/* Encabezado "Registro" con margen inferior más grande */}
                <SignupForm />
            </Container>
        </div>
    );
};

export default SignupPage;
