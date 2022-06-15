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
      <div class="bg">
        <div class="options">
          {items.map(({ header, desc, classN }) => (
            <div class={`option ${classN}`}>
              <div class="shadow"></div>
              <div class="label">
                <div class="icon">
                  <i class="fas fa-walking"></i>
                </div>
                <div class="info">
                  <div class="main">{header}</div>
                  <div class="sub">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
