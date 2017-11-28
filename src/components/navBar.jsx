import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Navbar, Jumbotron, Button, NavDropdown, MenuItem, NavItem, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
  return (
    <div>
     <Navbar inverse collapseOnSelect>
     <Navbar.Header>
       <Navbar.Brand>
         <a href="#">Shoping Cart</a>
       </Navbar.Brand>
       <Navbar.Toggle />
     </Navbar.Header>
     <Navbar.Collapse>
       <Nav pullRight>
         <NavItem eventKey={1} href="#"><i className='fa fa-cart-plus fa-3x'></i></NavItem>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
    </div>
  )
}

export default NavBar
