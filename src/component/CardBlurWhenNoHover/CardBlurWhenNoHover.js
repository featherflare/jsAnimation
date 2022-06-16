import React from "react";
import "./CardBlurWhenNoHover.scss";

const items = [
  {
    name: "Category",
    header: "Example Card Heading",
    imgURL:
      "https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg",
  },
  {
    name: "Category",
    header: "Example Card Heading",
    imgURL:
      "https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg",
  },
  {
    name: "Category",
    header: "Example Card Heading",
    imgURL:
      "https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg",
  },
  {
    name: "Category",
    header: "Example Card Heading",
    imgURL:
      "https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg",
  },
];

export default function CardBlurWhenNoHover() {
  return (
    <div className="bg5">
      <section className="hero-section">
        <div className="card-grid">
          {items.map(({ name, header, imgURL }) => (
            <div className="cardH">
              <div
                className="card__background"
                style={{ backgroundImage: `url(${imgURL})` }}
              ></div>
              <div className="card__content">
                <p className="card__category">{name}</p>
                <h3 className="card__heading">{header}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
