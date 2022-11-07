import Carousel from '../components/Carousel';
import HTML from '../images/HTML Image.png';
import Python from '../images/Python Image.png';
import './Homepage.css';

export default function Homepage() {
    return <div>
        <Carousel />

        <div className="bottomdiv">
            <div className='aboutme'>
                <p>hi</p>
            </div>
            <div className='codeexamples'>
                <div className="row1">
                    <img
                    className='HTML'
                    src={HTML}
                    ></img>
                    <img
                    className='Python'
                    src={Python}
                    ></img>
                    <img
                    className='C'
                    src={C}
                    ></img>
                </div>
            </div>
        </div>
    </div>
}
