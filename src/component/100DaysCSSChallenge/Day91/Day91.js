import React, { useEffect, useRef } from "react";
import "./Day91.scss";

function Day91() {
  return (
    <div class="frame91">
      <div class="center">
        <div class="loader" onclick="void(0);">
          <div class="plane bottom"></div>
          <div class="plane left"></div>
          <div class="plane right"></div>
          <div class="plane back"></div>
          <div class="plane front"></div>
          <div class="plane top"></div>
          <div class="plane fill-top"></div>
        </div>
      </div>
    </div>
  );
}

export default Day91;
