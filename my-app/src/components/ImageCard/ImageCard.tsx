import React from "react";
import "./style.css";
interface IImageCardDada {
  link: string;
  firstHeader: string;
  secondHeader: string;
  imageUrl: string;
  className: string;
  headerStyle: React.CSSProperties;
  imageSize: React.CSSProperties;
  imageDivClass: string;
  imageClass: string;
  firstHeaderStyle?: React.CSSProperties;
  secondHeaderStyle?: React.CSSProperties;
  firstHeaderClass?: string;
  secondHeaderClass?: string;
}

export const ImageCard = ({
  link,
  firstHeader,
  secondHeader,
  imageUrl,
  className,
  headerStyle,
  imageSize,
  imageDivClass,
  imageClass,
  firstHeaderStyle,
  secondHeaderStyle,
  firstHeaderClass,
  secondHeaderClass,
}: IImageCardDada) => {
  return (
    <a href={link} className={`${className} image-card-main`}>
      <div className="position-align" style={headerStyle}>
        <span style={firstHeaderStyle} className={`${firstHeaderClass} span-z`}>
          {firstHeader ? firstHeader : ""}
        </span>
        <span
          style={secondHeaderStyle}
          className={`${secondHeaderClass} span-z`}
        >
          {secondHeader}
        </span>
      </div>
      <div style={imageSize} className={`${imageDivClass} image-posction`}>
        <img
          src={imageUrl}
          alt="card-image"
          className={`${imageClass} card-image-size`}
        />
      </div>
    </a>
  );
};
