import React, { useEffect, useRef } from "react";
import "./Day48.scss";

function Day48() {
  return (
    <div class="frame48">
      <div class="center">
        <div class="cube" onclick="void(0);">
          <div class="side front"></div>
          <div class="side back"></div>
          <div class="side right"></div>
          <div class="side left"></div>
          <div class="side top"></div>
          <div class="side bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Day48;
