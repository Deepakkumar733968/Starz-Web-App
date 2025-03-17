import React from "react";
import "./style.css";

interface IButton {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  link?: string;
}
const StarzButton = ({ value, className, style, onClick, link }: IButton) => (
  <a href={link}>
    <button className={className} style={style} onClick={onClick}>
      {value}
    </button>
  </a>
);

export default StarzButton;
