// En el componente HomeDiscoPage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from './../../assets/header.webp';
import SearchBar from '../../components/Search/SearchBar';
import discoServiceInstance from '../../services/disco.services';
import TypingEffect from '../../components/TyppingEffect/TypingEffect';

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
                <h1 className="mb-4">Top reservados</h1>
                <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                    {discos.map(disco => (
                        <Col key={disco._id}>
                            <Card>
                                <Card.Img variant="top" src={disco.image} />
                                <Card.Body>
                                    <Card.Title>{disco.name}</Card.Title>
                                    <Card.Text>
                                        {disco.description}
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
