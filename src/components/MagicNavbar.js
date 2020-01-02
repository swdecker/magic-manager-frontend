import  React from 'react'
import {Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout }  from '../actions/logout'

const MagicNavbar = (props) => {
    
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/collection">Magic Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link disabled >{props.username}</Nav.Link>
      <Nav.Link href="#home">Collection</Nav.Link>
      <Nav.Link href="#home">Decks</Nav.Link>
      <Nav.Link onClick={()=>props.logout()} >Logout</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )

}
const mapStateToProps = (state)=>{
 return { currentUser: state.usersReducer.currentUser}
}


export default connect(mapStateToProps, {logout})( MagicNavbar )
