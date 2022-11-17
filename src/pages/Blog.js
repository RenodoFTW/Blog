import './Blog.css';
import { useNavigate, Link } from "react-router-dom";

export default function Blog() {
    return <div className='Blog'> 
        <div className="FunctionalBlog Subject">
            <Link to='/Functional' className='Blog-link'>Functional Requirements</Link>
            <p className='Blog-date'>14/11/2022</p>
            <p className='Blog-desc'>Sam's functional and non-functional requirement work,
                complete with a Powerpoint & memes along the way.
            </p>
        </div>
        <div className="FunctionalBlog UX">
            <Link to='/7Principles' className='Blog-link'>7 Principles Of UX</Link>
            <p className='Blog-desc'>All 7 principles of UX in action using a Powerpoint
            going through an example, the Overwatch 2 website.
            </p>
        </div>
        <div className="FunctionalBlog Subject">
            <Link to='/Testing' className='Blog-link'>Testing Strategy</Link>
            <p className='Blog-desc'>A draft testing strategy for our Gibjohn project + notes.
            </p>
        </div>
    </div>
}