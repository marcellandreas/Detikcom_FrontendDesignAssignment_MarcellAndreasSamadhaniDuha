import React from "react";
import { FontParagraf, FontTitle } from "../atoms/font";
import { CustomImage } from "../atoms/image";
import "./style.css";

export const Card = ({ type, src, alt, title, paragraf }) => {
  let cardComponent;

  switch (type) {
    case "menu":
      cardComponent = <div>{src && <CustomImage src={src} alt={alt} />}</div>;
      break;
    case "side":
      cardComponent = (
        <div>
          {src && <img src={src} alt={alt} className="card-side-image" />}
        </div>
      );
      break;
    case "noimg":
      cardComponent = null;
      break;
    default:
      cardComponent = <div>{src && <CustomImage src={src} alt={alt} />}</div>;
  }

  return (
    <section className={`card-${type}`}>
      {cardComponent}
      <div className="card-button">
        <div className={`card-content${type === "side" ? "-side" : ""}`}>
          <FontTitle>{title}</FontTitle>
          <FontParagraf>{paragraf}</FontParagraf>
        </div>
      </div>
    </section>
  );
};

export const CardArticle = ({ src, alt, paragraf, dateTime }) => {
  return (
    <section className="card-article">
      <img src={src} alt={alt} className="card-article-image" />
      <div className="card-article-content">
        <p>{paragraf}</p>
        <span>{dateTime}</span>
      </div>
    </section>
  );
};
