import React, { useEffect, useRef } from "react";
import "./Day45.scss";

function Day45() {
  return (
    <div class="frame45">
      <div class="center">
        <div class="button" onclick="void(0);">
          <span>Hover me</span>
          <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Day45;
