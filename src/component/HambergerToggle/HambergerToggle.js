import React from "react";
import $ from "jquery";
import "./HambergerToggle.css";

$(document).on("click", ".hamburger", function () {
  $(this).toggleClass("is-active");
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
    <div id="box" class="bg4">
      <div class="line-vertical og">
        <span>
          <p class="mouseY-cords"></p>
        </span>
      </div>
      <div class="line-vertical">
        <span>
          <p class="mouseX-cords"></p>
        </span>
      </div>
      <div class="line-vertical">
        <span></span>
      </div>
      <div class="line-vertical">
        <span></span>
      </div>
      <div class="grid">
        <div class="hamburger classic">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="hamburger left-arrow">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="hamburger right-arrow">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="hamburger slant">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="hamburger minus">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="hamburger plus">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  );
}
