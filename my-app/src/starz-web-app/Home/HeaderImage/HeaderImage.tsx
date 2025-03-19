import "./style.css";
import { MdOndemandVideo } from "react-icons/md";
import StarzButton from "../../../components/Button/StarzButton";
import { HEADER_IMAGE_DATA, IHeaderImage } from "../../../contents/HeaderImage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeaderImage = () => {
  return (
    <section>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {HEADER_IMAGE_DATA.map((item: IHeaderImage, index: number) => (
          <div className="header-image-div" key={index}>
            <img
              src={item.heroImage}
              alt="hero-image-main"
              className="img-size-hero"
            />
            <div className="pct-aln-main" style={item.style}>
              {item.movieHeader && (
                <h6 className="header-image-header">Start Watching Today</h6>
              )}
              <div className="sec-img-main" style={item.buttonImageSize}>
                <img
                  src={item.buttonImage}
                  alt="second-image"
                  className="sec-img-int"
                />
              </div>
              {item.trailer && (
                <div className="hero-trailer-main">
                  <MdOndemandVideo className="demand-video" />
                  <a href={item.buttonLink} className="trailer-text-sml">
                    <span>TRAILER</span>
                  </a>
                </div>
              )}
              <StarzButton
                value="CLAIM SPECIAL OFFER"
                className="trailer-btn-mt"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
