import React, { useState, useEffect } from 'react';
import pUserService from '../../services/user.services';
import { Card } from 'react-bootstrap';

function UserProfileInfo() {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {

        pUserService
            .getUserProfile()
            .then(response => {
                setUserProfile(response.data);
            })
            .catch(error => {
                console.error('Error al obtener el perfil del usuario:', error);
            });
    }, []);

    return (
        <div>

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

export default UserProfileInfo; 