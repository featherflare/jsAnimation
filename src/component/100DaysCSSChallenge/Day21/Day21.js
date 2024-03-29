import React, { useEffect, useRef } from "react";
import "./Day21.scss";

function Day21() {
  return (
    <div class="frame21">
      <svg class="pacman">
        <circle cx="50" cy="50" r="25" />
      </svg>
      <svg class="eye">
        <circle cx="6" cy="6" r="6" />
      </svg>
      <svg class="dots">
        <polyline points="0,7 240,7" />
      </svg>
    </div>
  );
}

export default Day21;
