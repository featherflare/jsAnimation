import React, { useEffect, useRef } from "react";
import "./Day69.scss";

function Day69() {
  return (
    <div class="frame69">
      <div class="eye">
        <div class="ball">
          <div class="iris"></div>
        </div>
      </div>
      <div class="lid-top">
        <svg width="240px" height="106px" viewBox="0 0 240 106">
          <path
            d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
            class="lid"
          ></path>
        </svg>
      </div>
      <div class="lid-bottom">
        <svg width="240px" height="106px" viewBox="0 0 240 106">
          <path
            d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
            class="lid"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Day69;