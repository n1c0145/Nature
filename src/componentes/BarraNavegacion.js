import React from 'react';
import { Link } from "react-router-dom";
import '../estilos/navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";

function BarraNavegacion() {
    return (
        <Navbar expand="lg" className='nav'>
            <Navbar.Brand className='nav-brand'>
                <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link><Link to="/" className='text'>Inicio</Link></Nav.Link>
                    <Nav.Link><Link to="/servicios" className='text'>Servicios</Link></Nav.Link>
                    <Nav.Link><Link to="/testimonios" className='text'>Testimonios</Link></Nav.Link>
                    <Nav.Link><Link to="/galeria" className='text'>Galeria</Link></Nav.Link>
                    <Nav.Link><Link to="/contactos" className='text'>Contactos</Link></Nav.Link>
                    <Nav.Link><Link to="/datos" className='me-5 text'>Datos</Link></Nav.Link>
                </Nav>
                <button className='nav-button'>Free Register</button>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default BarraNavegacion;