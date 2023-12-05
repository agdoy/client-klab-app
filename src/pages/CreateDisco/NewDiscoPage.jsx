import { Container, Row, Col } from 'react-bootstrap'
import NewDiscoPageForm from '../../components/NewDiscoForm/NewDiscoPageForm'

const NewDiscoPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Nueva Disco</h1>

                    <hr />
                    <NewDiscoPageForm />
                    <new />

                </Col>
            </Row>

        </Container>
    )
}

export default NewDiscoPage