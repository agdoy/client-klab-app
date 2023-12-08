import React from 'react';
import { Container, Col } from 'react-bootstrap';
import NewDiscoPageForm from '../../components/NewDiscoForm/NewDiscoPageForm';
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
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const headingStyle = {
    marginBottom: '40px',
};


const NewDiscoPage = () => {
    return (
        <div style={backgroundStyle}>
            <Container style={containerStyle}>
                <Col>
                    <br />
                    <br />
                    <h1 style={headingStyle}>Nueva Disco</h1>
                    <NewDiscoPageForm />
                    <br />
                    <br />
                </Col>
            </Container>
        </div>
    );
};

export default NewDiscoPage;

