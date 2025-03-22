import { useRef, useState, useEffect } from "react";
import { ImageCard } from "../../../components/ImageCard/ImageCard";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
  ITodayMoviesData,
  MOVIES_TODAY_DATA,
} from "../../../contents/moviesToday";

export const MoviesToday = () => {
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
    <section className="coming-soon-main">
      <div className="side-button-main">
        <div className="header-image-today">
          <h2 className="coming-soon-header">STARZ Top 10 Movies Today</h2>
          <div className="side-button-main">
            <button className="add-button-pad" onClick={() => scroll("left")}>
              <MdArrowBackIos
                className={showLeftArrow ? "button-icon" : "no-show-button"}
              />
            </button>
            <div className="coming-image-card-main" ref={scrollRef}>
              {MOVIES_TODAY_DATA.map(
                (item: ITodayMoviesData, index: number) => (
                  <div className="today-card-main" key={index}>
                    <div className="neon-container">
                      <span className="neon-text">{item.numberImage} </span>
                    </div>
                    <ImageCard
                      link={item.link}
                      firstHeader={item.firstHeader}
                      secondHeader={item.secondHeader}
                      imageUrl={item.movieImage}
                      className=""
                      headerStyle={{
                        gap: "80px",
                        width: "200px",
                        top: "80px",
                        marginRight: "4px",
                      }}
                      imageSize={{ width: "194px", height: "259px" }}
                      imageDivClass="today-div"
                      imageClass="today-card-scale"
                      firstHeaderClass="today-header"
                      secondHeaderClass="today-header"
                      newText={item.newText}
                      newTextClass="today-new-text"
                    />
                  </div>
                )
              )}
            </div>
            <button className="add-button-pad" onClick={() => scroll("right")}>
              <MdArrowForwardIos
                className={showRightArrow ? "button-icon" : "no-show-button"}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
