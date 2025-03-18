import "./style.css";

import { Carousel } from "react-responsive-carousel";
import { MdOndemandVideo } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarzButton from "../../../components/Button/StarzButton";
import { HEADER_IMAGE_DATA, IHeaderImage } from "../../../contents/HeaderImage";

export const HeaderImage = () => {
  return (
    <section className="header-image-div">
      {HEADER_IMAGE_DATA.map((item: IHeaderImage, index: number) => (
        <div>
          <div className="pct-aln-main" key={index}>
            <h6 className="header-image-header">
              {item.movieHeader === true ? "Start Watching Today" : null}
            </h6>
            <div className="sec-img-main" style={item.buttonImageSize}>
              <img
                src={item.buttonImage}
                alt="secont-image"
                className="sec-img-int"
              />
            </div>
            {item.trailer === true ? (
              <div className="hero-trailer-main">
                <MdOndemandVideo className="demand-video" />
                <a href="" className="trailer-text-sml">
                  <span>TRAILER</span>
                </a>
              </div>
            ) : null}
            <StarzButton
              value={"CLAIM SPECIAL OFFER"}
              className="trailer-btn-mt"
            />
          </div>
          <img src={item.heroImage} alt="Slide 1" className="img-size-hero" />
        </div>
      ))}
    </section>
  );
};
