import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navigation.css';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" className="custom-font">KLAB</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={'/registro'} className='nav-link'>REGISTRO*</Link>
                    <Link to={'/login'} className='nav-link'>LOGIN*</Link>

                </Nav>

                <Link to="/registro">
                    <Button variant="outline-light" className="me-2">
                        Sign In
                    </Button>
                </Link>
                <Link to="/iniciar-sesion">
                    <Button variant="outline-light" className="me-2">
                        Sign In
                    </Button>
                </Link>
                <Link to="#">
                    <Button variant="outline-danger">Cerrar Sesion</Button>
                </Link>
            </Container>
        </Navbar>
    );
}

export default Navigation;
