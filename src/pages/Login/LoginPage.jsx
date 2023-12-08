import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import backgroundImage from '../../assets/profile-register-background.webp';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    marginTop: '-80px', // Establece un margen superior negativo para que la imagen comience desde la parte superior
    zIndex: '0', // Asegura que la imagen esté detrás de otros elementos, como la barra de navegación
};

const LoginPage = () => {
    return (
        <div style={backgroundStyle}>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
                    <Col md={6}>
                        <h1>Acceso</h1>
                        <hr />
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;