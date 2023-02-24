import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import "./CustomNavbar.css"

  const CustomNavbar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">La Hamburguesería</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Comida</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Contactanos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#widget"><CartWidget /></Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
  };

export default CustomNavbar;
