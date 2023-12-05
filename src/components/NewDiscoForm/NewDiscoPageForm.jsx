import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import discoService from '../../services/disco.services';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import uploadServices from '../../services/upload.services';

function NewDiscoPageForm() {
    const [discoData, setDiscoData] = useState({
        name: '',
        email: '',
        description: '',
        image: null,
    });
    console.log(discoData)
    const navigate = useNavigate();

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setDiscoData({ ...discoData, [name]: value });
    };

    const handleImageChange = (e) => {
        const formData = new FormData();
        formData.append('imageData', e.target.files[0]);

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => setDiscoData({
                ...discoData, image: data.cloudinary_url
            }))
            .catch(err => console.log(err))
    };

    const handleDiscoSubmit = (e) => {

        e.preventDefault();

        discoService
            .saveNewDisco(discoData)
            .then(response => console.log("lugar creado con exito!", response.data))
            .catch(err => console.log(err))

    };

    return (
        <Form onSubmit={handleDiscoSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del negocio</Form.Label>
                <Form.Control type="text" value={discoData.name} name="name" onChange={handleInputChange} placeholder="Introduce el nombre de tu negocio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" value={discoData.email} name="email" onChange={handleInputChange} placeholder="Introduce tu correo electronico" />
                <Form.Text className="text-muted">
                    Recuerda que la gente contactará contigo a través de este medio
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion del negocio</Form.Label>
                <Form.Control as="textarea" value={discoData.description} name="description" onChange={handleInputChange} placeholder="Añade una breve descripcion de tu negocio" rows={3} />
            </Form.Group>

            <Form.Group controlId="image">
                <Form.Label>Subir Imagen</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                />
                <Form.Text className="text-muted">Seleccione una imagen para subir.</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default NewDiscoPageForm;
