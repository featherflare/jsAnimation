import React, { useEffect, useRef } from "react";
import "./Day98.scss";

function Day98() {
  return (
    <div class="frame98">
      <div class="edges98">
        <div class="edge t"></div>
        <div class="edge l"></div>
        <div class="edge r"></div>
        <div class="edge b98"></div>
      </div>
      <div class="elements">
        <div class="square square1 small c1"></div>
        <div class="square square2 big c2"></div>
        <div class="square square3 c1"></div>
        <div class="square square4 small c3"></div>
        <div class="square square5 c1"></div>
        <div class="square square6 big c1"></div>
        <div class="square square7 c3"></div>
        <div class="square square8 small c3"></div>
        <div class="circle circle1 small c1"></div>
        <div class="circle circle2 c2"></div>
        <div class="circle circle3 small c3"></div>
        <div class="circle circle4 big c1"></div>
        <div class="circle circle5 c3"></div>
        <div class="circle circle6 small c2"></div>
        <div class="circle circle7 c1"></div>
        <div class="circle circle8 small c3"></div>
      </div>
    </div>
  );
}

export default Day98;
