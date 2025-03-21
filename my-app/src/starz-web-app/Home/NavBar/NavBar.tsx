import "./style.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import StarzButton from "../../../components/Button/StarzButton";

export const NavBar = ({ isList = true }) => {
  return (
    <nav className="nav-main fade-in">
      <div className="nav-div-main">
        <div className="logo-container">
          <Link to="/">
            <img
              className="web-logo-nav"
              src="https://www.starz.com/assets/images/icons/starz-logo-glint.svg"
              alt="web-logo"
            />
          </Link>
        </div>
        {isList && (
          <div className="main-nav-list">
            <Link to="/" className="nav-list">
              HOME
            </Link>
            <Link to="/series" className="nav-list">
              Series
            </Link>
            <Link to="/movies" className="nav-list">
              Movies
            </Link>
            <Link to={"#"} className="nav-list">
              Schedule
            </Link>
            <div>
              <a href="" className="nav-list search-main">
                <span className="search-span">
                  <FiSearch className="search-icon" />
                  Browse
                </span>
                <span>
                  <IoIosArrowDown className="search-icon" />
                </span>
              </a>
            </div>
            <a href="" className="nav-list">
              #TakeTheLead
            </a>
          </div>
        )}
        <div className="link-button-main">
          <a href="" className="nav-list login-list">
            <span>Log In</span>
          </a>
          <StarzButton
            link="#"
            value="CLAIM SPECIAL OFFER"
            style={{
              padding: "7px 20px",
              height: "36px",
              width: "fit-content",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          />
        </div>
      </div>
    </nav>
  );
};
