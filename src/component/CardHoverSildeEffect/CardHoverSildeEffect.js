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
    <div class="bg6">
      <div class="container-Card">
        {items.map(({ name, content, imgURL }) => (
          <div class="cardSlide">
            <div class="face face1">
              <div class="content">
                <img src={imgURL} />
                <h3>{name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="card__heading">
                <div class="content">
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
