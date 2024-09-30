// components/Navbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

function NavigationBar({ onThemeToggle, isDarkTheme }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchQuery}`);
  };

  return (
    <Navbar bg={isDarkTheme ? "dark" : "light"} variant={isDarkTheme ? "dark" : "light"} expand="lg">
      <Container>
        <Navbar.Brand href="/dashboard">Product Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/accounts">Accounts</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant={isDarkTheme ? "outline-light" : "outline-dark"} type="submit">Search</Button>
          </Form>
          <Button
            variant={isDarkTheme ? "outline-light" : "outline-dark"}
            onClick={onThemeToggle}
            className="ms-2"
          >
            {isDarkTheme ? "Light Mode" : "Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
