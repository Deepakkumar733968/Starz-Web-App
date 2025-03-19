import { ImageCard } from "../../../components/ImageCard/ImageCard";
import {
  BOUNDARY_BREAKING_DATA,
  IBoundaryData,
} from "../../../contents/boundary";
import "./style.css";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOndemandVideo,
} from "react-icons/md";
export const Boundary = () => {
  return (
    <section className="boundary-main">
      <div className="boundary-sec-main">
        <div>
          <h2 className="boundary-header">Boundary Breaking Originals</h2>
          <h4 className="handle-header">Can You Handle The Heat?</h4>
        </div>
        {/* image section */}
        <div className="boundary-card-align">
          {BOUNDARY_BREAKING_DATA.map((item: IBoundaryData, index: number) => (
            <ImageCard
              key={index}
              link={item.link}
              firstHeader={item.firstHeader}
              secondHeader={item.secondHeader}
              imageUrl={item.movieImage}
              className=""
              headerStyle={{
                gap: "80px",
                width: "200px",
                top: "80px",
                marginLeft: "8px",
              }}
              imageSize={{ width: "700px", height: "394px" }}
              imageDivClass=""
              imageClass=""
              firstHeaderClass=""
              secondHeaderClass=""
            />
          ))}
        </div>
        {/* arrow button section */}
        <div className="add-boundary-flex">
          <button className="boundary-arrow-button">
            <MdArrowBackIos />
          </button>
          <div>
            <a href="" className="boundary-image-card-title">
              BMF
            </a>
            <p className="boundary-image-card-description">
              “BMF” follows the story of two brothers who created the “Black
              Mafia Family,” the most prominent drug distribution network in
              American history.
              <a href="" className="learn-more">
                LEARN MORE
              </a>
            </p>
            <div className="hero-trailer-main">
              <MdOndemandVideo className="demand-video" />
              <a href="" className="trailer-text-sml">
                <span>TRAILER</span>
              </a>
            </div>
          </div>
          <button className="boundary-arrow-button">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};
