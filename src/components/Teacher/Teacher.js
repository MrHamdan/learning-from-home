import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Teacher.css';

const Teacher = (props) => {
    const { name, img, subject, description } = props.teacher;
    return (
        // Our Teacher Details
        <div className="course-container">
            <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size" variant="top" src={img} />
                    <Card.Body className="body-color">
                        <h4 className="text-center">{name}</h4>
                        <p className="text-center">{subject}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Teacher;