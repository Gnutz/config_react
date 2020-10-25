import React from 'react';
import  {Link}  from 'react-router-dom';
import  {Nav, Navbar}  from 'react-bootstrap';


export const NavigationBar = () => (

<Navbar expand="lg">
    <Navbar.Brand href="/">Conamore VR</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Item>
        <Nav.Link>
            <Link to="/">Home</Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <Link to="/configuration">Configurations</Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <Link to="/contact">Create new</Link>
        </Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar.Collapse>
</Navbar>
)