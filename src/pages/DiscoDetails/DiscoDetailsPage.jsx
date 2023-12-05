import { useEffect, useState } from "react"
import discoServiceInstance from "../../services/disco.services"
import { useParams } from "react-router-dom"
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function DiscoDetailsPage() {
    const { disco_id } = useParams();
    const [discoDetails, setDiscoDetails] = useState(null);

    useEffect(() => {
        discoServiceInstance
            .getDiscoDetails(disco_id)
            .then(({ data }) => { setDiscoDetails(data); })
            .catch((err) => console.log(err));
    }, [disco_id]);

    return (
        <div>
            {
                discoDetails
                    ?

                    <div>
                        <h1>{discoDetails.name}</h1>
                        <p>Email: {discoDetails.email}</p>
                        <p>Description: {discoDetails.description}</p>

                    </div>
                    :

                    <p>CARGANDO DATOS...</p>
            }
        </div>
    )
}



export default DiscoDetailsPage;
