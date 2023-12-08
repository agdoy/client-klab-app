import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PackService from '../../services/pack.services';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import uploadServices from '../../services/upload.services';

function NewPackForm({ discId, closeModalCreate }) {
    const [packsData, setpacksData] = useState({
        name: '',
        description: '',
        capacity: '',
        price: '',
        image: null,

    });
    console.log(discId)
    const navigate = useNavigate();

    const handleInputChange = ({ target }) => {
        const { value, name } = target;
        setpacksData(prevData => ({ ...prevData, [name]: value, disco: discId }));

    };

    const handleImageChange = (e) => {
        const formData = new FormData();
        formData.append('imageData', e.target.files[0]);

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => setpacksData({
                ...packsData, image: data.cloudinary_url
            }))
            .catch(err => console.log(err))
    };

    const handlePacksSubmit = (e) => {
        e.preventDefault();

        const updatedPacksData = { ...packsData, disco: discId };

        PackService
            .saveNewPack(updatedPacksData)
            .then(response => {
                window.location.reload()
                console.log("TEST: PACK CREADO", response.data);
            })
            .catch(err => console.log(err))

    };

    return (
        <Form onSubmit={handlePacksSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del pack</Form.Label>
                <Form.Control type="text" value={packsData.name} name="name" onChange={handleInputChange} placeholder="Introduce el nombre del pack" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" value={packsData.description} name="description" onChange={handleInputChange} placeholder="Añade una breve descripcion de tu negocio" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="capacity">
                <Form.Label>Capacidad</Form.Label>
                <Form.Control as="textarea" value={packsData.capacity} name="capacity" onChange={handleInputChange} placeholder="¿Para cuantos es valido esta oferta?" rows={3} />
                <Form.Text className="text-muted">
                    Informa para cuantas personas va dirigida la oferta
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" value={packsData.price} name="price" onChange={handleInputChange} placeholder="Añade el precio" rows={3} />
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

export default NewPackForm;