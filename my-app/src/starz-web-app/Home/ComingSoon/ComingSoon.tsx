import { useRef, useState, useEffect } from "react";
import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { COMING_SOON_DATA, IComingSoon } from "../../../contents/comingSoon";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const ComingSoon = () => {
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
      <div className="coming-side-button-main">
        <div className="header-image">
          <h2 className="coming-soon-heading">Coming Soon</h2>
          <div className="coming-side-button-main">
            <button
              className="coming-add-button-pad"
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                className={showLeftArrow ? "button-icon" : "no-show-button"}
              />
            </button>
            <div className="coming-image-card-main-soon" ref={scrollRef}>
              {COMING_SOON_DATA.map((item: IComingSoon, index: number) => (
                <ImageCard
                  key={index}
                  link={item.link}
                  firstHeader={item.firstHeader}
                  secondHeader={item.secondHeader}
                  imageUrl={item.imageUrl}
                  className=""
                  headerStyle={{
                    gap: "80px",
                    width: "200px",
                    top: "80px",
                    marginLeft: "8px",
                  }}
                  imageSize={{ width: "222px", height: "296px" }}
                  imageDivClass="mob-image-size"
                  imageClass="image-rad"
                  firstHeaderClass="coming-image-header"
                  secondHeaderClass="coming-image-header"
                />
              ))}
            </div>
            <button
              className="coming-add-button-pad"
              onClick={() => scroll("right")}
            >
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
