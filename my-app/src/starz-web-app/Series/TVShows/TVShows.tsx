import { useRef, useState, useEffect } from "react";
import { ImageCard } from "../../../components/ImageCard/ImageCard";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ITVShows, ORIGINALS } from "../../../contents/tvShows";

export const TVShows = () => {
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
              <h2 className="originals-sup-header">Originals & Exclusives</h2>
            </a>
            <a href="" className="view-all-link">
              View All
            </a>
          </div>
          <div className="side-button-main">
            <button
              className="add-button-pad-one add-hover-arrow"
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                className={showLeftArrow ? "button-icon" : "no-show-button"}
              />
            </button>
            <div className="coming-image-card-main" ref={scrollRef}>
              {ORIGINALS.map((item: ITVShows, index: number) => (
                <ImageCard
                  key={index}
                  link={item.link}
                  firstHeader={item.title}
                  secondHeader={""}
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
                />
              ))}
            </div>
            <button
              className="add-button-pad-two add-hover-arrow"
              onClick={() => scroll("right")}
            >
              <MdArrowForwardIos
                className={showRightArrow ? "button-icon" : "no-show-button"}
              />
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="side-button-main">
        <div className="tv-shows-align-main">
          <div className="shows-header-align">
            <a href="" className="remove-und">
              <h2 className="originals-sup-header">Originals & Exclusives</h2>
            </a>
            <a href="" className="view-all-link">
              View All
            </a>
          </div>
          <div className="side-button-main">
            <button
              className="add-button-pad-one add-hover-arrow"
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                className={showLeftArrow ? "button-icon" : "no-show-button"}
              />
            </button>
            <div className="coming-image-card-main" ref={scrollRef}>
              {ORIGINALS.map((item: ITVShows, index: number) => (
                <ImageCard
                  key={index}
                  link={item.link}
                  firstHeader={item.title}
                  secondHeader={""}
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
                />
              ))}
            </div>
            <button
              className="add-button-pad-two add-hover-arrow"
              onClick={() => scroll("right")}
            >
              <MdArrowForwardIos
                className={showRightArrow ? "button-icon" : "no-show-button"}
              />
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};
