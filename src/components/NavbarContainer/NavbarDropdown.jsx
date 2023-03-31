import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarDropdown = ({ categories, areCategoriesCharged, dropdownStylesForMobile }) => {

  return (
    <Dropdown className={dropdownStylesForMobile.width}>
      <Dropdown.Toggle
        variant="dark"
        id="dropdown-basic"
        className="custom-dropdown-toggle "
      >
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item as={Link} to="categories" className={dropdownStylesForMobile.textCenter}>
          Menu completo
        </Dropdown.Item>
        <Dropdown.Divider />
        {areCategoriesCharged ? (
          categories.map((currentCategory) => (
            <Dropdown.Item
              as={Link}
              to={`categories/${currentCategory.id}/${currentCategory.category}`}
              key={currentCategory.id}
              style={{ textTransform: "capitalize" }}
              className={dropdownStylesForMobile.textCenter}
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