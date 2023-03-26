import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { GiHamburger } from "react-icons/gi";
import "./CustomNavbar.css";
import { Link } from "react-router-dom";
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
      className="res-xl res-lg res-md res-sm mynav"
    >
      <Container className="d-flex align-items-center">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand className="d-md-none">
          <Link to="/">
            <Button variant="dark">
              <GiHamburger
                style={{ fontSize: "2rem" }}
                className="text-center"
              />
            </Button>
          </Link>
        </Navbar.Brand>
        <Nav className="d-md-none">
          <Link to="/cart">
            <Button variant="dark">
              <CartWidget />
            </Button>
          </Link>
        </Nav>

        <NavbarCollapse id="responsive-navbar-nav" className="navcol">
          <Nav fill className="navigator">
            <Link to="/">
              <Button variant="dark" className="d-none d-md-block">
                <GiHamburger
                  style={{ fontSize: "2rem" }}
                  className="text-center"
                />
              </Button>
            </Link>
            <Link to="menu">
              <Button variant="dark">Menu completo</Button>
            </Link>
            <Link to="menu/carne">
              <Button variant="dark">Carne</Button>
            </Link>
            <Link to="menu/veggie">
              <Button variant="dark">Veggie</Button>
            </Link>
            <Link to="menu/fritas">
              <Button variant="dark">Papas</Button>
            </Link>
            <Link to="contactanos">
              <Button variant="dark">Contacto</Button>
            </Link>
            <Link to="cart">
              <Button variant="dark" className="d-none d-md-block">
                <CartWidget />
              </Button>
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
