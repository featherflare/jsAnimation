import React, { useEffect, useRef } from "react";
import "./Day2.scss";
import $ from "jquery";

$(".line-box").on("click", function () {
  $(this).toggleClass("active");
});

function Day2() {
  return (
    <div class="frame2">
      <div class="center">
        <div class="line-box">
          <div class="line one"></div>
          <div class="line two"></div>
          <div class="line three"></div>
        </div>
      </div>
    </div>
  );
}

export default Day2;
