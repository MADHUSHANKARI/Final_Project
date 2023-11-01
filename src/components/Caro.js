import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/image1.jpg';


function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
      <img src={image1} alt="image1" />
      </Carousel.Item>
      <Carousel.Item>
        <image1 text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <image text="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <image1 text="Forth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <image1 text="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;