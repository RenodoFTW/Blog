import './Blog.css';
import Functional from "./Functional_Requirements_Blog";
import { useNavigate, Link } from "react-router-dom";

export default function Blog() {
    return <div> 
        <div className="BlogEntry1">
            <Link to='/Functional'>Functional Requirements</Link>
        </div>
    </div>
}