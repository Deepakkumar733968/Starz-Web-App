import "./style.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

export const HeaderImage = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 1"
          className="img-size-hero"
        />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 1"
          className="img-size-hero"
        />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 1"
          className="img-size-hero"
        />
      </div>

      {/* <div>
        <img
          src="https://starz.imgix.net/homepage/images/app-desktop-020725.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 2"
          className="img-size-hero"
        />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/pbk4-desktop.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 3"
          className="img-size-hero"
        />
      </div> */}
    </Carousel>
  );
};
