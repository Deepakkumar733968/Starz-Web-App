import "./style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HEADER_IMAGE_DATA, IHeaderImage } from "../../../contents/HeaderImage";
import StarzButton from "../../../components/Button/StarzButton";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
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
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="custom-arrow custom-arrow-prev"
            >
              <MdArrowBackIosNew />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="custom-arrow custom-arrow-next"
            >
              <MdArrowForwardIos />
            </button>
          )
        }
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
