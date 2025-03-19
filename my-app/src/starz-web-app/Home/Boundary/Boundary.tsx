import { useRef, useState, useEffect } from "react";
import { ImageCard } from "../../../components/ImageCard/ImageCard";
import {
  BOUNDARY_BREAKING_DATA,
  IBoundaryData,
} from "../../../contents/boundary";
import "./style.css";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOndemandVideo,
} from "react-icons/md";

export const Boundary = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 400; // Adjust according to card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="boundary-main">
      <div className="boundary-sec-main">
        <div>
          <h2 className="boundary-header">Boundary Breaking Originals</h2>
          <h4 className="handle-header">Can You Handle The Heat?</h4>
        </div>
        <div className="boundary-card-align" ref={scrollRef}>
          {BOUNDARY_BREAKING_DATA.map((item: IBoundaryData, index: number) => (
            <div key={index}>
              <ImageCard
                link={item.link}
                firstHeader={item.firstHeader}
                secondHeader={item.secondHeader}
                imageUrl={item.movieImage}
                className=""
                headerStyle={{
                  gap: "60px",
                  width: "300px",
                  top: "60px",
                  left: "30px",
                  marginLeft: "8px",
                }}
                imageSize={{ width: "386px", height: "236px" }}
                imageDivClass="boundary-image-div"
                imageClass="boundary-scroll-image"
                firstHeaderClass="boundary-first-header"
                secondHeaderClass="boundary-second-header"
              />
              <div className="add-boundary-flex">
                <div className="boundary-bottom-description-main">
                  <a href="" className="boundary-image-card-title">
                    {item.cardDetail.movieTitle}
                  </a>
                  <p className="boundary-image-card-description">
                    {item.cardDetail.description}
                    <a href="" className="learn-more">
                      LEARN MORE
                    </a>
                  </p>
                  <div className="hero-trailer-boundary">
                    <MdOndemandVideo className="demand-video" />
                    <a href="" className="trailer-text-sml">
                      <span>TRAILER</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="add-pct-arrow">
          {canScrollLeft && (
            <button
              className="boundary-arrow-button"
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos />
            </button>
          )}
          {canScrollRight && (
            <button
              className="boundary-arrow-button"
              onClick={() => scroll("right")}
            >
              <MdArrowForwardIos />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
