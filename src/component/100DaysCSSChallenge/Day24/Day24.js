import React, { useEffect, useRef } from "react";
import "./Day24.scss";

function Day24() {
  return (
    <div class="frame24">
      <input type="checkbox" id="button" class="hidden" />
      <label for="button" class="button">
        Finish
        <img src="https://100dayscss.com/codepen/checkmark-green.svg" />
      </label>
      <svg class="circle">
        <circle cx="30" cy="30" r="29" />
      </svg>
    </div>
  );
}

export default Day24;
