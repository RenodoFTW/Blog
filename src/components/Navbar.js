import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Placement from '../pages/Placement.js';
import Events from '../pages/Events.js';
import Blog from '../pages/Blog.js';
import Masterclasses from '../pages/Masterclasses.js';
import Contact from '../pages/Contact.js';

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Dom's Programming Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link Link to='/'>Home</Nav.Link>
            <NavDropdown title="Programming" className="basic-nav-dropdown">
              <NavDropdown.Item Link to='/'>Python</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>HTML/CSS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>JavaScript</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Content Areas" className="basic-nav-dropdown">
              <NavDropdown.Item Link to='/'>CA 1 - 4</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>CA 5 - 8</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Projects" className="basic-nav-dropdown">
              <NavDropdown.Item Link to='/'>UX</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>Challenges</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Link to='/'>Misc</NavDropdown.Item>
            </NavDropdown>

            <Link to={Placement} className="nav-link">Placement</Link>
            <Link to={Events} className="nav-link">Events</Link>
            <Link to={Blog} className="nav-link">Blog</Link>
            <Link to={Masterclasses} className="nav-link">Masterclasses</Link>
            <Link to={Contact} className="nav-link">Contact</Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

