import React, { useEffect, useRef } from "react";
import "./Day100.scss";

function Day100() {
  return (
    <div class="frame100">
      <div class="word">
        <div class="ee">
          <div class="light left"></div>
          <div class="light top"></div>
          <div class="light middle"></div>
          <div class="light bottom"></div>
        </div>
        <div class="nn">
          <div class="light left"></div>
          <div class="light middle"></div>
          <div class="light right"></div>
        </div>
        <div class="dd">
          <div class="light left"></div>
          <div class="right">
            <div class="circleBox">
              <div class="circle"></div>
            </div>
            <div class="topDotBox">
              <div class="light dot"></div>
            </div>
            <div class="bottomDotBox">
              <div class="light dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day100;
