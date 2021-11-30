import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import {  NavHashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <Navbar bg="dark" sticky="top" variant="dark" expand="md">


            <Container className="">
                <Link to="/home" className="fw-bolder fs-2 me-5 text-decoration-none text-white d-flex"><i className="fas fa-code"></i></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-6">
                        <NavLink as={Link} to="/home"  activeStyle={{ color: '#115CCB', textDecoration: "none" }} className="text-decoration-none header-link me-3">Home</NavLink>
                        {/* <NavLink as={Link} to="#about" className="text-decoration-none header-link me-3">About me</NavLink>
                        <NavLink as={Link} to="#projects" className="text-decoration-none header-link me-3">Projects</NavLink>
                        <NavLink as={Link} to="/home" className="text-decoration-none header-link me-3">Contact Me</NavLink> */}
                        <NavHashLink
                            to="/home#about"
                            className="text-decoration-none header-link me-3"
                            activeStyle={{ color: '#115CCB', textDecoration: "none" }}
                        >About me</NavHashLink>
                        <NavHashLink
                            to="/home#projects"
                            className="text-decoration-none header-link me-3"
                            activeStyle={{ color: '#115CCB', textDecoration: "none" }}
                        >Projects</NavHashLink>
                        <NavHashLink
                            to="/home#contact"
                            className="text-decoration-none header-link me-3"
                            activeStyle={{ color: '#115CCB', textDecoration: "none" }}
                        >Contact Me</NavHashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {/* <Container className="text-white">
                <Navbar.Brand href="#home"><i className="fas fa-code"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home" className="text-decoration-none text-white">Home</Link>
                        <NavLink as={Link} to="/home" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Home</NavLink>
                        <Nav.Link href="#about">About me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> */}
        </Navbar>
    );
};

export default Header;