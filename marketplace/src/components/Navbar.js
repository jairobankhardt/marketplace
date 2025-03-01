import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const CustomNavbar = ({ onFilterChange }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onFilterChange("")}>Todos</Nav.Link>
            <NavDropdown title="Categorias" id="nav-dropdown">
              <NavDropdown.Item onClick={() => onFilterChange("Camiseta")}>
                Camiseta
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onFilterChange("Regata")}>
                Regata
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onFilterChange("Calção")}>
                Calção
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onFilterChange("Acessório")}>
                Acessório
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
