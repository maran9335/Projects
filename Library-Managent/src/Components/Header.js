import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
            <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="form">Form</Nav.Link>
            <Nav.Link href="view">View</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
