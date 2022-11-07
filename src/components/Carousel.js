import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import Web1 from '../images/Esports_Web1.png';
import Web5 from '../images/Esports_Web5.png';
import Web4 from '../images/Esports_Web4.png';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <img
            className="Carouselimg"
            src={Web1}
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <img
            className="Carouselimg"
            src={Web5}
          />
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-center'>
          <img
            className="Carouselimg"
            src={Web4}
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
