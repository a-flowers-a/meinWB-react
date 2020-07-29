import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function MWNavBar(){
    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="index">Mein Wörterbuch</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link href="#">Worte Liste</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Willkomen: nombreUsuario" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" >Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MWNavBar;
