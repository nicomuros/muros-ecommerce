import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarDropdown = ({ categories, areCategoriesCharged }) => {

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="custom-dropdown-toggle"
      >
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item as={Link} to="menu">
          Menu completo
        </Dropdown.Item>
        <Dropdown.Divider />
        {areCategoriesCharged ? (
          categories.map((currentCategory) => (
            <Dropdown.Item
              as={Link}
              to={`menu/${currentCategory.category}`}
              key={currentCategory.id}
              style={{ textTransform: "capitalize" }}
            >
              {currentCategory.category}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>Loading...</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarDropdown;

/*
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
*/
