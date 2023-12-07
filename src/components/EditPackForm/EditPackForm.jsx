import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PackService from '../../services/pack.services';
import uploadServices from '../../services/upload.services';

function EditPackForm({ pack }) {

    console.log("---------------LLEGOOOOO ID", pack)

    const [editedPack, setEditedPack] = useState({
        name: pack.name,
        description: "",
        image: "",
        capacity: 0,
        price: 0,
    })



    const handleInputChange = e => {
        const { value, name } = e.currentTarget;
        setEditedPack({ ...editedPack, [name]: value });
    };

    const handleEditImageChange = (e) => {
        const formData = new FormData();
        formData.append('imageData', e.target.files[0]);

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => setEditedPack({
                ...editedPack, image: data.cloudinary_url
            }))
            .catch(err => console.log(err))
    };


    const handleEditSave = (e) => {
        e.preventDefault();

        PackService
            .updatePack(pack._id, editedPack)
            .then((response) => {
                console.log("TEST- Pack actualizado:", response.data);
            })
            .catch((error) => {
                console.error("TEST- Pack NO actualizado:", error);
            });
    };

    return (
        <Form onSubmit={handleEditSave}>
            <Form.Group controlId="name">
                <Form.Label>Nombre del pack</Form.Label>
                <Form.Control type="text" value={editedPack.name} name="name" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" value={editedPack.description} name="description" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="capacity">
                <Form.Label>Capacidad</Form.Label>
                <Form.Control type="number" value={editedPack.capacity} name="capacity" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" value={editedPack.price} name="price" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="image">
                <Form.Label>Subir Imagen</Form.Label>
                <Form.Control
                    type="file"
                    name="image"
                    onChange={handleEditImageChange}
                    accept="image/*"
                />
                <Form.Text className="text-muted">Seleccione una imagen para subir.</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Guardar Cambios
            </Button>
            {/* onClick=handleClose */}
            <Button variant="secondary" >
                Cancelar
            </Button>
        </Form >
    );
}


export default EditPackForm;
