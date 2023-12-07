import React, { useEffect, useState } from "react"
import discoServiceInstance from "../../services/disco.services"
import { Button, Container, Modal, Card, ButtonGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPackForm from "../../components/NewPackForm/NewPackForm"
import { useParams } from "react-router-dom"
import EditPackForm from "../../components/EditPackForm/EditPackForm"
import packServiceInstance from "../../services/pack.services"

function DiscoDetailsPage() {
    const { disco_id } = useParams()
    const [discoDetails, setDiscoDetails] = useState(null)

    const [show, setShow] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [selectedPackId, setSelectedPackId] = useState(null);

    useEffect(() => {
        loadDiscoDetails()
    }, [])

    const loadDiscoDetails = () => {
        discoServiceInstance
            .getDiscoDetails(disco_id)
            .then(({ data }) => {
                setDiscoDetails(data)
            })
            .catch((err) => console.log(err))
    }

    const handleClose = () => {
        setShow(false)
        setEditMode(false)
    }


    const handleShow = () => setShow(true)

    const handleEditShow = ({ elm }) => {
        setSelectedPackId(elm)
        setShow(true)
        setEditMode(true)

    }

    const deletetPack = (packId) => {
        console.log(packId)

        packServiceInstance
            .deletePack(packId._id)
            .then(() => {
                // setDiscoDetails(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {
                discoDetails
                    ? (
                        <div>
                            <h1>{discoDetails.disco.name}</h1>
                            <p>Email: {discoDetails.disco.email}</p>
                            <p>Description: {discoDetails.disco.description}</p>
                            <p>owner: {discoDetails?.disco?.owner?.firstName}</p>

                            <Button variant="outline-light" className="me-2 btn-grad" onClick={handleShow}>
                                CrearPack
                            </Button>
                            <h1>Packs</h1>

                            {discoDetails.packs.map((elm) => (
                                <div key={elm.id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={elm.image} alt={elm.name} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Card.Text>{elm.description}</Card.Text>
                                            <Button variant="primary">Detalles</Button>
                                            <Row className="mt-2">
                                                <Col>
                                                    <ButtonGroup>
                                                        <Button variant="outline-warning" onClick={() => handleEditShow({ elm })}>
                                                            Editar
                                                        </Button>
                                                        <Button variant="outline-danger" onClick={() => deletetPack({ ...elm })}>
                                                            Borrar
                                                        </Button>
                                                    </ButtonGroup>
                                                </Col>

                                                <Col>

                                                </Col>


                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>ID del Paquete: </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {editMode ? (
                                        <EditPackForm pack={selectedPackId} />
                                    ) : (
                                        <NewPackForm discId={discoDetails.disco._id} closeModalCreate={setShow} />
                                    )}
                                </Modal.Body>
                            </Modal>

                            {/* //onHide={handleClose} */}
                            {/* <Modal show={show} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {editMode ? (
                                        <EditPackForm editedPack={editedPack} setEditedPack={setEditedPack} />
                                    ) : (
                                        <NewPackForm discId={discoDetails.disco._id} closeModalCreate={setShow} />
                                    )}
                                </Modal.Body>
                            </Modal> */}
                        </div>
                    )
                    : <p>CARGANDO DATOS...</p>
            }
        </div>
    )
}

export default DiscoDetailsPage

// haz que en el modal  salga el id en el titutlo