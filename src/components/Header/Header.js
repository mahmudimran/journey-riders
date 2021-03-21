
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import  {Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/home">Journey Riders</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navigation">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/login" >Destination</Link></li>
                            <li><Link >Blog</Link></li>
                            <li><Link >Contact</Link></li>
                            <li><Link to="/login" className="btn-login">Login</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>



        </div>
    );
};

export default Header;
