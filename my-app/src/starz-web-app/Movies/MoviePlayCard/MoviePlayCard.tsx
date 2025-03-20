import { MdInfoOutline, MdOndemandVideo } from "react-icons/md";
import "./style.css";
import { SlControlPlay } from "react-icons/sl";

export const MoviePlayCard = () => {
  return (
    <section className="movies-main">
      <div className="add-m-p">
        <img
          src="https://stz1.imgix.net/Web/contentId/49707/type/titleart?fit=max&auto=format,compress&w=400&h=164&trim=auto&trim-md=0"
          alt="movie-image"
          className="movie-min-img"
        />
        <div className="movie-des-align">
          <h6 className="movie-des movie-des-box">r</h6>
          <h6 className="movie-des">2h 33m</h6>
          <h6 className="movie-des">action, drama</h6>
          <h6 className="movie-des">2009</h6>
          <h6 className="movie-des movie-des-box">hd</h6>
          <h6 className="movie-des movie-des-box">5.1</h6>
          <h6 className="movie-des movie-des-box">cc</h6>
        </div>
        <p className="movie-card-detail">
          In Nazi-occupied France during World War II, a plan to assassinate
          Nazi leaders by a group of Jewish U.S. soldiers coincides with a
          theater owner's vengeful plans for the same.
        </p>
        <div className="mov-and-icn-align">
          <div className="mov-and-icn">
            <SlControlPlay className="mov-lis-ict" />
            <h6 className="mov-lis-des">Play</h6>
          </div>
          <div className="mov-and-icn">
            <MdOndemandVideo className="mov-lis-ict" />
            <h6 className="mov-lis-des">Trailer</h6>
          </div>
          <div className="mov-and-icn">
            <MdInfoOutline className="mov-lis-ict" />
            <h6 className="mov-lis-des">Info</h6>
          </div>
        </div>
      </div>
      <img
        src="https://stz1.imgix.net/Web/contentId/49707/type/studio/dimension/2560x1440?fit=max&auto=format,compress&w=1440"
        alt="movie-image-card"
        className="movie-card-image"
      />
    </section>
  );
};
