import React from "react";
import $ from "jquery";
import "./HambergerToggle.css";

$(document).on("click", ".hamburger", function () {
  $(this).toggleClass("active");
});

$(document).ready(function () {
  $("#box").on("mousemove", function (event) {
    var relX = event.pageX - $(this).offset().left;
    var relY = event.pageY - $(this).offset().top;
    var relBoxCoordsX = relX;
    $(".mouseX-cords").text(relBoxCoordsX);
    var relBoxCoordsY = relY;
    $(".mouseY-cords").text(relBoxCoordsY);
  });
});

export default function HambergerToggle() {
  return (
    <div id="box" className="bg4">
      <div className="line-vertical og">
        <span>
          <p className="mouseY-cords"></p>
        </span>
      </div>
      <div className="line-vertical">
        <span>
          <p className="mouseX-cords"></p>
        </span>
      </div>
      <div className="line-vertical">
        <span></span>
      </div>
      <div className="line-vertical">
        <span></span>
      </div>
      <div className="grid">
        <div className="hamburger classic">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="hamburger left-arrow">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="hamburger right-arrow">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="hamburger slant">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="hamburger minus">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="hamburger plus">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
}
