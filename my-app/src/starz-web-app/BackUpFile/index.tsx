// import { ImageCard } from "../../../components/ImageCard/ImageCard";
// import {
//   ITodayMoviesData,
//   MOVIES_TODAY_DATA,
// } from "../../../contents/moviesToday";
// import "./style.css";
// export const MoviesToday = () => {
//   return (
//     <section className="movies-today-main">
//       <h2>STARZ Top 10 Movies Today</h2>
//       <div className="today-align-row">
//         {MOVIES_TODAY_DATA.map((item: ITodayMoviesData, index: number) => (
//           <div className="today-card-main" key={index}>
//             <div className="today-first-image">
//               <img
//                 src={item.numberImage}
//                 alt="movies-today-image"
//                 className="today-first-image-size"
//               />
//             </div>

//             <ImageCard
//               link={item.link}
//               firstHeader={item.firstHeader}
//               secondHeader={item.secondHeader}
//               imageUrl={item.movieImage}
//               className=""
//               headerStyle={{
//                 gap: "80px",
//                 width: "200px",
//                 top: "80px",
//                 marginRight: "4px",
//               }}
//               imageSize={{ width: "194px", height: "259px" }}
//               imageDivClass="today-div"
//               imageClass="today-card-scale"
//               firstHeaderClass="today-header"
//               secondHeaderClass="today-header"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

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
        />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/app-desktop-020725.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src="https://starz.imgix.net/homepage/images/pbk4-desktop.jpg?w=1000&fit=max&auto=format,compress"
          alt="Slide 3"
        />
      </div>
    </Carousel>
  );
};

import "./style.css";
import { MdOndemandVideo } from "react-icons/md";
import StarzButton from "../../../components/Button/StarzButton";
import {
  HEADER_IMAGE_DATA,
  IHeaderImage,
  IMAGE_AND_ALT,
} from "../../../contents/HeaderImage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const HeaderImage = () => {
  return (
    <section>
      {HEADER_IMAGE_DATA.map((item: IHeaderImage, index: number) => (
        <div className="header-image-div">
          <div className="pct-aln-main" style={item.style} key={index}>
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
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            {[
              // Explicitly wrapping in an array
              <div key={index}>
                <img
                  src={item.heroImage}
                  alt={"hero-image-main"}
                  className="img-size-hero"
                />
              </div>,
            ]}
          </Carousel>
        </div>
      ))}
      {/* <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {IMAGE_AND_ALT.map((item, index) => (
            <div key={index}>
              <img
                src={item.heroImage}
                alt={item.alt}
                className="img-size-hero"
              />
            </div>
          ))}
        </Carousel> */}
    </section>
  );
};
