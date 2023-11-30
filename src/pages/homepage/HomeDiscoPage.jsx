import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from './../../assets/header.webp';


function HomeDiscoPage() {
    return (
        <Container fluid className="p-0">
            <div className="position-relative home-container">
                <img
                    src={MyImage}
                    alt="Imagen"
                    className="img-fluid w-100"
                />
                <div className="search-box">
                    <Container className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center">
                        <Form inline className="d-flex w-50 gap-2">
                            <FormControl type="text" placeholder="Buscar reservados" className="mr-2 p-2 text-center" />
                            <Button variant="outline-light text-center" size="sm" className="px-3 py-2">Buscar</Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </Container>
    );
}

export default HomeDiscoPage;