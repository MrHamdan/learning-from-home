import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { key, name, title, img, price, rating, description } = props.service;
    return (
        <div className="course-container">
            <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size" variant="top" src={img} />
                    <Card.Body className="body-color">
                        <Card.Title>{title}</Card.Title>
                        <p>Teacher Name: {name}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <small className="fs-5"><i className="fas fa-users"></i> Rating: {rating}</small><span className="mx-2 fs-5"><br /><i className="fas fa-money-bill-alt"></i> Price: ${price}</span>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <Button variant="outline-info">Buy Now</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;