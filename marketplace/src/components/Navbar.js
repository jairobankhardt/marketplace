import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const CustomNavbar = ({ productTypes, onFilterChange }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="nav-dropdown">
              <NavDropdown.Item onClick={() => onFilterChange("")}>
                Todas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {productTypes.map((type, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => onFilterChange(type)}
                >
                  {type}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
