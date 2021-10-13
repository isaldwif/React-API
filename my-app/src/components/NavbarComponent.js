import React from "react";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Menu</strong></Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
