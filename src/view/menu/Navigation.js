import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import NewClientForm from './NewClientForm';
import {
    Link
  } from 'react-router-dom';

function Navigation(props){

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* Project-Assistant button */}
            
            <Link to="/home"><Navbar.Brand>Project-Assistant</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
                {/* Buttons */}
                <Nav className="mr-auto">
                    <Nav.Link href="#features"><NewClientForm title="Añadir cliente" /></Nav.Link>
                    <Nav.Link href="#pricing">Crear cotización</Nav.Link>
                    <NavDropdown title="Ver" id="collasible-nav-dropdown">
                        <Link to="/clientes"><NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item></Link>
                        <Link to="/desarrolladores"><NavDropdown.Item href="/desarrolladores">Desarrolladores</NavDropdown.Item></Link>
                        <NavDropdown.Divider />
                        <Link to="/cotizaciones"><NavDropdown.Item href="/cotizaciones">Cotizaciones</NavDropdown.Item></Link>
                    </NavDropdown>
                </Nav>

                {/* Profile info */}
                <Nav>
                    <NavDropdown title="Mi perfil" id="collasible-nav-dropdown" drop="left">
                        <NavDropdown.Item href="#action/3.1">Editar perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Configuración</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Salir</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;