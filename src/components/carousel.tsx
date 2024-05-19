import { Carousel } from "react-responsive-carousel";
import image1 from '../assets/carousel/1.jpg';
import image2 from '../assets/carousel/2.jpg';
import image3 from '../assets/carousel/3.jpg';
import image4 from '../assets/carousel/4.jpg';
import image5 from '../assets/carousel/5.jpg';
import image6 from '../assets/carousel/6.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  return (
    <Carousel
      // showArrows={false}
      // showIndicators={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={1000}
      animationHandler={"slide"}
      autoPlay
      infiniteLoop
    >
      <div>
        <img src={image1} width="200px" style={{objectFit: "fill"}} />
      </div>
      <div>
        <img src={image2} width="200px" style={{objectFit: "fill"}} />
      </div>
      <div>
        <img src={image3} width="200px" style={{objectFit: "fill"}} />
      </div>
      <div>
        <img src={image4} width="200px" style={{objectFit: "fill"}} />
      </div>
      <div>
        <img src={image5} width="200px" style={{objectFit: "fill"}} />
      </div>
      <div>
        <img src={image6} width="200px" style={{objectFit: "fill"}} />
      </div>

    </Carousel>
  );
};

export default HomeCarousel;
