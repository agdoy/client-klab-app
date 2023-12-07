import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from './../../assets/header.webp';
import SearchBar from '../../components/Search/SearchBar';
import discoServiceInstance from '../../services/disco.services';
import TypingEffect from '../../components/TyppingEffect/TypingEffect';
import { Link } from 'react-router-dom';

function HomeDiscoPage() {
    const [discos, setDiscos] = useState([]);

    useEffect(() => {
        discoServiceInstance.getAllDisco()
            .then(({ data }) => setDiscos(data))
            .catch(err => console.error(err));
    }, []);

    const searchBarStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1',
    };

    return (
        <Container fluid className="p-0 position-relative">
            <div className="home-container home-container-no-margin position-relative">
                <img
                    src={MyImage}
                    alt="Imagen"
                    className="img-fluid w-100"
                />
                <div style={searchBarStyle}>
                    <TypingEffect />
                    <SearchBar setDiscos={setDiscos} className="expanded-search-bar" />

                </div>
            </div>
            <Container>
                <h1 className="mb-4">Reservados en Madrid</h1>
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                    {discos.map((disco) => {
                        if (disco.place === 'Madrid') {
                            return (
                                <Col key={disco._id}>
                                    <Card className="text-decoration-none">
                                        <Link to={`/discos/${disco._id}`}>
                                            <Card.Img variant="top" src={disco.image} />
                                        </Link>
                                        <Card.Body>
                                            <Link to={`/discoDetails/${disco._id}`}>
                                                <Card.Title>{disco.name}</Card.Title>
                                            </Link>
                                            <Card.Text>{disco.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        }
                        return null;
                    })}
                </Row>
            </Container>
            <Container>
                <h1 className="mb-4">Reservados en Barcelona</h1>
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                    {discos
                        .filter(disco => disco.place === 'Barcelona')
                        .map(filteredDisco => (
                            <Col key={filteredDisco._id}>
                                <Card>
                                    <Card.Img variant="top" src={filteredDisco.image} />
                                    <Card.Body>
                                        <Card.Title>{filteredDisco.name}</Card.Title>
                                        <Card.Text>
                                            {filteredDisco.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
            <Container>
                <h1 className="mb-4">Reservados en Estepona</h1>
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                    {discos
                        .filter(disco => disco.place === 'Estepona')
                        .map(filteredDisco => (
                            <Col key={filteredDisco._id}>
                                <Card>
                                    <Card.Img variant="top" src={filteredDisco.image} />
                                    <Card.Body>
                                        <Card.Title>{filteredDisco.name}</Card.Title>
                                        <Card.Text>
                                            {filteredDisco.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </Container>
    );
}

export default HomeDiscoPage;
