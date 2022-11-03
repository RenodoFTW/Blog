import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    return <div className='navbar h-24 w-screen bg-zinc-600'>
        <Link to='/'>Home</Link>
        <h1 className="headers">Programming</h1>
        <div onClick={() => {
            return <div className='h-24 w-screen bg-orange-400'></div>
        }}>
            <h1 className="headers">about 2</h1>
        </div>
    </div>
}