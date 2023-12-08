import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Container, Modal, Card, ButtonGroup, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPackForm from "../../components/NewPackForm/NewPackForm"
import EditPackForm from "../../components/EditPackForm/EditPackForm"
import discoServiceInstance from "../../services/disco.services"
import packServiceInstance from "../../services/pack.services"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faInfoCircle, faCocktail, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

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
        packServiceInstance
            .deletePack(packId._id)
            .then(() => {
                loadDiscoDetails()
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container className="mt-5">
            {discoDetails ? (
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <Image
                            src={discoDetails.disco.image}
                            roundedCircle
                            className="mb-3"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                        <h2>{discoDetails.disco.name}</h2>
                        <p>Email: {discoDetails.disco.email}</p>
                        <p>Dirección: {discoDetails.disco.address}</p>

                        <Button variant="outline-light" className="me-2 btn-grad" onClick={handleShow}>
                            Crear Pack
                        </Button>

                        <h1>Packs</h1>
                        <Row>
                            {discoDetails.packs.map((elm) => (
                                <Col md={4} key={elm.id} className="mb-4">
                                    <Card style={{ height: '100%' }}>
                                        <Card.Img
                                            variant="top"
                                            src={elm.image}
                                            alt={elm.name}
                                            style={{ height: '200px', objectFit: 'contain' }}
                                        />
                                        <Card.Body style={{ minHeight: '200px' }}>
                                            <div className="border border-dark rounded p-3"> {/* Aplicamos las clases de Bootstrap para el borde y el borde redondeado a esta sección */}
                                                <div>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                </div>
                                                <hr />
                                                <div>
                                                    <h4>{elm.name}</h4>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faCocktail} /> {elm.description}
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faUser} /> {elm.capacity} personas
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faMoneyBill} /> {elm.price}€
                                                </div>
                                            </div>
                                            <br />
                                            <Button variant="success">
                                                <FontAwesomeIcon icon={faShoppingCart} /> Comprar Pack
                                            </Button>
                                            <Row className="mt-2">
                                                <br />

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
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Editar Pack</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {editMode ? (
                                    <EditPackForm pack={selectedPackId} />
                                ) : (
                                    <NewPackForm discId={discoDetails.disco._id} closeModalCreate={setShow} />
                                )}
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            ) : <p>CARGANDO DATOS...</p>}
        </Container>
    )
}

export default DiscoDetailsPage;
