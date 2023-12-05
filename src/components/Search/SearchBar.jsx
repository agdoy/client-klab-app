// SearchBar.jsx
import React, { useState } from 'react';
import { Form, Container, FormControl, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import discoServiceInstance from '../../services/disco.services';
import { Link } from 'react-router-dom';

function SearchBar({ className }) {
    const [searchText, setSearchText] = useState('');
    const [searchListDisco, setSearchListDisco] = useState([]);
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseOver = (itemId) => {
        setHoveredItemId(itemId);
    };

    const handleMouseOut = () => {
        setHoveredItemId(null);
    };

    const getResultQuery = (searchString) => {
        setSearchText(searchString);

        if (!searchString) {
            discoServiceInstance.getAllDisco().then(
                (res) => setSearchListDisco(res.data)
            );
        } else {
            discoServiceInstance.searchByName(searchString).then(
                (res) => setSearchListDisco(res.data)
            );
        }
    };

    return (
        <div className={`search-box ${className}`}>
            <Container className="position-relative text-center mt-4">
                <Form inline className="d-flex gap-2">
                    <FormControl
                        type="text"
                        placeholder="Buscar reservados"
                        className="mr-2 p-2 text-center"
                        value={searchText}
                        onChange={(e) => getResultQuery(e.target.value)}
                    />
                </Form>
                {searchText && (
                    <ListGroup className="w-50 mx-auto">
                        {searchListDisco.map((disco) => (
                            <ListGroup.Item
                                key={disco._id}
                                onMouseOver={() => handleMouseOver(disco._id)}
                                onMouseOut={handleMouseOut}
                                className={`d-flex justify-content-between align-items-center ${hoveredItemId === disco._id ? 'bg-primary text-white' : 'bg-white'
                                    }`}
                            >
                                <Link
                                    to={`/discoDetails/${disco._id}`}
                                    className={`nav-link w-100 ${hoveredItemId === disco._id ? 'text-white' : ''}`}
                                >
                                    {disco.name}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Container>
        </div>
    );
}

export default SearchBar;
