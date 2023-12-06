import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { AuthContext } from '../../contexts/auth.context';

function Navigation() {
    const { loggedUser, logout } = useContext(AuthContext);

    return (
        <Navbar bg="transparent" variant="dark" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" className="custom-font">KLAB</Navbar.Brand>


                <Navbar.Collapse className="justify-content-end p-4">
                    {loggedUser && (
                        <>
                            <Navbar.Text>Bienvenido <Link to="/perfil">{`${loggedUser.firstName}`}</Link></Navbar.Text>
                        </>
                    )}
                </Navbar.Collapse>

                {loggedUser ? (
                    <>
                        <Button variant="outline-danger" onClick={logout}>
                            Cerrar Sesión
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <Button variant="outline-light" className="me-2 btn-grad">
                                Login
                            </Button>
                        </Link>

                        <Link to="/registro">
                            <Button variant="outline-light" className="me-2 btn-grad">
                                Registro
                            </Button>
                        </Link>

                    </>
                )}
            </Container>
        </Navbar>
    );
}

export default Navigation;
