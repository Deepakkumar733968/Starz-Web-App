import { useRef, useState, useEffect } from "react";
import { ImageCard } from "../../../components/ImageCard/ImageCard";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ITVShows } from "../../../contents/tvShows";
import { Link } from "react-router-dom";

export const TVShows = ({
  movieData,
  title,
}: {
  movieData: ITVShows[];
  title: string;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 1000;

      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="shows-main">
      <div className="side-button-main">
        <div className="tv-shows-align-main">
          <div className="shows-header-align">
            <a href="" className="remove-und">
              <h2 className="originals-sup-header">{title}</h2>
            </a>
            <a href="" className="view-all-link">
              View All
            </a>
          </div>
          <div className="side-button-tv-show">
            <button
              className={`add-button-pad-one add-hover-arrow ${
                showLeftArrow ? "" : "no-show-button"
              }`}
              onClick={() => scroll("left")}
            >
              <img
                src="https://res.cloudinary.com/dj5vt6lf5/image/upload/v1742792851/arrow-left_sis2fj.svg"
                className="button-icon"
              />
            </button>
            <div className="coming-image-card-main" ref={scrollRef}>
              {movieData.map((item: ITVShows, index: number) => (
                <Link to={`/movies/${item.id}`} key={index}>
                  <ImageCard
                    firstHeader={item.title}
                    secondHeader=""
                    imageUrl={item.image}
                    className=""
                    headerStyle={{
                      gap: "80px",
                      width: "200px",
                      top: "78px",
                      left: "52px",
                      marginLeft: "8px",
                    }}
                    imageSize={{ width: "325px", height: "181px" }}
                    imageDivClass="today-div"
                    imageClass="image-rad"
                    firstHeaderClass="shows-title-header"
                    secondHeaderClass=""
                    link={""}
                  />
                </Link>
              ))}
            </div>
            <button
              className={`add-button-pad-two add-hover-arrow ${
                showRightArrow ? "" : "no-show-button"
              }`}
              onClick={() => scroll("right")}
            >
              <img
                src="https://res.cloudinary.com/dj5vt6lf5/image/upload/v1742792839/arrow-right_lnbqnh.svg"
                className="button-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
