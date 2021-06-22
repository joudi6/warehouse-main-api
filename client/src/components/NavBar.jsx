import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <img src={logo} className="App-logo" alt="logo" />
      <LinkContainer to="/">
        <Navbar.Brand>Warehouse App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/products">
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/articles">
            <Nav.Link as={Link} to="/">
              Articles
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/stock">
            <Nav.Link as={Link} to="/">
              Stock
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
