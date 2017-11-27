import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Navbar, Jumbotron, Button, NavDropdown, MenuItem, NavItem, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Food Tracker</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/logFood">Log</NavItem>
        <NavItem eventKey={2} href="/addIngredient">Add Ingredient</NavItem>
        <NavItem eventKey={2} href="#">Custom Meals</NavItem>
      </Nav>
    </Navbar>
    </div>
  )
}

export default NavBar
