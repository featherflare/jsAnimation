import React from "react";
import $ from "jquery";
import "./ExplandingFlexCard.scss";

$(document).on("click", ".option", function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

const items = [
  { header: "Blonkisoaz", desc: "Omuke trughte a otufta", classN: "active" },
  { header: "Blonkisoaz", desc: "Omuke trughte a otufta", classN: "" },
  { header: "Blonkisoaz", desc: "Omuke trughte a otufta", classN: "" },
  { header: "Blonkisoaz", desc: "Omuke trughte a otufta", classN: "" },
  { header: "Blonkisoaz", desc: "Omuke trughte a otufta", classN: "" },
];

export default function CardBorderMoving() {
  return (
    <>
      <div className="bg">
        <div className="options">
          {items.map(({ header, desc, classN }) => (
            <div className={`option ${classN}`}>
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-walking"></i>
                </div>
                <div className="info">
                  <div className="main">{header}</div>
                  <div className="sub">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
