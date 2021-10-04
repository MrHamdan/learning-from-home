import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" />
            <h1>404 Page Not Found</h1>
            <NavLink to="/home"><Button className="shadow-lg" variant="outline-info">Return to Home</Button></NavLink>
        </div>
    );
};

export default NotFound;