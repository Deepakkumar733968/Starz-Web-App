import { MdOndemandVideo } from "react-icons/md";
import "./style.css";
import StarzButton from "../../../components/Button/StarzButton";
import { Cast } from "../Cast/Cast";

export const DetailImgHeader = () => {
  return (
    <section className="movie-detail-main">
      <div className="right-and-left-main">
        <div className="left-detail-main">
          <h5 className="card-detail-header">Leaving Monday, March 31st</h5>
          <img
            src="https://stz1.imgix.net/web/contentId/23841/type/titleart/dimension/3000x3000/lang/en-US?fit=clip&auto=format,compress&w=280&h=165&trim=color"
            alt="movie-detail-image"
            className="mov-min-left-img"
          />
          <h1 className="mov-des-one">Blue Streak</h1>
          <div className="movie-des-align">
            <h6 className="movie-des movie-des-box">r</h6>
            <h6 className="movie-des">2h 33m</h6>
            <h6 className="movie-des">action, drama</h6>
            <h6 className="movie-des">2009</h6>
            <h6 className="movie-des movie-des-box">hd</h6>
            <h6 className="movie-des movie-des-box">5.1</h6>
            <h6 className="movie-des movie-des-box">cc</h6>
          </div>
          <div className="trailer-button-main">
            <MdOndemandVideo className="mov-des-det" />
            <button>Trailer</button>
          </div>
          <p className="police-station-des">
            A loose cannon jewel thief hides a stolen diamond - two years later,
            he learns the hiding place is now a police station. The answer:
            he'll impersonate...
            <span className="more-des-cls">more</span>
          </p>
          <p className="martin-lawrence">
            Starring Martin Lawrence, Luke Wilson, Peter Greene
          </p>
        </div>
        <img
          src="https://stz1.imgix.net/web/contentId/23841/type/background/lang/en-US?fit=max&auto=format,compress&w=1500"
          alt="detail-right-img"
          className="right-img-pos"
        />
      </div>
      <div className="streaming-card-main">
        <div className="add-m-t-b">
          <ul className="ui-list-del">
            <li>Ad-free streaming</li>
            <li>Limited time special offer</li>
          </ul>
        </div>
        <div className="vls-line-del"></div>
        <div className="add-two-div">
          <div className="srt-at-main">
            <p className="srt-hed">Starting at</p>
            <p className="mo-amt">$2.99/mo</p>
            <p className="cancel-any-time">Cancel Anytime</p>
          </div>
          <div className="terms-use-main">
            <StarzButton
              style={{
                padding: "10px 15px",
                width: "250px",
                marginBottom: "16px",
              }}
              value={"Start watching now"}
            />
            <a href="" className="terms-use-link">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
