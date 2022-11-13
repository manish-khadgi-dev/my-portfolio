import React from "react";
import Logo from "../assets/manish-img-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNav = () => {
  return (
    <Navbar expand="md" className="topNav" id="navbar" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="80px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#contactme">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
