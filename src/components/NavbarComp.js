import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';


const NavbarComp = () => {
  return (

  <BrowserRouter>  
  <div>
    <Navbar bg="dark" variant={"dark"} expand="lg">
    <Navbar.Brand href="#" style={{"fontSize": "3rem"}}>TBTM</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="my_nav"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={"/home"} id="homebar">Home</Nav.Link>
        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action3">Inquires</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Learn More</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Subscribe
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
</Navbar>
  </div>
  <Routes>
  <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
       <Route path='contact' element={<Contact />} />
  </Routes>
  </BrowserRouter>


  )
};

export default NavbarComp;
