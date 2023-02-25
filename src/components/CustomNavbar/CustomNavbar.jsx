import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { GiHamburger } from "react-icons/gi";
import "./CustomNavbar.css";
//TODO
/*
    Customizar navbar en casa breakpoint, para eso estaba pensando en buscar que clases representan los breakpoints
    y ver si al customizarlas desde css unicamente se afecta ese breakpoint y no toda la barra (xl, md, xs)
    */
const CustomNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="fixed-top res-xl res-lg res-md res-sm mynav"
    >
      <Container className="d-flex align-items-center">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand className="d-md-none">
          <Button variant="dark" href="#action/3.5">
            <GiHamburger style={{ fontSize: "2rem" }} className="text-center" />
          </Button>
        </Navbar.Brand>
        <Nav className="d-md-none">
          <Button variant="dark" href="#cart">
            <CartWidget />
          </Button>
        </Nav>

        <NavbarCollapse id="responsive-navbar-nav" className="navcol">
          <Nav fill className="navigator">
            <Button variant="dark" href="#home">
              Home
            </Button>
            <Button variant="dark" href="#action/3.1">
              Menu
            </Button>
            <Button
              variant="dark"
              href="#action/3.5"
              className="d-none d-md-block"
            >
              <GiHamburger
                style={{ fontSize: "2rem" }}
                className="text-center"
              />
            </Button>
            <Button variant="dark" href="#action/3.3">
              Contactanos
            </Button>
            <Button variant="dark" href="#cart" className="d-none d-md-block">
              <CartWidget />
            </Button>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
