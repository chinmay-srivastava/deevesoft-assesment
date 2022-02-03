import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../App.css"

export default function Navigation() {
  return (
<Container>
    <Navbar
    className="d-flex  align-items-center "
      fixed="top"
      variant="light"
      style={{
        backgroundColor: "#f7f7f7",
       maxWidth:'70vw', marginLeft:'12%', borderRadius:"10px", marginTop:'2%'
       , padding:'0px'
        
      }}
    >
      
       
        <Nav >
          <Nav.Link href="#home" className="Nav-Link">GOAL</Nav.Link>
          <Nav.Link href="#features" className="Nav-Link">ACTIVITY</Nav.Link>
          <Nav.Link href="#pricing" className="Nav-Link" >PROFILE</Nav.Link>
          <Nav.Link href="#selfcoach" className="Nav-Link">SELF COACH</Nav.Link>
        </Nav>
        
    </Navbar>
  </Container>
   );
}
