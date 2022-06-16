import React from "react";
import ImgCard from "../../image/cardTest.jpg";
import "./CardRevealOnHover.css";

export default function CardRevealOnHover() {
  return (
    <div className="bg">
      <div className="card">
        <img className="image" src={ImgCard} alt="..." />
        <p className="text">Test Text</p>
      </div>
    </div>
  );
}
