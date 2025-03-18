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
