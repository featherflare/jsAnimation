import React, { useEffect, useRef } from "react";
import "./Day68.scss";

function Day68() {
  return (
    <div class="frame68">
      <input type="checkbox" id="cb-1" name="cb" class="checkbox" />
      <label for="cb-1" class="label"></label>
      <div class="microphone">
        <svg width="100px" height="100px" viewBox="0 0 100 100">
          <circle class="circle" cx="50" cy="50" r="47" />
        </svg>
        <div class="icon">
          <div class="body">
            <div class="fill"></div>
          </div>
          <div class="foot_v"></div>
          <div class="foot_h"></div>
        </div>
        <div class="dots">
          <div class="dot dot-1"></div>
          <div class="dot dot-2"></div>
          <div class="dot dot-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Day68;
