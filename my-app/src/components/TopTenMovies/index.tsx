import { useRef, useState, useEffect } from "react";

import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ImageCard } from "../ImageCard/ImageCard";

export interface ITopTenMovies {
  numberImage: string;
  movieImage: string;
  link: string;
  firstHeader: string;
  secondHeader: string;
  newText?: string;
}
export const TopTenMovies = ({
  moviesData,
  className,
  leftButtonClass,
  rightButtonClass,
  title,
}: {
  moviesData: ITopTenMovies[];
  className: string;
  leftButtonClass?: string;
  rightButtonClass?: string;
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
    <section className="coming-soon-main-top">
      <div className="side-button-main-top">
        <div className={`${className}header-image-today`}>
          <h2 className="coming-soon-header-top">{title}</h2>
          <div className="side-button-main-top">
            <button
              className="add-button-pad-top-one"
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                className={`${
                  showLeftArrow
                    ? "button-icon add-hover-arrow-top"
                    : "no-show-button"
                }  ${leftButtonClass}`}
              />
            </button>
            <div className="coming-image-card-main-top" ref={scrollRef}>
              {moviesData.map((item: ITopTenMovies, index: number) => (
                <div className="today-card-main-top" key={index}>
                  <div className="neon-container-top">
                    <span className="neon-text-top">{item.numberImage} </span>
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
              ))}
            </div>
            <button
              className="add-button-pad-top-two"
              onClick={() => scroll("right")}
            >
              <MdArrowForwardIos
                className={`${
                  showRightArrow
                    ? "button-icon add-hover-arrow-top"
                    : "no-show-button"
                } ${rightButtonClass}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
