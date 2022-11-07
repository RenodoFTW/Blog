import Carousel from 'react-bootstrap/Carousel';
import Web1 from '../images/Esports_Web1.png';
import Web5 from '../images/Esports_Web5.png';
import Web4 from '../images/Esports_Web4.png';

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Web1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Web5}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Web4}
        />
      </Carousel.Item>
    </Carousel>
  );
}
