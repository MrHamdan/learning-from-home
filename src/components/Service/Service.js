import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Rating from 'react-rating';
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
                    </Card.Body>
                    <Card.Footer>
                        <small className="fs-5"><i className="fas fa-money-bill-alt"></i> Price: ${price}</small><span className="mx-2 fs-5"><i className="fas fa-users"></i> Rating:</span>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;