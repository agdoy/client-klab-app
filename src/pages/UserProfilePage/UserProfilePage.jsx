import React, { useState, useEffect } from 'react';
import pUserService from '../../services/user.services';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function UserProfilePage() {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        loadProfile()
    }, []);


    const loadProfile = () => {
        pUserService
            .getUserProfile()
            .then(({ data }) => {
                console.log(data)
                setUserProfile(data);
            })
            .catch(error => {
                console.error('Error al obtener el perfil del usuario:', error);
            });
    }

    return (
        <div>
            <h1>Página de Perfil de Usuario</h1>
            <div className="d-flex justify-content-end mr-2">
                <Dropdown>
                    <Dropdown.Toggle variant="success" className="me-2 btn-grad" id="dropdown-basic">
                        ♡ Mis favoritos
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to="/crearDisco">
                    <Button variant="outline-light" className="me-2 btn-grad">
                        Crear Negocio
                    </Button>
                </Link>

            </div>
            {userProfile ? (

                <Card>
                    <Card.Body>
                        <Card.Title>{`${userProfile.firstName} ${userProfile.lastName}`}</Card.Title>
                        <Card.Text>
                            <strong>Email:</strong> {userProfile.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Cargando perfil...</p>
            )}
        </div>
    );
}

export default UserProfilePage;
