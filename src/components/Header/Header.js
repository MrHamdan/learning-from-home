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
                        <NavLink to="/home"><button type="button" className="btn btn-outline-info">Home</button></NavLink>
                        <NavLink to="/courses"><button type="button" className="btn btn-outline-info">Courses</button></NavLink>
                        <NavLink to="/about"><button type="button" className="btn btn-outline-info">About</button></NavLink>
                        <NavLink to="/becomeaninstructor"><button type="button" className="btn btn-outline-info">Become An Instructor</button></NavLink>
                        <NavLink to="/teachers"><button type="button" className="btn btn-outline-info">Teachers</button></NavLink>
                        <button type="button" className="btn btn-outline-info">Login</button>
                        <button type="button" className="btn btn-outline-warning">Sign Up</button>
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