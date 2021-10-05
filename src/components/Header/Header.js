import React from 'react';
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" /><span className="span-text">Learn <span className="text-warning">Anything</span> From <span className="text-warning">Home</span></span>
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    {/* Navigation Links */}
                    <Nav className="me-auto custom-link">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Courses</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/becomeaninstructor">Become An Instructor</NavLink>
                        <NavLink to="/teachers">Teachers</NavLink>
                        <Button variant="info">Login</Button>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;