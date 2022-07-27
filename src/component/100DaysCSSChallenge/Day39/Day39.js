import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./Day39.scss";

function Day39() {
  const active = () => {
    $(".menu-icon").removeClass("paused").addClass("active");
    $(".menu").removeClass("paused").addClass("active");
  };
  const inactive = () => {
    $(".menu-icon").removeClass("active");
    $(".menu").removeClass("active");
  };

  return (
    <div class="frame39">
      <div class="menu-icon paused" onClick={active}>
        <div class="line-top"></div>
        <div class="line-bottom"></div>
      </div>
      <div class="menu" onClick={inactive}>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Work</span>
          </li>
          <li>
            <span>Life</span>
          </li>
          <li>
            <span>Spirit</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Day39;
