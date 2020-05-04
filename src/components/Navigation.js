import React from 'react'
import { Navbar, Nav, NavItem, NavLink, Container } from 'reactstrap'
const Navigation = () => {
  return (
    <Container>
      <Navbar>
        <Nav className="nav">
          <NavItem>
            <NavLink href="/" className="menu">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="//" className="menu">
              Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="///" className="menu">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="////" className="menu">
              Gallary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/////" className="menu">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation
