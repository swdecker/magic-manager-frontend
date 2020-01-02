import  React from 'react'
import {Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout }  from '../actions/logout'

import {withRouter } from 'react-router-dom'
import history from '../history';

const MagicNavbar = (props) => {
    
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand >Magic Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link disabled >{props.currentUser.username}</Nav.Link>
      <Nav.Link onClick={()=>history.push("/collection") }>Collection</Nav.Link>
     <Nav.Link onClick={()=>history.push("/addCard") }>Add Card</Nav.Link>
      
      <Nav.Link onClick={()=>props.logout()} >Logout</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )

}
const mapStateToProps = (state)=>{
 return { currentUser: state.usersReducer.currentUser}
}


export default withRouter(connect(mapStateToProps, {logout})( MagicNavbar ))
