import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';


export default function NavbarComponent() {
  return (
    <div className="Navbar">
      <Link to="/" h1 className="nav-title">Dom's Programming Blog</Link>
      <Link to="/" className="nav-item">Home</Link>
      <Link to='/Placement' className="nav-item">Placement</Link>
      <Link to="/Events" className="nav-item">Events</Link>
      <Link to="/Blog" className="nav-item">Blog</Link>
      <Link to="/Masterclasses" className="nav-item">Masterclasses</Link>
      <Link to="/Contact" className="nav-item">Contact</Link>

    </div>
  );
}

