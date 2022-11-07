import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    return <div className='navbar h-24 w-screen bg-zinc-600'>
        <Link to='/' className="title">Dom's Programming Blog</Link>
        <div className="navdiv">
            <Link to='/' className='headers'>Home</Link>
            <Link to='/Programming' className='headers'>Programming</Link>
            <Link to='/Content Areas' className='headers'>Content Areas</Link>
            <Link to='/Projects' className='headers'>Projects</Link>
            <Link to='/Placement' className='headers'>Placement</Link>
            <Link to='/Events' className='headers'>Events</Link>
            <Link to='/Blog' className='headers'>Blog</Link>
            <Link to='/Masterclasses' className='headers'>Masterclasses</Link>
            <Link to='/Contact' className='headers'>Contact</Link>
        </div>
            <div onClick={() => {
            return <div className='h-24 w-screen bg-orange-400'></div>
        }}>
        </div>
    </div>
}