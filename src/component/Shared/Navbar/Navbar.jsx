import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import PopOver from '../PopOver/PopOver';
import { useAppContext } from '../../../context';
import logo from "../../../../src/Assets/logo mejorado.png" 

const NavBar = () => {
    const { state: { user } } = useAppContext()
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20) 
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth'});
    return (
        <Navbar className={`${isSticky ? "navStyle" : "navDefault"} navbar navbar-expand-lg navbar-light`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navBrn" onClick={scrollTop}>
                    <img src={logo} alt="logo" className="brnIcon"/> Valle del <span className="navHighlight">Volcan</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/home">

                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#services" className="nav-link">Shop</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#testimonial" className="nav-link">About Us</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;