import "./style.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import {
  fifthList,
  firstList,
  fourthList,
  secondList,
  sixthList,
  thirdList,
} from "../../../contents/footer";
import { Link } from "react-router-dom";

export interface IFooterList {
  link: string;
  text: string;
}

export const Footer = () => {
  const renderFooterList = (item: IFooterList, index: number) => (
    <li className="footer-list " key={index}>
      <a href={item.link} className="footer-link">
        {item.text}
      </a>
    </li>
  );

  return (
    <footer className="footer-main">
      <div className="footer-section-main">
        <div className="first-section">
          <h3 className="footer-heading">Browse STARZ</h3>
          <div className="first-section-header">
            <div className="add-tab-wid">
              <ul>
                {firstList.map(renderFooterList)}

                <li className="footer-list">
                  <a
                    href="https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml_link_test"
                    className="footer-link last-footer-list"
                  >
                    More Originals...
                  </a>
                </li>
              </ul>
            </div>
            <div className="add-tab-wid">
              <ul>
                {secondList.map(renderFooterList)}

                <li className="footer-list">
                  <a
                    href="https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml_link_test"
                    className="footer-link last-footer-list"
                  >
                    More Movies...
                  </a>
                </li>
              </ul>
            </div>
            <div className="add-tab-wid">
              <ul>
                {thirdList.map(renderFooterList)}

                <li className="footer-list">
                  <a
                    href="https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml_link_test"
                    className="footer-link last-footer-list"
                  >
                    More Series...
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="second-section">
          <div className="add-tab-wid">
            <h3 className="footer-heading">Get Started</h3>
            <ul>{fourthList.map(renderFooterList)}</ul>
          </div>
          <div className="add-tab-wid">
            <h3 className="footer-heading">Help</h3>
            <ul>{fifthList.map(renderFooterList)}</ul>
          </div>
          <div className="add-tab-wid">
            <h3 className="footer-heading">Company</h3>
            <ul>{sixthList.map(renderFooterList)}</ul>
            <div className="icons-align">
              <FaFacebookF className="icon" />
              <FiInstagram className="icon" />
              <FaYoutube className="icon" />
              <FaTiktok className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="hr-line"></div>
        <div className="line-main-section">
          <Link to="/">
            <img
              className="web-logo"
              src="https://www.starz.com/assets/images/icons/starz-logo-glint.svg"
              alt="web-logo"
            />
          </Link>
          <p>© 2025 STARZ</p>
        </div>
      </div>
    </footer>
  );
};
