import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return <div className='h-24 w-screen bg-zinc-600'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <div onClick={() => {
            navigate('/about');
        }}>
            <h1>about 2</h1>
        </div>
    </div>
}