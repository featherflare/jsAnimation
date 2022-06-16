import React from "react";
import "./CardHoverSildeEffect.scss";
import Design from "../../image/design_128.png";
import Code from "../../image/code_128.png";
import Launch from "../../image/launch_128.png";

const items = [
  {
    name: "Design",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
    imgURL: Design,
  },
  {
    name: "Code",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
    imgURL: Code,
  },
  {
    name: "Launch",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.",
    imgURL: Launch,
  },
];

export default function CardHoverSildeEffect() {
  return (
    <div className="bg6">
      <div className="container-Card">
        {items.map(({ name, content, imgURL }) => (
          <div className="cardSlide">
            <div className="face face1">
              <div className="content">
                <img src={imgURL} />
                <h3>{name}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="card__heading">
                <div className="content">
                  <p>{content}</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
