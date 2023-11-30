import './../Signup/SignupPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm.jsx'
const SignupPage = () => {

    return (

        <Container className="d-flex align-items-center justify-content-center">

            <Row>

                <Col>

                    <h1>Registro</h1>
                    <hr />

                    <SignupForm />

                </Col>
            </Row>

        </Container>
    )
}



export default SignupPage


