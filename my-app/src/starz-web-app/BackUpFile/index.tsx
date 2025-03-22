// // import { ImageCard } from "../../../components/ImageCard/ImageCard";
// // import {
// //   ITodayMoviesData,
// //   MOVIES_TODAY_DATA,
// // } from "../../../contents/moviesToday";
// // import "./style.css";
// // export const MoviesToday = () => {
// //   return (
// //     <section className="movies-today-main">
// //       <h2>STARZ Top 10 Movies Today</h2>
// //       <div className="today-align-row">
// //         {MOVIES_TODAY_DATA.map((item: ITodayMoviesData, index: number) => (
// //           <div className="today-card-main" key={index}>
// //             <div className="today-first-image">
// //               <img
// //                 src={item.numberImage}
// //                 alt="movies-today-image"
// //                 className="today-first-image-size"
// //               />
// //             </div>

// //             <ImageCard
// //               link={item.link}
// //               firstHeader={item.firstHeader}
// //               secondHeader={item.secondHeader}
// //               imageUrl={item.movieImage}
// //               className=""
// //               headerStyle={{
// //                 gap: "80px",
// //                 width: "200px",
// //                 top: "80px",
// //                 marginRight: "4px",
// //               }}
// //               imageSize={{ width: "194px", height: "259px" }}
// //               imageDivClass="today-div"
// //               imageClass="today-card-scale"
// //               firstHeaderClass="today-header"
// //               secondHeaderClass="today-header"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// import "./style.css";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

// export const HeaderImage = () => {
//   return (
//     <Carousel
//       showArrows={true}
//       autoPlay={true}
//       infiniteLoop={true}
//       showThumbs={false}
//       showStatus={false}
//     >
//       <div>
//         <img
//           src="https://starz.imgix.net/homepage/images/killersgame-desktop.jpg?w=1000&fit=max&auto=format,compress"
//           alt="Slide 1"
//         />
//       </div>
//       <div>
//         <img
//           src="https://starz.imgix.net/homepage/images/app-desktop-020725.jpg?w=1000&fit=max&auto=format,compress"
//           alt="Slide 2"
//         />
//       </div>
//       <div>
//         <img
//           src="https://starz.imgix.net/homepage/images/pbk4-desktop.jpg?w=1000&fit=max&auto=format,compress"
//           alt="Slide 3"
//         />
//       </div>
//     </Carousel>
//   );
// };

// import "./style.css";
// import { MdOndemandVideo } from "react-icons/md";
// import StarzButton from "../../../components/Button/StarzButton";
// import {
//   HEADER_IMAGE_DATA,
//   IHeaderImage,
//   IMAGE_AND_ALT,
// } from "../../../contents/HeaderImage";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// export const HeaderImage = () => {
//   return (
//     <section>
//       {HEADER_IMAGE_DATA.map((item: IHeaderImage, index: number) => (
//         <div className="header-image-div">
//           <div className="pct-aln-main" style={item.style} key={index}>
//             <h6 className="header-image-header">
//               {item.movieHeader === true ? "Start Watching Today" : null}
//             </h6>
//             <div className="sec-img-main" style={item.buttonImageSize}>
//               <img
//                 src={item.buttonImage}
//                 alt="secont-image"
//                 className="sec-img-int"
//               />
//             </div>
//             {item.trailer === true ? (
//               <div className="hero-trailer-main">
//                 <MdOndemandVideo className="demand-video" />
//                 <a href="" className="trailer-text-sml">
//                   <span>TRAILER</span>
//                 </a>
//               </div>
//             ) : null}
//             <StarzButton
//               value={"CLAIM SPECIAL OFFER"}
//               className="trailer-btn-mt"
//             />
//           </div>
//           <Carousel
//             showArrows={true}
//             autoPlay={true}
//             infiniteLoop={true}
//             showThumbs={false}
//             showStatus={false}
//           >
//             {[
//               // Explicitly wrapping in an array
//               <div key={index}>
//                 <img
//                   src={item.heroImage}
//                   alt={"hero-image-main"}
//                   className="img-size-hero"
//                 />
//               </div>,
//             ]}
//           </Carousel>
//         </div>
//       ))}
//       {/* <Carousel
//           showArrows={true}
//           autoPlay={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//         >
//           {IMAGE_AND_ALT.map((item, index) => (
//             <div key={index}>
//               <img
//                 src={item.heroImage}
//                 alt={item.alt}
//                 className="img-size-hero"
//               />
//             </div>
//           ))}
//         </Carousel> */}
//     </section>
//   );
// };

// export interface IBoundaryData {
//   movieImage: string;
//   link: string;
//   firstHeader: string;
//   secondHeader: string;
//   cardDetail?: ICardDetail;
// }

// export interface ICardDetail {
//   movieTitle: string;
//   description: string;
// }
// export const BOUNDARY_BREAKING_DATA: IBoundaryData[] = [
//   {
//     movieImage:
//       "https://starz.imgix.net/homepage/series/bmf3-club-oos.jpg?w=700&fit=max&auto=format,compress",
//     link: "",
//     firstHeader: "BMF",
//     secondHeader: "More Info",
//     cardDetail: {
//       movieTitle: "BMF",
//       description:
//         "“BMF” follows the story of two brothers who created the “Black Mafia Family,” the most prominent drug distribution network in American history.",
//     },
//   },
//   {
//     movieImage:
//       "https://starz.imgix.net/homepage/series/bmu-oos.jpg?w=700&fit=max&auto=format,compress",
//     link: "",
//     firstHeader: "The BMF Documentary: Blowing Money Fast",
//     secondHeader: "More Info",
//     cardDetail: {
//       movieTitle: "The BMF Documentary: Blowing Money Fast",
//       description:
//         "“BMF: Blowing Money Fast” is a docuseries about the Black Mafia Family, who built one of the largest American cocaine empires.",
//     },
//   },
//   {
//     movieImage:
//       "https://starz.imgix.net/homepage/series/cnd1-oos.jpg?w=700&fit=max&auto=format,compress",
//     link: "",
//     firstHeader: "The Couple Next Door",
//     secondHeader: "More Info",
//     cardDetail: {
//       movieTitle: "The Couple Next Door",
//       description:
//         "A young couple move to the suburbs and instantly strike up a friendship with their new neighbors. But are they a bit too friendly?",
//     },
//   },
// ];

// ////////

// import { ImageCard } from "../../../components/ImageCard/ImageCard";
// import {
//   BOUNDARY_BREAKING_DATA,
//   IBoundaryData,
// } from "../../../contents/boundary";
// import "./style.css";
// import {
//   MdArrowBackIos,
//   MdArrowForwardIos,
//   MdOndemandVideo,
// } from "react-icons/md";
// export const Boundary = () => {
//   return (
//     <section className="boundary-main">
//       <div className="boundary-sec-main">
//         <div>
//           <h2 className="boundary-header">Boundary Breaking Originals</h2>
//           <h4 className="handle-header">Can You Handle The Heat?</h4>
//         </div>
//         {/* image section */}
//         <div className="boundary-card-align">
//           {BOUNDARY_BREAKING_DATA.map((item: IBoundaryData, index: number) => (
//             <ImageCard
//               key={index}
//               link={item.link}
//               firstHeader={item.firstHeader}
//               secondHeader={item.secondHeader}
//               imageUrl={item.movieImage}
//               className=""
//               headerStyle={{
//                 gap: "60px",
//                 width: "300px",
//                 top: "60px",
//                 left: "30px",
//                 marginLeft: "8px",
//               }}
//               imageSize={{ width: "386px", height: "236px" }}
//               imageDivClass="boundary-image-div"
//               imageClass="boundary-scroll-image"
//               firstHeaderClass="boundary-first-header"
//               secondHeaderClass="boundary-second-header"
//             />
//           ))}
//         </div>
//         {/* arrow button section */}
//         <div className="add-boundary-flex">
//           <button className="boundary-arrow-button">
//             <MdArrowBackIos />
//           </button>
//           <div className="boundary-bottom-description-main">
//             <a href="" className="boundary-image-card-title">
//               BMF
//             </a>
//             <p className="boundary-image-card-description">
//               “BMF” follows the story of two brothers who created the “Black
//               Mafia Family,” the most prominent drug distribution network in
//               American history.
//               <a href="" className="learn-more">
//                 LEARN MORE
//               </a>
//             </p>
//             <div className="hero-trailer-boundary">
//               <MdOndemandVideo className="demand-video" />
//               <a href="" className="trailer-text-sml">
//                 <span>TRAILER</span>
//               </a>
//             </div>
//           </div>
//           <button className="boundary-arrow-button">
//             <MdArrowForwardIos />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// .boundary-main {
//   background: #000
//     url(https://static-web-images.imgix.net/web-images/common/background-no-image-1440.jpg?auto=compress,format)
//     no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   background-color: transparent;
//   padding-top: 60px;
// }

// .boundary-header {
//   margin-top: 0;
//   margin-bottom: 0;
//   padding-top: 15px;
//   padding-bottom: 10px;
//   text-align: center;
// }

// .handle-header {
//   color: #d1d3d4;
//   font-size: 24px;
//   line-height: 32px;
//   letter-spacing: 1.5px;
//   font-weight: 400;
//   margin-bottom: 0;
//   padding-bottom: 30px;
//   text-align: center;
// }

// .boundary-arrow-button {
//   display: block;
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 36px;
//   font-weight: 400;
//   cursor: pointer;
// }

// .boundary-sec-main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .boundary-card-align {
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
//   max-width: 100%;
//   overflow-x: scroll;
//   scrollbar-width: none;
//   position: relative;
//   overscroll-behavior: contain;
//   user-select: none;
//   gap: 10px;
// }

// .add-boundary-flex {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .boundary-image-card-title {
//   font-size: 18px;
//   line-height: 26px;
//   letter-spacing: 1.125px;
//   font-weight: 400;
//   text-transform: none;
//   opacity: 1;
//   pointer-events: inherit;
//   color: #fff;
//   text-decoration: none;
//   cursor: pointer;
//   transition: opacity 0.5s, color 0.5s;
//   padding-bottom: 8px;
//   &:hover {
//     opacity: 0.6;
//   }
// }

// .boundary-image-card-description {
//   color: #d1d3d4;
//   font-size: 16px;
//   line-height: 24px;
//   letter-spacing: 1px;
//   font-weight: 400;
//   padding-bottom: 16px;
//   text-align: center;
// }

// .learn-more {
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: 16px;
//   letter-spacing: 1px;
//   line-height: 1.25;
//   margin-left: 4px;
//   transition: opacity 0.5s, color 0.5s;
//   &:hover {
//     opacity: 0.5;
//   }
// }

// .hero-trailer-boundary {
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// }

// .demand-video {
//   width: 27px;
//   height: 27px;
//   color: rgb(210, 255, 0);
//   padding-right: 8px;
// }

// .trailer-text-sml {
//   text-decoration: none;
//   cursor: pointer;
// }

// .boundary-bottom-description-main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 40%;
//   margin-top: 24px;
// }

// .trailer-text-sml span {
//   letter-spacing: 2px;
//   transition: all 0.2s ease-in-out;
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 1.25;
//   text-align: center;
//   &:hover {
//     color: #d1d3d4;
//     transition: color 0.1s ease-in-out;
//   }
// }

// .boundary-scroll-image {
//   border-radius: 3px;
// }

// .boundary-first-header {
//   font-size: 20px;
//   font-weight: 700;
//   letter-spacing: 1.25px;
//   line-height: 1.4;
//   color: #fff;
//   text-transform: uppercase;
// }

// .boundary-second-header {
//   font-size: 18px;
//   font-weight: 600;
//   letter-spacing: 0.56px;
//   line-height: 1.44;
//   text-transform: uppercase;
//   color: #fff;
// }

// .boundary-image-div {
//   transition: transform 0.2s;
//   &:hover {
//     transform: scale(1.1);
//   }
// }

// //last edited:

// import { ImageCard } from "../../../components/ImageCard/ImageCard";
// import {
//   BOUNDARY_BREAKING_DATA,
//   IBoundaryData,
// } from "../../../contents/boundary";
// import "./style.css";
// import {
//   MdArrowBackIos,
//   MdArrowForwardIos,
//   MdOndemandVideo,
// } from "react-icons/md";
// export const Boundary = () => {
//   return (
//     <section className="boundary-main">
//       <div className="boundary-sec-main">
//         <div>
//           <h2 className="boundary-header">Boundary Breaking Originals</h2>
//           <h4 className="handle-header">Can You Handle The Heat?</h4>
//         </div>
//         <div className="boundary-card-align">
//           {BOUNDARY_BREAKING_DATA.map((item: IBoundaryData, index: number) => (
//             <div>
//               <ImageCard
//                 key={index}
//                 link={item.link}
//                 firstHeader={item.firstHeader}
//                 secondHeader={item.secondHeader}
//                 imageUrl={item.movieImage}
//                 className=""
//                 headerStyle={{
//                   gap: "60px",
//                   width: "300px",
//                   top: "60px",
//                   left: "30px",
//                   marginLeft: "8px",
//                 }}
//                 imageSize={{ width: "386px", height: "236px" }}
//                 imageDivClass="boundary-image-div"
//                 imageClass="boundary-scroll-image"
//                 firstHeaderClass="boundary-first-header"
//                 secondHeaderClass="boundary-second-header"
//               />
//               <div className="add-boundary-flex">
//                 <div className="boundary-bottom-description-main">
//                   <a href="" className="boundary-image-card-title">
//                     {item.cardDetail?.movieTitle}
//                   </a>
//                   <p className="boundary-image-card-description">
//                     {item.cardDetail?.description}
//                     <a href="" className="learn-more">
//                       LEARN MORE
//                     </a>
//                   </p>
//                   <div className="hero-trailer-boundary">
//                     <MdOndemandVideo className="demand-video" />
//                     <a href="" className="trailer-text-sml">
//                       <span>TRAILER</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="button-position-main">
//           <button className="boundary-arrow-button">
//             <MdArrowBackIos />
//           </button>
//           <button className="boundary-arrow-button">
//             <MdArrowForwardIos />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// .boundary-main {
//   background: #000
//     url(https://static-web-images.imgix.net/web-images/common/background-no-image-1440.jpg?auto=compress,format)
//     no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   background-color: transparent;
//   padding-top: 60px;
//   position: relative;
// }

// .boundary-header {
//   margin-top: 0;
//   margin-bottom: 0;
//   padding-top: 15px;
//   padding-bottom: 10px;
//   text-align: center;
// }

// .handle-header {
//   color: #d1d3d4;
//   font-size: 24px;
//   line-height: 32px;
//   letter-spacing: 1.5px;
//   font-weight: 400;
//   margin-bottom: 0;
//   padding-bottom: 30px;
//   text-align: center;
// }

// .boundary-arrow-button {
//   display: block;
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 36px;
//   font-weight: 400;
//   cursor: pointer;
// }

// .boundary-sec-main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }

// .boundary-card-align {
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
//   max-width: 100%;
//   overflow-x: scroll;
//   scrollbar-width: none;
//   position: relative;
//   overscroll-behavior: contain;
//   user-select: none;
//   gap: 10px;
// }

// .add-boundary-flex {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .boundary-image-card-title {
//   font-size: 18px;
//   line-height: 26px;
//   letter-spacing: 1.125px;
//   font-weight: 400;
//   text-transform: none;
//   opacity: 1;
//   pointer-events: inherit;
//   color: #fff;
//   text-decoration: none;
//   cursor: pointer;
//   transition: opacity 0.5s, color 0.5s;
//   padding-bottom: 8px;
//   text-align: center;
//   &:hover {
//     opacity: 0.6;
//   }
// }

// .boundary-image-card-description {
//   color: #d1d3d4;
//   font-size: 16px;
//   font-family: Averta, Helvetica Neue, Helvetica, Arial, sans-serif;
//   line-height: 24px;
//   letter-spacing: 1px;
//   font-weight: 400;
//   padding-bottom: 16px;
//   text-align: center;
// }

// .learn-more {
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: 16px;
//   letter-spacing: 1px;
//   line-height: 1.25;
//   margin-left: 4px;
//   transition: opacity 0.5s, color 0.5s;
//   &:hover {
//     opacity: 0.5;
//   }
// }

// .hero-trailer-boundary {
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// }

// .demand-video {
//   width: 27px;
//   height: 27px;
//   color: rgb(210, 255, 0);
//   padding-right: 8px;
// }

// .trailer-text-sml {
//   text-decoration: none;
//   cursor: pointer;
// }

// .boundary-bottom-description-main {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   margin-top: 24px;
// }

// .trailer-text-sml span {
//   letter-spacing: 2px;
//   transition: all 0.2s ease-in-out;
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 1.25;
//   text-align: center;
//   &:hover {
//     color: #d1d3d4;
//     transition: color 0.1s ease-in-out;
//   }
// }

// .boundary-scroll-image {
//   border-radius: 3px;
// }

// .boundary-first-header {
//   font-size: 20px;
//   font-weight: 700;
//   letter-spacing: 1.25px;
//   line-height: 1.4;
//   color: #fff;
//   text-transform: uppercase;
// }

// .boundary-second-header {
//   font-size: 18px;
//   font-weight: 600;
//   letter-spacing: 0.56px;
//   line-height: 1.44;
//   text-transform: uppercase;
//   color: #fff;
// }

// .boundary-image-div {
//   transition: transform 0.2s;
//   &:hover {
//     transform: scale(1.1);
//   }
// }

// .button-position-main {
//   display: flex;
//   align-items: center;
//   gap: 358px;
//   position: absolute;
//   bottom: 76px;
//   left: 456px;
// }

// /////

// import { ImageCard } from "../../../components/ImageCard/ImageCard";
// import { ORIGINALS } from "../../../contents/tvShows";
// import "./style.css";
// export const TVShows = () => {
//   return (
//     <div>
//       <div>
//         {/*  */}
//         <div className="shows-header-align">
//           <a href="" className="remove-und">
//             <h2 className="originals-sup-header">Originals & Exclusives</h2>
//           </a>
//           <a href="" className="view-all-link">
//             View All
//           </a>
//         </div>
//         {/*  */}
//         <div className="shows-cards-align">
//           {ORIGINALS.map((item, index) => (
//             <ImageCard
//               key={index}
//               link={item.link}
//               firstHeader={item.title}
//               secondHeader={""}
//               imageUrl={item.image}
//               className=""
//               headerStyle={{
//                 gap: "80px",
//                 width: "200px",
//                 top: "80px",
//                 marginRight: "4px",
//               }}
//               imageSize={{ width: "325", height: "181" }}
//               imageDivClass="today-div"
//               imageClass=""
//               firstHeaderClass="today-header"
//               secondHeaderClass=""
//               newTextClass=""
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// .remove-und {
//   text-transform: none;
//   text-decoration: none;
// }
// .originals-sup-header {
//   margin-top: 0;
//   margin-bottom: 0;
//   font-size: 18px;
//   line-height: 26px;
//   letter-spacing: 1.125px;
//   font-weight: 400;
// }

// .view-all-link {
//   font-size: 14px;
//   letter-spacing: 0.88px;
//   line-height: 1.29;
//   text-transform: uppercase;
//   font-weight: 600;
//   transition: color 0.25s;
//   color: #fff;
//   text-wrap: nowrap;
//   align-self: flex-end;
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     color: #d1d3d4;
//   }
// }

// .shows-header-align {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 12px 5px 20px;
// }

// .shows-cards-align {
//   display: flex;
//   align-items: center;
//   overflow-x: scroll;
//   scrollbar-width: none;
// }
