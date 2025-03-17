import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { COMING_SOON_DATA, IComingSoon } from "../../../contents/comingSoon";
import "./style.css";
export const ComingSoon = () => {
  return (
    <section className="coming-soon-main">
      <div className="header-image">
        <h2>Coming Soon</h2>
        <div className="coming-image-card-main">
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
              imageDivClass=""
              imageClass="image-rad"
              firstHeaderClass="coming-image-header"
              secondHeaderClass="coming-image-header"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
