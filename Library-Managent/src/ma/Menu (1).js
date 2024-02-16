import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Menu() {
  return (
    <div>
    <Navbar bg="info" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>  
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Menu
