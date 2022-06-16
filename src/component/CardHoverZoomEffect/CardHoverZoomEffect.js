import React from "react";
import "./CardHoverZoomEffect.scss";
import {
  FaCodepen,
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const items = [
  {
    name: "Al Pacino",
    imgURL:
      "https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg",
  },
  {
    name: "Ben Stiller",
    imgURL:
      "https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg",
  },
  {
    name: "Patrick Stewart",
    imgURL:
      "https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg",
  },
];

export default function CardHoverZoomEffect() {
  return (
    <>
      <div className="bg3">
        {items.map(({ name, imgURL }) => (
          <div
            className="cardEff"
            style={{ backgroundImage: `url(${imgURL})` }}
          >
            <div className="border">
              <h2>{name}</h2>
              <div className="icons">
                <FaCodepen />
                <FaInstagram />
                <FaDribbble />
                <FaTwitter />
                <FaFacebookF />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
