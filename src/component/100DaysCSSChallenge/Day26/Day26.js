import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./Day26.scss";

var active = 1;
$(document).ready(function () {
  $(".button").on("click", function () {
    $(".card26:nth-child(" + active + ")")
      .removeClass("active")
      .addClass("inactive");
    if (active == 3) {
      active = 0;
    }
    active++;
    $(".card26:nth-child(" + active + ")")
      .removeClass("inactive")
      .addClass("active");
  });
});

function Day26() {
  return (
    <div class="frame26">
      <div class="card26 active">
        <div class="number-bg"></div>
        <div class="number">1</div>
        <div class="text">
          <span class="headline">The couch</span>
          <p>
            If you want to grow, get outside
            <br /> your comfort zone.
          </p>
        </div>
        <div class="button">Ok</div>
      </div>
      <div class="card26">
        <div class="number-bg"></div>
        <div class="number">2</div>
        <div class="text">
          <span class="headline">Failing is learning</span>
          <p>
            Pick yourself up, dust yourself off,
            <br /> and start again.
          </p>
        </div>
        <div class="button">Ok</div>
      </div>
      <div class="card26">
        <div class="number-bg"></div>
        <div class="number">3</div>
        <div class="text">
          <span class="headline">Flowers and rainbows</span>
          <p>
            Always be yourself,
            <br /> unless you can be a unicorn.
          </p>
        </div>
        <div class="button">Ok</div>
      </div>
    </div>
  );
}

export default Day26;
